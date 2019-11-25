<?php
session_start();


if (isset($_POST['champ1']) && !empty($_POST['champ1'])) {
    $_SESSION = $_POST['champ1'];
    echo $_SESSION;
} else {
    ?>
    <html>

    <head> </head>
    <title> Formulaire </title>

    <body>
        <form method="POST" action="exo7.php">
            <label> Entrez votre phrase </label>

            <input type="text" name="champ1">
            <input type="submit" value="Valider" />

            <br> <br>

    </body>

    </html>

<?php
    echo "Le formulaire n'est pas rempli";
}
?>
<p align="center"><a href="../FormulaireHTML.html">Formulaire</a></p>

<xmp>
<?php
session_start();


if (isset($_POST['champ1']) && !empty($_POST['champ1'])) {
    $_SESSION = $_POST['champ1'];
    echo $_SESSION;
} else {
    ?>
    <html>

    <head> </head>
    <title> Formulaire </title>

    <body>
        <form method="POST" action="exo7.php">
            <label> Entrez votre phrase </label>

            <input type="text" name="champ1">
            <input type="submit" value="Valider" />

            <br> <br>

    </body>

    </html>

<?php
    echo "Le formulaire n'est pas rempli";
}
?>
<p align="center"><a href="../FormulaireHTML.html">Formulaire</a></p>  
</xmp>