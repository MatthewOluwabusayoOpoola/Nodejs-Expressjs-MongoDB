const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname,'./nav-bar/index.html'))
// })

app.all('*', (req,res) => {
    res.status(400).send('resource not found..... check again')
})

app.listen(5000, () => {
    console.log("Server is listening at port 5000.....");
})