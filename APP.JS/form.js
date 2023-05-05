let users = JSON.parse(localStorage.getItem("users"));

let username = document.getElementById("form_username");
let password = document.getElementById("form_password");
let form = document.getElementById("form-login");
console.log(users);
form.onclick = function (e) {
  e.preventDefault();
  if (e.target.classList.contains("btn")) {
    window.location.href = "http://127.0.0.1:5500/webgiay/dkyform.html#";
  }
  if (e.target.classList.contains("form-submit")) {
    for (let i = 0; i < users.length; i++) {
      if (
        username.value == users[i].username &&
        password.value == users[i].password
      ) {
        window.location.href = "http://127.0.0.1:5500/webgiay/index.html";
      } else {
        swal(
          "Tài Khoản Bạn Nhập Không Đúng",
          "Nếu Chưa Có Tài Khoản Hãy Đăng Ký!"
        );
      }
    }
    if (username.value == "admin" &&
      password.value == "admin") {
        window.location.href = "http://127.0.0.1:5500/webgiay/admin./admin.html";

    }
  }
};
