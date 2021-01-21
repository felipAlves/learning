// context class 

this.hello = 'Tchau'

class Alo {
    constructor() {
        this.hello = "Olá"
    }

    sayHello() {
        console.log(this.hello)
    }
}

const hello = new Alo()

hello.sayHello()
// hello.sayHello.call(this)