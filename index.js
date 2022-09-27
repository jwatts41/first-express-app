// Require needed modules
const express = require('express')

// Initailize the app object
const app = express()

//create a homepage
app.get('/', function (req, res) {
    //this get sent to the client
    // (your web browser most likely!)
    res.send('Hello world')
})

//create a second route
app.get('/second', function (req, res) {
    res.send('My Second Page!')
})

// listen for connections
app.listen(3001, function () {
    console.log('I am awake!')
})