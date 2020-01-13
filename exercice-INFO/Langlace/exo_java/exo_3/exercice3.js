var a = 3;
var b = 2;

function Multiplication(parX = 8) {
    
    var resultat = parX * 3;
    return resultat;
}

function Affichage() {
    alert("yolo");
    alert(Multiplication(3));
    alert(Multiplication());
}