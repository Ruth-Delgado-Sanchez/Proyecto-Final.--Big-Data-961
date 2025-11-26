# Proyecto-Final.--Big-Data-961
Modelo entrenado para clasificar tipos de piel y sugerir paletas de color.
Este proyecto utiliza un modelo creado en Teachable Machine, entrenado con imágenes reales de diferentes tonalidades de piel.
El sistema identifica automáticamente uno de los siguientes tonos:
  1. Tonos pálidos
  2. Tonos claros
  3. Tonos dorados
  4. Tonos trigueños / caramelo
  5. Tonos oscuros

Después de la predicción, el programa muestra:
- El tipo de piel detectado
- Porcentaje de confianza
- Una tarjeta descriptiva con recomendaciones de colorimetría

PROCEDIMIENTO PARA LA CORRECTA EJECUCIÓN DEL PROYECTO:
1. Es necesario descargar los 3 archivos y la carpeta de tu proyecto debe contener:
  1. interfaz_piel.html
  2. Carpeta/tipos con las imágenes:
      Palida.jpg
      Clara.jpg
      Dorada.jpg
      Triguena.jpg
      Oscura.jpg
  3. interfaz_piel.js
2.Arrastra la carpeta del proyecto dentro de Vs Code. Deberas ver los 2 archivos y la 
carpeta que contiene las imagenes/tarjetas.
3. Debes instalar la extension "Live Server" en caso de no tenerla, te permite:
  - evitar bloqueos de cámara
  - evitar restricciones de seguridad del navegador
  - ejecutar el modelo sin errores
4. Ejecuta el archivo HTML con Live Server 
  - Clic derecho sobre interfaz_piel.html
  - Seleccionar Open with Live Server
  - El navegador abrirá una URL similar a: http://127.0.0.1:5500/
5. Permitir el uso de la camara: El navegador te pedirá autorización, selecciona "Permitir" para que el modelo pueda analizar tu rostro.
6. Visualización del resultado. Si todo está correctamente configurado, verás:
  - La cámara funcionando
  - Un recuadro que indica el tipo de piel detectado
  - Un porcentaje de confianza
  - Una tarjeta con recomendaciones de colorimetría
       
  
