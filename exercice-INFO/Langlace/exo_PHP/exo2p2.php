<?php

function Tableau(){
    $macolone1 = 'tata';
    ?>
    <table align="center" border="1">
    <tr>
        <td></td>
        <td align="center"><B><?php colonne($macolone1,'',''); ?></B></td>
        <td align="center"><B><?php colonne('toto','',''); ?></B></td>
    </tr>
    <tr>
        <td rowspan="3"><b>SI01</b></td>
        <td>SI1, SI2, SI3, SI4</td>
        <td>SI5, SI6</td>
    </tr>   
    <tr>
        <td>SLAM</td>
        <td>SISR</td>
    </tr> 
    <tr>
        <td>SLAM1, SLAM2</td>
        <td>SISR1, SISR2</td>
    </tr>
    <tr>
        <td rowspan="3"><b>SI02</b></td>
        <td colspan="2">SI7</td>
    </tr>
    <tr>
        <td>SLAM</td>
        <td>SISR</td>
    </tr>
    <tr>
        <td>SLAM3, SLAM4, SLAM5</td>
        <td>SISR3, SISR4, SISR5</td>
    </tr>
    </table>

    <?php
}
?>
<?php

function colonne($nom1, $nom2, $nom3){
    echo $nom1;
    echo $nom2;
    echo $nom3;
}
?>

<html>
    <head>
    </head>
<body>

<?php
Tableau();
?>

<div align="center">
<h1>YOLOOOOOOOOOOOOOOOOOOOOO</h1>
</div>

<?php
Tableau();
?>

</body>
</html>
