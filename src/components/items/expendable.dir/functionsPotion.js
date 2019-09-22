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
}

function newbaseHealPotion(){
    let gen=new GeneratorEffect();
    gen.heal(100);
    return new Expendable('Heal Potion','/img/potion.png',gen.curentListEffect)
}

export default GeneratorEffect;
export {newbaseHealPotion}