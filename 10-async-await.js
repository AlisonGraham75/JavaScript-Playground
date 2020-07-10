
//runs the promised method after two seconds.
const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a<0 || b<0) {
                return reject('Numbers must be non-negative')
            }
            resolve(a+b)
        }, 2000)
    })
}

//Async functions return a promise 
const doWork = async () => {
    // throw new Error('Something went wrong')
    // return 'Alison'             //Returns 'Promise {  'Alison' }
    const sum = await add(1, 99) //syntax advantage using await as opposed to traditional promise then/catch
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, -3)
    return sum3
}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})

