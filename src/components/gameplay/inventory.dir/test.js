import { gestionnaireEvents } from "./inventoryEvents";
import Equipement from "../../items/Equipement";
function test(inventoryEquipementSaver,){
let equip1 = new Equipement('equip1', '/img/epee1.png','Weapon');
let equip2 = new Equipement('equip2', '/img/epee1.png','Weapon','uncommon');
//console.log('=============================================================Mon type:',equip1.constructor.name);
inventoryEquipementSaver.addOnFreePlace(equip1);
inventoryEquipementSaver.addOnFreePlace(equip2);}

export default test;