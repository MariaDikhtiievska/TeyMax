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
let htmlElements = new Map() // Map of HTMLDivElements
//let htmlElements = []   // array of dives
const createWrapper = () =>{
    let wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")
    wrapper.setAttribute("id", "wrapper")
    return wrapper
}
const create = () => {
    const wrapper = createWrapper();
    document.getElementsByTagName('body')[0].appendChild(wrapper)


    arr.forEach(function (item, index, arr){

htmlElements.set(item.id,document.createElement("div"))
        htmlElements.get(item.id).textContent = item.content
        htmlElements.get(item.id).setAttribute("id",item.id)
        htmlElements.get(item.id).classList.add("initial")



        document.getElementById("wrapper").insertAdjacentElement("afterbegin", htmlElements.get(item.id))
        //appendChild(htmlElements[index])

        subscribeClickEvent(htmlElements.get(item.id)) // div element


    })

}
const subscribeClickEvent = (div) => {

    div.addEventListener('click', () => {
        const {id: clickedElementId } = div;

        const element = htmlElements.get(clickedElementId)

        const [_, checkClass] = element.classList

        if (checkClass === "clickedElem"){
     //  if (div.classList.value.split(' ')[1] === "clickedElem"){
            htmlElements.forEach((item) =>{
                item.classList.remove('clickedRelations')
                item.classList.remove('clickedElem')
            })
            //for (let i of htmlElements) {
            //    i.classList.remove('clickedRelations')
              //  i.classList.remove('clickedElem')
            //}
        }
        //div.classList.toggle("clickedElem")
        else {
            //arr.forEach(function (item, index, arr) {
              //  htmlElements[index].classList.remove('clickedRelations')
               // htmlElements[index].classList.remove('clickedElem')
            let keys = [...htmlElements.keys()]

            arr.forEach(function (item, index, arr) {
                htmlElements.get(item.id).classList.remove('clickedRelations')
                htmlElements.get(item.id).classList.remove('clickedElem')
                console.log(item)
                console.log(htmlElements.get(item.id))
                console.log(keys[index])
                if (item.relations.includes(clickedElementId)) {
                    htmlElements.get(item.id).classList.add("clickedRelations")
                }

            })

            element.classList.add("clickedElem")

        }
    })
}