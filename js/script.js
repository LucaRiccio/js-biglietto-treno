var chilometri = parseInt(prompt ("Chilometri da percorrere?"));
var eta = parseInt(prompt ("Età del passeggero?"));
var costo = 0.21 * chilometri;

if (eta<18) {
  document.getElementById('biglietto').innerHTML = "Costo del biglietto:" + costo * 0.8;
}

else if (eta>64) {
  document.getElementById('biglietto').innerHTML = "Costo del biglietto:" + costo * 0.6;
}

else {
  document.getElementById('biglietto').innerHTML = "Costo del biglietto:" + costo;
}
