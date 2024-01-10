// var promise = new Promise(function (resolve, reject) {
//   //fake call API
//   resolve([
//     {
//       id: 1,
//       name: "Javascript",
//     },
//   ]);
// });

// promise
//   .then(function (courses) {
//     console.log(courses);
//   })
//   .catch(function () {
//     console.log("Failed to");
//   })
//   .finally(function () {
//     console.log("Successfully finished");
//   });

// function sleep(ms) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, ms);
//   });
// }

// sleep(1000)
//   .then(function () {
//     console.log(1);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(2);
//     return sleep(1000);
//   });

// var promise1 = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve([1]);
//   }, 2000);
// });

// var promise2 = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve([2, 3]);
//   }, 5000);
// });

// Promise.all([promise1, promise2]).then(function (result) {
//   var result1 = result[0];
//   var result2 = result[1];
//   console.log(result1.concat(result2));
// });

var users = [
  {
    id: 1,
    name: "Nguyễn Đức Dũng",
  },
  {
    id: 2,
    name: "Anh Nam Tính Bẩn",
  },
  {
    id: 3,
    name: "Tân Bẹp Ướt",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Bạn Dũng quá đẹp trai",
  },
  {
    id: 2,
    user_id: 2,
    content: "Anh Nam Sống như cục cứt",
  },
  {
    id: 3,
    user_id: 3,
    content: "Mày im mẹ đi con chó",
  },
];

function getUserByIds(userIds) {
  return new Promise(function (resolve) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    setTimeout(function () {
      resolve(result);
    }, 1000);
  });
}

function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

getComments()
  .then(function (comments) {
    var userIds = comments.map((comment) => {
      return comment.user_id;
    });
    return getUserByIds(userIds).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    console.log(data);
    var commentsBlock = document.getElementById("comment-block");
    var html = "";
    data.comments.map((comment) => {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name} :${comment.content}</li>`;
    });
    commentsBlock.innerHTML = html;
  });

function handleUpdateForm(id) {
  var createBTN = document.querySelector("#create");
  var saveBTN = document.querySelector("#save");
  createBTN.style.display = "block";
  saveBTN.style.display = "none";
}
