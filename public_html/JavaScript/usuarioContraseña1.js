/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// varibles a usar
var usuarioPreguntado;
var contraseñaPreguntada;
var usuarioGuardado = obtenerUsuario();
var contraseñaGuardada = obtenerContraseña();

//orden();

function orden()
{

    if (!(document.getElementById("nombre").value.length <= 3 || document.getElementById("contraseña").value.length <= 3))
    {

        // Obtenemos las variables guardadas en items de localStorage

        // Si el usuario GUARDADO NO es correcto (aunque no tenga nada)
        if (!(esUsuarioCorrecto(usuarioGuardado) && esContraseñaCorrecta(contraseñaGuardada)))
        {

//        console.log("Antes: \n" + usuarioGuardado + "\n" + contraseñaGuardada);
            //preguntamos al usuario y nos responde en esas variables
            usuarioPreguntado = preguntarUsuario();
            contraseñaPreguntada = preguntarContraseña();

            // Si el usuario PREGUNTADO es correcto
            if (esUsuarioCorrecto(usuarioPreguntado) && esContraseñaCorrecta(contraseñaPreguntada))
            {
//            console.log("dentro: "+esUsuarioCorrecto(usuarioPreguntado)+"   "+esContraseñaCorrecta(contraseñaPreguntada));
                guardarUsuarioContraseña(usuarioPreguntado, contraseñaPreguntada);
                window.location.href = "https://xdgtweb.github.io/Rick_Y_Morty/public_html/Index.html";
            } 
            else
            {
                window.location.href = "https://xdgtweb.github.io/Rick_Y_Morty/public_html/Acceso.html";
            }
        } 
        else
        {
            window.location.href = "https://xdgtweb.github.io/Rick_Y_Morty/public_html/Acceso.html";
        }
    }

//    usuarioGuardado = obtenerUsuario();
//    contraseñaGuardada = obtenerContraseña();
//
//    console.log("Despues: \n" + usuarioGuardado + "\n" + contraseñaGuardada);

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
    
    if(pUsuarioIntrodCorrecto === "Fawful" || 
            pUsuarioIntrodCorrecto === "Sanz" ||
            pUsuarioIntrodCorrecto === "RVG26" ||
            pUsuarioIntrodCorrecto === "Emma_bp" ||
            pUsuarioIntrodCorrecto === "Ur3k" ||
            pUsuarioIntrodCorrecto === "Kensio"||
            pUsuarioIntrodCorrecto === "moob")
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
            pContraseñaIntrodCorrecta === "Kintos26" ||
            pContraseñaIntrodCorrecta === "Rick0601" ||
            pContraseñaIntrodCorrecta === "2014chad" ||
            pContraseñaIntrodCorrecta === "Dongo" ||
            pContraseñaIntrodCorrecta === "moobTTTT")
    {
        respuesta = true;
    }
    else
    {
        respuesta = false;
    }
    
    return respuesta;
}