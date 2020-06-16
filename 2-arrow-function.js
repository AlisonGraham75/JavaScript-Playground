// const square = function(x) {
//     return x * x
// }
 
// Arrow function - does same as above
// const square = (x) => {
//     return x * x
// }

//Arrow funtion - does same as above
// const square = (x) => x * x

// console.log(square(3))

//Have to remove the function keyword and colon
//so that can use the this binding.
//Arrow keys do not have access to the this binding
const event = {
    name: 'Birthday Party',
    guestList: ['Alison', 'Luke', 'Sarah'],
    printGuestList() {
        console.log('Guest List for ' + this.name)
        this.guestList.forEach( (guest)=>{
            console.log(guest + ' is attending '+ this.name)
        })
        
    }
}

event.printGuestList()