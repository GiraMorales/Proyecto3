<<<<<<< Updated upstream
import './style.css';
import './componentes/gallery/gallery.css';
import './componentes/header/header.js';
import './componentes/footer/footer.js';
import { unsplash } from './componentes/Key/key.js';

// console.log(unsplash);

unsplash.photos.get({
  photoId: ''
});

// para las fotos
const cardTemplate = (item) => {
  return `
    <li class="gallery-item" style="background-image: url(${item.urls.regular}); border: 10px solid ${item.color}">
    <div class="info">
        <div class="save-btn">
            <button>Guardar</button>
        </div>
        <div class="links">
             <a href=${item.links.html} class="full-link"> Ir al perfil del fotógrafo</a>
            <div>
                <a href=${item.urls.full} target="_blank" class="links-icon">
                    <img src="https://res.cloudinary.com/dvoady6dt/image/upload/v1724167242/raaszre4l0mulg2tj3tf.png" alt="Upload icon"/>
                </a>
                <a href="#null" class="links-icon">
                    <img src="https://res.cloudinary.com/dvoady6dt/image/upload/v1724167115/Practica%20css/qigr9giqgbof7yyaypvj.png" alt="More icon"/>
                </a>
            </div>
        </div>
    </div>
    </li>
    `;
};

const searchPhotos = async (keyword) => {
  const images = await unsplash.search.getPhotos({
    query: keyword,
    page: 1,
    perPage: 30
  });
  return images;
};

const galleryTemplate = () => {
  return `
    <ul class="gallery">
    </ul>
    `;
};
//Pintar fotos dentro de mi clase gallery
const printItems = (items) => {
  const gallery = document.querySelector('.gallery');
  //vacia la galeria antes de buscar
  gallery.innerHTML = '';
  for (const item of items) {
    gallery.innerHTML += cardTemplate(item);
  }
};

//funcionalidad de los botones
const galleryListeners = async () => {
  const input = document.querySelector('#searchinput');
  const btn = document.querySelector('#searchbtn');
  const galleryContainer = document.querySelector('main');

  btn.addEventListener('click', async () => {
    // Realiza la búsqueda con el valor ingresado
    const images = await searchPhotos(input.value);
    // Limpia el contenedor de la galería antes de cada búsqueda
    galleryContainer.innerHTML = galleryTemplate();
    if (images.response.results.length > 0) {
      // Si hay resultados, imprime las imágenes encontradas
      printItems(images.response.results);
    } else {
      // Si no hay resultados, mostrar el mensaje y fotos de gatos
      galleryContainer.innerHTML = '';
      const mensaje = document.createElement('h3');
      mensaje.textContent =
        'No hemos podido encontrar su búsqueda, te ofrecemos esta búsqueda mientras prueba con otra búsqueda';
      galleryContainer.appendChild(mensaje);
      //creo contenedor para fotos de gatos
      const gallery = document.createElement('ul');
      gallery.className = 'gallery';
      galleryContainer.appendChild(gallery);
      //fotos de los gatos
      const images = await searchPhotos('gatos');
      printItems(images.response.results);
    }
    //borra después de buscar
    input.value = '';
  });

  const btnI = document.querySelector('#vueltainicio');
  btnI.addEventListener('click', async () => {
    // Limpia el contenedor de la galería al hacer clic en el botón de inicio
    galleryContainer.innerHTML = '';
    // Busca fotos de tormenta y muestra los resultados
    //creo contenedor para fotos de tormenta
    const gallery = document.createElement('ul');
    gallery.className = 'gallery';
    galleryContainer.appendChild(gallery);
    const images = await searchPhotos('tormenta');
    printItems(images.response.results);
  });
};

//Buscador pintar fotos del buscador
const printPhotos = async () => {
  document.querySelector('main').innerHTML = galleryTemplate();
  galleryListeners();

  const images = await searchPhotos('tormenta');
  printItems(images.response.results);
  // console.log(images);

  // document.querySelector('header').innerHTML = headerTemplate();
  // listeners();
};
galleryTemplate();
galleryListeners();
printPhotos();
=======
import './style.css';
import './componentes/gallery/gallery.css';
import './componentes/header/header.js';
import './componentes/footer/footer.js';
import { unsplash } from './componentes/Key/key.js';

// console.log(unsplash);

unsplash.photos.get({
  photoId: ''
});

// para las fotos
const cardTemplate = (item) => {
  return `
    <li class="gallery-item" style="background-image: url(${item.urls.regular}); border: 10px solid ${item.color}">
    <div class="info">
        <div class="save-btn">
            <button>Guardar</button>
        </div>
        <div class="links">
             <a href=${item.links.html} class="full-link"> Ir al perfil del fotógrafo</a>
            <div>
                <a href=${item.urls.full} target="_blank" class="links-icon">
                    <img src="https://res.cloudinary.com/dvoady6dt/image/upload/v1724167242/raaszre4l0mulg2tj3tf.png" alt="Upload icon"/>
                </a>
                <a href="#null" class="links-icon">
                    <img src="https://res.cloudinary.com/dvoady6dt/image/upload/v1724167115/Practica%20css/qigr9giqgbof7yyaypvj.png" alt="More icon"/>
                </a>
            </div>
        </div>
    </div>
    </li>
    `;
};

const searchPhotos = async (keyword) => {
  const images = await unsplash.search.getPhotos({
    query: keyword,
    page: 1,
    perPage: 30
  });
  return images;
};

const galleryTemplate = () => {
  return `
    <ul class="gallery">
    </ul>
    `;
};
//Pintar fotos dentro de mi clase gallery
const printItems = (items) => {
  const gallery = document.querySelector('.gallery');
  //vacia la galeria antes de buscar
  gallery.innerHTML = '';
  for (const item of items) {
    gallery.innerHTML += cardTemplate(item);
  }
};

//funcionalidad de los botones
const galleryListeners = async () => {
  const input = document.querySelector('#searchinput');
  const btn = document.querySelector('#searchbtn');
  const galleryContainer = document.querySelector('main');

  btn.addEventListener('click', async () => {
    // Realiza la búsqueda con el valor ingresado
    const images = await searchPhotos(input.value);
    // Limpia el contenedor de la galería antes de cada búsqueda
    galleryContainer.innerHTML = galleryTemplate();
    if (images.response.results.length > 0) {
      // Si hay resultados, imprime las imágenes encontradas
      printItems(images.response.results);
    } else {
      // Si no hay resultados, mostrar el mensaje y fotos de gatos
      galleryContainer.innerHTML = '';
      const mensaje = document.createElement('h3');
      mensaje.textContent =
        'No hemos podido encontrar su búsqueda, te ofrecemos esta búsqueda mientras prueba con otra búsqueda';
      galleryContainer.appendChild(mensaje);
      //creo contenedor para fotos de gatos
      const gallery = document.createElement('ul');
      gallery.className = 'gallery';
      galleryContainer.appendChild(gallery);
      //fotos de los gatos
      const images = await searchPhotos('gatos');
      printItems(images.response.results);
    }
    //borra después de buscar
    input.value = '';
  });

  const btnI = document.querySelector('#vueltainicio');
  btnI.addEventListener('click', async () => {
    // Limpia el contenedor de la galería al hacer clic en el botón de inicio
    galleryContainer.innerHTML = '';
    // Busca fotos de tormenta y muestra los resultados
    //creo contenedor para fotos de tormenta
    const gallery = document.createElement('ul');
    gallery.className = 'gallery';
    galleryContainer.appendChild(gallery);
    const images = await searchPhotos('tormenta');
    printItems(images.response.results);
  });
};

//Buscador pintar fotos del buscador
const printPhotos = async () => {
  document.querySelector('main').innerHTML = galleryTemplate();
  galleryListeners();

  const images = await searchPhotos('tormenta');
  printItems(images.response.results);
  // console.log(images);

  // document.querySelector('header').innerHTML = headerTemplate();
  // listeners();
};
galleryTemplate();
galleryListeners();
printPhotos();
>>>>>>> Stashed changes
