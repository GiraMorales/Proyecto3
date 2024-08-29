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

export { galleryListeners };
