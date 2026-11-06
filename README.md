# Mi nómina

Aplicación personal de nóminas instalable en iPhone. Incluye lectura de PDF y simulación de IRPF sin necesitar el ordenador. También existe una edición de Windows.

- [Abrir la app móvil](https://robertocuju-blip.github.io/mi-nomina/)
- [Descargar el programa de Windows](https://github.com/robertocuju-blip/mi-nomina/releases/latest)

## Ordenador

Descarga `MiNomina-PC.zip` desde Releases y extrae **todo** el ZIP. Abre `nomina_app/MiNomina.exe`: no necesitas Python ni ChatGPT. Conserva las carpetas de años junto a `nomina_app`. Añade tus PDF y revisa los campos extraídos.

## iPhone · PDF directamente desde una carpeta

1. Guarda tus PDF en **Archivos → En mi iPhone → Nóminas**, con subcarpetas `2022`, `2023`, etc. si quieres. También puedes elegir una carpeta de iCloud o OneDrive que esté descargada.
2. Abre la app móvil en Safari y pulsa Compartir → Añadir a pantalla de inicio.
3. En la app pulsa **Seleccionar carpeta** y selecciona esa carpeta. Lee los PDF de todas sus subcarpetas. La selección de carpetas requiere iOS 18.4 o posterior.
4. Consulta el resumen, histórico, conceptos y PDF originales sin usar el PC. Puedes corregir datos en el detalle de cada recibo.
5. Cuando añadas, sustituyas, renombres o quites PDF, pulsa **Actualizar** y vuelve a seleccionar la carpeta completa. La lista se reconstruye únicamente con los PDF que existan en esa selección. No conserva entradas ni copias locales de archivos ausentes o versiones sustituidas. La web no conserva acceso permanente a la carpeta ni la vigila en segundo plano.

La app lee los PDF en el propio dispositivo y conserva solo una copia de trabajo de los archivos de la última selección para usarlos sin conexión. Al volver a leer la carpeta, se sustituye esa copia completa; no se mantiene un histórico de versiones. No modifica los originales de tu carpeta. La primera apertura descarga el lector (aproximadamente 14 MB); después puede importar PDF descargados sin internet. Los PDF escaneados o formatos no reconocidos quedan pendientes de revisión; no incorpora OCR. Mantén copias de tus originales fuera del almacenamiento del navegador.

En **Renta**, revisa la previsión anual, completa tu edad y perfil, y pulsa **Calcular y guardar**. Se calcula y conserva en el propio móvil, también sin conexión. Los importes iniciales salen de las nóminas: la previsión pendiente usa el último mes ordinario y debes añadir las pagas extra y los cambios salariales. La cuota colegial parte de 140 € provisionales; escribe 0 € si no corresponde. Importar nóminas nuevas deja pendiente de revisión la estimación anterior.

La carpeta es la única fuente del archivo móvil: no se mezclan PDF sueltos ni copias de datos del PC. El perfil y la normativa del simulador se conservan al actualizarla. Las ordinarias y extras aparecen por separado; Evolución suma todos los pagos del mismo mes.

## Privacidad y uso compartido

Esta web distribuye solo el programa y el lector de PDF. No tiene cuentas, servidor de datos, analítica ni carga de nóminas a GitHub. Los PDF y datos importados se guardan en el dispositivo. Cada persona usa sus propios documentos. El alojamiento puede registrar las visitas normales a la web.

Comparte el enlace de la app y el ZIP original de Windows; **no compartas tu carpeta `data`, tu copia de consulta ni tus PDF**. Si borras el almacenamiento del navegador, vuelve a seleccionar tu carpeta de PDF. Conserva copias de seguridad en el ordenador.

La simulación orientativa se limita a Canarias y tributación individual. Incluye parámetros de IRPF 2025 y 2026 contrastados con BOE/AEAT el 31/10/2026, incluida la deducción del trabajo de 2026. No sustituye una declaración completa ni el cálculo oficial de retenciones. Revisa cambios normativos posteriores.

En **Renta → Normativa por ejercicio** puedes preparar otro año copiando el anterior, editar los importes con ayudas, guardar un borrador, revisar los cambios y aplicarlos. Las cuotas acumuladas de los tramos se calculan automáticamente. Los mínimos y fórmulas menos habituales quedan plegados en Parámetros adicionales. La configuración manual se identifica como tal y obliga a recalcular ese año. Puedes descargar una copia de normativa y restaurar los valores incluidos. La edición numérica no añade nuevas fórmulas ni situaciones que el motor no contemple.

Las licencias de React se incluyen en `LICENSES.txt`. El lector usa Pyodide (licencia y fuentes enlazadas en `LICENSE-Pyodide.txt`) y CPython (`LICENSE-Python.txt`). Las licencias de pypdf y typing_extensions se incluyen en `lector-nominas.zip`. El paquete Windows incluye las de sus dependencias.

## Versión 1.6

En la revisión 1.6.1 las correcciones manuales se indican como información, sin provocar por sí solas una etiqueta «Por revisar». Las comprobaciones aritméticas se recalculan al editar. En el detalle → Revisar datos → Volver a leer el PDF puedes sustituir las correcciones de ese recibo por una lectura nueva del original, incluidos sus conceptos y avisos. Si no se puede leer, se conservan los datos anteriores. Actualizar la carpeta sigue conservando las correcciones del mismo PDF; para quitarlas se utiliza ese botón.

La vista refleja exclusivamente la última carpeta seleccionada. Cada PDF presente tiene su recibo; no se guardan versiones anteriores ni registros de archivos que ya no están. La actualización de datos y PDF locales es atómica: si falla el guardado, se conserva la lectura anterior y se avisa. Las ordinarias y extras se mantienen separadas en el archivo y se suman por mes en Evolución.

## Lector de PDF

Lectura de devoluciones sin precio unitario y de determinadas fuentes Type3 sin mapa Unicode, sin OCR ni servicios externos. Las fuentes desconocidas siguen requiriendo revisión. Las cotizaciones se toman del detalle de cada recibo y las diferencias con resúmenes impresos quedan visibles. Los variables anuales se clasifican como extraordinarios para no proyectarlos como salario mensual.

Al actualizar el lector, se releen automáticamente los PDF locales de versiones anteriores, conservando sus identificadores y las correcciones manuales. La primera lectura de la carpeta sustituye cualquier archivo anterior del móvil. Los recibos nuevos se incorporan volviendo a seleccionar la carpeta.

Simulador local con reglas propias de 2026 y asistente para actualizar la normativa por ejercicio sin editar código. El foco sigue siendo estimar la retención pendiente según los ingresos anuales y el IRPF ya retenido.

Interfaz simplificada con una sola acción para actualizar la carpeta. Las explicaciones financieras se abren con los botones de información. La carpeta decide qué recibos aparecen; la fecha no se utiliza para fusionar pagas distintas.
