const downloadBoton = document.querySelector('.download-btn'),
    countDown = document.querySelector('.countdown'),
    manualDownloadText = document.querySelector('.manualDownload-text'),
    manualDownloadBtn = document.querySelector('.manualDownloadBtn'),
    pleaseWait = document.querySelector('.please-wait');

let tiempoDescarga = 10;

downloadBoton.addEventListener('click', () => {
    console.log('hoal');
    downloadBoton.style.display = 'none';
    countDown.innerHTML = `Su descarga comenzará automáticamente en <span>${tiempoDescarga}</span> segundos.`;


    let descargaTime = setInterval(function timeCount() {
        tiempoDescarga--;
        countDown.innerHTML = `Su descarga comenzará automáticamente en <span>${tiempoDescarga}</span> segundos.`;

        if (tiempoDescarga <= 0) {
            //cuando llega a 0 se ejecuta la funcion de clearInterval para cancelar el conteo
            clearInterval(descargaTime);
            pleaseWait.classList.remove("wait");
            let download_href = "https://github.com/MattyuCode/pagina-web-UMG/archive/refs/heads/main.zip";
            // let download_href = "https://download1649.mediafire.com/qo9g80ekgbjg/7349c0s30ufjo49/proyect.zip";

            window.location.href = download_href;
            manualDownloadBtn.href = download_href;

            setTimeout(() => {
                pleaseWait.classList.add("wait");
                manualDownloadText.style.display = "block";
            }, 4000);
        }
    }, 1000);
});

/*
// repetir con el intervalo de 2 segundos
let timerId = setInterval(() => alert('tick'), 2000);

// después de 5 segundos parar
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
*/