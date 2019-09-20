import Item from "./Item";

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
    doEffect(target){
        for (let effect of this.effects){effect(target)}
    }
    changeLocation(location,numChild){
        this.location=location;
        this.numChild=numChild
    }
}
export default Expendable;