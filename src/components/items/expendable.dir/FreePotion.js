import { inventoryExpendableSaver } from "../../../App";
import { gestionnaireEvents } from "../../gameplay/inventory.dir/inventoryEvents";
import GeneratorEffect from "./functionsPotion";
import Expendable from "../Expendable";

class FreePotion {
    constructor() {
        this.img = undefined;
        this.keyToPress = undefined;
        this.answer =new Promise((resolve,reject)=>{
            document.addEventListener('keypress',(event)=>{this.check(event.code)?resolve(true):reject(false)})
            setTimeout(()=>reject(false),5000)
        });
        this.value = 0;
        this.time = 0;
        this.possibilities=['ArrowUp','ArrowRight','ArrowDown','ArrowLeft'];
        this.imgsUrl=['/img/keyUp.png','/img/keyRight.png','/img/keyDown.png','/img/keyLeft.png'];
        this.len=this.possibilities.length;
        this.process=this.process.bind(this);
    }
    async process() {
        while (true) {
            console.log('In process');
            await this.answer;
            this.answer.then(()=>{console.log('PromesseResolve');this.value += Math.trunc(20 - this.time / 100);if (this.value<0) this.value=0})
            .catch(()=>{this.value -=20;if (this.value<0) this.value=0})
            if (this.time > 5000) {
                if (this.value) {
                    let gen = new GeneratorEffect();
                    gen.heal(this.value);
                    inventoryExpendableSaver.addOnFreePlace(new Expendable('FreeHeal', '/img/potion.png', gen.curentListEffect))
                }
                this.time = 0;
                this.value = 0;
                this.answer = new Promise((resolve,reject)=>{
                    document.addEventListener('keypress',(event)=>{this.check(event.code)?resolve(true):reject(false)})
                    setTimeout(()=>reject(false),5000)
                });
            }
            let ind=Math.trunc(Math.random()*this.len)
            this.img=this.imgsUrl[ind];
            gestionnaireEvents.emit('newFreePotionImg',this.img);

        }

    }
    check = (keyPress) => {return keyPress===this.keyToPress? true:false}
    setTime = () => {
        setTimeout(() => {
            this.time += 10; if (this.time > 5000) { this.resolve() };
            this.setTime()
        }
            , 10)
    }
}

export default FreePotion;