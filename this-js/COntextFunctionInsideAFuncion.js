//  context function inside a function
// não pega o this global

this.name = 'Felipe'

function age(age) {

    this.name = 'Felipe'

    function birthYear(age) {
        this.name = 'Jonathan'

        const year = 2021 - age
        console.log(this.name, year)
    }

    birthYear(age)
    console.log(this.name) // a subfunção altera o this da função pai 
}

age.call(this, 25)