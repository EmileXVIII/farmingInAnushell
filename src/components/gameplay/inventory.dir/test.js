import { gestionnaireEvents } from "./inventoryEvents";
import Equipement from "../../items/Equipement";
import GeneratorEffect, { newbaseAttPotion } from "../../items/expendable.dir/functionsPotion";
import Expendable from "../../items/Expendable";
import { inventoryExpendableSaver } from "../../../App";
function test(inventoryEquipementSaver,){
let equip1 = new Equipement('equip1', '/img/epee1.png','Weapon');
let equip2 = new Equipement('equip2', '/img/epee1.png','Weapon','uncommon');
let genFunct= new GeneratorEffect();
genFunct.heal(100)
let heal100 = newbaseAttPotion();
//console.log('=============================================================Mon type:',equip1.constructor.name);
inventoryEquipementSaver.addOnFreePlace(equip1);
inventoryEquipementSaver.addOnFreePlace(equip2);
inventoryExpendableSaver.addOnFreePlace(heal100)}

export default test;