import { inventoryEquipementSaver } from "../../../App";

class SaverItemEquip {
    constructor(leggings, helmet, breastplate, shield, shoes, weapon,username) {
        this.username=username;
        this.listObj=[leggings, helmet, breastplate, shield, shoes, weapon];
        this.index = ['Leggings', 'Helmet', 'Breastplate', 'Shield', 'Shoes', 'Weapon'];
        this.equip=this.equip.bind(this)
    }
    equip(obj) {
        if (obj.type === undefined) return false;
        let ind = this.index.indexOf(obj.type)
        if (ind !== -1) {
            let objRet = this.listObj[ind];
            inventoryEquipementSaver.addOnFreePlace(objRet)
            this.listObj[ind] = obj;
            return objRet;
        }
        return false

    }
}
export default SaverItemEquip;