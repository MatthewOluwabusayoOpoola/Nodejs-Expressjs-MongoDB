const express = require('express')
const app = express()

const people = require('./route/people')
const auth = require('./route/auth')

// static assets
app.use(express.static('./methods-public'))
//  parse data form
app.use(express.urlencoded({extended: false}))
// parse.json
app.use(express.json())

app.use('/api/people', people )

app.use('/login', auth)

app.listen(5000, () => {
    console.log("Server is listening at port 5000.....");
})