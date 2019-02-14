const searchUser = document.getElementById('searchUser');

// Initialize Github class
const gitHub = new GitHub();
// Initialize UI class
const ui = new UI();

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if (userText!== '') {
        // console.log(userText);
        // Make HTTP Call
        gitHub.getUser(userText)
        .then(data => {
            // console.log(data);
            if (data.profile.message === 'Not Found') {
                // Show Alert 
                ui.showAlert('User Not Found', 'alert alert-danger');
            } else {
                // Show profile
                ui.showProfile(data.profile);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    } else {
        // clear fetched data of profile
        ui.clearProfile();
    }
});