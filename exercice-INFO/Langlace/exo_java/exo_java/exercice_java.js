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
    var centre =document.getElementById('texts');
    centre.innerHTML='Le texte est modifier.';
}

function openWin() {
    myWindow = window.open("", "", "width=1300, height=740");
    myWindow.document.write("<img src='../../image/david.jpg'>")  
}
    
function resize_to(){
    myWindow.resizeTo(50,50);
    myWindow.focus(); 
}

function move_to(){
    myWindow.moveTo(100,100);
    myWindow.focus(); 
}

function move_by(){
    myWindow.moveBy(100,100);
    myWindow.focus(); 
}

function resize_by(){
    myWindow.resizeBy(-30,-30);
    myWindow.focus(); 
}

function funcNavig(){
    alert("Vous utilisez " + navigator.appName);
    alert("Vous utilisez " + navigator.appCodeName);
    alert("Vous utilisez " + navigator.appVersion);
    alert("Vous utilisez " + navigator.buildID);
    alert("Vous utilisez " + navigator.cookieEnabled);
    alert("Vous utilisez " + navigator.language);
    alert("Vous utilisez " + navigator.mimeTypes);
    alert("Vous utilisez " + navigator.onLine);
    alert("Vous utilisez " + navigator.oscpu);
    alert("Vous utilisez " + navigator.platform);
    alert("Vous utilisez " + navigator.plugins);
    alert("Vous utilisez " + navigator.product);
    alert("Vous utilisez " + navigator.productSub);
    alert("Vous utilisez " + navigator.securityPolicy);
    alert("Vous utilisez " + navigator.userAgent);
    alert("Vous utilisez " + navigator.vendor);
    alert("Vous utilisez " + navigator.vendorSub);
}
var valeur;

function remise_a_zero(){   
    alert("reset");
    valeur= undefined;

}

function fctSubmit(){
    alert("yolo");
    valeur = document.forms['formulaire'].elements['text'].value;
    alert(valeur);

}