function Cercle() {
    alert("yolo");
    var longueur = prompt('Saisissez une longueur');
    var ResultatPerimetre = 2 * 3.14 * longueur / 2;
    longAir = longueur / 2;
    var ResultatAir = 3.14 * Math.pow(longAir, 2);

    alert("le cercle à un perimetre de " + ResultatPerimetre.toFixed(1) + "cm");
    alert("l'air du cercle est de " + ResultatAir + "m²");
}