const url = require('url')
const address = 'https://www.meusite.com.br/catalogo?produtos=cadeira'
const parserdUrl = new url.URL(address)

console.log(parserdUrl.host)
console.log(parserdUrl.pathname)
console.log(parserdUrl.search)
console.log(parserdUrl.searchParams)
console.log(parserdUrl.searchParams.get('produtos'))