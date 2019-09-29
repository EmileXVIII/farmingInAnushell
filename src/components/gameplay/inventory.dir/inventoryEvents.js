
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
        itemsEquip = itemsEquips.listObj,
        list = [];
    list.push(inventory.map((obj) => obj ? ({
        id_equip: obj.infos.id,
        rarity: obj.infos.rarity
    }) : undefined));
    list[0] = list[0].filter((obj) => !!obj);

    console.log("test2", inventoryEpend)
    list.push(inventoryEpend.map(obj => obj ? ({
        name: obj.infos.name,
        healValue: obj.effects.heal ? obj.effects.heal[1] : 0,
        attValue: obj.effects.BaseAtk ? obj.effects.BaseAtk[1] : 0,
        defValue: obj.effects.BaseDef ? obj.effects.BaseDef[1] : 0,
        critValue: obj.effects.BaseCritical ? obj.effects.BaseCritical[1] : 0,
        dodgeValue: obj.effects.BaseDodge ? obj.effects.BaseDodge[1] : 0,
        rarity: obj.infos.rarity,
        urlIcon: obj.infos.iconAdresse
    }) : undefined));
    list[1] = list[1].filter((obj) => !!obj);
    list.push(itemsEquip.map((obj) => obj ? ({ id_equip: obj.infos.id, rarity: obj.infos.rarity }) : undefined));
    list[2] = list[2].filter((obj) => !!obj);
    POST('/inventory', [idPerso].concat(list.shift()));
    POST('/inventoryExpend', [idPerso].concat(list.shift()));
    POST('/ItemsEquip', [idPerso].concat(list.shift()));
    POST('/perso', [idPerso]);
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