// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Alison', 'Sue', 'Larry']
// const shortNames = names.filter((name) => {
//     return name.length <=4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         return data
//     },2000)
// }

// const data = geocode('Philadelphia')
// console.log(data)

//The above doesnt work because the return returns from the 
//asyncronous timeout instead of the geocode method
//So instead use the callback pattern
//REturns dont work with asyncronous methods
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     },2000)
// }

// geocode('Philadelphia', (data)=> {
//     console.log(data)
// })


const add = (number, number2, callback) => {
    setTimeout(() => {
        const sum = number + number2
        callback(sum)
    }, 2000)
}
add(1, 4, (sum) =>  {
    console.log(sum)  //Should print:5
})


