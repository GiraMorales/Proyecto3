import './header.css';

const headerTemplate = () => {
  return `
     <img src="https://res.cloudinary.com/dvoady6dt/image/upload/v1722672476/Poyectos3_Pinterest/ee0aqe8qbhswcydudfkz.png" alt="icono pinteres class="vueltainicio" id="vueltainicio" >
  <input type="text" placeholder="Buscar" id="searchinput"/>
  <button id="searchbtn"><img src="https://res.cloudinary.com/dvoady6dt/image/upload/v1722846168/Poyectos3_Pinterest/ervzz25jwmpzjnryqazs.png" alt="Search icon"/></button>
  <button id="darkmodebtn"><img src="/icons/dark.png" alt="Dark mode icon"/ id="darkmodeicon"></button>
  <img
    src="https://res.cloudinary.com/dvoady6dt/image/upload/v1722846168/Poyectos3_Pinterest/v4wmtilub9omepw8hmqv.png"
    alt="Profile image"
    class="profileimg"
  /> 
    `;
};

const themeSwitch = () => {
  document.body.classList.toggle('dark');
};

const listeners = () => {
  const darkmodebtn = document.querySelector('#darkmodebtn');
  darkmodebtn.addEventListener('click', () => {
    themeSwitch();
    const theme = document.body.classList.contains('dark');
    if (theme) {
      document.querySelector('#darkmodeicon').src = '/icons/light.png';
    } else {
      document.querySelector('#darkmodeicon').src = '/icons/dark.png';
    }
  });
  const logo = document.querySelector('#vueltainicio');
  if (logo) {
    logo.addEventListener('click', async () => {
      const galleryContainer = document.querySelector('main');
      galleryContainer.innerHTML = galleryTemplate();

      const images = await searchPhotos('tormenta');
      printItems(images.response.results);
    });
  }
};

const printHeaderTemplate = () => {
  document.querySelector('header').innerHTML = headerTemplate();
  listeners();
};

printHeaderTemplate();
