let contraseña = '1234'
let pass
do{
    pass = prompt('ingrese su password 1234')
}while (pass !== contraseña)


let persona = prompt("Ingrese su nombre")
let sexo = prompt("Genero (m) (f)")

const saludar = (persona,sexo) => {
    return sexo === 'm'
    ?`Bienvenido a la clase de Ingles, ${persona} `
    :`Bienvenida a la clase de Ingles, ${persona} `
    
}
alert(saludar(persona, sexo))

let age = parseInt(prompt("Ingresa tu edad para verificar el acceso"),10)

if(age){
    if(age >= 18){
        alert("Access granted")
    }else {
        alert("Access denied")
    }

}else{
    age = parseInt(prompt("Ingresa tu edad nuevamente para verificar el acceso"),10)
}

let number = prompt("Adivina un numero: de 1 al 3");

numero = Math.ceil(Math.random() * 3);

alert(numero);

let ganador = number == numero
    ? "Ganaste"
    : "Perdiste"

    alert(ganador);


alert("!Vamos a practicar ingles!") 

let answer = prompt(`Escoge un nivel: 
                1-Easy  
                2-Intermediate  
                3-Hard`).trim()

switch (answer) {
    case '1':
        alert("Has escogido nivel facil")
        break;
    case '2':
        alert("Has escogido nivel intermedio")
        break;
    case '3':
        alert("Has escogido nivel dificil")
        break;
    default:
        alert("! OPCION INVALIDA ! Ingresa un nivel a evaluar")
        break;
}

let answer1 = prompt('Traduce: Fin de semana').toUpperCase().trim()
let message1 = answer1 === 'WEEKEND'
    ?'!Respuesta correcta!':'Incorrecto, la respuesta es: Weekend'
alert (message1);

let answer2 = prompt("Traduce: Emprendedores").toUpperCase().trim()
let message2 = answer2 === 'ENTREPRENEURS'
    ? '!Respuesta correcta!': 'Incorrecto, la respuesta es: Entrepreneurs'
alert (message2);

let answer3 = prompt('Traduce: Entre dos personas').toUpperCase().trim()
let message3 = answer3 === 'BETWEEN TWO PERSONS'
    ?'!Respuesta correcta!':'Incorrecto, la respuesta es: Between two persons'
alert (message3);

let answer4 = prompt('Traduce: No hay agua').toUpperCase().trim()
let message4 = answer4 === "THERE IS NO WATER"
    ? '!Respuesta correcta!': 'Incorrecto, la respuesta es: There is no water'
alert (message4);

let answer5 = prompt(`Cuando inicias algo es: 
                1-Star  
                2-Start`).trim()

switch (answer5) {
    case '1':
        alert("You failed")
        break;
    case '2':
        alert("Perfect")
        break;
        default:
        alert("! OPCION INVALIDA !")
        break;
}

alert ('!Good job!')
alert ('mañana seguiremos practicando !HAPPY DAY!')

/*let n = 0
for(let i = 1; i <=100; i++){
    if(i % 9 === 0){
        console.log(i)
        n++
    }   
    if( n >= 5 )break

}*/

/*let i = 10
while( i > 0){
    console.log(i)
    i --
}*/



