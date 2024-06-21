class Github{
    constructor(){
        this.client_id = 'Ov23li8DtYFZlR8AztdU';
        this.client_secret = '15f4e6fe41a0c1a2aefbb1d4f59f31f701bacab7';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return{
            profileData
        }
    }
}