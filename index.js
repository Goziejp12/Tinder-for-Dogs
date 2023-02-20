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

document.addEventListener('click', e => {
    if (e.target.id === 'icon-cross') {
        document.querySelector('.nope-badge').style.display = 'inline-block'
        document.querySelector('.like-badge').style.display = 'none'
        setTimeout(() => {
            dogsMatch = getNewMatch()
            render()
        }, 500)
    }
    else if (e.target.id === 'icon-heart') {
        document.querySelector('.like-badge').style.display = 'inline-block'
        document.querySelector('.nope-badge').style.display = 'none'
        setTimeout(() => {
            dogsMatch = getNewMatch()
            render()
        }, 500)
    }
})

document.addEventListener('swiped', () => {
    dogsMatch = getNewMatch()
    render()
})
 render()