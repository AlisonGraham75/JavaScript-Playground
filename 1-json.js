const fs = require('fs')

 const dataBuffer = fs.readFileSync('1-json.json')
 const dataJSON = dataBuffer.toString()
 const user = JSON.parse(dataJSON)

 user.name = 'Bob'
 user.age = 52

 const newData = JSON.stringify(user)
 fs.writeFileSync('1-json.json', newData)
// console.log(data.title)