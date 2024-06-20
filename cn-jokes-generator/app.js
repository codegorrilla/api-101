document.getElementById('showCat').addEventListener('click', showCategories);

function showCategories(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/categories', true);

    xhr.onload = function(){
        if(this.status === 200){
            let output = '';

            const jokesCat = JSON.parse(this.responseText);

            console.log(jokesCat);

            jokesCat.forEach(function(cat){
                output += `
                    <option>${cat}</option>
                `;
            });

            document.getElementById('categories').innerHTML = output;
        }
    }

    xhr.send();
}

document.getElementById('getjokes').addEventListener('click', loadJokes);

function loadJokes(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

    xhr.onload = function(){
        if(this.status === 200){
            const jokes = JSON.parse(this.responseText);

            console.log(jokes);

            const output = `
                <div>
                    ${jokes.value}
                </div>
            `;

            document.querySelector('.show-jokes').innerHTML = output;
        }
    }

    xhr.send();
}