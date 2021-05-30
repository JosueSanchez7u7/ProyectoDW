//Lista que contiene los lugares turisticos
var contador = 0;
var ListTurismo = [];
var ListImgTusimo = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.png","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","30.jpg"];

//Datos pre registrados en la lista de lugares turisticos
ListTurismo.push({nombreLugar:"Gran Muralla",pais:"China",descripcion:"Esta fortificación de 212 mil km, de la que se conserva aproximadamente 1/3, es la construcción en su tipo más grande del mundo y uno de los iconos turísticos de China.  China",direccion:"Empieza/termina en el Paso Jiayuguan, en la provincia de Gansu y empieza/termina en la ciudad de Qinhuangdao, provincia de Hebei",tipo:"0"});
ListTurismo.push({nombreLugar:"Gran Pirámide de Guiza",pais:"Egipto",descripcion:"Las pirámides Micerinos, Kefrén y Keops, esta última la más atractiva para los turistas pues es la única de las Siete Maravillas del Mundo Antiguo que se mantiene en pie. Además, es la mayor de las pirámides egipcias y fue la construcción más alta del planeta por casi 4 milenios.",direccion:"La Necrópolis de Guiza, a 14 km al suroeste de El Cairo",tipo:"0"});
ListTurismo.push({nombreLugar:"La Alhambra",pais:"España",descripcion:"El monumento español más visitado después del Templo Expiatorio de la Sagrada Familia.Esta ciudadela andalusí Patrimonio de la Humanidad y en la que vivían el rey nazarí y su corte, está formada por palacios, bellos jardines y un alcázar.",direccion:"Calle Real de la Alhambra, s/n, 18009 Granada, España",tipo:"0"});
ListTurismo.push({nombreLugar:"Torre Eiffel",pais:"Francia",descripcion:"La torre más famosa del mundo tiene una altura arquitectónica de 300 metros, elevándose a 324 metros al incluir su antena. Tiene 3 plantas situadas respectivamente a 57.6, 115.7 y 276.1 metros de la base, las que puedes alcanzar subiendo sus más de 1600 escalones o en ascensores.",direccion:"Champ de Mars, 5 Avenue Anatole France, 75007 Paris, Francia",tipo:"0"});
ListTurismo.push({nombreLugar:"Hollywood Sign",pais:"Estados Unidos",descripcion:"Lo que comenzó en 1923 como un enorme anuncio comercial para promocionar un desarrollo inmobiliario, se convirtió en la principal postal turística de Los Ángeles, California. El letrero de Hollywood ha sido escenario de suicidios, accidentes automovilísticos, actos de vandalismo y de filmaciones de cine y televisión. Pocos turistas, habrá dejado Los Ángeles sin hacerle una foto.",direccion:"Los Ángeles, California 90068, EE. UU.",tipo:"0"});
ListTurismo.push({nombreLugar:"Templo Expiatorio de la Sagrada Familia",pais:"España",descripcion:"La obra cumbre del arquitecto español del siglo XIX, Antoni Gaudí, gran maestro del modernismo, es una de la catedrales más fotografiadas del mundo. El artista catalán comenzó la monumental iglesia en 1882 y pese a pasar más de 130 años, el templo más visitado de Europa después de la Basílica de San Pedro de Roma, aún está inconcluso. Gaudí consiguió con la Sagrada Familia una perfecta armonía entre los elementos estructurales y decorativos.",direccion:"Carrer de Mallorca, 401, 08013 Barcelona, España",tipo:"0"});
ListTurismo.push({nombreLugar:"Torre de Pisa",pais:"Italia",descripcion:"Entre los lugares turísticos del mundo, este es el que ha demandado más atención para evitar el colapso. Es una joya del arte románico que empezó a inclinarse tan pronto comenzó su construcción en 1173. Desde entonces, se ha inclinado en micromovimientos, lo que ameritó su cierre y reforzamiento en 1990",direccion:"Piazza del Duomo, 56126 Pisa PI, Italia",tipo:"0"});
ListTurismo.push({nombreLugar:"Gran Palacio de Bangkok",pais:"Tailandia",descripcion:"El monumento arquitectónico más importante de Tailandia fue mandado a construir en los años 1790 por el rey de Siam, Rama I el Grande. Está protegido por un lado por el río Chao Phraya y por el otro por un canal construido con propósitos defensivos, por lo que parece estar en una isla.",direccion:"Grand Palace Na Phra Lan Road, Grand Palace Krung Thep Maha Nakhon 10200, Tailandia",tipo:"0"});
ListTurismo.push({nombreLugar:"Monte Fuji",pais:"Japón",descripcion:"El principal símbolo geográfico japonés visible desde Tokio con tiempo despejado. Sus 3.776 metros sobre el nivel del mar le convierten en la máxima cima de Japón, lugar sagrado y centro de entretenimiento. Es un volcán considerado activo pero de bajo riesgo eruptivo. Su última actividad se registró en 1707.",direccion:"Kitayama, Fujinomiya, Prefectura de Shizuoka 418-0112, Japón",tipo:"0"});
ListTurismo.push({nombreLugar:"Castillo de Neuschwanstein",pais:"Alemania",descripcion:"El sitio más fotografiado de Alemania fue mandado a construir en 1869 por la mente enfebrecida del rey Luis II de Baviera, cuando los castillos habían perdido su utilidad estratégica como baluartes de defensa. Es una combinación de torres, naves y patios en armonía con las montañas y lagos de los Alpes Bávaros, concebida por el rey como un castillo medieval idealizado.",direccion:"Neuschwansteinstraße 20, 87645 Schwangau, Baviera, Alemania",tipo:"0"});
ListTurismo.push({nombreLugar:"Burj Khalifa",pais:"Emiratos Arabes Unidos",descripcion:"Los 828 metros de altura de este estilizado rascacielos dubaití le convierten en el edificio más alto del mundo y también el más caro: 20 mil millones de dólares. Fue diseñado por el arquitecto estadounidense, Adrian Smith. Su base está inspirada en la Hymenocallis, una flor de 6 pétalos que crece en Dubái. El ingenioso diseño de la torre que forma parte de un complejo urbano del centro de Dubái, permite soportar los fuertes vientos y tormentas de arena de la ciudad.",direccion:"1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - Emiratos Árabes Unidos",tipo:"0"});
ListTurismo.push({nombreLugar:"Estatua de la Libertad",pais:"Estados Unidos",descripcion:"Estatua metálica, regalo de Francia a Estados Unidos en el primer centenario de la independencia estadounidense, está en la isla de la Libertad, en la desembocadura del río Hudson. El monumento más famoso de Nueva York tiene 93 metros de alto, incluyendo la antorcha. Fue construida en un armazón de acero inoxidable recubierto de cobre, con la llama de la antorcha cubierta con láminas de oro.",direccion:"Nueva York, 10004, EE. UU.",tipo:"0"});
ListTurismo.push({nombreLugar:"Cancún y la Riviera Maya",pais:"México",descripcion:"Las playas de México en el Caribe son de blancas y finas arenas y aguas de un maravilloso color azul turquesa. Las hay de oleaje intenso para surfear y otras de aguas tranquilas para nadar. Frente a los arenales están desplegadas zonas hoteleras con establecimientos para todos los presupuestos y que han hecho del servicio todo incluido una especialidad para el máximo placer y comodidad del visitante. Los sitios arqueológicos de Tulum y Chichén Itzá son dos de los más importantes de la cultura maya.",direccion:"Estado de Quintana Roo en la región sureste de México, en la punta noreste de la Península de Yucatán",tipo:"0"});
ListTurismo.push({nombreLugar:"Coliseo",pais:"Italia",descripcion:"Se estima que el Imperio romano llegó a tener cerca de 60 millones de habitantes durante su apogeo y Roma, su gran metrópoli, era muy ávida de espectáculos. Para entretener a las masas, el emperador Vespasiano ordenó construir en 70 d.C. un gran anfiteatro con capacidad para 65 mil personas: el coliseo.",direccion:"Piazza del Colosseo, 1, 00184 Roma RM, Italia",tipo:"0"});
ListTurismo.push({nombreLugar:"Chichén Itzá",pais:"México",descripcion:"Ciudad arqueológica en el municipio yucateco de Tinum que fue la máxima realización urbanística de los mayas en México. La mayoría de sus edificaciones fue erigida durante el período clásico tardío (800-1100 d. C.). Chichén Itzá fue incluida en 2007 entre las Nuevas Siete Maravillas del Mundo Moderno y es Patrimonio de la Humanidad desde 1988.",direccion:"Yucatán, México",tipo:"0"});
ListTurismo.push({nombreLugar:"Santa Sofía",pais:"Turquía",descripcion:"En su larga historia desde el siglo IV fue catedral ortodoxa, catedral católica y mezquita, hasta su secularización y conversión en museo en 1935. Es famosa por su enorme cúpula, considerada la máxima realización arquitectónica del Imperio bizantino y por más de mil años fue la iglesia más grande del mundo, hasta la construcción de la catedral de Sevilla.",direccion:"Sultan Ahmet, Ayasofya Meydanı No:1, 34122 Fatih/İstanbul, Turquía",tipo:"0"});
ListTurismo.push({nombreLugar:"Ciudad Prohibida",pais:"China",descripcion:"Esta majestuosa ciudad de 980 edificios en un área de 72 hectáreas, fue hogar de 24 emperadores chinos desde su terminación en 1420, hasta que el último emperador, Puyi, abdicó en 1912.Está construida principalmente en madera y mármol y es Patrimonio de la Humanidad. También es el mayor conjunto arquitectónico antiguo de madera que se conserva en el mundo.",direccion:"4 Jingshan Front St, Dongcheng, Beijing Shi, China, 100886",tipo:"0"});
ListTurismo.push({nombreLugar:"Palacio de Buckingham",pais:"Reino Unido",descripcion:"Primeramente un hotel construido en 1703 por el primer duque de Buckingham y Normanby, John Sheffield. El rey Jorge III lo compró en 1762 como residencia privada y luego entró en un largo período de ampliaciones y remodelaciones, hasta que la reina Victoria lo convirtió en la residencia oficial de la monarquía británica. El palacio tiene 777 habitaciones, un lago artificial y los jardines privados más grandes y espléndidos de Londres.",direccion:"Londres SW1A 1AA, Reino Unido",tipo:"0"});
ListTurismo.push({nombreLugar:"Gyeongbokgung",pais:"Corea del Sur",descripcion:"Este hermoso complejo palaciego con más de 600 años de historia fue la sede de la monarquía coreana entre 1395 y 1910, durante el reinado de la dinastía Joseon que finalizó con la anexión de Corea por el Imperio japonés. Fue edificado por Lee Seong-Gye, primer monarca de la dinastía, cuando a finales del siglo XIV decidió trasladar la capital a Seúl. Tiene un área de 502.000 m2 y contaba con aposentos separados para el rey, su corte, la reina y para la madre del rey.",direccion:"161 Sajik-ro, Sejongno, Jongno-gu, Seoul, Corea del Sur",tipo:"0"});
ListTurismo.push({nombreLugar:"Ópera de Sídney",pais:"Australia",descripcion:"Poca gente sabe que si las semicúpulas del edificio de la Ópera de Sídney se unieran, formarían una semiesfera perfecta. Cuando los ingenieros y arquitectos se avocaron a la ejecución del visionario proyecto, uno de los primeros asistidos por computadora, encontraron que la construcción cúpula por cúpula encarecería tanto la obra que la haría irrealizable.",direccion:"Bennelong Point, Sydney NSW 2000, Australia",tipo:"0"});
ListTurismo.push({nombreLugar:"Disneyland Park",pais:"Estados Unidos",descripcion:"Cuando los hermanos Disney inauguraron este parque en 1955 probablemente no tenían idea de la mina de oro representada por un lugar de entretenimientos mágicos tipo cuentos de hadas, comidas, bebidas y recuerdos temáticos, para un público cautivo. Los parques Disney han tenido el acierto de renovar periódicamente sus espectáculos de alta calidad, que aprovechan los recursos tecnológicos sin perder su tradicional perfil familiar.",direccion:"1313 Disneyland Dr, Anaheim, CA 92802, EE. UU.",tipo:"0"});
ListTurismo.push({nombreLugar:"Monte Everest",pais:"Nepal",descripcion:"El “techo del mundo” no para de convocar escaladores deseosos de coronarlo desde que el neozelandés, Sir Edmund Hillary y el sherpa nepalí, Tenzing Norgay, hicieron la primera cumbre el 29 de mayo de 1953. El pico más alto del planeta con su cima a 8.848 metros sobre el nivel del mar, está en la cordillera del Himalaya, en la frontera entre Nepal y el Tíbet (China).",direccion:"Frontera entre el Tíbet y Nepal en el Himalaya. Cordillera Mahalangur en la meseta tibetana de Qing Zang Gaoyuan",tipo:"0"});
ListTurismo.push({nombreLugar:"Petra",pais:"Jordania",descripcion:"Petra es una ciudad arqueológica jordana que los nabateos literalmente excavaron y esculpieron directamente en la piedra. Este antiguo pueblo ismaelita comenzó su monumental trabajo en el siglo VI a.C., legando a la humanidad joyas como Al Khazneh o “El Tesoro”, el Deir o “Monasterio”, el Teatro Romano, tumbas, mosaicos y esculturas, algunas inspiradas en la Antigüedad clásica y otras en animales (leones, águilas, elefantes).",direccion:"Jordania, a medio camino entre el mar muerto y el mar rojo. A 100km al norte del golfo de Aqaba y a 25 km al oeste de la frontera con Israel.",tipo:"0"});
ListTurismo.push({nombreLugar:"Museo del Louvre",pais:"Francia",descripcion:"Es el museo más visitado del mundo con más de 10 millones de visitas al año, personas que van a admirar La Gioconda, así como grandes obras de Giotto, Cimabue, Van Eyck, Mantegna, Durero, Da Vinci, Rafael, Veronese, Van Dyck, Ribera, Rembrandt, Vermeer, Goya, Corot, Delacorix y otras luminarias de la pintura anteriores al Impresionismo.",direccion:"Rue de Rivoli, 75001 Paris, Francia",tipo:"0"});
ListTurismo.push({nombreLugar:"Guerreros de Terracota",pais:"China",descripcion:"Es un monumental conjunto de más de 8.000 figuras en tamaño real de guerreros y caballos de terracota, encontrado casualmente en 1974 cerca de la ciudad china de Xi’an, en el mausoleo de Qin Shi Huang, primer emperador de la China unificada entre 221 y 210 a.C.",direccion:"Lintong District, Xi'an, Shaanxi, China, 710612",tipo:"0"});
ListTurismo.push({nombreLugar:"Borobudur",pais:"Indonesia",descripcion:"Es una estupa (monumento funerario) budista, la más grande del mundo, construida por los reyes de la dinastía Sailendra entre los siglos VIII y IX. Estuvo olvidada tras ser cubierta por la maleza y las cenizas volcánicas, hasta su redescubrimiento en 1814 por los británicos que ocupaban la isla de Java.",direccion:"Jl. Badrawati, Kw. Candi Borobudur, Borobudur, Kec. Borobudur, Magelang, Jawa Tengah, Indonesia",tipo:"0"});
ListTurismo.push({nombreLugar:"Kilimanjaro",pais:"Tanzania",descripcion:"Esta montaña con nieve a 5.892 m.s.n.m. es el mayor pico de África. Fue descubierta para el mundo occidental en 1848 cuando el explorador y misionero alemán, Johannes Rebmann, asombró a sus contemporáneos al anunciar que había encontrado una montaña nevada en África del Este.",direccion:"Noreste de la República de Tanzania, a escasos kilómetros de la frontera con Kenia, a unos 300 km al sur del ecuador",tipo:"0"});
ListTurismo.push({nombreLugar:"Cristo Redentor",pais:"Brasil",descripcion:"Con sus inmensos brazos abiertos, el Cristo Redentor mira hacia el Pan de Azúcar, al puerto y a la ciudad de Río de Janeiro. También llamado el Cristo del Corcovado por el nombre del cerro donde se encuentra, es la escultura Art Decó de mayor tamaño en el mundo.",direccion:"Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ, Brasil",tipo:"0"});
ListTurismo.push({nombreLugar:"Plaza Roja",pais:"Rusia",descripcion:"Es un inmenso espacio urbano de 23.100 m2 en el centro de Moscú, separando la fortaleza del Kremlin del barrio histórico de Kitay-górod.",direccion:"Red Square, Moscow, Rusia, 109012",tipo:"0"});
ListTurismo.push({nombreLugar:"Taj Mahal",pais:"India",descripcion:"Mumtaz Mahal, cuyo nombre significa la “Elegida de Palacio”, fue la cuarta esposa y mujer preferida del emperador mogol, Sha Jahan. Acompañaba al monarca en sus campañas militares, era su principal confidente y lo apoyó en un conflicto contra su propio padre.",direccion:"Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India",tipo:"0"});

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

    // Falta depurar esta funcion
    var bTurismo = document.getElementById("rBusqueda");
    var imagen = "/img/ListaImg/" + ListImgTusimo[i];
    bTurismo.innerHTML = `  <div id="cerrar"> <a href="javascript:cerrar()"><img src="/img/error.png" alt=""></a> </div>
                            <fieldset>
                            <legend><h1>${ListTurismo[i].nombreLugar}</h1></legend>
                            <img src="${imagen}" ></a>
                            <p>Pais: ${ListTurismo[i].pais}</p>
                            <p>Descripcion: ${ListTurismo[i].descripcion}</p>
                            <p>Direccion: ${ListTurismo[i].direccion}</p>
                            </fieldset>`;
}

function buscarTurismo(){
    //Asignando los valores que traen los formularios para realizar la busqueda
    var bNombre = document.getElementById("bnombre").value;
    var bPais = document.getElementById("bpais").value;
    
    //Validando parametros
    if(bNombre != "" && bPais != ""){
        var List = getListTurismo();

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
        //La lista del local storage se encuentra vacia, no se realiza ninguna accion
    } else{
        //Contiene informacion, se agrega a la lista global
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

// Funciones para mostrar  y ocultar la ventana flotante 
function abrir(){
    document.getElementById("rBusqueda").style.display="block";
}

function cerrar(){
    document.getElementById("rBusqueda").style.display="none";
}
 
function vMostrarBusqueda(){
    if (contador == 0){
        // Metodo recursivo para mostrar resultados de busqueda
        var List = getListTurismo();
        var vTurismo = document.getElementById("vent");
        var imagen;
        contador++;
        for(i in List){
            if(List[i].tipo == 0){
                imagen = "/img/ListaImg/" + ListImgTusimo[i];
                vTurismo.innerHTML += `<div class="card">
                                            <img src="${imagen}">
                                            <h4>${List[i].nombreLugar}</h4>
                                            <p>${List[i].pais}</p>
                                            <li onclick="mostrarBusqueda(${i})"><a href="javascript:abrir()">Leer más</a></li>
                                        </div>`;
            }
        }
    }
    
}