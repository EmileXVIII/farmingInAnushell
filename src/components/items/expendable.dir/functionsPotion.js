import { gestionnaireEvents } from "../../gameplay/inventory.dir/inventoryEvents"
import { itemsEquips } from "../../GamePage";
import Expendable from "../Expendable";

class GeneratorEffect{
    constructor(){
        this.curentListEffect={}
        this.heal=this.heal.bind(this)
    }
    heal(value){
        this.curentListEffect['heal']=[(target,itemsEquips,value=this.curentListEffect['heal'][1])=>{
            let maxHealable=gestionnaireEvents.emit(`getStat-${itemsEquips.username}-stat`,'Maxlife');
            maxHealable-=gestionnaireEvents.emit(`getStat-${itemsEquips.username}-stat`,'Life');
            if(maxHealable < value){value=maxHealable}
            gestionnaireEvents.emit(`improve-${itemsEquips.username}-stat`,'Life',value)
            console.log('Life',gestionnaireEvents.emit(`getStat-${itemsEquips.username}-stat`,'Life'))
        },value]
    }
    improveStat(stat,value,time){
        this.curentListEffect[`${stat}`]=[(target,itemsEquips,value=this.curentListEffect[`${stat}`][1])=>{
            gestionnaireEvents.emit(`improve-${itemsEquips.username}-stat`,`${stat}`,value);
            setTimeout(()=>gestionnaireEvents.emit(`improve-${itemsEquips.username}-stat`,`${stat}`,-value),time)
        },value]
    }
}

function newbaseHealPotion(){
    let gen=new GeneratorEffect();
    gen.heal(100);
    return new Expendable('Heal','/img/greenpotion.png',gen.curentListEffect)
}
function newbaseAttPotion(){
    let gen=new GeneratorEffect();
    gen.improveStat('BaseAtk',50,5000);
    return new Expendable('Str','/img/redpotion.png',gen.curentListEffect)
}

function newbaseDefPotion(){
    let gen=new GeneratorEffect();
    gen.improveStat('BaseDef',50,5000);
    return new Expendable('Def','/img/bluepotion.png',gen.curentListEffect)
}

function newbaseCritPotion(){
    let gen=new GeneratorEffect();
    gen.improveStat('BaseCritical',50,5000);
    return new Expendable('Crit','/img/yellowpotion.png',gen.curentListEffect)
}

function newbaseDodgPotion(){
    let gen=new GeneratorEffect();
    gen.improveStat('BaseDodge',50,5000);
    return new Expendable('Dodge','/img/purplepotion.png',gen.curentListEffect)
}

export default GeneratorEffect;
export {newbaseHealPotion,newbaseAttPotion,newbaseDefPotion,newbaseDodgPotion,newbaseCritPotion}