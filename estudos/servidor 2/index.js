const http = require('http')

const port = 3000

const server = http.createServer((req,res)=>{
    
    res.statusCode = 200
    res.setHeader('Contenty-Type','text/html')
    res.end(
        '<h1>Olá Mundo! Este é meu primeiro server HTML!</h1><p>Meu primeiro paragrafo do server</p>')

})

server.listen(port,()=>{
    console.log(`Servidor esta rodando na porta: ${port}`)
})