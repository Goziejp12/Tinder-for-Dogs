import dogs from './data.js'

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getAvatarHtml(){
        return `
                <img src="${this.avatar}" alt="avatar" class="avatar">
                `
    }
}

export {Dog}


