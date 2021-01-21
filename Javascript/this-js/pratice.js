
/**
 * Essa função recebe o this do contexto do objeto 'SoftwareDeveloper'
 */
function showPeoplesByJob() {
    const peoples = Array.from(arguments);
    return peoples.map(item => {
        console.log('Name: ', item)
        console.log('Experience: ', this.experience)
        this.techs.map(item => {
            console.log('Know techs: ', item)
        })
    })
}


const SoftwareDeveloper = {
    experience: "2 years",
    techs: [
        "React Native",
        "ReactJs",
        "AdonisJs"
    ]
}

showPeoplesByJob.apply(SoftwareDeveloper, ['Camila', 'Leonardo', 'Felipe'])