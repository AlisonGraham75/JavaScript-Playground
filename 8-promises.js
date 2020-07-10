const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([4,5,6])
        reject('Things went wrong!')
    }, 2000)
})

//'then'runs when things go well.
//'catch' runs when things go wrong
doWorkPromise.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log('Error!', error)
})

//runs the promised method after two seconds.
const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000)
    })
}

add(1,2).then((sum) => {
    console.log(sum)
}).catch((e) => {
    console.log(e)
})


//promise chaining
add(1,1).then((sum) => {
    console.log(sum)
    return add(sum, 4) //add 4 to previous sum and save it in sum2
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})
