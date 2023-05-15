//Codigo JS ligar una variable a un boton con el ID en html
let vidasJugador = 3
let vidasEnemigo = 3
let empates = 0
let victorias = 0
let derrotas = 0
let AtaquesJugador
let batalla
let mokepones =[]
let opcionDeMokepones


const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const sectionSelecionar_ataque = document.getElementById("Selecionar_ataque")
const sectionMensajes = document.getElementById("Mensajes")
const sectionhistorico = document.getElementById("historico")
const sectionmascotasSelecion = document.getElementById("mascotasSelecion")
const sectionReiniciar = document.getElementById("Reiniciar")
const BotonMascotaJugador = document.getElementById("boton-mascota")
const BotonFuego = document.getElementById("Fuego")
const BotonAgua = document.getElementById("Agua")
const BotonTierra = document.getElementById("Tierra")
const BotonReiniciar = document.getElementById("Reiniciar")



class Mokepon {
    constructor(nombre, foto, vida, tipo) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.tipo = tipo
        this.ataques = []
    }
}
let hipodoge = new Mokepon ("Hipodoge", "./assets/Hipodoge.png","5","💧")
let capipepo = new Mokepon ("Capipepo", "./assets/Capipepo.png","5","🪨")
let ratigueya = new Mokepon ("Ratigueya", "./assets/Ratigueya.png","5","🔥")
let langostelvis = new Mokepon ("Langostelvis", "./assets/Langostelvis.png","5","🔥 💧")
let tucapalma = new Mokepon ("Tucapalma", "./assets/Tucapalma.png","5","💧 🪨")
let pydos = new Mokepon ("Pydos", "./assets/Pydos.png","5","🔥 🪨")

function IniciarJuego(){
 
    sectionSelecionar_ataque.style.display = "none"
    sectionMensajes.style.display = "none"
    sectionhistorico.style.display = "none"
    sectionmascotasSelecion.style.display = "none"
    sectionReiniciar.style.display = "none"
    BotonMascotaJugador.addEventListener("click",SelecionarMascotaJugador)
    BotonFuego.addEventListener("click",SelecionFuego)
    BotonAgua.addEventListener("click",SelecionAgua)
    BotonTierra.addEventListener("click",SelecionTierra)
    BotonReiniciar.addEventListener("click",ReiniciarJuego)


   mokepones.forEach((Mokepon) => {
           opcionDeMokepones = `
                <input type="radio" name="mascota" id=${Mokepon.nombre} value=${Mokepon.nombre}>
                <label class="tarjetamokepon" for=${Mokepon.nombre}>${Mokepon.nombre} ${Mokepon.tipo}
                    <img src=${Mokepon.foto} alt=${Mokepon.nombre}>   
                </label>
           `   
       contenedorTarjetas.innerHTML += opcionDeMokepones

       })
       
}

hipodoge.ataques.push(
    { nombre: "Agua💧", id: "Agua"},
    { nombre: "Agua💧", id: "Agua"},
    { nombre: "Agua💧", id: "Agua"},
    { nombre: "Fuego 🔥", id: "Fuego"},
    { nombre: "Tierra 🪨", id: "Tierra"},
)
capipepo.ataques.push(
    { nombre: "Tierra 🪨", id: "Tierra"},
    { nombre: "Tierra 🪨", id: "Tierra"},
    { nombre: "Tierra 🪨", id: "Tierra"},
    { nombre: "Fuego 🔥", id: "Fuego"},
    { nombre: "Agua💧", id: "Agua"},
)
ratigueya.ataques.push(
    { nombre: "Fuego 🔥", id: "Fuego"},
    { nombre: "Fuego 🔥", id: "Fuego"},
    { nombre: "Fuego 🔥", id: "Fuego"},
    { nombre: "Agua💧", id: "Agua"},
    { nombre: "Tierra 🪨", id: "Tierra"},
)
langostelvis.ataques.push(
    { nombre: "Agua💧", id: "Agua"},
    { nombre: "Agua💧", id: "Agua"},
    { nombre: "Agua💧", id: "Agua"},
    { nombre: "Fuego 🔥", id: "Fuego"},
    { nombre: "Tierra 🪨", id: "Tierra"},
)
tucapalma.ataques.push(
    { nombre: "Agua💧", id: "Agua"},
    { nombre: "Agua💧", id: "Agua"},
    { nombre: "Agua💧", id: "Agua"},
    { nombre: "Fuego 🔥", id: "Fuego"},
    { nombre: "Tierra 🪨", id: "Tierra"},
)
pydos.ataques.push(
    { nombre: "Agua💧", id: "Agua"},
    { nombre: "Agua💧", id: "Agua"},
    { nombre: "Agua💧", id: "Agua"},
    { nombre: "Fuego 🔥", id: "Fuego"},
    { nombre: "Tierra 🪨", id: "Tierra"},
)

mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos)
console.log(mokepones)


//Funciones
function aleatorio (min, max){
    return Math.floor(Math.random()* (max - min + 1) + min)
}

function obtenerMascotaEnemigo() {
    let numeroAleatorio = aleatorio(0, mokepones.length-1)
    MascotaEnemigo = mokepones[numeroAleatorio].nombre
    return MascotaEnemigo
}

function SelecionarMascotaJugador(){
    
    let Hipodogechek=document.getElementById("Hipodoge")
    let Capipepochek=document.getElementById("Capipepo")
    let Ratigueyachek=document.getElementById("Ratigueya")
    let Langostelvischek=document.getElementById("Langostelvis")
    let Tucapalmachek=document.getElementById("Tucapalma")
    let Pydoschek=document.getElementById("Pydos")
    

    let MascotaEnemigo = obtenerMascotaEnemigo()

    sectionSelecionar_ataque.style.display = "flex"
    sectionMensajes.style.display = "block"
    sectionhistorico.style.display = "block"
    sectionmascotasSelecion.style.display = "block"
    sectionReiniciar.style.display = "block"
    
    if (Hipodogechek.checked){
        MascotaJugador = "Hipodoge"
        AtaquesDisponiblesJugador = "Agua💧"
    } else if (Capipepochek.checked){
        MascotaJugador = "Capipepo"
        AtaquesDisponiblesJugador = "Tierra 🪨"
    } else if (Ratigueyachek.checked){
        MascotaJugador = "Ratigueya"
        AtaquesDisponiblesJugador = "Fuego 🔥"
    } else if (Langostelvischek.checked){
        MascotaJugador = "Langostelvis"
        AtaquesDisponiblesJugador = "Agua💧 y Fuego🔥"
    } else if (Tucapalmachek.checked){
        MascotaJugador = "Tucapalma"
        AtaquesDisponiblesJugador = "Agua 💧 y Tierra 🪨"
    } else if(Pydoschek.checked){
        MascotaJugador = "Pydos"
        AtaquesDisponiblesJugador = "Tierra 🪨 y Fuego 🔥"
    }  else {
        alert("Debes selecionar una mascota")
        location.reload()
    }

    var seleccionarMascota = document.getElementById("Selecionar_Mascota");
    seleccionarMascota.style.display = "none";
    
    if (MascotaEnemigo == "Hipodoge") {
        AtaquesDisponiblesEnemigo = "Agua💧";
      } else if (MascotaEnemigo == "Capipepo") {
        AtaquesDisponiblesEnemigo = "Tierra 🪨";
      } else if (MascotaEnemigo == "Ratigueya") {
        AtaquesDisponiblesEnemigo = "Fuego 🔥";
      } else if (MascotaEnemigo == "Langostelvis") {
        AtaquesDisponiblesEnemigo = "Agua💧 y Fuego🔥";
      } else if (MascotaEnemigo == "Tucapalma") {
        AtaquesDisponiblesEnemigo = "Agua 💧 y Tierra 🪨";
      } else if (MascotaEnemigo == "Pydos") {
        AtaquesDisponiblesEnemigo = "Tierra 🪨 y Fuego 🔥";
      }
       
    //Crear URL de la imagen de la mascota

    MascotaJugadorImg = "./assets/" + MascotaJugador + ".png"
    MascotaEnemigoImg = "./assets/" + MascotaEnemigo + ".png"
    
    //Cambiar información en html
    //ingresar datos del nombre de cada mascota
    document.getElementById("MascotaJugador").innerHTML=MascotaJugador
    document.getElementById("MascotaJugador2").innerHTML=MascotaJugador
    document.getElementById("MascotaEnemigo").innerHTML=MascotaEnemigo
    document.getElementById("MascotaEnemigo2").innerHTML=MascotaEnemigo
    document.getElementById("MascotaEnemigo2").innerHTML=MascotaEnemigo

    //ingresar datos del nombre de ataques disponibles por mascota
    document.getElementById("AtaquesDisponiblesJugador").innerHTML=AtaquesDisponiblesJugador
    document.getElementById("AtaquesDisponiblesEnemigo").innerHTML=AtaquesDisponiblesEnemigo
    
    //ingresar URL de la imagen de la mascota
    document.getElementById("MascotaJugadorImg").setAttribute("src", MascotaJugadorImg)
    document.getElementById("MascotaEnemigoImg").setAttribute("src", MascotaEnemigoImg)


    return MascotaJugador
} 

function ataquePC() {
    let ataqueEnemigo
    let MascotaEnemigo = document.getElementById("MascotaEnemigo").textContent

        if (MascotaEnemigo=="Hipodoge"){
            ataqueEnemigo = "Agua 💧"
        } else if (MascotaEnemigo=="Capipepo"){
            ataqueEnemigo = "Tierra 🪨"
        } else if (MascotaEnemigo=="Ratigueya"){
            ataqueEnemigo = "Fuego 🔥"
        }else if (MascotaEnemigo=="Langostelvis"){
            let numeroAleatorio1 = aleatorio(1,2)
            if (numeroAleatorio1 === 1) {
                ataqueEnemigo = "Fuego 🔥"
            } else if (numeroAleatorio1 === 2) {
                ataqueEnemigo = "Agua 💧"
            } 
        }else if (MascotaEnemigo=="Tucapalma"){
            let numeroAleatorio2 = aleatorio(1,2)
            if (numeroAleatorio2 === 1) {
                ataqueEnemigo = "Agua 💧"
            } else if (numeroAleatorio2 === 2) {
                ataqueEnemigo = "Tierra 🪨"
            }
        }else if  (MascotaEnemigo=="Pydos"){
            let numeroAleatorio2 = aleatorio(1,2)
            if (numeroAleatorio2 === 1) {
                ataqueEnemigo = "Fuego 🔥"
            } else if (numeroAleatorio2 === 2) {
                ataqueEnemigo = "Tierra 🪨"
            }
        } else alert("Error")
    return ataqueEnemigo
}


function SelecionFuego(){
    let ataqueEnemigo = ataquePC()
    let ataqueJugador = "Fuego 🔥"
    if (vidasJugador !== 0 && vidasEnemigo !== 0){
        if (MascotaJugador == "Ratigueya" || MascotaJugador == "Langostelvis" || MascotaJugador == "Pydos"){
            if (ataqueEnemigo=="Fuego 🔥") {
                batalla = "Empate"
                empates = empates + 1
            } else if(ataqueEnemigo=="Agua 💧"){
                batalla = "Perdiste"
                vidasJugador = vidasJugador - 1
                derrotas = derrotas + 1 
            } else if(ataqueEnemigo=="Tierra 🪨"){
                batalla = "Ganaste"
                vidasEnemigo = vidasEnemigo - 1 
                victorias = victorias + 1 
            }
       
            document.getElementById("vidasJugador").innerHTML=vidasJugador
            document.getElementById("vidasEnemigo").innerHTML=vidasEnemigo
            document.getElementById("ataqueJugador1").innerHTML=ataqueJugador
            document.getElementById("ataqueEnemigo1").innerHTML=ataqueEnemigo
            document.getElementById("batalla").innerHTML=batalla
            document.getElementById("empates").innerHTML=empates
            document.getElementById("victorias").innerHTML=victorias
            document.getElementById("derrotas").innerHTML=derrotas
            
            let parrafo = document.createElement("p")
            let sectionMensajes = document.getElementById("historico")
            parrafo.innerHTML = ataqueJugador + " VS " + ataqueEnemigo + " " + batalla
            sectionMensajes.appendChild(parrafo)

            ataqueJugadorImg = "./assets/" + ataqueJugador + ".png"
            document.getElementById("ataqueJugadorImg").setAttribute("src", ataqueJugadorImg)

            ataqueEnemigoImg = "./assets/" + ataqueEnemigo + ".png"
            document.getElementById("ataqueEnemigoImg").setAttribute("src", ataqueEnemigoImg)

            }else alert("Esta mascota no es de tipo "+ ataqueJugador) 
    } else if (vidasJugador !== 0) {
            alert ("Tu enemigo se quedo sin vidas, el combate no puede seguir")
    } else if (vidasEnemigo !== 0) {
            alert ("Te quedaste sin vidas, el combate no puede seguir")
    }
    
}

function SelecionAgua(){
    let ataqueEnemigo = ataquePC()
    let ataqueJugador = "Agua 💧"
    if (vidasJugador !== 0 && vidasEnemigo !== 0){
        if (MascotaJugador == "Hipodoge" || MascotaJugador == "Langostelvis" || MascotaJugador == "Tucapalma"){
            if (ataqueEnemigo=="Agua 💧") {
                batalla = "Empate"
                empates = empates + 1
            } else if(ataqueEnemigo=="Tierra 🪨"){
                batalla = "Perdiste"
                vidasJugador = vidasJugador - 1  
                derrotas = derrotas + 1 
            } else if(ataqueEnemigo=="Fuego 🔥"){
                batalla = "Ganaste"
                vidasEnemigo = vidasEnemigo - 1  
                victorias = victorias + 1 
            }
            document.getElementById("vidasJugador").innerHTML=vidasJugador
            document.getElementById("vidasEnemigo").innerHTML=vidasEnemigo
            document.getElementById("ataqueJugador1").innerHTML=ataqueJugador
            document.getElementById("ataqueEnemigo1").innerHTML=ataqueEnemigo
            document.getElementById("batalla").innerHTML=batalla
            document.getElementById("empates").innerHTML=empates
            document.getElementById("victorias").innerHTML=victorias
            document.getElementById("derrotas").innerHTML=derrotas

            let parrafo = document.createElement("p")
            let sectionMensajes = document.getElementById("historico")
            parrafo.innerHTML = ataqueJugador + " VS " + ataqueEnemigo + " " + batalla
            sectionMensajes.appendChild(parrafo)

            ataqueJugadorImg = "./assets/" + ataqueJugador + ".png"
            document.getElementById("ataqueJugadorImg").setAttribute("src", ataqueJugadorImg)

            ataqueEnemigoImg = "./assets/" + ataqueEnemigo + ".png"
            document.getElementById("ataqueEnemigoImg").setAttribute("src", ataqueEnemigoImg)

            }else alert("Esta mascota no es de tipo "+ ataqueJugador) 
    } else if (vidasJugador !== 0) {
        alert ("Tu enemigo se quedo sin vidas, el combate no puede seguir")
    } else if (vidasEnemigo !== 0) {
        alert ("Te quedaste sin vidas, el combate no puede seguir")
    }
}

function SelecionTierra(){
    let ataqueEnemigo = ataquePC()
    let ataqueJugador = "Tierra 🪨"
    if (vidasJugador !== 0 && vidasEnemigo !== 0) {
        if (MascotaJugador == "Capipepo" || MascotaJugador == "Tucapalma" || MascotaJugador == "Pydos"){
            if (ataqueEnemigo=="Tierra 🪨") {
                batalla = "Empate"
                empates = empates + 1
            } else if(ataqueEnemigo=="Fuego 🔥"){
                batalla = "Perdiste"
                vidasJugador = vidasJugador - 1  
                derrotas = derrotas + 1 
            } else if(ataqueEnemigo=="Agua 💧"){
                batalla = "Ganaste"
                vidasEnemigo = vidasEnemigo - 1  
                victorias = victorias + 1 
            }

            document.getElementById("vidasJugador").innerHTML=vidasJugador
            document.getElementById("vidasEnemigo").innerHTML=vidasEnemigo
            document.getElementById("ataqueJugador1").innerHTML=ataqueJugador
            document.getElementById("ataqueEnemigo1").innerHTML=ataqueEnemigo
            document.getElementById("batalla").innerHTML=batalla
            document.getElementById("empates").innerHTML=empates
            document.getElementById("victorias").innerHTML=victorias
            document.getElementById("derrotas").innerHTML=derrotas

            let parrafo = document.createElement("p")
            let sectionMensajes = document.getElementById("historico")
            parrafo.innerHTML = ataqueJugador + " VS " + ataqueEnemigo + " " + batalla
            sectionMensajes.appendChild(parrafo)

            ataqueJugadorImg = "./assets/" + ataqueJugador + ".png"
            document.getElementById("ataqueJugadorImg").setAttribute("src", ataqueJugadorImg)

            ataqueEnemigoImg = "./assets/" + ataqueEnemigo + ".png"
            document.getElementById("ataqueEnemigoImg").setAttribute("src", ataqueEnemigoImg)
                     
            }else alert("Esta mascota no es de tipo "+ ataqueJugador) 
    } else if (vidasJugador !== 0) {
        alert ("Tu enemigo se quedo sin vidas, el combate no puede seguir")
    } else if (vidasEnemigo !== 0) {
        alert ("Te quedaste sin vidas, el combate no puede seguir")
    }
}


function ReiniciarJuego(){
    location.reload()
}

window.addEventListener("load", IniciarJuego)


