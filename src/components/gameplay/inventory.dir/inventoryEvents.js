
import MyEventListener from './MyEventListener';
import SelectObject from './SelectObject';


let getionnaireSelectionObjet = new SelectObject(),
gestionnaireEvents = new MyEventListener();
document.addEventListener('click',(event)=>{getionnaireSelectionObjet.checkSelection(event.target)});


export {getionnaireSelectionObjet,gestionnaireEvents};