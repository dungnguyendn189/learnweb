// var postAPI = "https://jsonplaceholder.typicode.com/posts";

// fetch(postAPI)
//   .then(function (post) {
//     return post.json();
//   })
//   .then(function (post) {
//     var htmls = post.map(function (post) {
//       return `<li>
//       <h2>${post.title}</h2>
//       <p>${post.body}</p>
//     </li>`;
//     });
//     var html = htmls.join("");
//     document.getElementById("comment-block").innerHTML = html;
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//json server

// var courseAPI = "http://localhost:3000/courses";

// fetch(courseAPI)
//   .then(function (course) {
//     return course.json();
//   })
//   .then(function (course) {
//     var htmls = course.map(function (course) {
//       return `<li>
//             <h2>${course.name}</h2>
//             <p>${course.description}</p>
//           </li>`;
//     });
//     var html = htmls.join("");
//     document.getElementById("comment-block").innerHTML = html;
//   });

var listCourseBlock = document.querySelector("#comment-block");

var listCourseAPI = "http://localhost:3000/courses";

function start() {
  getCourses(renderCourse);
  handleCreateForm();
}

start();

function getCourses(callback) {
  fetch(listCourseAPI)
    .then(function (respone) {
      return respone.json();
    })
    .then(callback);
}

function renderCourse(course) {
  var htmls = course.map((e) => {
    return `<li><h3>${e.name}</h3></li>
    <li><span>${e.description}</span></li>`;
  });
  listCourseBlock.innerHTML = htmls;
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create");
  createBtn.onclick = function () {
    var nameInput = document.querySelector('input[name="name"]');
    var description = document.querySelector('input[name="description"]');
    var formData = {
      name: nameInput.value,
      description: description.value,
    };
    createCourse(formData, function () {
      getCourses(renderCourse);
    });
  };
}

function createCourse(data) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(listCourseAPI, options)
    .then(function (respone) {
      return respone.json();
    })
    .then(callback);
}
