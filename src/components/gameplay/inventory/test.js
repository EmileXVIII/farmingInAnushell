import { gestionnaireEvents } from "./inventoryEvents";
import Equipement from "./Equipement";
import Helmet from "../../items/Helmet"

let equip1 = new Equipement('equip1', '/img/epee1.png', 'arm');
//console.log('=============================================================Mon type:',equip1.constructor.name);
setTimeout(() => gestionnaireEvents.emit(`conteneur_inventaire-0-changeObject`, equip1), 10);