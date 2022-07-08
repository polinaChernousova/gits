// let btn = document.querySelector(".btn");
// let inp = document.querySelector(".task-input");
// let list = document.querySelector(".task-list");

// // Первое - вытаскиваем значение из нашего инпута

// btn.addEventListener("click", () => {
//   // событие на клик на кнопку add task
//   console.log(inp.value);
//   //   здесь сразу сделаем проверку на пустоту
//   if (!inp.value.trim()) {
//     // проверка на заполненность поля
//     alert("заполни поле");
//     return;
//   }
//   let obj = {
//     task: inp.value, // create obj with task key and input value
//   };
//   setItemToStorage(obj);
// });

// function setItemToStorage(task) {
//   // добавлениие новых тасков в localStorage

//   let data = JSON.parse(localStorage.setItem("tasks-data", task));

//   console.log(data);
// }

// setItemToStorage();

// console.log("Hello");
// setTimeout(function () {
//   console.log("Ernest");
// }, 2000);

// console.log("I am");
// Hello
// I am
// Ernest

function Third(str) {
  return str + "Хендерсон";
}

function Second() {
  return Third("Дастин");
}

function First() {
  let name = Second();
  console.log("My name is " + name);
}

First();

// My name is Дастин Хендерсон
