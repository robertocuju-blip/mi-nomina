# Mi nómina

Programa personal de nóminas para Windows y consulta instalable en iPhone.

- [Abrir la app móvil](https://robertocuju-blip.github.io/mi-nomina/)
- [Descargar el programa de Windows](https://github.com/robertocuju-blip/mi-nomina/releases/latest)

## Ordenador

Descarga `MiNomina-PC.zip` desde Releases y extrae **todo** el ZIP. Abre `nomina_app/MiNomina.exe`: no necesitas Python ni ChatGPT. Conserva las carpetas de años junto a `nomina_app`. Añade tus PDF y revisa los campos extraídos.

## iPhone · PDF directamente desde una carpeta

1. Guarda tus PDF en **Archivos → En mi iPhone → Nóminas**, con subcarpetas `2022`, `2023`, etc. si quieres. También puedes elegir una carpeta de iCloud o OneDrive que esté descargada.
2. Abre la app móvil en Safari y pulsa Compartir → Añadir a pantalla de inicio.
3. En la app pulsa **Abrir carpeta de nóminas** y selecciona esa carpeta. Lee los PDF de todas sus subcarpetas. La selección de carpetas requiere iOS 18.4 o posterior; también hay una opción para seleccionar PDF sueltos.
4. Consulta el resumen, histórico, conceptos y PDF originales sin usar el PC. Puedes corregir datos en el detalle de cada recibo.
5. Cuando guardes PDF nuevos en esa carpeta, pulsa **Actualizar desde carpeta** y vuelve a seleccionarla. La web no conserva acceso permanente a la carpeta ni la vigila en segundo plano. Los PDF sin cambios no se duplican.

La app lee los PDF en el propio dispositivo y conserva una copia local para usarlos sin conexión. No modifica los originales de tu carpeta. La primera apertura descarga el lector (aproximadamente 14 MB); después puede importar PDF descargados sin internet. Los PDF escaneados o formatos no reconocidos quedan pendientes de revisión; no incorpora OCR. Mantén copias de tus originales fuera del almacenamiento del navegador.

El archivo `Consulta-iPhone.json` del PC sigue siendo una opción avanzada para traer sus datos o estimaciones fiscales; no es necesario para leer las nóminas. La simulación fiscal se prepara en el programa del PC. Importar PDF nuevos deja pendientes de actualizar las estimaciones anteriores.

## Privacidad y uso compartido

Esta web distribuye solo el programa y el lector de PDF. No tiene cuentas, servidor de datos, analítica ni carga de nóminas a GitHub. Los PDF y datos importados se guardan en el dispositivo. Cada persona usa sus propios documentos. El alojamiento puede registrar las visitas normales a la web.

Comparte el enlace de la app y el ZIP original de Windows; **no compartas tu carpeta `data`, tu copia de consulta ni tus PDF**. Si borras el almacenamiento del navegador, importa de nuevo tu copia. Conserva copias de seguridad en el ordenador.

La simulación orientativa se limita a Canarias y reglas de IRPF 2025; 2026 se muestra como proyección de esas reglas. No sustituye una declaración completa ni el cálculo oficial de retenciones. Verifica y actualiza las reglas de cada ejercicio.

Las licencias de React se incluyen en `LICENSES.txt`. El lector usa Pyodide (licencia y fuentes enlazadas en `LICENSE-Pyodide.txt`) y CPython (`LICENSE-Python.txt`). Las licencias de pypdf y typing_extensions se incluyen en `lector-nominas.zip`. El paquete Windows incluye las de sus dependencias.
