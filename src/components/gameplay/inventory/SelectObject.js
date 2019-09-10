import { gestionnaireEvents } from "./inventoryEvents";

class SelectObject {
    constructor() {
        this.oldSelected = undefined;
        this.selected = undefined;
        this.select = this.select.bind(this)
    }
    checkSelection(noeud) {
        noeud = this.chooseObjectRoot(noeud);
        if (noeud === false) {
            return
        }
        if (this.selected) {
            if (this.selected === noeud) {
                this.unSelect(this.selected);
                this.selected = undefined;
                return
            }
            this.select(noeud);
            let aDeselect=this.selected;
            setTimeout(()=>this.unSelect(aDeselect),500);
            this.oldSelected = this.selected;
            this.selected = noeud;
            let aDeselect2=this.selected;
            setTimeout(()=>this.unSelect(aDeselect2),500);
            return this.changePlace();

        }
        else {
        this.selected = noeud;
            return this.select(this.selected)
        }

    }
    chooseObjectRoot(noeud) {
        let i = 0,
            noeudClasses = noeud.className.split(' ');
        while (i < 2 && noeudClasses.indexOf('objet') === -1) {
            i++;
            noeud = noeud.parentNode;
            noeudClasses = noeud.className.split(' ');
        }
        if (i === 2) { return false }
        return noeud
    }
    select(noeud) {
        noeud.getElementsByClassName('filter')[0].classList.add('filter_selected')
    }
    unSelect(noeud) {
        noeud.getElementsByClassName('filter')[0].classList.remove('filter_selected');
    }
    changePlace() {
        let oldParentName = this.oldSelected.parentNode.attributes.name.nodeValue,
            oldKey = this.oldSelected.attributes.numKey.nodeValue,
            newParentName = this.selected.parentNode.attributes.name.nodeValue,
            newKey = this.selected.attributes.numKey.nodeValue,
            oldObject = gestionnaireEvents.emit(`${oldParentName}-${oldKey}-getObject`),
            newObject = gestionnaireEvents.emit(`${newParentName}-${newKey}-getObject`);
        gestionnaireEvents.emit(`${oldParentName}-${oldKey}-changeObject`, newObject);
        gestionnaireEvents.emit(`${newParentName}-${newKey}-changeObject`, oldObject);
        this.oldSelected = undefined;
        this.selected = undefined;

    }
}
export default SelectObject;
