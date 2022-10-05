<?php
    $archivo = "./Contadores de visitas/ContadorIndex.txt";
    $contador = intval(trim(file_get_contents($archivo)));

    $archivo = fopen($archivo, "w");
    fwrite($archivo, $contador + 1);

//    $archivo = fopen($archivo, "r");
    echo '<div style="position:fixed;'
    . 'font-family: ordenador;'
    . 'letter-spacing: 1.3px;'
    . 'font-size: 15px;'
    . 'bottom: 10px;'
    . 'z-index:9;'
    . 'right: 10px;'
    . 'border: 1px #FF8000 solid;'
    . 'box-shadow: 0px 0px 10px #FF8000, inset 0px 0px 20px #FF8000;'
    . 'background: #3B240B;'
    . 'padding: 5px;'
    . '-webkit-text-stroke: 0.7px #b4df24;'
    . 'color: #01b5cc;'
    . 'border-radius: 7px;">'
    . 'Visitas: ' . $contador . '</div>';

    fclose($archivo);
    ?>