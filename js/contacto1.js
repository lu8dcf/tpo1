function valida(){
    //valido el nombre
    if (document.fcontacto.nombre.value.length==0){
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }
 
    //valido para el mensaje
    if (document.fcontacto.message.value.length==0){
        alert("Tiene que escribir un mensaje")
        document.fvalida.message.focus()
        return 0;
    }
    //valido falta de email o telefono
    if (document.fcontacto.telefono.value.length==0 && document.fcontacto.email.value.length==0){
        alert("Tiene que registrar un Telefono o un Correo Electronico")
        document.fvalida.telefono.focus()
        return 0;
    }
    
 
    //el formulario se envia
    document.fcontacto.submit();
}
