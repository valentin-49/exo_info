<html>
    <head>

    </head>
    <body>
        <?php
        if (isset($_GET['LeChiffre'])){
            echo "votre age est de ".$_GET['LeChiffre']." ans";
        }else{
            echo "formulaire non saisie";
        ?>
           <form action="exemple.php" method="GET">
                <label>Quel age avez-vous ?</label>
                <input type="text" name="LeChiffre" />
                <input type="submit" name="Valider" value="cliquer ICI !!!">
            </form>
        <?php
        }
        ?>
        <p align="center"><a href="../FormulaireHTML.html">Formulaire</a></p>
    </body>
</html>