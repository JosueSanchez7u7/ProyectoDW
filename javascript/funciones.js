//Lista que contiene los lugares turisticos
var ListTurismo = [];

//Impresion de datos ingresados por el usuario en el html
var tablaTurismoUser =  `<fieldset id="tTurismoUser">
                         </fieldset>`

function verTablaTurismoUser(){
    document.getElementById("tablaUsers").innerHTML = tablaTurismoUser; 
    mostrarListUsers();
}

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

function mostrarBusqueda(i){
    // Metodo recursivo para mostrar resultados de busqueda
    console.log("Mostrando el resultado de la busqueda");
    var bTurismo = document.getElementById("rBusqueda");
    var List = getListTurismo();
    bTurismo.innerHTML += ` <fieldset>
                            <legend><h1>${List[i].nombreLugar}</h1></legend>
                            <p>Pais: ${List[i].pais}</p>
                            <p>Descripcion: ${List[i].descripcion}</p>
                            <p>Direccion: ${List[i].direccion}</p>
                            </fieldset>`;
}

function buscarTurismo(){
    //Asignando los valores que traen los formularios para realizar la busqueda
    console.log("Entre a la funcion buscar Turismo");
    var List = getListTurismo();
    var bNombre = document.getElementById("bnombre").value;
    var bPais = document.getElementById("bpais").value;
    
    //Validando parametros
    if(bNombre != "" && bPais != ""){
        //Recorrido por la lista de lugares turisticos
        for(i in List){
            //Condicion de la busqueda
            if(bNombre == List[i].nombreLugar && bPais == List[i].pais){
                //Se encontro el objeto que cumple con la condicion de busqueda

                mostrarBusqueda(i);
            } else{
                //No se encontro ninguna coincidencia

            }
        }
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

//Funcion para mostrar la lista de lugares turisticos ingresados por usuarios
function mostrarListUsers(){
    var List = getListTurismo();
    var tListUser = document.getElementById("tTurismoUser");

    for(i in List){
        if(List[i].tipo == 1){
            tListUser.innerHTML += `<fieldset>
                                    <legend><h1>${List[i].nombreLugar}</h1></legend>
                                    <p>Pais: ${List[i].pais}</p>
                                    <p>Descripcion: ${List[i].descripcion}</p>
                                    <p>Direccion: ${List[i].direccion}</p>
                                    </fieldset>`;
        }
    }
}
