let arr = [                 //array of objects
    {
        content: 'Frontend Misha',
        id: 'fe',
        relations: ['pm', 'be', 'ds']
    },
    {
        content: 'Design Pasha',
        id: 'ds',
        relations: ['pm', 'fe']
    },
    {
        content: 'Project Manager Sanya',
        id: 'pm',
        relations: ['ba', 'fe', 'be', 'ds']
    },
    {
        content: 'Backend Grisha',
        id: 'be',
        relations: ['pm', 'fe', 'ba']
    },
    {
        content: 'Business Analyst Sveta',
        id: 'ba',
        relations: ['pm']
    }
]
let htmlElements = []   // array of dives
function create(){
let wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")
    wrapper.setAttribute("id", "wrapper")
    document.getElementsByTagName('body')[0].appendChild(wrapper)

arr.forEach(function (item, index, arr){
   htmlElements[index] = document.createElement("div")
    htmlElements[index].textContent = item.content
    htmlElements[index].setAttribute("id",item.id)

    htmlElements[index].classList.add("initial")
    document.getElementById("wrapper").appendChild(htmlElements[index])


    clicked(htmlElements[index]) // div element


})

}
function clicked(div){

    div.addEventListener('click', () => {
        div.classList.toggle("clickedElem")



       arr.forEach(function (item, index, arr){
           if ( item.relations.includes(div.id)){
               htmlElements[index].classList.toggle("clickedRelations")

           }
        })
    })
}