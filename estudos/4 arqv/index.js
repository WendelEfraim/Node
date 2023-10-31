const inquirer = require("inquirer")
const chalk = require('chalk')

inquirer.prompt([{
    name: 'p1',
    message: 'Qual a primeira nota? ',
},
{
    name: 'p2',
    message: 'Qual a segonda nota?',
},
]).then((answers) => {
    console.log(answers)
    const media = (parseInt(answers.p1)+parseInt(answers.p2)) / 2

    let nota = media

    if(nota >= 7) {
        console.log(chalk.green.bold(`Sua nota foi ${nota} portanto`,"parabens! Você está Aprovado!"))
    } else{
        console.log(chalk.red.bold(`Sua nota foi ${nota} portanto`, "pocê precisa fazer a prova de recuperação"))
    }

})
.catch(err => console.log(err))