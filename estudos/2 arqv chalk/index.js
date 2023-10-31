//instalar o chalk versao 4.1.2
const chalk = require('chalk')

const nota = 8  

if(nota >= 7) {
    console.log(chalk.bgGreen.bold("Parabens! Você está Aprovado!"))
} else{
    console.log(chalk.bgRed.bold("Você precisa fazer a prova de recuperação"))
}