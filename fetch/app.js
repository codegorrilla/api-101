document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

//Get data from a text file
function getText() {
	fetch('test.txt')
		.then(function (response) {
			return response.text();
			//console.log(response.text());
		})
		.then(function (data) {
			console.log(data);
			document.getElementById('output').innerHTML = data;
		})
		.catch(function (err) {
			console.log(err);
		});
}

//Get local JSON data
function getJSON() {
	fetch('posts.json')
		.then(function (response) {
			return response.json();
			//console.log(response.text());
		})
		.then(function (data) {
			console.log(data);
			let output = '';

			data.forEach(function (post) {
				output += `<li>${post.title}</li>`;
			});
			document.getElementById('output').innerHTML = output;
		})
		.catch(function (err) {
			console.log(err);
		});
}

//Get from external API
function getExternal() {
	fetch('https://api.github.com/users')
		.then(function (response) {
			return response.json();
		})
		.then(function (users) {
			console.log(users);
			let output = '';

			users.forEach(function (user) {
				output += `
                <li>${user.id}</li>
                <li>${user.login}</li>
                <li>${user.html_url}</li>
                `;
			});
			document.getElementById('output').innerHTML = output;
		})
		.catch(function (err) {
			console.log(err);
		});
}
