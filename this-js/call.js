// function.call(this, args1, arg2)
// call do inglês chamar
// retornar o this do contexto que for enviado

this.name = "Felipe";


// function sayMyName(age) {
//     this.age = age;
//     console.log(this.name, this.age);
// }

function sayMyName() {
    this.age = arguments[0];
    console.log(this.name, this.age);
}

const dev = {
    name: "Felipe Alves"
}

// sayMyName.call(this, 18) // enviou o this do escopo global para função sayMyName
// sayMyName.call(dev, 19) // enviou o this do escopo do objeto dev para a função sayMyName


// function.aply(this, [arg1, arg2])
// retorna o this do contexto que for enviado

sayMyName.apply(this, [18])


// console.log(dev.age)
// console.log(this.age)

// bind = ligar
// retorna a função chamada, porém ligada ao contexto passado no parâmetro
// bound function

const boundSayMyName = sayMyName.bind(this)
boundSayMyName(18)