// context inside a funcion
//  - não pega o this global mas se não estiver no modo estrito, sim

this.name = "Felipe"

function sayMyName() {
    console.log(this.name)
}

sayMyName()