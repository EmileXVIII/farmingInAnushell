import { createEquipement } from "./creeItem";
import { gestionnaireEvents } from "./inventoryEvents";

let equip1 = createEquipement('equip1', '/img/epee1.jpeg');
setTimeout(()=> gestionnaireEvents.emit(`conteneur_inventaire-0-changeObject`, equip1),10);