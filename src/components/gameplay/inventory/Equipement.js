class Equipement{
    constructor(name,iconAdresse,pieceEquipement=null,rarity='Common',att=0,def=0,esq=0,pv=0,critical=0){
        this.name=name;
        this.pieceEquipement=pieceEquipement;
        this.stats={att,def,esq,pv,critical};
        this.rarity=rarity;
        this.iconAdresse=iconAdresse;
        this.location=undefined;
        this.numChild=undefined;
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