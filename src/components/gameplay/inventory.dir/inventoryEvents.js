
import MyEventListener from './MyEventListener';
import SelectObject from './SelectObject';
import FreePotion from '../../items/expendable.dir/FreePotion';
import { idPerso, inventoryEquipementSaver, inventoryExpendableSaver } from '../../../App';


let getionnaireSelectionObjet = new SelectObject(),
    gestionnaireEvents = new MyEventListener(),
    gestionnaireFreePotions = new FreePotion();
document.addEventListener('click', (event) => { getionnaireSelectionObjet.checkSelection(event.target) });
document.addEventListener('keypress', (event) => { getionnaireSelectionObjet.keypress(String.fromCharCode(event.keyCode)) });
gestionnaireFreePotions.process();
gestionnaireEvents.on('savePlease', (perso) => {
    let inventory = inventoryEquipementSaver.objects,
        inventoryEpend = inventoryExpendableSaver.objects,
        itemsEquip = itemsEquips.listObj,
        list = [];
    list.push(inventory.map((obj)=>obj?({
        id_equip:obj.infos.id ,
        rarity:obj.infos.rarity
    }):undefined));
    list[0]=list[0].filter((obj)=>!!obj);
    list.push(inventoryEpend.map((obj)=>({
        name:obj.infos.name,
        healValue:obj.effect.heal?obj.effect.heal[1]:0,
        attValue:obj.effect.BaseAtk?obj.effect.BaseAtk[1]:0,
        defValue:obj.effect.BaseDef?obj.effect.BaseDef[1]:0,
        critValue:obj.obj.effect.BaseCritical?obj.effect.BaseCritical[1]:0,
        dodgeValue:obj.effect.BaseDodge?obj.effect.BaseDodge[1]:0,
        rarity:obj.infos.rarity,
        urlIcon:obj.infos.iconAdresse
    })));
    list[1]=list[1].filter((obj)=>!!obj);
    list.push(itemsEquip.map((obj)=>obj?({id_equip:obj.infos.id ,rarity:obj.infos.rarity}):undefined));
    list[2]=list[2].filter((obj)=>!!obj);
    POST('/inventory', [idPerso].concat(list.shift()));
    POST('/inventoryExpend', [idPerso].concat(list.shift()));
    POST('/ItemsEquip', [idPerso].concat(list.shift()));
    POST('/perso', [idPerso]);
})
export { getionnaireSelectionObjet, gestionnaireEvents, gestionnaireFreePotions };

function POST(where, what) {
    fetch(`http://127.0.0.1:8080${where}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(what)
    }).then(resp => resp.json()).then(data => {
        console.log(data)
    }).catch(err => {
        console.error(err)
    })
}