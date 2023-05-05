let admin = JSON.parse(localStorage.getItem("adidasData"));

// console.log(admin);
let tbody = document.querySelector("#tbody");
// console.log(tbody);

let form = document.getElementById("main-form");

/**
 * thêm sảm phẩm vào admin
//  */
function renderoder() {
  tbody.innerHTML = "";
  for (let i = 0; i < admin.length; i++) {
    console.log(admin[i].img);
    tbody.innerHTML += `
        <tr id="${admin[i].id}">
                <th scope="row">${i + 1}</th>
                <td>${admin[i].name}</td>
                <td><img src="${admin[i].img}" alt=""</td>
                <td><span>${admin[i].price}</span>$</td>
                <td> ${admin[i].quantity} </td>
                <td>
                <button id="${
                  admin[i].id
                }" class="btn btn-success btn-update update">Update</button>
                <button id="${
                  admin[i].id
                }" class="btn btn-danger btn-delete delete">Delete</button>
                </td>
          </tr>
        `;
  }
}
renderoder();

/**
 *
 * submit thêm mới sản phẩm
 */
form.onsubmit = function (e) {
  e.preventDefault();
  let adminSubmit = {
    id: admin.length + 1,
    src1: form.src1.value,
    src2: form.src2.value,
    src3: form.src3.value,
    name: form.name.value,
    price: form.price.value,
    count: 0,
    like: 0,
    quantity: form.quantity.value,
  };
  admin.push(adminSubmit);
  localStorage.setItem("adidasData", JSON.stringify(admin));
  renderoder();
};

/**
 * xóa sản phẩm
 */
tbody.onclick = function (e) {
  renderoder();
};

/**
 *  update sản phẩm
 */

let updateIndex = undefined;

tbody.onclick = function (e) {
  console.log(e.target.classList.contains("delete"));
  if (e.target.classList.contains("delete")) {
    let check = -1;
    let deleteId = e.target.id;
    console.log(deleteId);
    for (let i = 0; i < admin.length; i++) {
      if (deleteId === admin[i].id) {
        check = i;
        // admin.splice(i,1)
      }
    }
    admin.splice(check, 1);
    renderoder();
    localStorage.setItem("data", JSON.stringify(admin));
  }
  if (e.target.classList.contains("update")) {
    // console.log("hello");
    let updateId = e.target.id;
    // console.log(updateId);
    let thay_doi = e.target.parentElement.parentElement;
    let findIndex = -1;
    for (let i = 0; i < admin.length; i++) {
      if (admin[i].id === Number(updateId)) {
        findIndex = i;
      }
    }
    if (findIndex !== -1) {
      updateIndex = findIndex;
      let find = admin[findIndex];
      console.log(find);
      console.log(img);
      thay_doi.innerHTML = `
        <tr id="${find.id}">
                <th scope="row">${updateIndex + 1}</th>
                <td><input class="form-control" type="text"></td>
                <td><img src="${img}" alt=""</td>
                <td><span><input class="form-control" type="text"></span>$</td>
                <td><input class="form-control" type="text">
                </td>
                <td>
                <button id="${
                  find.id
                }" class="btn btn-success btn-update confirm">Confirm</button>
                <button id="${
                  find.id
                }" class="btn btn-danger btn-delete cancel">cancel</button>
                </td>
        </tr>
        `;
    }
  }
  if (e.target.classList.contains("confirm")) {
    let name =
      e.target.parentElement.parentElement.children[1].children[0].value;
    // let img = e.target.parentElement.children[2].children[0].value;
    let price = Number(
      e.target.parentElement.parentElement.children[3].children[0].children[0]
        .value
    );
    let quantity = Number(
      e.target.parentElement.parentElement.children[4].children[0].value
    );
    console.log(quantity);
    admin[updateIndex] = {
      ...admin[updateIndex],
      name: name,
      price: price,
      quantity: quantity,
    };
    localStorage.setItem("admin", JSON.stringify(admin));
    renderoder();
  }
  if (e.target.classList.contains("cancel")) {
    renderoder();
  }
  renderoder();
};
