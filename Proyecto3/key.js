<<<<<<< Updated upstream
import { createApi } from 'unsplash-js';

// Carga las variables de entorno desde el archivo .env

const accessKey = import.meta.env.VITE_ACCESS_KEY;
const databaseUrl = import.meta.env.VITE_DATABASE_URL;

console.log(`API Key: ${accessKey}`);
console.log(`Database URL: ${databaseUrl}`);

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY
});

export { unsplash }; // Exporta la variable para que pueda ser usada en otros archivos
=======
import { createApi } from 'unsplash-js';

// Carga las variables de entorno desde el archivo .env

const accessKey = import.meta.env.VITE_ACCESS_KEY;
const databaseUrl = import.meta.env.VITE_DATABASE_URL;

console.log(`API Key: ${accessKey}`);
console.log(`Database URL: ${databaseUrl}`);

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY
});

export { unsplash }; // Exporta la variable para que pueda ser usada en otros archivos
>>>>>>> Stashed changes
