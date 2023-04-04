let container = document.querySelector(".contenedor"),
    qrInputs = document.querySelectorAll(".form input"),
    boton = document.querySelector("button"),
    qrimg = document.querySelector("img"),
    img = document.querySelector(".qr_code img");

boton.addEventListener("click", () => {
    let qrvalue = "";
    let inputValues = {};

    qrInputs.forEach(input => {
        const inputId = input.getAttribute("id");
        const inputValue = input.value.replace(/\s+/g, " ");
        inputValues[inputId] = inputValue;
    });

    Object.entries(inputValues).forEach(([id, value]) => {
        qrvalue += `${id}: ${value} | `;
    });

    qrvalue = qrvalue.slice(0, -3); // Eliminar el último separador |
    qrvalue += " \n";

    if (!qrvalue) return;
    boton.innerHTML = "Generando codigo QR...";
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrvalue}`;

    qrimg.addEventListener("load", () => {
        container.classList.add("active");
        boton.innerHTML = "Generar codigo QR";
    });
});

qrInputs = document.querySelectorAll(".form input");
qrInputs = Array.from(qrInputs); // Convertir a array

qrInputs.forEach(input => {
    input.addEventListener("keyup", () => {
        if (qrInputs.some(input => input.value)) {
            container.classList.remove("active");
        }
    });
});

boton.addEventListener("click", () => {
    let descargar = document.querySelector("#descargar"); // Mover aquí
    descargar.addEventListener("click", () => {
        let imgPath = img.getAttribute("src");
        let nombreArchivo = getFileName(imgPath);

        saveAs(imgPath, nombreArchivo);
    });
});

function getFileName(str) {
    return str.substr(str.lastIndexOf('/') + 1);
}

