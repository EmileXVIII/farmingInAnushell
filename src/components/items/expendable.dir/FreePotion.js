import { inventoryExpendableSaver } from "../../../App";
import { gestionnaireEvents } from "../../gameplay/inventory.dir/inventoryEvents";
import GeneratorEffect from "./functionsPotion";
import Expendable from "../Expendable";
import { async } from "q";

class FreePotion {
    constructor() {
        this.img = undefined;
        this.keyToPress = undefined;
        this.answer = promesseFreePotion.call(this);
        this.value = 0;
        this.time = 0;
        this.timeAfterPreviousInput = 0;
        this.possibilities = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
        this.imgsUrl = ['/img/keyUp.png', '/img/keyRight.png', '/img/keyDown.png', '/img/keyLeft.png'];
        this.len = this.possibilities.length;
        this.status = undefined;
        this.process = this.process.bind(this);
        this.setTime.call(this, this.time);
        this.setTime.call(this, this.timeAfterPreviousInput);
    }
    async process() {
        while (true) {
            console.log('In process');
            try {
                await this.answer;
                this.status = true;
                console.log('answer:', this.answer);
            }
            catch{
                this.status = false;
                console.log('error Catched')
            }
            document.removeEventListener('keypress', (event) => {
                if (this.possibilities.indexOf(event.code) !== -1) {
                    this.timeAfterPreviousInput = 0;
                    if (this.check(event.code)) return true; else throw (new Error('wrongTouch'))
                }
            });
            if (this.status === true) {
                this.value += 20 - Math.trunc(this.timeAfterPreviousInput / 100);
                if (this.value < 0) { this.value = 0 };
            }
            else if (this.time<5000){
            this.value -= 20;
                if (this.value < 0) { this.value = 0 };
            }
            if (this.time > 5000) {
                if (this.value) {
                    let gen = new GeneratorEffect();
                    gen.heal(this.value);
                    inventoryExpendableSaver.addOnFreePlace(new Expendable('FreeHeal', '/img/potion.png', gen.curentListEffect))
                }
                this.time = 0;
                this.timeAfterPreviousInput = 0;
                this.value = 0;
                this.answer = promesseFreePotion.call(this);
            }
            let ind = Math.trunc(Math.random() * this.len)
            this.img = this.imgsUrl[ind];
            gestionnaireEvents.emit('newFreePotionImg', this.img);

        }

    }
    check = (keyPress) => { return keyPress === this.keyToPress ? true : false }
    setTime = (time) => {
        setTimeout(() => {
            time += 10;
            this.setTime(time)
        }
            , 10)
    }
}

async function promesseFreePotion() {
    document.addEventListener('keypress', (event) => {
        if (this.possibilities.indexOf(event.code) !== -1) {
            this.timeAfterPreviousInput = 0;
            if (this.check(event.code)) return true; else throw (new Error('wrongTouch'))
        }
    })
    setTimeout(() => {if (this.time>5000) throw (new Error('TimeOut')) }, 5000)
}

export default FreePotion;