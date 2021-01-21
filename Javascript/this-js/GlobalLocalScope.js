// global scope

this.name = "Felipe"

function sayMyName() {
    // local scope
    console.log(this.name)
}

const obj = {
    name: 'Felipe',
    sayMyName: function () {
        console.log(this.name) // pega do escopo do objeto 
    }
}

console.log(this.name)