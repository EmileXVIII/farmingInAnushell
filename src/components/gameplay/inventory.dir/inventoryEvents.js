
import MyEventListener from './MyEventListener';
import SelectObject from './SelectObject';


let getionnaireSelectionObjet = new SelectObject(),
gestionnaireEvents = new MyEventListener();
document.addEventListener('click',(event)=>{getionnaireSelectionObjet.checkSelection(event.target)});
document.addEventListener('keypress',(event)=>{getionnaireSelectionObjet.keypress(String.fromCharCode(event.keyCode))})


export {getionnaireSelectionObjet,gestionnaireEvents};