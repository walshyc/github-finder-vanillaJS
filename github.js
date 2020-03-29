class Github {
    constructor() {
        this.client_id = '8cdad0e7ee70a3fbbd2d'
        this.client_secret = '71af58d67ae0db1b1720e806c1f978db8e0f37a8'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profile = await profileResponse.json()

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repos = await reposResponse.json() 

        return {
            profile,
            repos
        }
    }

  

}