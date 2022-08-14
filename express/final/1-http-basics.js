const http = require('http')
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./nav-bar/index.html')
const homeStyles = readFileSync('./nav-bar/app.css')
const homeLogic = readFileSync('./nav-bar/app.js')
const server = http.createServer((req,res) => {
    const url = req.url;
    // home page
    if (url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    } 
    // About Page
    else if (url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About page </h1>')
        res.end()
    }
    // style
    else if (url === '/app.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    // Logic
    else if (url === '/app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    // 404
    else {
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>Not Found </h1>')
    res.end()
    }
    
})

server.listen(5000)