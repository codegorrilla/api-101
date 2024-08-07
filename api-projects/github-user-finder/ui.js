class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    //display profile and UI
    showProfile(user){
        console.log(user);

        this.profile.innerHTML = `
            <div class="card card-body mb-4">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class="col-md-3">
                        <span class="badge badge-primary">
                            Public Repos: ${user.public_repos}
                        </span>
                        <span class="badge badge-secondary">
                            Public Gists: ${user.public_gists}
                        </span>
                        <span class="badge badge-success">
                            Followers: ${user.followers}
                        </span>
                        <span class="badge badge-info">
                            Following: ${user.following}
                        </span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group">Company: ${user.company}</li>
                            <li class="list-group">Website/Blog: ${user.blog}</li>
                            <li class="list-group">Location: ${user.location}</li>
                            <li class="list-group">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    //showAlert message
    showAlert(message, className){
        //create a div
        const div = document.createElement('div');

        //add classes
        div.className = className;

        //add text
        div.appendChild(document.createTextNode(message));

        //get parent
        const container = document.querySelector('.searchContainer');

        //get search box
        const search = document.querySelector('.search');

        //insert alert
        container.insertBefore(div, search);

        //timeout after 3sec
        setTimeout(()=>{
            this.clearAlert();
        }, 3000)
    }

    //clearAlert message
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

    //clearProfile
    clearProfile(){
        this.profile.innerHTML = '';
    }
}