class botones {
    constructor() {
        this.contraseña = document.getElementById('contraseña')
        this.ojo1 = document.getElementById('ojo1')
        this.ojo2 = document.getElementById('ojo2')
    }
    inicio() {
        this.ojo2.style.display = 'none'
    }

    cambiar() {
        if (this.contraseña.type == 'password') {
            this.contraseña.type = 'text'
            this.ojo2.style.display = 'block'
            this.ojo1.style.display = 'none'
        }
    }

    segundoCambio() {
        if (this.contraseña.type == 'text') {
            this.contraseña.type = 'password'
            this.ojo2.style.display = 'none'
            this.ojo1.style.display = 'block'
        }
    }
}

let boton = new botones()
window.onload = boton.inicio()