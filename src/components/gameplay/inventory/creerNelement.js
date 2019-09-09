import React from "react";
function createNElement(type, howMany, attributs, childrensAcreer) {
    let listElements = [];
    childrensAcreer = [].concat(childrensAcreer);
    if (childrensAcreer) {
        for (let i = 0; i < howMany; i++) {
            let newElement = React.createElement(type, { ...attributs, key: i, numKey: i }, childrensAcreer);
            listElements.push(newElement)
        }
    }
    else{
        for (let i = 0; i < howMany; i++) {
            let newElement = React.createElement(type, { ...attributs, key: i, numKey: i });
            listElements.push(newElement)
        }
    }
    return listElements
}

export default createNElement