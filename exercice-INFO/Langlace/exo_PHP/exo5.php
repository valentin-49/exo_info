<html>
    <head>
        <link rel="stylesheet" href="exo5_CSS.css" />
    </head>
    <body>
        <div id="reponse">
        <?php
        if (isset($_POST['letexte'])){
            echo $_POST['letexte'];
        }else{
            echo "formulaire non saisie";
        ?>
        </div>
           <form action="" method="POST">
                <label>Remplir la zone de texte ?</label>
                <input type="text" name="letexte" />
                <input type="submit" name="Valider" value="cliquer ICI !!!">
            </form>
        <?php
        }
        ?>
        <p align="center"><a href="../FormulaireHTML.html">Formulaire</a></p>
    </body>
</html>

<xmp>
<html>
    <head>
        <link rel="stylesheet" href="exo5_CSS.css" />
    </head>
    <body>
        <div id="reponse">
        <?php
        if (isset($_POST['letexte'])){
            echo $_POST['letexte'];
        }else{
            echo "formulaire non saisie";
        ?>
        </div>
           <form action="" method="POST">
                <label>Remplir la zone de texte ?</label>
                <input type="text" name="letexte" />
                <input type="submit" name="Valider" value="cliquer ICI !!!">
            </form>
        <?php
        }
        ?>
        <p align="center"><a href="../FormulaireHTML.html">Formulaire</a></p>
    </body>
</html>
</xmp>