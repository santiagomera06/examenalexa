 
 const usuarios = [
    { nombre: 'camilo', edad: 18, email: 'camilohurtado@gmail.com' },
    { nombre: 'fernanda', edad: 18, email: 'fernandagonzales@gmail.com' },
    { nombre: 'santiago', edad: 28, email: 'santiagomera@gmail.com' }
];


const table = document.createElement('table');
table.border = '1';


const td = document.createElement('thead');
const encabezado = document.createElement('tr');
const hd = ['Nombre', 'Edad', 'Email'];
hd.forEach(Text => {
    const th = document.createElement('th');
    th.textContent = Text;
    encabezado.appendChild(th);
});
td.appendChild(encabezado);
table.appendChild(td);


const tbody = document.createElement('tbody');


usuarios.map(usuario => {
    const fila = document.createElement('tr');
    Object.values(usuario).map(value => {
        const cl = document.createElement('td');
        cl.textContent = value;
        fila.appendChild(cl);
    });
    tbody.appendChild(fila);
});

table.appendChild(tbody);

document.getElementById('tabla').appendChild(table);