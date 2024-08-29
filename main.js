import './style.css';
import './componentes/gallery/gallery.css';
import './componentes/header/header.js';
import './componentes/footer/footer.js';
import { unsplash } from './componentes/Key/key.js';
import { galleryListeners } from './componentes/buscar/buscar.js';
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

//Buscador pintar fotos del buscador
const printPhotos = async () => {
  document.querySelector('main').innerHTML = galleryTemplate();
  galleryListeners();

  const images = await searchPhotos('tormenta');
  printItems(images.response.results);
};
galleryTemplate();
galleryListeners();
printPhotos();
