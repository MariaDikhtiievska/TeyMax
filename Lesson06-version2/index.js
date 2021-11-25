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
        document.getElementById("wrapper").insertAdjacentElement("afterbegin", htmlElements[index])
        //appendChild(htmlElements[index])


        clicked(htmlElements[index]) // div element


    })

}
function clicked(div){

    div.addEventListener('click', () => {
        if (div.classList.value.split(' ')[1] === "clickedElem"){

            for (let i of htmlElements) {
                i.classList.remove('clickedRelations')
                i.classList.remove('clickedElem')
            }
        }
        //div.classList.toggle("clickedElem")
        else {
            arr.forEach(function (item, index, arr) {
                htmlElements[index].classList.remove('clickedRelations')
                htmlElements[index].classList.remove('clickedElem')

                if (item.relations.includes(div.id)) {
                    htmlElements[index].classList.add("clickedRelations")
                }

            })
            div.classList.add("clickedElem")
        }
    })
}