// Cambia esta URL por la URL de tu modelo exportado de Teachable Machine
const URL = "https://teachablemachine.withgoogle.com/models/vxi5dNUK0/"; 

let model, webcam;

// Inicializar todo
async function init() {
    // Cargar modelo
    model = await tmImage.load(URL + "model.json", URL + "metadata.json");
    console.log("Modelo cargado");

    // Configurar cámara
    webcam = new tmImage.Webcam(400, 300, true); // ancho, alto, espejo
    await webcam.setup(); // pide permisos de cámara
    await webcam.play();
    document.getElementById("webcam").appendChild(webcam.canvas);

    // Bucle de predicción
    window.requestAnimationFrame(loop);

    // Botón para capturar predicción manual
    document.getElementById("btnCapturar").addEventListener("click", predict);
}

// Bucle para predicciones automáticas
async function loop() {
    webcam.update(); // actualizar cámara
    await predict();
    window.requestAnimationFrame(loop);
}

// Función de predicción
async function predict() {
    const prediction = await model.predict(webcam.canvas);
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // limpiar resultados previos

    prediction.forEach(p => {
        resultadosDiv.innerHTML += `<p>${p.className}: ${(p.probability*100).toFixed(2)}%</p>`;
    });
}

// Ejecutar todo al cargar
init();
