const user = {
    adress: {
        street: 'Jovina Martins'
    }
}

// let street = user && user.adress && user.adress.street;
let street = user.adress?.street

console.log(street)