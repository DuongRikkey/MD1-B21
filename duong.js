// const DB = [{
//     id: 1,
//     content: "DUONG",
//     status: true,


// }, {
//     id: 2,
//     content: "Tai",
//     status: true,


// }, {
//     id: 3,
//     content: "THANH",
//     status: false,


// }, {
//     id: 4,
//     content: "DUy",
//     status: false,


// },];


const submit = document.getElementById("submit-todo")
const input = document.getElementById("input-todo")
const list = document.getElementById("list-todo")
// localStorage.setItem("list-product", JSON.stringify(DB));


submit.onclick = function () {
    const listproduct = JSON.parse(localStorage.getItem("list-product")) || []
    const content1 = input.value.trim();
    if (!content1) {
        alert("Mời bạn tôi nhập lại");
        return
    }
    let vitri = listproduct.findIndex(element => element.content.toLowerCase() === content1.toLowerCase())
    if (vitri !== -1) {
        alert("Trùng rồi hé")
        return;
    }
    let id = 1;
    if (listproduct.length > 0) {
        id = listproduct[listproduct.length - 1].id + 1;

    }
    const overview = {
        id: id,
        content: content1,
        status: false,

    }
    listproduct.push(overview);
    localStorage.setItem("list-product", JSON.stringify(listproduct))
    render()
}
function render() {
    const listproduct = JSON.parse(localStorage.getItem("list-product")) || []
    let stringHTMl = ""
    for (i = 0; i < listproduct.length; i++) {
        stringHTMl +=
            `<li class="${listproduct[i].status ? "red" : "xanh"}" onclick="doivitri(${listproduct[i].id})">
      <span>${listproduct[i].content}</span>
      <button onclick="xoavitri(${listproduct[i].id})">Xóa</button>
    </li>`

    } list.innerHTML = stringHTMl
}
render()


function doivitri(idcandoi) {
    const listproduct = JSON.parse(localStorage.getItem("list-product")) || [];
    let vitricandoi = listproduct.findIndex(function (element) { return element.id === idcandoi })
    listproduct[vitricandoi].status = !listproduct[vitricandoi].status
    localStorage.setItem("list-product", JSON.stringify(listproduct))
    render()


}
function xoavitri(idxoa) {
    const listproduct = JSON.parse(localStorage.getItem("list-product")) || [];
    let vitrixoa = listproduct.findIndex(function (element) { return element.id === idxoa });
    listproduct.splice(vitrixoa, 1);
    localStorage.setItem("list-product", JSON.stringify(listproduct))
    render()

}


