const miURL = new URL(
  // protocolo://dominio/path/queryParams
  //queryParams = son utilizados para obtener contenido dinamico(como filtrar un recurso de una solicitud GET)
  //estan separados de la URL por "?" y despues pares de tipo clave/valor(si hay mas de uno se separan con "&")
  "https://www.ejemplo.org/cursos/programacion?ordenar=vistas+del+contenido&nivel=1",
);

console.log(miURL.hostname); // www.ejemplo.org
console.log(miURL.pathname); // /cursos/programacion

console.log(miURL.searchParams); // { 'ordenar' => 'vistas', 'nivel' => '1' }
console.log(miURL.searchParams.get("ordenar")); // 'vistas del contenido'
console.log(miURL.searchParams.get("nivel")); // '1'
