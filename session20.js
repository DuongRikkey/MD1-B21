// // //Chữa bài 1
// // // const hidebtn = document.getElementById("hide-btn");
// // // const showbtn = document.getElementById("show-btn");
// // // const paragrahp = document.getElementById("para")
// // // console.log(hidebtn);
// // // console.log(showbtn);

// // // hidebtn.onclick = function () {
// // //     paragrahp.style.display = "none"
// // // }
// // // showbtn.onclick = function () {
// // //     paragrahp.style.display = "block"
// // // }
// // // ---------------------------------------------------------
// // // Chữa bài 5
// // Dựa vào trang thái cơ bản ban đầu của body chứa nó
// const toggleBTN = document.getElementById("toggle-btn")
// const body = document.getElementById("body")
// // toggleBTN.onclick = function () {
// //     // background body
// //     // chưa có màu --> add màu đen + đổi màu text
// //     //nếu có màu rồi --> add màu trắng+ đổi màu text
// //     console.log(body.style);
// // // giúp chúng ta check phần tử đang style trực tiếp(Inline)
// // //Tính kế thừa trong Css chỉ cần thay màu cha là con cũng sẽ như thế
// //      if (!body.style.background= "black") {
// //          body.style.backgroundColor="black";
// //          body.style.color="white";
// //     }
// //     else{
// //         body.style.backgroundColor="";
// //         body.style.color=""
// //     }
// // nếu có màu r ---> add màu trắng + đổi màu text
// // }
// // C2 Sử dụng CSS làm đúng tác vụ CSS(Cách hữu dụng)
// //Kiểm tra xem đã tồn tại class dark mode trong
// //body hay chư
// //Nếu rồi xóa đi
// //Nếu chưa thêm vào
// // toggleBTN.onclick = function () {
// //     if (body.classList.contains("dark-mode")) {
// //         body.classList.remove("dark-mode");
// //     } else {
// //         body.classList.add("dark-mode")
// //     }
// // }

// // C3
// toggleBTN.onclick = function () {
//     body.classList.toggle("dark-mode")
// }
//Tính năng render
let todoLisDB = JSON.parse(window.localStorage.getItem("Todolist-DB"))
// let todoLisDB = [
//     {
//         id: 1,
//         content: "Cố lên Dương",
//         status: true,
//     },
//     {
//         id: 2,
//         content: "Cố lên ",
//         status: false,
//     },
//     {
//         id: 3,
//         content: "hii",
//         status: false,
//     },
//     {
//         id: 4,
//         content: "Dương123",
//         status: true,
//     },
// ];
// Lữu trữ trong Local
// window.localStorage.setItem("Todolist-DB", JSON.stringify(todoLisDB));
const ul = document.getElementById("myUL")
const input = document.getElementById("myInput");
const addBtn = document.getElementById("addBtn");

function render() {
    //Phải clear thẻ li cũ đi trước rồi mới thêm vào ko sẽ bị lặp lại các thẻ li cũ
    //Vì gọi 2 lần render
    ul.innerHTML = "";
    for (let idx in todoLisDB) {
        // mỗi lần tạo ra 1 thẻ li cần kiểm duyệt từng đối tượng todo
        //kIỂM TRA NẾU ĐỐI TƯỢNG TODO
        //Có tatus===true => li có thêm class checked
        //có status==fale => li bthg thường
        // Cách1 
        // if (!todoLisDB[idx].status) {
        //     li = `<li class="checked">${todoLisDB[idx].content}</li>`
        // }
        // else {
        //     li = `<li>${todoLisDB[idx].content}</li>`
        // }
        // ul.innerHTML = ul.innerHTML + li
        // c2
        let li = todoLisDB[idx].status
            ? // ? la true
            `<li id=${todoLisDB[idx].id} class="checked">
      ${todoLisDB[idx].content}
      <span class="close">×</span>
      </li>`
            : // : la false
            `<li id = ${todoLisDB[idx].id}>
      ${todoLisDB[idx].content}<span class="close">×</span>
      </li>`;

        //Cach pho thong:   ul.innerHTML = ul.innerHTML + li;
        ul.innerHTML = ul.innerHTML + li
        //Cách khác ul.insertAdjacentHTML("beforeend", li);
    }
    let liList = ul.children//HTML COLLECTION=> tập hợp thẻ của thẻ ul
    for (let li of liList) {
        li.onclick = function () {
            //b1 tìm ra id nằm trong attribute của từng thẻ li
            //b2:tìm kiếm phần tử dữ liệu trong DB trùng với id của phần từ li vừa click vào
            //b3:tìm kiếm thành công thì sử dụng vị trí của phần tử dự diệu tìm kiếm và cập nhật trạng thái status trong dư liệu đó trong Db

            let findIndex = todoLisDB.findIndex(function (el, i) {
                return el.id === +li.id;
            });
            todoLisDB[findIndex].status = !todoLisDB[findIndex].status;
            window.localStorage.setItem("Todolist-DB", JSON.stringify(todoLisDB));
            render();

        };
    }
    let spanList = document.getElementsByClassName("close");
    for (let delBtn of spanList) {
        delBtn.onclick = function () {
            // event.stopPropagation();//Ngăn chặn nổi bọt sự kiện (event bubbling)
            //B1 lấy ra thẻ li dang chua delBtn(.parentElement)
            let li = delBtn.parentElement;
            //B2 lấy ra được attribute id của thẻ li cha
            let id = li.id
            //B3:Tim được đối tượng dữ liệu ứng với thẻ li cha vừa bấm vào
            let findIndex = todoLisDB.findIndex(function (el, i) {
                return el.id === +li.id;
            });
            //B4 : Xoa no khoir DB
            todoLisDB.splice(findIndex, 1);
            window.localStorage.setItem("Todolist-DB", JSON.stringify(todoLisDB));
            //B5 : Render
            render();

        }
    }
}

render();

addBtn.onclick = function () {
    if (!input.value) {
        alert("mời bạn nhập lại nhé");
    } else {
        //B1 lấy nội dụng ra từ ô input
        let content = input.value
        console.log(content);
        //B2 Tạo mỗi 1 đối tượng 1 dữ liệu todo{id,content,statc}

        let todo = {
            id:
                todoLisDB.length === 0 ? 1 : todoLisDB[todoLisDB.length - 1].id + 1,
            content: content,
            status: false,
        };
        //B3 thêm dư liệu vào trong DB
        todoLisDB.push(todo);
        //Lưu trữ sự thay đổi này vài trong Local Storage
        window.localStorage.setItem("Todolist-DB", JSON.stringify(todoLisDB));
        //B4 : Phan anh su thay doi cua du lieu trong DB len tren giao dien ung dung
        render();
        input.value = "";
    }

};



// //beforebegin
// //afterbegin
// //afterend
// // //event đối tượng miểu tả sự kện
// // dùng Even.stop Propagation ngăn chặn sự kiện nổi bọt lên thằng cha (event bubbling)
// //Xóa hết rỗng thì dùng toán tử ba ngôi nhé để tạo điều kiện khi rỗng cộng thêm 1

// console dbTodo =[
//     {id:1,todo:"Ăn",status:fales}
// ]

// onclick
// addEventListener(())



