// context inside a method
// não pega o this global, somente do objeto


this.name = "Felipe"

const dev = {
    name: "Felipe Alves",
    sayMyName: function() {
        console.log(this.name) // Felipe Alves
    }
};

dev.sayMyName() // pega o name do escopo do objeto