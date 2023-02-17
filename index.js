import {Dog} from './Dog.js'
import dogs from './data.js'

const dogs0 = new Dog(dogs[0])
const dogs1 = new Dog(dogs[1])
const dogs2 = new Dog(dogs[2])

function render() {
    document.querySelector('.match-display').innerHTML = dogs0.getAvatarHtml()
    document.querySelector('.match-display').innerHTML = dogs1.getAvatarHtml()
    document.querySelector('.match-display').innerHTML = dogs2.getAvatarHtml()
}

render()