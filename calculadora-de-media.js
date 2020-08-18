const input = require ("readline-sync")

console.log('== Calculadora de médias! ==')

const nota1 = parseFloat (input.question ('qual foi a sua primeira nota?'))
const nota2 = parseFloat (input.question ('qual foi a sua segunda nota?'))
const nota3 = parseFloat (input.question ('qual foi a sua terceira nota?'))
const nota4 = parseFloat (input.question ('qual foi a sua quarta nota?'))
const nota5 = parseFloat (input.question ('qual foi sua quinta nota?'))
const nota6 = parseFloat (input.question ('qual foi a sua sexta nota?'))

const media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6)/6

const resultado = media.toFixed(2)

if (resultado >= 7) {
        console.log (`Sua média foi: ${resultado}. Parabéns, você foi aprovada!`)
    } else if (resultado < 5) {
        console.log (`Sua média foi: ${resultado}. Sinto muito, você foi reprovada.`)
    } else { //if (7> resultado >= 5) {
        console.log (`Sua média foi: ${resultado}. Atenção, você está de recuperação!`)
    }