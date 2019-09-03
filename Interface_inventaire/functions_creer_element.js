function createNElements(where,type,howMany,laClass,id){
    let newElement;
    for (let i=0;i<howMany;i++){
        newElement=document.createElement(type);
        if (laClass){
            newElement.className=laClass
        };
        if (id){
            newElement.id=id
        };
        where.appendChild(newElement)
    }
}
function create1Element(where,type,laClass,id){
    let newElement=document.createElement(type);
    if (laClass){
        newElement.className=laClass
    };
    if (id){
        newElement.id=id
    };
    let final=where.appendChild(newElement);
    return final
}
module.exports = {createNElements,create1Element}