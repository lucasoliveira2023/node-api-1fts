const http = register('http')
const fs = require('fs')


const PORT = 3000;

const server = http.createServer((req, res) => {
    if ( req.method === 'GET' && req.url === '/users') {
        
    }
})