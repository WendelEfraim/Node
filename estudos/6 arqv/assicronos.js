const fs= require('fs')

console.log('inicio')

fs.writeFile('assicronos,txt', 'oi', function(err){
    setTimeout(function(){
        console.log('Arquivo criado com sucesso!')   //o arquivo assicrono 
    },5000)                                        //vc pode realizar uma function para
})                                                 //determinar um tempo ou algo a mais
console.log('Fim')                                 //adicionando o writeFile
