'use strict'
// se n usar o 'use strict' o código não respeita-ra o global scope e o local scope, apesar no contexto de objeto 
this.name = 'Felipe'

function sayMyName() {
    console.log(this.name)
}

sayMyName();

// window.name = this.name sem o 'use strict'