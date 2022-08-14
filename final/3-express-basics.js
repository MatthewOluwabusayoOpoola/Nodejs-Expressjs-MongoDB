const express = require('express')
const app = express()


app.get('/', (req,res)=>{
res.send('Home Page')
})

app.get('/about', (req,res) => {
    res.send('About Page')
})

app.all('*', (req,res) => {
    res.status(404).send("<h1>resource not found</h1>")
})
app.listen(5000, () => {
    console.log('serve is listening on port 5000')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
