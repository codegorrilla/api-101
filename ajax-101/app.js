document.getElementById('button').addEventListener('click', loadData);

function loadData() {
	//Create an XHR object
	const xhr = new XMLHttpRequest();

	//Open
	xhr.open('GET', 'data.txt', true);

	//console.log('READYSTATE', xhr.readyState);

	//Optional -for spinners/loaders
	// xhr.onprogress = function(){
	//     console.log('READYSTATE', xhr.readyState);
	// }

	// xhr.onload = function(){
	//     if(this.status === 200){
	//         console.log(this.responseText);
	//     }
	// }

	xhr.onreadystatechange = function () {
		console.log('READYSTATE', xhr.readyState);
		if (this.status === 200 && this.readyState === 4) {
			console.log(this.responseText);
		}
	};

	xhr.send();

	//readyState values
	//0: request not initialized
	//1: server connection established
	//2: request received
	//3: processing request
	//4: request finished and response is ready

	//HTTP statuses
	//200: "OK"
	//403: "forbidden"
	//404: "not found"
}

document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer() {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'customer.json', true);

	xhr.onload = function () {
		if (this.status === 200) {
			const customer = JSON.parse(this.responseText);

			const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;

			document.getElementById('customer').innerHTML = output;
		}
	};

	xhr.send();
}

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers() {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'customers.json', true);

	xhr.onload = function () {
		if (this.status === 200) {
			const customers = JSON.parse(this.responseText);

            let output = '';

			customers.forEach(function (customer) {
				output += `
                    <ul>
                        <li>ID: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Company: ${customer.company}</li>
                        <li>Phone: ${customer.phone}</li>
                    </ul>
                `;				
			});

            document.getElementById('customers').innerHTML = output;
		}
	};

	xhr.send();
}
