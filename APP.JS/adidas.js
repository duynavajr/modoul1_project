// let data = [
//   {
//     id:Math.floor(Math.random()*1000000) ,
//     quantity: 1,
//     name: "GIÀY ULTRABOUNCE",
//     price: "2.400.000",
//     img: "./IMG./adidas 1.jpeg",
//   },
//   {
//     id:Math.floor(Math.random()*1000000) ,
//     quantity: 1,
//     name: "GIÀY ĐÁ BÓNG TURF X SPEEDPORTA",
//     price: "3.300.000",
//     img: "./IMG./adidas2.jpeg",
//   },
//   {
//     id:Math.floor(Math.random()*1000000) ,
//     quantity: 1,
//     name: "set quần áo adidas",
//     price: "900.000",
//     img: "./IMG./mizuno img/mizuno3.jpeg",
//   },
//   {
//     id:Math.floor(Math.random()*1000000) ,
//     quantity: 1,
//     name: "Quần áo trẻ em",
//     price: "1.300.000",
//     img: "./IMG./adidas4.webp",
//   },
//   {
//     id:Math.floor(Math.random()*1000000) ,
//     quantity: 1,
//     name: "ADIDAS VIC PRO",
//     price: "4.300.000",
//     img: "./IMG./adidas5.webp",
//   },
//   {
//     id:Math.floor(Math.random()*1000000) ,
//     quantity: 1,
//     name: "GIÀY ĐÁ BÓNG FIRM GROUND ",
//     price: "1.300.000",
//     img: "./IMG./adidas6.webp",
//   },
//   {
//     id:Math.floor(Math.random()*1000000) ,
//     quantity: 1,
//     name: "Giày Đá Bóng Adidas Copa Sense .",
//     price: "3.050.000",
//     img: "./IMG./adidas7.webp",
//   },
//   {
//     id:Math.floor(Math.random()*1000000) ,
//     quantity: 1,
//     name: "ÁO ADIDAS KARAGU",
//     price: "800.000",
//     img: "./IMG./adidas 8.webp",
//   },
//   {
//     id:Math.floor(Math.random()*1000000) ,
//     quantity: 1,
//     name: "GIÀY ĐÁ BÓNG X SPEEDPORTAL MESSI",
//     price: "5.300.000",
//     img: "./IMG./adidas9.webp",
//   },
//   {
//     id:Math.floor(Math.random()*1000000) ,
//     quantity: 1,
//     name: "ADIDAS giày giới hạn",
//     price: "4.100.000",
//     img: "./IMG./adidas10.webp",
//   },
//   {
//     id:Math.floor(Math.random()*1000000) ,
//     quantity: 1,
//     name: "Adidas baby ii",
//     price: "1.400.000",
//     img: "./IMG./adidas11.jpeg",
//   },
//   {
//     id:Math.floor(Math.random()*1000000) ,
//     quantity: 1,
//     name: "Áo Adidas xanh dương",
//     price: "900.000",
//     img: "./IMG./adidas12.webp",
//   },
// ];
// localStorage.setItem("adidasData", JSON.stringify(data));
// console.log(localStorage.getItem("adidasData"));
// let data = JSON.parse(localStorage.getItem("data"));
// let cart = JSON.parse(localStorage.getItem("cart"));
// let resultCart = document.getElementById("result");

let adidasData = JSON.parse(localStorage.getItem("adidasData"));
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let resultCart = document.getElementById("result");
// resultCart.innerHTML=
for (let i = 0; i < cart.length; i++) {
  console.log(cart.length);
}
function renderCartNumber() {
  let sum = 0;
  cart.forEach((element, index) => {
    sum = sum + element.quantity;
  });
  console.log(sum);
  resultCart.innerHTML = sum;
}

renderCartNumber();

let listImgElement = document.getElementById("listImg");
// khai báo hàm và chạy vòng for cho hàm sau đó render dữ liệu về
function renderAdidas(adidasData) {
  listImgElement.innerHTML = "";
  for (let i in adidasData) {
    listImgElement.innerHTML += `<div class="bodyElement">
        <img
          src="${adidasData[i].img}"
          alt=""
        />
        <p>${adidasData[i].name}</p>
        <br />
        <p>Giá :${adidasData[i].price}đ</p>
        <button class="add-btn" id="${adidasData[i].id}">Mua Sản phẩm</button>
      </div>`;
  }
}
renderAdidas(adidasData);
// truy vấn id cart gắn vào 1 biến
let quantity = document.getElementById("cart");
// tạo biến i gán cho bằng 0
let i = 0;
// truy vấn id listImg và gán cho biến bodyElement
let bodyElement = document.getElementById("listImg");
// khai báo một mảng rỗng
let arr = [];
// gắn sự kiện click cho thằng listImgElement và thêm điều kiện cho nó
// sau đó đẩy lên local
listImgElement.onclick = function (e) {
  console.log(e.target.classList.contains("add-btn"));
  if (e.target.classList.contains("add-btn")) {
    let i = findIndex(e.target, adidasData);
    if (i > -1) {
      swal("Đã Thêm Vào Giỏ Hàng", "", "success");

      let clickProduct = adidasData[i];
      let inCart = findIndex(clickProduct, cart);
      if (inCart > -1) {
        cart[inCart].quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCartNumber();
      } else {
        cart.push(clickProduct);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCartNumber();
      }
    }
  }
};
function findIndex(element, array) {
  let findIndex = -1;
  for (let i = 0; i < array.length; i = i + 1) {
    if (+element.id === array[i].id) {
      findIndex = i;
    }
  }
  return findIndex;
}
