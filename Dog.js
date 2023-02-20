import dogs from './data.js'

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getAvatarHtml(){
        return `
            <div style="background-image:url('${this.avatar}')" alt="avatar" class="avatar" id="avatar">
                <p><strong>${this.name}, ${this.age}</strong><br>${this.bio}</p>
                <img src="images/badge-like.png" alt="like badge" class="like-badge badge">
                <img src="images/badge-nope.png" alt="nope badge" class="nope-badge badge">
            </div>
                `
    }
}

export {Dog}


