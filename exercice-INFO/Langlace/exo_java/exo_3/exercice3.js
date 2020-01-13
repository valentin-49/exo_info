var a = 3;
var b = 2;

function Multiplie(parametreX = 8) {
    var resultat = parametreX * 3;
    return resultat;
}

function Affiche() {
    alert(Multiplie(6));
    alert(Multiplie());
}