// Variables de la camara
const preview = document.getElementById("preview");
const qrTrabajadorOner = document.querySelector('.qrTrabajadorOner');
const qrHerramientasTwo = document.querySelector(".qrHerramientasTwo");
const siteBackdrop = document.querySelector(".site-backdrop");
const requireText = document.querySelector(".require-text");

let scanner = new Instascan.Scanner({ 
  video: preview,
  mirror: false,
  backgroundScan: false,
  scanPeriod: 5,
  captureImage: false,
  videoConstraints: {
    width: { ideal: 256 },
    height: { ideal: 144 },
    facingMode: "environment"
  }
});

// Variable para almacenar el primer código QR escaneado
let primerCodigo = "";

// Resto del código...


scanner.addListener("scan", function (content) {
  // Crear un fragmento de documento
  const docFragment = document.createDocumentFragment();

  // Si es el primer código QR escaneado, lo almacenamos en el contenedor qrTrabajadorOner
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
  } else {
    // Dividir el contenido usando el separador |
    let items = content.split(" | ");
    // Crear una lista vacía
    let list = document.createElement("ul");

    // Iterar sobre los elementos y agregarlos a la lista
    items.forEach((item) => {
      let li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });

    // Crear un contenedor para la lista
    let listContainer = document.createElement("div");
    listContainer.classList.add("list-container");
    listContainer.appendChild(list);

    // Verificar si hay dos listas en el área de '.site-backdrop'
    

    // Agregar la nueva lista al elemento '.site-backdrop'
    qrHerramientasTwo.appendChild(listContainer);
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
  // Verificar si la cámara está activa
  if (scanner.active) {
      scanner.stop(); // Detener la cámara
  }

  // Crea la ventana emergente
  var popup = document.createElement("div");
  popup.className = "popup";

  // Agrega el contenido a la ventana emergente (opcional)
  popup.innerHTML = "Este es el contenido de la ventana emergente.";

  // Agrega la ventana emergente al cuerpo del documento
  document.body.appendChild(popup);
}

// Obtener el botón y el div popup
const myButton = document.getElementById('myButton');
const popup = document.querySelector('.popup');

// Agregar un evento clic al botón
myButton.addEventListener('click', function() {
  // Mostrar el div popup
  popup.style.display = 'block';
});

//Boton cerrar 
const buttonCerrar = document.getElementById('buttonCerrar');
buttonCerrar.addEventListener('click', cerrarPopup);

function cerrarPopup() {
  const popup = document.querySelector('.popup');
  popup.style.display = 'none';
  
  // Verificar si la cámara estaba activa
  if (scanner.active) {
      scanner.start(scanner.camera); // Iniciar la cámara de nuevo
  }
}