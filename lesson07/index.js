/*
# Lesson7

Доработать доработать функции сreate, read,readAll, update и remove, которые будет имплементировать `CRUD` модель.
В качестве структуры данных использовать `Map`.

Функция `create`:
    - возвращает `id` при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
Функция `read`:
    - принимает идентификатор пользователь
    - если такого пользователя нет возвращать `null`
    - если есть — возвращать объект пользователя с полем `id` внутри объекта.
Функция `readAll`:
    - возвращает массив пользователей
Функция `update`:
    - обновляет пользователя
    - принимает 2 обязательных параметра
Функция `remove`:
    - удаляет пользователя
    - возвращает true, если пользователь успешно удален

Обратите внимание!
    - Вам может потребоваться дописать код в событиях onsubmit и onclick для того что бы обрабатывать и выводить сообщения об ошибках
*/

// Решение задачи

const create = (person) => {

   return   Math.floor((1 + Math.random()) * 0x10000);


}

const read = (uid) => {
   // let  values  =Array.from(database.values())
   //let values  //=[...database.values()]       //array of objects
    //.map(value => {value.id = uid})
    //let values = Array.from(database.values(),function valuesCreate(value) )

    //let keys = [...database.keys()]
//return database.get(uid)
    //console.log(uid)
    //console.log(values = Array.from(database.values()))
   // console.log(values[0].id = uid)

       if (database.has(+uid) ){
           let obj = database.get(+uid)
           obj.id = +uid
           return obj
       }

       else return null
       //if (keys.indexOf(arguments) === -1) return null
       // else return database.


   }

//if (database.has(uid)){
//let p = database.get(uid)
 //   p.id = uid
  //  return p
//}


const readAll = () => {
return [...database.values()]
}
const update = (...arguments) => {

        if (database.has(arguments[0])){
            console.log(true)
            let person = database.get(arguments[0])
            person.name = arguments[1]
            console.log(person.name)
            person.salary = arguments[2]
            database.set(arguments[0], person)

        }




}
const remove = (id) => {
    if (database.has(+id)){

        database.delete(+id);

        return true;
    }
}
// Примеры

// const person = {
//   name: "Pitter",
//   age: 21,
//   country: "ua",
//   salary: 500
// };

// const id = create(person);
// const customer = database.get(id);
// const customers = readAll(); // возвращает массив пользователей
// update(id, { age: 22 }); // обновление данных сотрудника, возвращает id
// remove(id); // удаление сотрудника, возвращает true

// ПРОВЕРКА
const database = new Map();
let users = [];
const regForm = document.getElementById('regForm');
const updateForm = document.getElementById('updateForm');
const searchForm = document.getElementById('searchForm');
const removeForm = document.getElementById('removeForm');
const alertP = document.getElementById('alert');
const readAllBtn = document.getElementById('readAll');
const list = document.getElementById('list');

const regFormSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const age = formData.get('age');
    const country = formData.get('country');
    const salary = formData.get('salary');

    const person = {
        name,
        age,
        country,
        salary
    };

    const id = create(person);
   // person.id = create(person)
   // person.id = id
    //users.push(person)
    alertP.innerHTML = `Сотрудник ${name} успешно добавлен. Идентификатор сотрудника ${id}.`;
   // console.log(person)
    database.set(id,person)
   // for (let person in database) console.log(person)
//console.log([...database])
    //let values = [...database.values()].map(value => {value.id = id})

    //console.log(database.get(id))

}

const searchFormSubmitHandler = (event) => {
    event.preventDefault();
    list.innerHTML = null;

    const formData = new FormData(event.target);
    const uid = formData.get("uid");

    const customer = read(uid);
    const unableWorker =  "Can not find a worker. Please try again! "

    if (customer !== null){
        const worker = getWorker(customer);
        list.insertAdjacentHTML('afterbegin', worker);
    }
    else list.insertAdjacentHTML('afterbegin', unableWorker);

}

const updateFormSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const uid = formData.get('uid');
    const name = formData.get('name');
    const salary = formData.get('salary');

    update(+uid,  name, salary );

    alertP.innerHTML = `Данные сотрудника ${uid} успешно обновлены.`;
}

const removeFormSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const uid = formData.get('uid');
    const result = remove(uid);

    if (result) {
        alertP.innerHTML = `Сотрудник с идентификатором ${uid} успешно удалён.`;

        return;
    }

    alertP.innerHTML = `При удалении сотрудника с идентификатором '${uid}' произошла ошибка.`;
}

const readAllBtnClickHandler = () => {
    const customers = readAll();
    list.innerHTML = null;
    let customersHTML = '';

    customers.forEach((customer) => {
        customersHTML += getWorker(customer);
    });

    list.insertAdjacentHTML('afterbegin', customersHTML);
}

regForm.addEventListener('submit', regFormSubmitHandler)
searchForm.addEventListener('submit', searchFormSubmitHandler)
updateForm.addEventListener('submit', updateFormSubmitHandler)
removeForm.addEventListener('submit', removeFormSubmitHandler)
readAllBtn.addEventListener('click', readAllBtnClickHandler)