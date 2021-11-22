function user() {
    for(let i = 0; i>=0; i++){
        let name = prompt('Your name')
        if (name == null) name = '';
        let age = prompt('Your age')
        if (age == null) age = ' '
        let occupation = prompt('Your occupation')
        if (occupation == null) occupation = ' '
        let dish = prompt('Your dish')
        if (dish == null) dish = ''

        if (window.confirm(name + '\n' + age +'\n' + occupation + '\n' + dish) === true) break
            else continue
    }
}
user()