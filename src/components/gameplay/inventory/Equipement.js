class Equipement{
    constructor(name,iconAdresse,rarity='Common',att=0,def=0,esq=0,pv=0,critical=0){
        this.name=name;
        this.stats={att,def,esq,pv,critical};
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
export default Equipement;