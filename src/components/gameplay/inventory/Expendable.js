class Expendable{ //consommable exemple Potion
    constructor(name,iconAdresse){
        this.name=name;
        this.effect={};
        this.iconAdresse=iconAdresse;
        this.location=undefined;
        this.rarity=undefined;
        this.numChild=undefined;
        this.doEffect=this.doEffect.bind(this);
        this.changeLocation=this.changeLocation.bind(this)
    }
    doEffect(target){
        for (let effect of this.effect){effect(target)}
    }
    changeLocation(location,numChild){
        this.location=location;
        this.numChild=numChild
    }
}
export default Expendable;