class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        console.log(user);
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
    <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-primary">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
        </div>
    </div>
</div>
<h3 class="page-heading mb-3">Latest Repos</h3>
<div id="repos"></div>
        `;
    }

    // Clear Html
    clearProfile() {
        this.profile.innerHTML = '<h3 class="page-heading mb-3">Type to Search...</h3>';
    }
    // Clear Alert
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
            // this.profile.innerHTML = ''; 
        }
    }

    // Show alert
    showAlert(message, className){
        // clear any error before showing new error
        this.clearAlert();
        // Create a new div
        const div = document.createElement('div');
        // Add a class to div
        div.className = className;
        // Add a text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.searchContainer');
        // Get Search Box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);
        // Time Out after some secs
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }
}