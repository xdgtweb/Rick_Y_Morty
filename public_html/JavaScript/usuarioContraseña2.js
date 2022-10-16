/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// varibles a usar
var usuarioGuardado = obtenerUsuario();
var contraseñaGuardada = obtenerContraseña();

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
    
    if(pUsuarioIntrodCorrecto === "david" || 
            pUsuarioIntrodCorrecto === "Sanz" ||
<<<<<<< HEAD
            pUsuarioIntrodCorrecto === "RVG26" ||
            pUsuarioIntrodCorrecto === "Emma_bp")
=======
            pUsuarioIntrodCorrecto === "RVG26"
            pUsuarioIntrodCorrecta === "Emma_bp")
>>>>>>> d45a14970b3f69eb0899e8e1594a11e278d554c1
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
    
    if(pContraseñaIntrodCorrecta === "3067" || 
            pContraseñaIntrodCorrecta === "9999" ||
<<<<<<< HEAD
            pContraseñaIntrodCorrecta === "Kintos26" ||
=======
            pContraseñaIntrodCorrecta === "Kintos26"
>>>>>>> d45a14970b3f69eb0899e8e1594a11e278d554c1
            pContraseñaIntrodCorrecta === "Rick0601")
    {
        respuesta = true;
    }
    else
    {
        respuesta = false;
    }
    
    return respuesta;
}
