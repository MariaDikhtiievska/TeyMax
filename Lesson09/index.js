const url = 'https://jsonplaceholder.typicode.com/users'
import Loader from './loader.js';
//let loader = document.getElementById('loaderSlot')
let download = document.getElementById('fetchBtn')
let del = document.getElementById('delete')
let list = document.getElementById('users')

download.addEventListener('click', fetchUser)
const  loaderSlot = document.getElementById('loaderSlot')
const  loader = new Loader(loaderSlot);


const generateUser = (users) =>{
    return users.reduce((acc,user) => {
        acc += createUser(user["address"],user)
        return acc
    }, '')
}
function  fetchUser(){
loader.show()
   // loader.classList.add('clock')
    fetch(`${url}`)
        .then(response => response.json())

        .then(generateUser)
        .then(generatedUsers => {
            list.innerHTML += generatedUsers
        })
        .catch(err => console.log(err))
        .finally(() => {
            loader.close()
            //loader.classList.remove('clock')
        })
}

const clear = () => {
    list.innerText = " "
}

del.addEventListener('click', clear)
