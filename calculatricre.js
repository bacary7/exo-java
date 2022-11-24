function calculer() {}

document.getElementById("btn").addEventListener("click", () => {
  var valeur1, valeur2;
  console.log("EEEEEEEEEEE");
  valeur1 = document.getElementById("nbr1").value;
  valeur2 = document.getElementById("nbr2").value;
  valeur1 = parseInt(valeur1);
  valeur2 = parseInt(valeur2);
  document.getElementById("add").innerHTML =
    "Addition : " + (valeur1 + valeur2);

  document.getElementById("sous").innerHTML =
    "soustraction : " + (valeur1 - valeur2);

  document.getElementById("mult").innerHTML =
    "multiplication : " + valeur1 * valeur2;
  document.getElementById("mod").innerHTML = "modulo : " + (valeur1 % valeur2);
});
