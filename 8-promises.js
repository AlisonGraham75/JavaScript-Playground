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