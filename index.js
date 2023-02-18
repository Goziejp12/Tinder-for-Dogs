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
        this.hasBeenLiked = false
        this.hasBeenSwiped = true
        document.querySelector('.nope-badge').style.display = 'inline-block'
        setTimeout(() => {
            dogsMatch = getNewMatch()
            render()
        }, 1000)
    }
    else if (e.target.id === 'icon-heart') {
        this.hasBeenLiked = true
        this.hasBeenSwiped = false
        document.querySelector('.like-badge').style.display = 'inline-block'
    }
})
 render()