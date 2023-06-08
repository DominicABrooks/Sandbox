const http = require('http')
url = `http://api.positionstack.com/v1/forward?access_key=${api_key}&query=Chicago`

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    });

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    });

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()