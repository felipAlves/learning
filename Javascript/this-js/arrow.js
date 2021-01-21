//  this na arrow function
// pega o this global

this.name = 'Felipe'

const age = (age) => {

    this.name = "Jéssica"

    const birthYear = (age) => {
        const year = 2021 - age
        console.log(this.name, year)
    }

    birthYear(age)
}

age(25)
console.log(this.name)