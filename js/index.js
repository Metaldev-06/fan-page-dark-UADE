const audio = document.getElementById("bg-audio");
const btn = document.getElementById("btn-audio");

const main = () => {
  audio.volume = 0.08;

  audio.play().catch(() => {
    btn.style.display = "block";
  });

  btn.addEventListener("click", () => {
    audio.play().then(() => (btn.style.display = "none"));
  });
};

main();

/*
Perdón por el uso de JS profe, pero quería que el audio se 
reproduzca automáticamente y dependiendo del navegador no 
permite sin interacción del usuario. Por eso el botón para 
activarlo en caso de que no se reproduzca automáticamente. 
Además de modificar el volumen. =) 
*/
