class GitHub {
    constructor() {
        this.client_id = 'f923666218b0cc887dee';
        this.client_secret = '13a3283111868e88b78fb35347a90a4f58106588';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return { profile }
    }
}