import Item from "./Item";
import SaverItemEquip from "../gameplay/CharacterStuff/SaverItemsEquip";
import { itemsEquips } from "../GamePage";

class Expendable extends Item{ //consommable exemple Potion
    constructor(name,iconAdresse,dicoEffect){
        super(name,iconAdresse);
        this.effects={};
        this.descriptionEffects='';
        this.doEffect=this.doEffect.bind(this);
        this.changeLocation=this.changeLocation.bind(this)
        for (let key of Object.keys(dicoEffect)){
            this.effects[`${key}`]=dicoEffect[key];
        }
    }
    doEffect(target=SaverItemEquip.username){
        for (let key of Object.keys(this.effects)){this.effects[key][0](target,itemsEquips)}
    }
    changeLocation(location,numChild){
        this.location=location;
        this.numChild=numChild
    }
}
export default Expendable;