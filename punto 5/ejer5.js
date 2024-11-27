const tareas = ['tender cama', 'barrer ', 'lavar loza'];

const lista = document.getElementById('Tareas');


function nuevaT(tarea) {
  const item = document.createElement('li');
  item.textContent = tarea;

  const Btn = document.createElement('button');
  Btn.textContent = 'Eliminar';
  Btn.addEventListener('click', () => {
    item.remove();
  });

  item.appendChild(Btn);
  return item;
}

tareas.map(nuevaT).forEach(item => lista.appendChild(item));