//map method allows you to work with an array without changing the array itself. 
//Similar to forEach
//  it iterates through it and store current index to a variable like 'city'
const user = {
    name: 'Alison',
    cities:['Fort Dodge', 'Des Moines', 'Chariton', 'Colorado Springs'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());