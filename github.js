class Github {
    constructor() {
        this.client_id = '8cdad0e7ee70a3fbbd2d'
        this.client_secret = '71af58d67ae0db1b1720e806c1f978db8e0f37a8'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json()

        return {
            profile
        }
    }
}