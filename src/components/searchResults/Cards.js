

export default function Cards(domNode,props={}){
    const element = document.getElementById(`${domNode}`);
    console.log("elem", element)
    element.innerHTML = `<div class="card"></div>`
}