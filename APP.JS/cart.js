// let cart = JSON.parse(localStorage.getItem("data"));

let cart = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(cart);
localStorage.setItem("cart", JSON.stringify(cart));

let giay = document.getElementById("list-giay");

let tong = document.getElementById("sum");
let btn = document.getElementById("buy-sanpham");
let chua = document.getElementById("chua");

function renderAmount() {
  let sum = 0;
  let quantitySum = 0;
  // tinh toan tong so tienfh
  for (const element of cart) {
    // convert price ve dang number
    quantitySum += +element.quantity;
    sum = sum + element.quantity * Number(element.price.replaceAll(".", ""));
  }
  tong.innerHTML = `${sum.toLocaleString()}đ`;
  chua.innerHTML = " ";
  chua.innerHTML = quantitySum;
}
renderAmount();

renderNikeCart(cart);
function renderNikeCart(a) {
  giay.innerHTML = "";
  for (let i in a) {
    giay.innerHTML += `<div class="giay-dep" id="${a[i].id}">
        <div>
        <img src="${a[i].img}" />
      </div>
      <div class="font-giohang">
        <div class="name-sanpham">${a[i].name}</div>
        <div class="gia-sanpham">giá:${a[i].price} đ</div>
        <div>
          <label>Chọn kích thước giày dép:</label>
          <select name="size" class="size-giay-dep">
            <option value="size">size</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
          </select>
        </div>
        <div>
          <label></label>
          <input class="sl-sanpham" type="number" min="0" max="100" value="${a[i].quantity}" />
        </div>
      </div>
      <div style="margin-left: 200px; font-size: 2em">
        <ion-icon name="close-outline" id="${i}" class="delete"></ion-icon>
      </div></div>`;
  }
}
let arr = [];

giay.onclick = function (e) {
  let check = -1;
  // log ra de xem an su kien chua
  if (e.target.classList.contains("delete")) {
    let id = e.target.parentElement.parentElement.id;

    for (let i in cart) {
      if (id == cart[i].id) {
        check = i;
      }
    }
    cart.splice(check, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderNikeCart(cart);
  }
  if (e.target.classList.contains("sl-sanpham")) {
    console.log("Hello");
    let sl = e.target.parentElement.parentElement.children[3].children[1];
    let id = e.target.parentElement.parentElement.parentElement.id;
    let input =
      e.target.parentElement.parentElement.parentElement.children[1].children[3]
        .children[1];

    let updateIndex = -1;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === Number(id)) {
        updateIndex = i;
      }
    }
    if (updateIndex > -1) {
      cart[updateIndex].quantity = Number(input.value);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderNikeCart(cart);
      renderAmount();
    }
  }

};
// let input = document.getElementsByClassName('sl-sanpham')[0]
// console.log(input);
btn.onclick = function (e) {
  if (e.target.classList.contains("btn_pay")) {
    swal({
      title: "Bạn Có Chắc Chắn Mua Hàng Không ?",
      text: "Mua hàng sẽ không được hoàn tiền đâu nha",
      icon: "info",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Cảm Ơn Bạn! Hàng Của Bạn Đã Được Vận Chuyển   !", {
          icon: "success",
        });
        localStorage.removeItem('cart')
        location.reload()
      } else {
        swal("Bạn Đã Huỷ Thanh Toán!");
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
  }
  renderNikeCart(cart);
};
console.log(cart);
// tinh tong so luong hang
