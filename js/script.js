var chilometri = parseInt(prompt ("Chilometri da percorrere?"));
var eta = parseInt(prompt ("Età del passeggero?"));
var costo = 0.21 * chilometri;

if (eta<18) {
  costo = costo * 0.8;
}
else if (eta>64) {
  costo = costo * 0.6;
}

document.getElementById('biglietto').innerHTML = "Costo del biglietto:" + costo.toFixed(2) + " €";
