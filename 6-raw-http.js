const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=c44bf181e3f9b36c3997ffc12b71f126&query=45,-75&units=f'

const request = http.request(url, (response) => {

    //callback functions

    let data = ''
    
    //get a chunk of the results - fires when data comes in  - doesnt come in all at once. 
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    //fires when response is done
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

//kicks off only when theres an error
request.on('error', (error) => {
    console.log('An error', error)
})

//kick off the request
request.end()