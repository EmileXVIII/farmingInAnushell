//import { createNElements, create1Element } from './functions_creer_element.js';
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
//
let nbLigneDiv= 12,
nbCollDiv= 9;
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.setProperty('--height-emplacement-objet', '1cm');
    document.documentElement.style.setProperty('--width-emplacement-objet', '1cm');
    let maHauteurMax=document.getElementsByClassName("inventaire")[0].offsetHeight,
    maLargeurMax=document.getElementsByClassName("inventaire")[0].offsetWidth;
    const mesObj=document.getElementsByClassName('inventaire')[0].getElementsByClassName('mesObjets')[0]
    createNElements(mesObj,'div',nbLigneDiv*nbCollDiv,'emplacement_objet')
//pour verifier on print tout mesObj
  alert(mesObj.innerHTML)  
 })