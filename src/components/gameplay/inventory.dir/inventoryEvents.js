
import MyEventListener from './MyEventListener';
import SelectObject from './SelectObject';
import FreePotion from '../../items/expendable.dir/FreePotion';


let getionnaireSelectionObjet = new SelectObject(),
gestionnaireEvents = new MyEventListener(),
gestionnaireFreePotions = new FreePotion();
document.addEventListener('click',(event)=>{getionnaireSelectionObjet.checkSelection(event.target)});
document.addEventListener('keypress',(event)=>{getionnaireSelectionObjet.keypress(String.fromCharCode(event.keyCode))});
gestionnaireFreePotions.process();
export {getionnaireSelectionObjet,gestionnaireEvents,gestionnaireFreePotions};