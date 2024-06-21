document.getElementById('btn1').addEventListener('click', getText);
document.getElementById('btn2').addEventListener('click', getJson);
document.getElementById('btn3').addEventListener('click', getExternal);

//Get text
function getText(){
    fetch('test.txt').then(res => res.text()).then(data => {document.getElementById('output').innerHTML = data}).catch(err => console.log(err));
}

//Get JSON
function getJson(){
    fetch('posts.json').then(res => res.json()).then(posts =>{
        let output = '';

        posts.forEach(post => {
            output += `
                <li>${post.body}</li>
            `;
        });

        document.getElementById('output').innerHTML = output;
    }).catch(err => console.log(err));
}

//Get external data from an API
function getExternal(){
    fetch('https://api.github.com/users').then(res => res.json()).then(users => {
        let output = '';

        users.forEach(user =>{
            output += `
                <li>${user.login}</li>
            `;
        });

        document.getElementById('output').innerHTML = output;
    }).catch(err => console.log(err));
}