/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// varibles a usar
var usuarioGuardado = obtenerUsuario();
var contraseñaGuardada = obtenerContraseña();

document.oncontextmenu = function(){return false;}

orden();

function orden()
{



    // Obtenemos las variables guardadas en items de localStorage

    // Si el usuario GUARDADO NO es correcto (aunque no tenga nada)
    if ((esUsuarioCorrecto(usuarioGuardado) && esContraseñaCorrecta(contraseñaGuardada)))
    {

    } 
    else
    {

        window.location.href = "https://xdgtweb.github.io/Rick_Y_Morty/public_html/Acceso.html";
    }

}


function preguntarUsuario()
{
    var usuario = document.getElementById("nombre").value;
    
    return usuario;
}

function preguntarContraseña()
{
    var contraseña = document.getElementById("contraseña").value;
    
    return contraseña;
}

function obtenerUsuario()
{
    var obtUsuario;
    
    var obtUsuario = localStorage.getItem("itemUsuario");
    
    return obtUsuario;
}

function obtenerContraseña()
{
    var obtContraseña;
    
    var obtContraseña = localStorage.getItem("itemContraseña");
    
    return obtContraseña;
}

function guardarUsuarioContraseña(pUsuario, pContraseña)
{
                
    localStorage.setItem("itemUsuario", pUsuario);
    localStorage.setItem("itemContraseña", pContraseña);
    
}

function esUsuarioCorrecto(pUsuarioIntrodCorrecto)
{
    var respuesta;
    
    if(pUsuarioIntrodCorrecto === "Morty")
    {
        respuesta = true;
    }
    else
    {
        respuesta = false;
    }
    
    return respuesta;
}

function esContraseñaCorrecta(pContraseñaIntrodCorrecta)
{
    var respuesta;
    
    if(pContraseñaIntrodCorrecta === "Malvado")
    {
        respuesta = true;
    }
    else
    {
        respuesta = false;
    }
    
    return respuesta;
}
