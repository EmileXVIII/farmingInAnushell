
import MyEventListener from './MyEventListener';
import SelectObject from './SelectObject';
import FreePotion from '../../items/expendable.dir/FreePotion';
import { idPerso, inventoryEquipementSaver, inventoryExpendableSaver, serveur } from '../../../App';
import { itemsEquips } from '../../GamePage';

let getionnaireSelectionObjet = new SelectObject(),
    gestionnaireEvents = new MyEventListener(),
    gestionnaireFreePotions = new FreePotion();
document.addEventListener('click', (event) => { getionnaireSelectionObjet.checkSelection(event.target) });
document.addEventListener('keypress', (event) => { getionnaireSelectionObjet.keypress(String.fromCharCode(event.keyCode)) });
gestionnaireFreePotions.process();


function saveplease(perso) {
    let inventory = inventoryEquipementSaver.objects,
        inventoryEpend = inventoryExpendableSaver.objects,
        itemsEquip = itemsEquips.listObj;

    let inventoryList = []
    inventory = inventory.filter(element => element !== undefined)
    inventoryList.push(inventory.map((obj) => ({
        id_equip: obj.infos.id,
        rarity: obj.infos.rarity,
        cost: obj.infos.cost
    })));
    inventoryList = inventoryList.filter((obj) => !!obj);

    let expendablelist = []

    expendablelist.push([])
    // expendablelist.push(inventoryEpend.map(obj => obj ? ({
    //     name: obj.infos.name,
    //     healValue: obj.effects.heal ? obj.effects.heal[1] : 0,
    //     attValue: obj.effects.BaseAtk ? obj.effects.BaseAtk[1] : 0,
    //     defValue: obj.effects.BaseDef ? obj.effects.BaseDef[1] : 0,
    //     critValue: obj.effects.BaseCritical ? obj.effects.BaseCritical[1] : 0,
    //     dodgeValue: obj.effects.BaseDodge ? obj.effects.BaseDodge[1] : 0,
    //     rarity: obj.infos.rarity,
    //     urlIcon: obj.infos.iconAdresse
    // }) : undefined));
    // expendablelist = expendablelist.filter((obj) => !!obj);

    let equipedList = []
    equipedList.push(itemsEquip.map((obj) => ({
        id_equip: obj.infos.id,
        rarity: obj.infos.rarity,
        cost: obj.infos.cost
    })));
    equipedList = equipedList.filter((obj) => !!obj);

    POST('/inventory', { idPerso, inventory });
    // POST('/inventoryExpend', [idPerso].concat(expendablelist.shift()));
    POST('/ItemsEquip', { idPerso, equipedList });
}

export { getionnaireSelectionObjet, gestionnaireEvents, gestionnaireFreePotions, saveplease };

function POST(where, what) {
    fetch(`http://${serveur}${where}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(what)
    }).catch(err => {
        console.error(err)
    })
}