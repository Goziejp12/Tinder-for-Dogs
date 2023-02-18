import dogs from './data.js'

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getAvatarHtml(){
        return `
            <div class="avatar" style="background-image:url('${this.avatar}')">
                <p><strong>${this.name}, ${this.age}</strong><br>${this.bio}</p>
            </div>
                `
    }
}

export {Dog}


