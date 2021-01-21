let person = {
    name: 'Felipe',
    age: 0,
    bool: false
}

const responseAge = person.age || 'Something else' // return something else
const responseAge2 = person.age ?? 'Something else' //  return age

person.name = ""
const responseName = person.name || 'Something else' // return something else
const responseName2 = person.name ?? 'Something else' // return name

const responseBool = person.bool || true // return something else
const responseBool2 = person.bool ?? true // return true

console.log(responseAge, responseAge2) 
console.log(responseName, responseName2)
console.log(responseBool, responseBool2)
