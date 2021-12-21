let formulario = document.querySelector('form')

let consulta = (event) => {
    event.preventDefault();

    let nombre = document.getElementById('propietario').value
    let telefono = document.getElementById('telefono').value
    let direccion = document.getElementById('direccion').value
    let nombreMascota = document.getElementById('nombreMascota').value
    let enfermedad = document.getElementById('enfermedad').value
    let tipo = document.getElementById('tipo').value
    
    let resultado = document.getElementById('resultado')

    if (tipo == 'perro') {
        let perro = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        console.log(perro.datosPropietario())
        resultado.innerHTML = `${perro.datosPropietario()}. <br> ${perro.tipo}`
    } else if (tipo == 'gato') {
        let gato = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        resultado.innerHTML = `${gato.datosPropietario()}. <br> ${gato.tipo}`
    } else {
        let conejo = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        resultado.innerHTML = `${conejo.datosPropietario()}. <br> ${conejo.tipo}`
    }
}
formulario.addEventListener('submit', consulta)

class Propietario {
    constructor(nombre, direccion, telefono){
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
    }
    datosPropietario(){
        return `El nombre del dueño es: ${this.nombre}. El domicilio es:  ${this.direccion}, y el número telefónico de contacto es:☎️ ${this.telefono}`
    }
}

class  Animal extends Propietario{
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono)
        this._tipo = tipo
    }
    get tipo() {
        return `El tipo de animal es un: ${this._tipo} mientras que el nombre de la mascota es:  ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}`
    }
}

class  Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota
        this._enfermedad = enfermedad
    }
    get nombreMascota() {
        return this._nombreMascota
    }
    get enfermedad() {
        return this._enfermedad
    }
    set nombreMascota(nombreMascotaNueva) {
        this._nombreMascota = nombreMascotaNueva
    }
    set enfermedad(enfermedadNueva) {
        this._enfermedad = enfermedadNueva
    }
}