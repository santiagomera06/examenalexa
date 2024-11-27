

const contenedor = document.getElementById("btn");

const botones = Array.from({ length: 5 }, (_, index) => {
  const btn = document.createElement("button");
  btn.textContent = `Botón ${index + 1}`;
  btn.id = `btn-${index}`;
  return btn;
});


botones.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    console.log(`Botón con índice ${index} fue clickeado.`);
  });
  
  contenedor.appendChild(btn);
});