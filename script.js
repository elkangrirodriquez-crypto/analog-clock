const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");

function actualizarReloj() {
  const ahora = new Date();

  const segundos = ahora.getSeconds();
  const minutos = ahora.getMinutes();
  const horas = ahora.getHours();

  const rotSeg = segundos * 6;
  const rotMin = minutos * 6 + segundos * 0.1;
  const rotHora = (horas % 12) * 30 + minutos * 0.5;

  segundo.style.transform = `translateX(-50%) rotate(${rotSeg}deg)`;
  minuto.style.transform = `translateX(-50%) rotate(${rotMin}deg)`;
  hora.style.transform = `translateX(-50%) rotate(${rotHora}deg)`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();
