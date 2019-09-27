import { inventoryExpendableSaver } from "../../../App";
import Expendable from "../Expendable";
import { gestionnaireEvents } from "../../gameplay/inventory.dir/inventoryEvents";

class Merger {
    constructor() {
        this.selected=undefined;
        this.oldSelected=undefined;
    }
    merge = () => {

        if (this.selected && this.oldSelected) {
            let oldParentName = this.oldSelected.parentNode.attributes.name.nodeValue,
                oldKey = this.oldSelected.attributes.numKey.nodeValue,
                newParentName = this.selected.parentNode.attributes.name.nodeValue,
                newKey = this.selected.attributes.numKey.nodeValue,
                oldObject = gestionnaireEvents.emit(`${oldParentName}-${oldKey}-getObject`),
                newObject = gestionnaireEvents.emit(`${newParentName}-${newKey}-getObject`);
            let effects = { ...newObject.effects }
            for (let key of Object.keys(oldObject.effects)) {
                if (Object.keys(effects).indexOf(key) !== -1) {
                    effects[key][1] += oldObject.effects[key][1]
                }
                else effects[key] = oldObject.effects[key]
            }
            gestionnaireEvents.emit(`${oldParentName}-${oldKey}-deleateObject`);
            gestionnaireEvents.emit(`${newParentName}-${newKey}-deleateObject`);
            this.selected = undefined;
            this.oldSelected = undefined;
            gestionnaireEvents.emit(`${oldParentName}-${oldKey}-changeObject`,new Expendable('Crafted Potion', '/img/mergepotion.png', effects))
        }
    }
}
export default Merger;