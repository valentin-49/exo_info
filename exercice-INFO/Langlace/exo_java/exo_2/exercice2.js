function Cercle() {
    var longueur = prompt('Saisir une longueur');
    var ResultatPerimetre = 2 * 3.14 * longueur / 2;
    longueurAir = longueur / 2;
    var ResultatAir = 3.14 * Math.pow(longueurAir, 2);

    alert("le perimetre du cercle est de " + ResultatPerimetre.toFixed(1) + "cm");
    alert("l'air du cercle est de " + ResultatAir + "m²");
}