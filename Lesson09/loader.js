export default class Loader{

    #active =false
    constructor(slot) {
        this.slot = slot;
        this.defineLoader();
console.log(slot)
    }
    defineLoader(){
        const wrapper = document.createElement('div')
        wrapper.classList.add('box')
        wrapper.innerHTML = `<div class="box">  </div>`

        this.loaderElement = wrapper
            //console.log(wrapper)
        this.slot.replaceWith(this.loaderElement)
    }
    get active(){
        return this.#active
    }
    set active(value){
        let action = '';

        if (value) action = 'add';
        else action = 'remove'
         action = value ? 'add' : 'remove'

        this.loaderElement.classList[action]('clock')

        this.#active = value
    }

    show(){

        this.active = true
       // console.log(this.loaderElement.classList)
    }
    close(){
        this.active = false
    }

}



//let loader = document.querySelector('.loader')

//window.addEventListener('load',()=>{
  //  loader.classList.add('clock')
    //setTimeout(() =>{
      //  loader.remove()
    //},200)
//})


