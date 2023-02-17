import dogs from './data.js'

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
}

console.log(new Dog(dogs))