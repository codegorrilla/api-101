const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

// function createPost(){
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';

//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         });

//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post 3', body: 'This is post 3'});
// getPosts();

//asynchronously
function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts(){
    setTimeout(function(){
        let output = '';

        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });

        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post 3', body: 'This is post 3'}, getPosts);