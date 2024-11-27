const dt = [
    { nombre: 'z900 ', descripcion: 'mot de alto cc de la marca kawasaki' },
    { nombre: 'mt09', descripcion: 'moto de alto cc de la marca yamaha' },
   
  ];
  
  const contenedor = document.getElementById('tarjetas');
  
  const tarjetas = dt.map(producto => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta'); 
    tarjeta.innerHTML = `
      <h2>${producto.nombre}</h2>
      <p>${producto.descripcion}</p>
    `;
    return tarjeta;
  });
  
  contenedor.append(...tarjetas);