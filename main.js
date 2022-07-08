//! Local STORAGE  это обьект веб-хранилище, то есть данные в браузере

// let users = {
//   name: "maksat",
//   age: 24,
// };

// !  setItem (ключ значение) в формате строки  (JSON>STRINGIFY())
// ! getItem получить данные по ключу в формате строки (JSON.parse())
// ! removeItem удалить данные по ключу
// ! clear удаляет все
// localStorage.setItem("maks", JSON.stringify(users));

// let user = JSON.parse(localStorage.getItem("maks"));

// console.log(user);

// localStorage.removeItem("maks");

// localStorage.clear();

// !                                          CONTACTS LIST
let form = $("form");
let inpName = $(".inp-name");
let inpAge = $(".inp-age");
let inpAddress = $(".inp-address");

let tbody = $("tbody");

function addUser(event) {
  //  ! чтобы страница не перезагружалась
  event.preventDefault();
  //   ! получаем данные с инпута
  let name = inpName.val();
  let age = inpAge.val();
  let address = inpAddress.val();
  //   !формируем обьект нового контакта
  let newContact = {
    name: name.trim(),
    age: age,
    address: address.trim(),
    id: Date.now(),
  };

  //!   ПРОВЕРКА на ПУСТОТУ
  for (let key in newContact) {
    if (!newContact[key]) {
      alert("Заполните все поля");
      return;
    }
  }

  //!   получаем контакты с localstorage чтобы туда добавить нового контакта
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.push(newContact);
  //   ! ЗАменяем старый массив на обновленный массив в localStorage
  localStorage.setItem("contacts", JSON.stringify(contacts));
  //   ! ОЧИЩАЕМ содержимое инпутов
  inpName.val("");
  inpAge.val("");
  inpAddress.val("");
  //   ! ЧТОБЫ СТЯНУТЬ ПОСЛЕДНИЕ ДАННЫЕ
  getContacts();
}

form.on("submit", addUser);

function getContacts() {
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  //   ! чтобы инф не дублироваалась
  tbody.html("");
  //   !
  contacts.forEach((item, index) => {
    tbody.append(`
<tr>
<th>${index + 1}</th>
<th>${item.name}</th>
<th>${item.age}</th>
<th>${item.address}</th>
</tr>
     `);
  });
}
getContacts();

// localStorage.setItem("example", "hello");
// sessionStorage.setItem("example", "hello");

// localStorage.setItem("goods", JSON.stringify([12, { name: "polina" }]));
// localStorage.removeItem("goods");

// console.log(JSON.parse(localStorage.getItem("goods")));

// console.log(typeof localStorage);

// localStorage.setItem("breakfast", "eggs");
// localStorage.setItem("lanch", "soup");
// console.log(localStorage.getItem("breakfast"));

// sessionStorage.setItem("language", "js");

let btn = document.querySelector(".btn");
let inp = document.querySelector(".task-input");
let list = document.querySelector(".task-list");

btn.addEventListener("click", () => {
  // событие на клик на кнопку add task
  if (!inp.value.trim()) {
    // проверка на заполненность поля
    alert("заполни поле");
    return;
  }
  let obj = {
    task: inp.value,
  };
  setItemToStorage(obj);
  createElement();
  inp.value = "";
});
createElement();

function createElement() {
  // отображение данных
  if (!localStorage.getItem("tasks-data")) {
    // проверка есть ли что-нибудь в localStorage
    localStorage.setItem("tasks-data", "[]"); //если нет то добавляем пустой массив
  }

  let newData = JSON.parse(localStorage.getItem("tasks-data"));
  list.innerHTML = "";
  newData.forEach((item, index) => {
    let li = document.createElement("li");
    let bntDelete = document.createElement("button");
    li.innerText = item.task;
    bntDelete.innerText = "delete";
    li.append(bntDelete);
    list.appendChild(li);
    bntDelete.addEventListener("click", () => {});
  });
}

function setItemToStorage(task) {
  // добавлениие новых тасков в localStorage
  let data = JSON.parse(localStorage.getItem("tasks-data"));
  console.log(data);
  data.push(task);
  localStorage.setItem("tasks-data", JSON.stringify(data));
}

function deleteElement() {
  let data = JSON.parse(localStorage.setItem("tasks-data"));
  data.splice(index, 1);
  localStorage.setItem("tasks-data", data.stringify(data));
}
