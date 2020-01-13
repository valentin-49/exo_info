function PerimetreAir() {
    var longueur = prompt('Saisir une longueur');
    var largeur = prompt('Saisir une largeur');
    var ResultatPerimetre = longueur * 2 + largeur * 2;
    var ResultatAir = longueur * largeur;

    alert("Le périmètre du rectangle est de " + ResultatPerimetre + "cm");
    alert("L'air du rectangle est de " + ResultatAir + "m²");
}