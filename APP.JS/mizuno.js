// let data = [
//   {
//     id: 1,
//     quantity: 1,
//     name: "Mizuno Morelia Neo III Pro AS",
//     price: "3.050.000",
//     img: "./IMG./mizuno img/180-3107e567-21ab-42f9-ba65-cf15f9d9e469.webp",
//   },
//   {
//     id: 2,
//     quantity: 1,
//     name: "Áo thun Mizuno black",
//     price: "600.000",
//     img: "./IMG./mizuno img/mizuno2.jpeg",
//   },
//   {
//     id: 3,
//     quantity: 1,
//     name: "MIZUNO ÁO THU ĐÔNG",
//     price: "1.300.000",
//     img: "./IMG./mizuno img/mizuno3.jpeg",
//   },
//   {
//     id: 4,
//     quantity: 1,
//     name: "Mizuno Morelia Neo Ⅲ Tf Đỏ",
//     price: "3.300.000",
//     img: "./IMG./mizuno img/mizuno4.webp",
//   },
//   {
//     id: 5,
//     quantity: 1,
//     name: "Bộ mizuno trẻ em",
//     price: "900.000",
//     img: "./IMG./mizuno img/mizuno5.jpeg",
//   },
//   {
//     id: 6,
//     quantity: 1,
//     name: "Mizuno Morelia Sala Classic ",
//     price: "2.300.000",
//     img: "./IMG./mizuno img/mizuno6.webp",
//   },
//   {
//     id: 7,
//     quantity: 1,
//     name: "MIZUNO ÁO THU ĐÔNG ĐEN",
//     price: "1.300.000",
//     img: "./IMG./mizuno img/mizuno7.jpeg",
//   },
//   {
//     id: 8,
//     quantity: 1,
//     name: "Mizuno Morelia Neo III Pro AS",
//     price: "3.050.000",
//     img: "./IMG./mizuno img/mizuno8.jpeg",
//   },
//   {
//     id: 9,
//     quantity: 1,
//     name: "MIZUNO ÁO THU ĐÔNG TRẮNG",
//     price: "1.300.000",
//     img: "./IMG./mizuno img/mizuno9.jpeg",
//   },
//   {
//     id: 10,
//     quantity: 1,
//     name: "Mizuno Morelia Neo III Pro AS trắng",
//     price: "3.350.000",
//     img: "./IMG./mizuno img/mizuno10.jpeg",
//   },
//   {
//     id: 11,
//     quantity: 1,
//     name: "Mizuno Mrl Sala Club Q1GB210330 Xanh",
//     price: "2.600.000",
//     img: "./IMG./mizuno img/mizuno11.webp",
//   },
//   {
//     id: 12,
//     quantity: 1,
//     name: "Mizuno Morelia Neo II Xanh Ngọc",
//     price: "2.700.000",
//     img: "./IMG./mizuno img/mizuno12.jpeg",
//   },
// ];
// đẩy dữ liệu lên local
// localStorage.setItem("mizunoData",JSON.stringify(data))
// lấy giữ liệu từ local về
let mizunoData = JSON.parse(localStorage.getItem("mizunoData"));
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let resultCart = document.getElementById("result");
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

function renderMizuno(mizunoData) {
  listImgElement.innerHTML = "";
  for (let i in mizunoData) {
    listImgElement.innerHTML += `<div class="bodyElement">
        <img
          src="${mizunoData[i].img}"
          alt=""
        />
        <p>${mizunoData[i].name}</p>
        <br />
        <p>Giá :${mizunoData[i].price}đ</p>
        <button class="add-btn" id="${mizunoData[i].id}">Mua Sản phẩm</button>
      </div>`;
  }
}
renderMizuno(mizunoData);
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
    let i = findIndex(e.target, mizunoData);
    if (i > -1) {
      swal("Đã Thêm Vào Giỏ Hàng", "", "success");
      let clickProduct = mizunoData[i];
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
