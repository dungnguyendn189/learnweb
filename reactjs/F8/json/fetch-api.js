var postAPI = "https://jsonplaceholder.typicode.com/posts";

fetch(postAPI)
  .then(function (post) {
    return post.json();
  })
  .then(function (post) {
    console.log(post);
  });
