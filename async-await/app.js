// async function myFunc(){
//     return 'Hello';

//     const promise = new Promise((resolve, reject) =>{
//         setTimeout(()=> resolve('Hello'), 1000);
//     });

//     const error = false;

//     if(!error){
//         const res = await promise;//Wait till the promise is resolved
//         return res;
//     }else{
//         await Promise.reject(new Error('Something went wrong'));
//     }

    
// }

// //console.log(myFunc());

// myFunc().then(res => console.log(res)).catch(err => console.log(err));

async function getUsers(){
    //await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    //only proceed once its resolved
    const data = await response.json();

    //only proceed once second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));