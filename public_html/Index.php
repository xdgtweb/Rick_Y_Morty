<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Other/html.html to edit this template
-->
<html>
    <head>
        <title>Rick y Morty</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./Estilos/Index.css"/>
        <link rel="stylesheet" href="./Estilos/Contacto y donacion.css"/>
        <link rel="icon" type="image/png" href="Imagenes/Index/rickextrañado.png">
        <sound src="Musica/Index/Space Song.mp3" type="audio/mp3" autoplay="none" loop="infinite"></sound>
    </head>
    <body>
        <header>
            
            <div class="titulo">
                <label>
                </label>
            </div>
            
        </header>
        
        <div class="navpadre">
        <nav>
            <a href="Temporada 1.html"><div class="caja1"><div class="caja2"></div><label>Temporada 1</label></div></a>
            <a href="Temporada 2.html"><div class="caja1"><div class="caja2"></div><label>Temporada 2</label></div></a>
            <a href="Temporada 3.html"><div class="caja1"><div class="caja2"></div><label>Temporada 3</label></div></a>
            <a href="Temporada 4.html"><div class="caja1"><div class="caja2"></div><label>Temporada 4</label></div></a>
            <a href="Temporada 5.html"><div class="caja1"><div class="caja2"></div><label>Temporada 5</label></div></a>
            <a href="Temporada 6.html"><div class="caja1"><div class="caja2"></div><label>Temporada 6</label></div></a>
        </nav>
        
        <div class="nav2">
            <a href="PROVISIONAL.html"><div class="caja3"><div class="caja4"></div><label>Detalles</label></div></a>
            <a href="PROVISIONAL.html"><div class="caja5"><div class="caja6"></div><label>Teorias</label></div></a>
            <a href="PROVISIONAL.html"><div class="caja7"><div class="caja8"></div><label>Mierdas</label></div></a>
        </div>
        </div>
        
        <main>
            <section>
                
                <label>Menú</label>
                
            </section>
            
            <div class="cajamain2">
                
            <article>
                
                <div class="art2">
                    <label>Información</label>
                </div>
                
                <div class="art3">
                    <label>Actualmente Rick y Morty "C-137"
                        se encuentran en el barrio 
                        Morty, gracias a que nuestros 
                        protagosnistas unieron fuerzas 
                        para escapar de la Ciudadela de 
                        los Rick's, seguidamente de que Morty 
                        Malvado saliera disparado 
                        fuera de la curva finita 
                        central, ¿la curva finita central
                        todavia existe o ha sido destruida?; 
                        esa es la duda que tiene todo fan 
                        ahora mismo, tendremos que esperar al
                        día 4 de Septiembre para averiguar
                        lo que pasa.</label>
                </div>
            </article>
            
            <div class="foto1">
                <label></label>
            </div>
        </div>
        </main>
        
        <footer>
            <div class="footer1">
                <label>ESTA PAGINA WEB SE HA HECHO SIN ANIMO DE LUCRO Y COMO PARODIA DE LA WEB RICK Y MORTY OFICIAL</label>
            </div>
            <div class="footer2">
                <label>Politica de prickvacidad</label>
                <div class="cajafooter1">
                    <label>Opiniones de ricknuncios
                    </label>
                    <div class="logoanucio"></div>
                </div>
                <label>Configuración de ricookies</label>
                <label>Términos de rickuso</label>
                <label>Controles rickrentales</label>
                <label>Ricktítulos</label>
                <label>Ricktáctanos</label>
                <label>Sala de rickprensa</label>
                <label>Rickyuda</label>
                <label>Mapa del ricksitio</label>
            </div>
            <div class="footer3">
                <label>
                    TM & © 2022 Fawful Inc. Todos los derechos reservados.
                </label>
            </div>
        </footer>
    </body>
    
    <div class="contacto">
        
        <a href="https://t.me/XDavidGarciaTorres">
            <img src="Imagenes/Contacto y Donacion/telegram.png" width="35" height="35" alt="telegram"/>
        </a>
        <a href="https://instagram.com/gracovitz?igshid=YmMyMTA2M2Y=">
            <img src="Imagenes/Contacto y Donacion/instagram.png" width="35" height="35" alt="instagram"/>
        </a>
        <a href="https://www.paypal.com/paypalme/xdgtweb">
            <img src="Imagenes/Contacto y Donacion/paypal.png" width="35" height="35" alt="donacion"/>
        </a>
        
    </div>
    
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
    
</html>
