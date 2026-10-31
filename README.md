# Mi nómina

Aplicación personal de nóminas instalable en iPhone. Incluye lectura de PDF y simulación de IRPF sin necesitar el ordenador. También existe una edición de Windows.

- [Abrir la app móvil](https://robertocuju-blip.github.io/mi-nomina/)
- [Descargar el programa de Windows](https://github.com/robertocuju-blip/mi-nomina/releases/latest)

## Ordenador

Descarga `MiNomina-PC.zip` desde Releases y extrae **todo** el ZIP. Abre `nomina_app/MiNomina.exe`: no necesitas Python ni ChatGPT. Conserva las carpetas de años junto a `nomina_app`. Añade tus PDF y revisa los campos extraídos.

## iPhone · PDF directamente desde una carpeta

1. Guarda tus PDF en **Archivos → En mi iPhone → Nóminas**, con subcarpetas `2022`, `2023`, etc. si quieres. También puedes elegir una carpeta de iCloud o OneDrive que esté descargada.
2. Abre la app móvil en Safari y pulsa Compartir → Añadir a pantalla de inicio.
3. En la app pulsa **Seleccionar carpeta** y selecciona esa carpeta. Lee los PDF de todas sus subcarpetas. La selección de carpetas requiere iOS 18.4 o posterior; también hay una opción para seleccionar PDF sueltos.
4. Consulta el resumen, histórico, conceptos y PDF originales sin usar el PC. Puedes corregir datos en el detalle de cada recibo.
5. Cuando guardes PDF nuevos en esa carpeta, pulsa **Actualizar** y vuelve a seleccionarla. La web no conserva acceso permanente a la carpeta ni la vigila en segundo plano. Los PDF sin cambios no se duplican.

La app lee los PDF en el propio dispositivo y conserva una copia local para usarlos sin conexión. No modifica los originales de tu carpeta. La primera apertura descarga el lector (aproximadamente 14 MB); después puede importar PDF descargados sin internet. Los PDF escaneados o formatos no reconocidos quedan pendientes de revisión; no incorpora OCR. Mantén copias de tus originales fuera del almacenamiento del navegador.

En **Renta**, revisa la previsión anual, completa tu edad y perfil, y pulsa **Calcular y guardar**. Se calcula y conserva en el propio móvil, también sin conexión. Los importes iniciales salen de las nóminas: la previsión pendiente usa el último mes ordinario y debes añadir las pagas extra y los cambios salariales. La cuota colegial parte de 140 € provisionales; escribe 0 € si no corresponde. Importar nóminas nuevas deja pendiente de revisión la estimación anterior.

El archivo `Consulta-iPhone.json` del PC sigue siendo una opción avanzada para traer sus datos o estimaciones; no es necesario para utilizar la app.

## Privacidad y uso compartido

Esta web distribuye solo el programa y el lector de PDF. No tiene cuentas, servidor de datos, analítica ni carga de nóminas a GitHub. Los PDF y datos importados se guardan en el dispositivo. Cada persona usa sus propios documentos. El alojamiento puede registrar las visitas normales a la web.

Comparte el enlace de la app y el ZIP original de Windows; **no compartas tu carpeta `data`, tu copia de consulta ni tus PDF**. Si borras el almacenamiento del navegador, importa de nuevo tu copia. Conserva copias de seguridad en el ordenador.

La simulación orientativa se limita a Canarias y reglas de IRPF 2025; 2026 se muestra como proyección de esas reglas. No sustituye una declaración completa ni el cálculo oficial de retenciones. Verifica y actualiza las reglas de cada ejercicio.

Las licencias de React se incluyen en `LICENSES.txt`. El lector usa Pyodide (licencia y fuentes enlazadas en `LICENSE-Pyodide.txt`) y CPython (`LICENSE-Python.txt`). Las licencias de pypdf y typing_extensions se incluyen en `lector-nominas.zip`. El paquete Windows incluye las de sus dependencias.

## Versión 1.3

Simulador de IRPF local en el móvil, con perfil y previsión editables y resultado guardado por ejercicio. Se comparte el mismo motor de cálculo de Windows.

Interfaz simplificada con una sola acción para actualizar la carpeta. Las explicaciones financieras se abren con los botones de información. Se reparan automáticamente las copias inequívocas del mismo PDF; las pagas distintas y los datos ambiguos se conservan. El menú ⋯ agrupa las opciones secundarias.
