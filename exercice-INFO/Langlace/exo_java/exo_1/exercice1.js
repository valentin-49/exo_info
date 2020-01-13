function PerimetreAir() {
    alert("yolo");
    var longueur = prompt('Saisissez une longueur');
    var largeur = prompt('Saisissez une largeur');
    var ResultatPerimetre = longueur * 2 + largeur * 2;
    var ResultatAir = longueur * largeur;

    alert("Le rectangle a un perimetre de  " + ResultatPerimetre + "cm");
    alert("L'air du rectangle est de " + ResultatAir + "m2");
}