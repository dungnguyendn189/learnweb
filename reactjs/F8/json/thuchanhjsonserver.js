var getCommentBlock = document.querySelector("#comment-block");
var apiCourses = "http://localhost:3000/courses";

start();

function start() {
  getCourses(renderCourses);
  handleCreate();
}

function getCourses(callback) {
  fetch(apiCourses)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(callback);
}

function renderCourses(courses) {
  var course = courses.map((e) => {
    return ` <ul data-id="${e.id}">
        <li><h3>${e.name}</h3></li>
        <li><span>${e.description}</span></li>
        </br>
        <button onclick = "deleteCourse('${e.id}')">Xoá</button>
        <button onclick = "handleUpdateForm('${e.id}')">Edit</button>
        </ul>
        `;
  });
  getCommentBlock.innerHTML = course;
}

function handleCreate() {
  var createBtn = document.querySelector("#create");
  var name = document.querySelector('input[name="name"]');
  createBtn.onclick = function () {
    var description = document.querySelector('input[name="description"]');
    var formatData = {
      name: name.value,
      description: description.value,
    };
    postDataFromApi(formatData, function () {});
  };
}

function postDataFromApi(data) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(apiCourses, options)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function deleteCourse(id) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(apiCourses + "/" + `${id}`, options)
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      var getID = document.querySelector(`.${id}`);
      getID.remove();
    });
}

function handleUpdateForm(id) {
  var createBtn = document.querySelector("#create");
  var saveBtn = document.querySelector("#save");
  createBtn.style.display = "none";
  saveBtn.style.display = "block";
  fetch(apiCourses + "/" + `${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var name = document.querySelector('input[name="name"]');
      var description = document.querySelector('input[name="description"]');
      name.value = data.name;
      description.value = data.description;
    });
  saveBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"').value;

    var formatName = {
      name: name,
      description: description,
    };
    updateData(id, formatName, function () {
      getCourses(renderCourses);
      createBtn.style.display = "block";
      createBtn.style.display = "none";
    });
  };
}

function updateData(id, data, callback) {
  var updateAIP = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(apiCourses + "/" + `${id}`, updateAIP)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
