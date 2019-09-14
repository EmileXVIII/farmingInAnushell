import { gestionnaireEvents } from "./inventoryEvents";
import Equipement from "../../items/Equipement";

let equip1 = new Equipement('equip1', '/img/epee1.png','arm');
let equip2 = new Equipement('equip2', '/img/epee1.png','arm','uncommon');
//console.log('=============================================================Mon type:',equip1.constructor.name);
setTimeout(()=> gestionnaireEvents.emit(`conteneur_inventaire-0-changeObject`, equip1),10);
setTimeout(()=> gestionnaireEvents.emit(`conteneur_inventaire-1-changeObject`, equip2),10);