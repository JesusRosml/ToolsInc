const preview = document.getElementById("preview");
const qrTrabajadorOner = document.querySelector('.qrTrabajadorOner');
const qrHerramientasTwo = document.querySelector(".qrHerramientasTwo");
const requireText = document.querySelector(".require-text");
const containerVacio = document.querySelector(".containervacio");
const containerVacio2 = document.querySelector(".container-vacio2");
const successMessage = document.createElement("div");
const errorMessage = document.createElement("div");

successMessage.textContent = "Escaneado con éxito";
errorMessage.textContent = "El código ya fue escaneado anteriormente";

function showMessage(messageElement) {
  messageElement.style.display = "block";
  setTimeout(() => {
    messageElement.style.display = "none";
  }, 5000);
}

[successMessage, errorMessage].forEach((messageElement) => {
  messageElement.style.display = "none";
  messageElement.style.position = "fixed";
  messageElement.style.top = "90%";
  messageElement.style.left = "50%";
  messageElement.style.transform = "translate(-50%, -50%)";
  messageElement.style.backgroundColor = "#183153";
  messageElement.style.color = "white";
  messageElement.style.padding = "10px 20px";
  messageElement.style.borderRadius = "5px";
  document.body.appendChild(messageElement);
});

errorMessage.style.backgroundColor = "#d9534f";

function deleteList(event) {
  const button = event.target;
  const ul = button.parentElement;
  const listContainer = ul.parentElement;

  // Obtener el contenido del código QR que se está eliminando
  const codigoQR = ul.textContent.trim();

  // Eliminar el elemento del array de códigos escaneados
  const index = codigosEscaneados.indexOf(codigoQR);
  if (index !== -1) {
    codigosEscaneados.splice(index, 1);
  }

  listContainer.remove();
}

let scanner = new Instascan.Scanner({
  video: preview,
  mirror: false,
  backgroundScan: false,
  captureImage: false,
  scanPeriod: 1,
  videoConstraints: {
    width: { ideal: 256 },
    height: { ideal: 144 },
    facingMode: "environment"
  }
});

let primerCodigo = "";
let codigosEscaneados = [];

scanner.addListener("scan", function (content) {
  if (codigosEscaneados.includes(content)) {
    showMessage(errorMessage);
    return;
  }

  codigosEscaneados.push(content);

  if (primerCodigo === "") {
    primerCodigo = content;
    let items = content.split(" | ");
    let list = document.createElement("ul");
    items.forEach((item) => {
      let li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    qrTrabajadorOner.innerHTML = "";
    qrTrabajadorOner.appendChild(list);
    requireText.style.display = 'block';
    containerVacio.style.display = 'none';
  } else {
    let items = content.split(" | ");
    let list = document.createElement("ul");

    items.forEach((item) => {
      let li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });

    const buttonDelete = document.getElementById("buttondelete").cloneNode(true);
    buttonDelete.style.display = "block";
    buttonDelete.addEventListener("click", deleteList);
    list.appendChild(buttonDelete);

    let listContainer = document.createElement("div");
    listContainer.classList.add("list-container");
    listContainer.appendChild(list);

    qrHerramientasTwo.appendChild(listContainer);
    containerVacio2.style.display = 'none';

    showMessage(successMessage);
  }
});

Instascan.Camera.getCameras()
  .then(function (cameras) {
    if (cameras.length > 0) {
      scanner.start(cameras[0]);
    } else {
      console.error("La camara no funciona");
    }
  })
  .catch(function (e) {
    console.error(e);
  });

// Codigo para la ventana emergente
function openPopup() {
  
  if (scanner.active) {
      scanner.stop(); // Detener la cámara
  }

  var popup = document.createElement("div");
  popup.className = "popup";

  popup.innerHTML = "Este es el contenido de la ventana emergente.";

  document.body.appendChild(popup);
}

const myButton = document.getElementById('myButton');
const popup = document.querySelector('.popup');

myButton.addEventListener('click', function() {

  popup.style.display = 'block';
});

//Boton cerrar 
const buttonCerrar = document.getElementById('buttonCerrar');
buttonCerrar.addEventListener('click', cerrarPopup);

function cerrarPopup() {
  const popup = document.querySelector('.popup');
  popup.style.display = 'none';
  
  if (scanner.active) {
      scanner.start(scanner.camera); // Iniciar la cámara de nuevo
  }
}