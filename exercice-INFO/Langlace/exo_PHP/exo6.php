<html>
    <head>
        <link rel="stylesheet" href="exo6_CSS.css" />
    </head>
    <body>
        <div id="reponse">
        <?php
        if (isset($_GET['letexte'])){
            echo $_GET['letexte'];
        }else{
            echo "formulaire non saisie";
        ?>
        </div>
           <form action="" method="GET">
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
        <link rel="stylesheet" href="exo6_CSS.css" />
    </head>
    <body>
        <div id="reponse">
        <?php
        if (isset($_GET['letexte'])){
            echo $_GET['letexte'];
        }else{
            echo "formulaire non saisie";
        ?>
        </div>
           <form action="" method="GET">
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