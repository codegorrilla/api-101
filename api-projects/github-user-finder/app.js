//init Github
const github = new Github;

//init UI
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e)=>{
    //Get input text
    const userText = e.target.value;

    if(userText !== ''){
        //console.log(userText);

        //Make an HTTP call
        github.getUser(userText).then(data => {
            if(data.profileData.message === 'Not found'){
                //Show alert
            }else{
                //Show profile
                ui.showProfile(data.profileData);
            }
        })
    }else{
        //Clear profile
    }
})