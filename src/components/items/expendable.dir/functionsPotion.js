import { gestionnaireEvents } from "../../gameplay/inventory.dir/inventoryEvents"
import { itemsEquips } from "../../GamePage";

class GeneratorEffect{
    constructor(){
        this.curentListEffect={}
        this.heal=this.heal.bind(this)
    }
    heal(value){
        this.curentListEffect['heal']=[(value=this[1])=>{
            let maxHealable=(gestionnaireEvents.emit(`getStat-${itemsEquips.username}-stat`,'MaxLife')
            -gestionnaireEvents.emit(`getStat-${itemsEquips.username}-stat`,'Life'))
            if(maxHealable < value){value=maxHealable}
            gestionnaireEvents.emit(`modify-${itemsEquips.username}-stat`,'Life',value)
        },value]
    }
}

export default GeneratorEffect;