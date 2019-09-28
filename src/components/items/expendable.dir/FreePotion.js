import { inventoryExpendableSaver } from "../../../App";
import { gestionnaireEvents } from "../../gameplay/inventory.dir/inventoryEvents";
import GeneratorEffect from "./functionsPotion";
import Expendable from "../Expendable";
import { async } from "q";

class FreePotion {
    constructor() {
        this.img = undefined;
        this.keyToPress = undefined;
        this.value = 0;
        this.time = 0;
        this.timeAfterPreviousInput = 0;
        this.possibilities = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
        this.imgsUrl = ['/img/keyUp.png', '/img/keyRight.png', '/img/keyDown.png', '/img/keyLeft.png'];
        this.len = this.possibilities.length;
        this.status = undefined;
        this.process = this.process.bind(this);
    }
    async process() {
        this.answer = promesseFreePotion.call(this);
        setTime.call(this, 'time');
        setTime.call(this, 'timeAfterPreviousInput');
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
            if (this.status === true) {
                this.value += (20 - Math.trunc(this.timeAfterPreviousInput / 100)) / 5;
                if (this.value < 0) { this.value = 0 };
            }
            else if (this.time < 5000) {
                this.value -= 20;
                if (this.value < 0) { this.value = 0 };
            }
            if (this.time > 5000) {
                if (this.value) {
                    let gen = new GeneratorEffect();
                    gen.heal(this.value);
                    inventoryExpendableSaver.addOnFreePlace(new Expendable('FreeHeal', '/img/greenpotion.png', gen.curentListEffect))
                }
                this.time = 0;
                this.timeAfterPreviousInput = 0;
                this.value = 0;
            }
            let ind = Math.trunc(Math.random() * this.len)
            this.img = this.imgsUrl[ind];
            this.keyToPress = this.possibilities[ind];
            gestionnaireEvents.emit('newFreePotionImg', this.img);
            this.answer = promesseFreePotion.call(this);

        }

    }
    check = (keyPress) => { return keyPress === this.keyToPress ? true : false }
}
function setTime(time) {
    console.log('InSetTime')
    setTimeout(() => {
        this[time] += 10;
        setTime.call(this, time)
    }
        , 10)
}


function promesseFreePotion() {
    return new Promise((resolve, reject) => {
        console.log(this);
        window.removeEventListener('keydown', (event) => {
            if (this.possibilities.indexOf(event.code) !== -1) {
                this.timeAfterPreviousInput = 0;
                if (this.check(event.code)) resolve(true); else reject('wrongTouch')
            }
        });
        window.addEventListener('keydown', (event) => {
            console.log('FreePotionKeyPress', event.key)
            if (this.possibilities.indexOf(event.key) !== -1) {
                this.timeAfterPreviousInput = 0;
                if (this.check(event.code)) resolve(true); else reject('wrongTouch')
            }
        })
        setTimeout(() => { console.log('In timeout'); reject('TimeOut') }, 5000);
    })
}

export default FreePotion;