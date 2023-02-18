import {Dog} from './Dog.js'
import dogs from './data.js'

let dogsMatch = new Dog(dogs[0])

function getNewMatch() {
    const newMatch = dogs.shift()
    return newMatch ? new Dog(newMatch) : []
}

function render() {
    document.querySelector('.match-display').innerHTML = dogsMatch.getAvatarHtml()
}

document.addEventListener('click', function(e) {
    if (e.target.id === 'icon-cross') {
        dogsMatch = getNewMatch()
        render()
    }
    else if (e.target.id === 'icon-heart') {
        
    }
})
 render()