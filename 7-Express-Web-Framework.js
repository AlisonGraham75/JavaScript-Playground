/*
**Simple web application to show usage of Express Web Framework
*
*SetUp:
* in console initialize npm :  npm i -y
*	- Creates a package-lock.json file
* in console install express web framework npm module
*	- npm i express@4.16.4 
* Start up the expess web server
*   - node src/app.js
**/
const express = require('express')
const { response } = require('express')

const app = express()

//configure routes

//app.com
//Test Via http://localhost:3000/
app.get('', (req, res) =>{
    res.send('Hello World')  //send something back to the browser
})

//app.com/help
//Test Via http://localhost:3000/help
app.get('/help', (req, res) => {
    res.send('Help Page')  
})
//app.com/about
//Test Via http://localhost:3000/about
app.get('/about', (req, res) => {
    res.send('About Page')  
})

//app.com/weather
//Test Via http://localhost:3000/weather
app.get('/weather', (req, res) => {
    res.send('Weather Report')  
})


//Starts up the server on a specific port.
//3000 is a development port
//Callback runs when the is server up
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})