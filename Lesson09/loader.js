export default class Loader{

    #active =false
    constructor(slot) {
        this.slot = slot;
        this.defineLoader();

    }
    defineLoader(){
        const wrapper = document.createElement('div')
        wrapper.classList.add('box')
        wrapper.innerHTML = `<div class="box"> <div class="hourglass"></div> <p>Hourglass</p> </div>`

        this.loaderElement = wrapper
        console.log(wrapper)
        this.slot.replaceWith(this.loaderElement)
    }
    get active(){
        return this.#active
    }
    set active(value){
        if (value)
            return this.loaderElement.classList.add('clock')
        else
            return  this.loaderElement.classList.remove('clock')
    }

    show(){

        this.active = true
        console.log(this.loaderElement.classList)
    }
    close(){
        this.active = false
    }

}



/*let loader = document.querySelector('.loader')

window.addEventListener('load',()=>{
    loader.classList.add('clock')
    setTimeout(() =>{
        loader.remove()
    },200)
})

 */
