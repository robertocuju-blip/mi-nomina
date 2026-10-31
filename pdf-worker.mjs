import {loadPyodide} from './pyodide.mjs';
let engine;
async function ready(){
  if(!engine)engine=(async()=>{
    const py=await loadPyodide({indexURL:new URL('./',import.meta.url).href,stdout:()=>{},stderr:()=>{}});
    const response=await fetch(new URL('./lector-nominas.zip?engine='+new URL(import.meta.url).searchParams.get('engine'),import.meta.url));
    if(!response.ok)throw new Error('No se ha podido preparar el lector de PDF. Abre la app con conexión una vez y vuelve a intentarlo.');
    py.FS.writeFile('/lector.zip',new Uint8Array(await response.arrayBuffer()));
    py.runPython("import sys, zipfile\nzipfile.ZipFile('/lector.zip').extractall('/lector')\nsys.path.insert(0, '/lector')\nfrom mobile_engine import parse_document, simulate_scenario\n");
    py.FS.unlink('/lector.zip');
    py.FS.mkdir('/documents');
    return py;
  })().catch(error=>{engine=undefined;throw error;});
  return engine;
}
let queue=Promise.resolve();
self.onmessage=event=>{
  const {id,name,relativePath,bytes,kind,payload}=event.data;
  queue=queue.then(async()=>{
    let py,path;
    try{
      py=await ready();
      if(kind==='tax'){
        py.globals.set('scenario_json',JSON.stringify(payload));
        self.postMessage({id,...JSON.parse(py.runPython('simulate_scenario(scenario_json)'))});
        return;
      }
      const safeName=String(name).split(/[\\/]/).pop().slice(-220)||'nomina.pdf';
      const year=String(relativePath||'').split('/').slice(0,-1).find(part=>/^20\d{2}$/.test(part));
      const directory=year?'/documents/'+year:'/documents';
      if(year&&!py.FS.analyzePath(directory).exists)py.FS.mkdir(directory);
      path=directory+'/'+safeName;
      py.FS.writeFile(path,new Uint8Array(bytes));
      py.globals.set('document_path',path);
      const record=JSON.parse(py.runPython('parse_document(document_path)'));
      if(relativePath)record.folder_path=String(relativePath).slice(0,1500);
      self.postMessage({id,record});
    }catch(error){
      const reason=String(error?.message||'');
      const known=reason.match(/(?:El PDF supera[^\n]+|El PDF est[aá] protegido[^\n]+|Selecciona las n[oó]minas[^\n]+)/);
      self.postMessage({id,error:kind==='tax'?'No se ha podido preparar el simulador. Abre la app con conexión una vez y vuelve a intentarlo.':known?known[0]:'No se ha podido leer el PDF. Comprueba que está descargado y vuelve a intentarlo. Si es una imagen escaneada, necesitará revisión manual.'});
    }finally{if(py&&path){try{py.FS.unlink(path);}catch{}}}
  });
};
