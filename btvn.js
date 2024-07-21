

// const dbTodo = [
//     { id: 6, todo: "Ngủ", status: false },
//     { id: 9, todo: "Học", status: true },
//     { id: 23, todo: "Chạy", status: true },
//     { id: 55, todo: "Ăn", status: false },
// ];

// // B1: hiển thị ra màn hình
// // B1.1: có thẻ ul(id="")
// // B1.2: hiển thị ra màn hình các todo đang có: lặp qua data để tạo các thẻ li mô tả todo, gán nó vào trong ul
// const todoList = document.getElementById('list-todo');
// const submitTodo = document.getElementById('submit-todo')

// function renderTodo() {
//     let stringHTMl = "";
//     // vòng for để lặp qua db
//     for (let i = 0; i < dbTodo.length; i++) {
//         // logic: tạo các thẻ li
//         stringHTMl +=
//             `
//             <li 
//                 class="${dbTodo[i].status ? "red" : "xanh"}"
//                 onClick="doiStatus(${dbTodo[i].id})"
//             >
//                 <span style="margin: 10px" >
//                     ${dbTodo[i].todo}
//                 </span>

//                 <button onclick="xoaItem(${dbTodo[i].id})" >
//                     Xóa
//                 </button>
//             </li>
//         `;
//     }
//     todoList.innerHTML = stringHTMl;
// }
// renderTodo()


const DB = [{
    id: 1,
    content: "DUONG",
    status: true,


}, {
    id: 2,
    content: "Tai",
    status: true,


}, {
    id: 3,
    content: "THANH",
    status: false,


}, {
    id: 4,
    content: "DUy",
    status: false,


},];


const Todolist = document.getElementById("list-todo");
const submit = document.getElementById("submit-todo");

function render() {
    let string = "";
    for (let i = 0; i < DB.length; i++) {
        string +=

            `<li class="${DB[i].status ? "red" : "xanh"}" onclick="Doivitri(${DB[i].id})">
            <span>${DB[i].content}</span> 
            <button  onclick="Xoavitri(${DB[i].id})">Xóa</button></li>`

    } Todolist.innerHTML = string;
}
render()
function Doivitri(idcandoi) {
    let vitridoi = DB.findIndex(function (element, ind
    ) {
        return element.id === idcandoi;
    })
    DB[vitridoi].status = !DB[vitridoi].status;
    render()
}

function Xoavitri(idxoa) {
    let vitrixoa = DB.findIndex(function (element, ind) {
        return element.id === idxoa;

    })
    DB.splice(vitrixoa, 1)
    render()
}

submit.onclick = function () {
    const todo = document.getElementById('input-todo').value
    const newTodo = {
        id: Math.floor(100 + Math.random() * 999),
        content: todo,
        status: false,
    }
    document.getElementById('input-todo').value = ""
    DB.push(newTodo)

    render()

}

// console.log(DB);
