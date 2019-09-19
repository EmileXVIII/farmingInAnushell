import { gestionnaireEvents } from "./inventoryEvents";

class Saver{
    constructor(conteneurName,lenConteneur){
        this.objects=[]
        for (let i=0;i<lenConteneur;i++){this.objects.push(undefined)};
        this.conteneurName=conteneurName;
        this.lenConteneur=lenConteneur;
        this.saveAll=this.saveAll.bind(this);
        this.addOnFreePlace=this.addOnFreePlace.bind(this)
    }
    saveAll(){
        this.objects=[]
        for (let i=0;i<this.lenConteneur;i++){
            let monObjet=gestionnaireEvents.emit(`${this.conteneurName}-${i}-getObject`);
            this.objects.push(monObjet);
        }
        console.log(this.objects)
    }
    addOnFreePlace(object){
        let i=0;
        while (i<this.lenConteneur && this.objects[i]!==undefined){i++}
        if (i===this.lenConteneur){return false}
        else{this.objects[i]=object; return true}
    }

}

export default Saver;