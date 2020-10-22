# Rick and Morty's Character Cards

Esta aplicación web muestra un listado de personajes de la serie de animación Rick & Morty, permite hacer búsquedas por nombre y ampliar información de cada personaje clicando en su tarjeta. 
_Wubba Lubba Dub Dub!_


![Captura de pantalla](https://github.com/mariaozamiz/rick-and-morty-character-cards/blob/master/src/images/rickymorty.jpg?raw=true)



## Tecnologías utilizadas

- React (hooks, router) y CSS (Sass).
- ⚠️ El proyecto aún no está adaptada a dispositivos móviles.

## Características generales

-  La página muestra los veinte primeros personajes de la [rickandmortyapi](https://rickandmortyapi.com/documentation/#get-all-characters) con su información básica: imagen, nombre y especie.
-  Es posible buscar más personajes de la serie a través del formulario.
-  Al hacer click sobre un personaje se expande su información completa, incluyendo planeta de origen, número de episodios y status.

### Búsqueda 🔍

- Al realizar una búsqueda no se tendrá en cuenta si la persona ha introducido el texto en mayúsculas o minúsculas.
- Si ningún personaje coincide con el texto de búsqueda, se mostrará un mensaje de aviso.

### Navegación 🏄

- Situándonos en el campo de texto, el navegador no cambiará de ruta si se pulsa la tecla intro.
- La URL del detalle de personaje es compartible: si visitamos esa URL directamente en el navegador se mostrará el detalle del personaje.
- Si naveguemos a una URL inexistente, saldrá el mensaje de aviso "Personaje no encontrado".

### Pintado de resultados 🥒

-  Tanto el listado inicial de personajes como aquellos resultado de una búsqueda se presentan ordenados alfabéticamente.

### API 📋

- Una segunda API actúa como respaldo por si la primera fallase.
- Los datos necesarios tienen un primer filtrado en este paso y se ordenan alfabéticamente.

```
const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character/')
        .catch(() => {
            return fetch(
                'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
            );
        })
        .then((response) => response.json())
        .then((data) => {
            return data.results
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((character) => {
                    return {
                        id: character.id,
                        imageUrl: character.image,
                        name: character.name,
                        species: character.species,
                        origin: character.origin,
                        status: character.status,
                        episodes: character.episode,
                    };
                });
        });
};´´´


## Instalación 🔧

1. Descarga el repositorio.
2. Instala las dependencias con ```npm install```.
3. Arranca el proyecto con ```npm start```.
