var u = document.getElementById("username");
var p1 = document.getElementById("password");
var p2 = document.getElementById("password-repeat");

let form = document.getElementById("form");

let users = [];
form.onclick = function (e) {
  e.preventDefault();
  if (e.target.classList.contains("submit")) {
    if (u.value === "" || p1.value === "" || p2.value === "") {
      e.preventDefault();
      alert(" Bạn Phải Nhập Thông Tin Vào !");
    } else {
      let user = {
        id: Math.floor(Math.random() * 1000000),
        username: u.value,
        password: p1.value,
      };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      window.location.href = "http://127.0.0.1:5500/webgiay/form.html";
    }
  }
  if (e.target.classList.contains("btn-login")) {
    window.location.href = "http://127.0.0.1:5500/webgiay/form.html";
  }
};
