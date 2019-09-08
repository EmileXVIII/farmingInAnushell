
class SelectObject {
    constructor(){
        this.oldSelected=undefined;
        this.selected=undefined;
        this.select=this.select.bind(this)
    }
    checkSelection(noeud){
        noeud=this.chooseObjectRoot(noeud);
        if (noeud===false){
            return
        }
        if (this.selected){
            if (this.selected===noeud){
                return this.unSelect(this.selected)
            }
            this.oldSelected=this.selected;
            this.selected=noeud;
            return this.changePlace()
        }
        this.selected=noeud;
        return this.select(this.selected)

    }
    chooseObjectRoot(noeud){
        let i=0,
        noeudClasses=noeud.className.split(' ');
        while(i<2 && noeudClasses.indexOf('objet')===-1){
            i++;
            noeud=noeud.parentNode;
            noeudClasses=noeud.className.split(' ');
        }
        if (i===2){return false}
        return noeud
    }
    select(noeud){
        noeud.getElementsByClassName('filter')[0].classList.add('filter_selected')
    }
    unSelect(noeud){
        noeud.getElementsByClassName('filter')[0].classList.remove('filter_selected');
        this.selected=undefined;
    }
    changePlace(){
        throw Error('non Implemented')
    }
}
export default SelectObject;
