function PerimetreAir() {
    alert("yolo");
    var longueur = prompt('Saisissez une longueur');
    var largeur = prompt('Saisissez une largeur');
    var ResultatPerimetre = longueur * 2 + largeur * 2;
    var ResultatAir = longueur * largeur;

    alert("Le rectangle a un perimetre de  " + ResultatPerimetre + "cm");
    alert("L'air du rectangle est de " + ResultatAir + "cm2");
}

function Cercle() {
    alert("yolo");
    var longueur = prompt('Saisissez une longueur');
    var ResultatPerimetre = 2 * 3.14 * longueur / 2;
    longAir = longueur / 2;
    var ResultatAir = 3.14 * Math.pow(longAir, 2);

    alert("le cercle à un perimetre de " + ResultatPerimetre.toFixed(1) + "cm");
    alert("l'air du cercle est de " + ResultatAir + "cm²");
}

var a = 3;
var b = 2;

function Multiplication(parX = 8) {
    
    var resultat = parX * 3;
    return resultat;
}

function Affichage() {
    alert("yolo");
    alert(Multiplication(-5));
    alert(Multiplication());
}

var tab = Array(-2, 1, 4, 6, 8, 10);

function Addition(X) {
    var result = X + 2;
    alert(result);
}

function Afficheadd() {
    alert("yolo");
    Addition(tab[2]);
    Addition(tab[tab.length-1]);
}

function boucle(){

    var i;
    var incre;
    var tablong;
    var tab =[];

    alert("yolo");
    tablong=prompt("entrez la taille du tableau");
    i=prompt("valeur de i ");

    tab[0]=i;

    for(incre=0; incre<tablong; incre++){

        i=i*i
        tab[incre]=i
        alert(tab[incre]);
    }
  
}

var tab = Array(-2, 1, 4, 6, 8, 10);

function Soustraction(X) {
    var result = X - 2;
    alert(result);
}

function AfficheSou() {
    alert("yolo");
    Soustraction(tab[0]);
    Soustraction(tab[tab.length-1]);
}

function centrage_h1(){
    alert("yolo");
    var centre =document.getElementById('texts');
    centre.innerHTML='Le texte est modifier.';
    alert("yolo");
}