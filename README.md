# Rick and Morty's Character Cards

_Proyecto final de módulo React, en el que el objetivo es desarrollar una página web con un listado de personajes de la serie "Rick y Morty", que podremos filtrar por el nombre del personaje._

## Requisitos 📋

-   Solicitar datos al API (https://rickandmortyapi.com/documentation/#get-all-characters) para pintar un listado de personajes con la siguiente información:

1.  Foto
2.  Nombre
3.  Especie

-   Filtrar personajes a través de un formulario de búsqueda en el que no se tengan en cuenta mayúsculas o minúsculas.
-   Al hacer click sobre un personaje se expandirá su información completa. Para ello utilizaremos rutas y React router.
-   En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.
-   Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegue o cambie la ruta sin querer.
-   Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".
-   Como ejercicio extra os proponemos que la URL del detalle de personaje sea compartible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje.
-   Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo http://localhost:3000/#/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje del tipo "El personaje que buscas no existe".
-   Un extra interesante sería que ordenáseis el listado de personajes alfabéticamente por nombre.
