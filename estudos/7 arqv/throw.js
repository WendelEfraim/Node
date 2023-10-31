const x = 10

if(!Number.isInteger(x)){
    throw new Error('O valor de X nao é um numero inteiro.')
}
console.log('Continua...')