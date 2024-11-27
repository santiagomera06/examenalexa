const imagenes = [
    'https://assets.bridgestonetire.com/content/dam/consumer/bst/la/cr/tips/2022/otros/carro_deportivo.png',
  ];
  
  const contenedor = document.getElementById('carrusel');
  
  let indiceImagen = 0;
  
  function mostrarSiguienteImagen() {
    contenedor.innerHTML = ''; 

    const imagenActual = imagenes[indiceImagen];
    const img = document.createElement('img');
    img.src = imagenActual;
    contenedor.appendChild(img);
  
    indiceImagen++;
    if (indiceImagen === imagenes.length) {
      indiceImagen = 0;
    }
  }
  
  
  mostrarSiguienteImagen();
  
