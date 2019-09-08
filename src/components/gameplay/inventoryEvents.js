import Selected from '/../src/components/gameplay/class_selected.js';
import myEventListener from '/../src/components/gameplay/class_myEventListeners';


let getionnaireSelectionObjet = new Selected(),
gestionnaireEvents = new myEventListener();
document.addEventListener('click',(event)=>{getionnaireSelectionObjet.checkSelection(event.target)});


export {getionnaireSelectionObjet,gestionnaireEvents};