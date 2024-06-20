const http = new easyHTTP();

//Get Posts asynchronously
// const posts = http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
// });

//Get single post
// const post = http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
// });

// Create data
const data = {
	title: 'Custom post',
	body: 'This is a custom post',
};

//Create post
// const createPost = http.post('https://jsonplaceholder.typicode.com/posts/', data, function(err, response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
// });

// Update post
// const addPost = http.put(
// 	'https://jsonplaceholder.typicode.com/posts/99',
// 	data,
// 	function (err, response) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(response);
// 		}
// 	}
// );

//Delete post
const deletePost = http.delete('https://jsonplaceholder.typicode.com/posts/60', function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
});
