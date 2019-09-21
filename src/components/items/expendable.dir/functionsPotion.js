import { gestionnaireEvents } from "../../gameplay/inventory.dir/inventoryEvents"
import { itemsEquips } from "../../GamePage";

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

export default GeneratorEffect;