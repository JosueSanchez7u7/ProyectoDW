//Lista que contiene los lugares turisticos
var ListTurismo = [];
/*
function ingresarNom(){
    nombre.push({nombres:document.getElementById("nombres").value});
    console.log(nombre)
}
*/

//Funcion para agregar lugares turisticos desde la pagina 3
function aggTurismo(){
    var tnombre = document.getElementById("nombre").value;
    var tpais = document.getElementById("pais").value;
    var tdescripcion = document.getElementById("descripcion").value;
    var tdireccion = document.getElementById("direccion").value;
    /* La variable tTipo es para identificar los objetos ingresados por los usuarios desde la pagina
       Tipo = 0 agregado en el codigo , Tipo = 1 agregado por el usuario en la web */
    var tTipo = 1;

    if(tnombre != "" && tpais != "" && tdescripcion != "" && tdireccion != ""){
        ListTurismo.push({nombreLugar:tnombre,pais:tpais,descripcion:tdescripcion,direccion:tdireccion,tipo:tTipo});
        localStorageListTurismo(ListTurismo);
    }
}

//Funcion para devolver los valores en el almacenamiento local
function getListTurismo(){
    var storedList = localStorage.getItem("TurismoUsuario");
    if(storedList == null){
        //La lista esta vacia
        ListTurismo = [];
    } else{
        //Contiene informacion
        ListTurismo = JSON.parse(storedList);
    }
    return ListTurismo;
}

//Funcion para el almacenamiento local
function localStorageListTurismo(pList){
    localStorage.setItem("TurismoUsuario", JSON.stringify(pList));
}
