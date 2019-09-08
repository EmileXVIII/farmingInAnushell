class Usable{
    constructor(name,iconAdresse){
        this.name=name;
        this.effect={};
        this.iconAdresse=iconAdresse;
        this.location;
        this.numChild;
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
class Equipement{
    constructor(name,iconAdresse,rarity,att=0,def=0,esq=0,pv=0){
        this.name=name;
        this.stats={att,def,esq,pv};
        this.rarity=rarity;
        this.iconAdresse=iconAdresse;
        this.location;
        this.numChild;
        this.modifyStat=this.modifyStat.bind(this);
        this.changeLocation=this.changeLocation.bind(this)
    }
    modifyStat(stat,value){
        this.stats[stat]=value;
    }
    changeLocation(location,numChild){
        this.location=location;
        this.numChild=numChild
    }
}