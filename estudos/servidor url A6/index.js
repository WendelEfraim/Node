const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req,res)=>{

    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
           })        
    } else {
        fs.writeFile('arquivo.txt', name, function(err, data){
            res.writeHead(302, {  
                Location: "/"
            })
            // Para redirecionar com sucesso, você deve usar um código de status como "301"
            //  (Moved Permanently) ou "302" (Found) ou "303" (See Other) ou "307" 
            //  (Temporary Redirect) ou "308" (Permanent Redirect),
            //   dependendo dos requisitos do seu caso.

            return res.end()
        })
    }


})

server.listen(port,()=>{
    console.log(`Servidor esta rodando na porta: ${port}`)
})