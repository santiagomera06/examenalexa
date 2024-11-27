
const tabla = document.getElementById('tablaUsuarios');
const tb = tabla.querySelector('tbody');

function crearFila(usuario) {
  const fila = document.createElement('tr');
  const celdas = ['id'];
  celdas.forEach(celda => {
    const td = document.createElement('td');
    td.textContent = usuario[celda];
    fila.appendChild(td);
  });
  return fila;
}

async function obUsuario() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts ');
    const usuarios = await respuesta.json();

    const usuariosFiltrados = usuarios.filter(usuario => usuario.id < 5);

    usuariosFiltrados.forEach(usuario => {
      const fila = crearFila(usuario);
      tb.appendChild(fila);
    });
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
  }
}

obUsuario();