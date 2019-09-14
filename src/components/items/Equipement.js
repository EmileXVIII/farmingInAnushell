import Item from "./Item";

class Equipement extends Item{
    constructor(name,iconAdresse,type = null,rarity='Common',att=0,def=0,dodge=0,life=0,critical=0,id=0,cost= Math.floor(Math.random() * 100),specialAttribute = null,
    description = "Pas de Description",){
        super(name,iconAdresse,rarity,id,cost,specialAttribute,description,type)
        this.stats={att,def,dodge,life,critical};
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