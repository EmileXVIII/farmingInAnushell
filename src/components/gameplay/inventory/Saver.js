import { gestionnaireEvents } from "./inventoryEvents";

class Saver{
    constructor(conteneurName,lenConteneur){
        this.objects=[];
        this.conteneurName=conteneurName;
        this.lenConteneur=lenConteneur;
    }
    saveAll(){
        this.objects=[]
        for (let i=0;i<this.lenConteneur;i++){
            let monObjet=gestionnaireEvents.emit(`${this.conteneurName}-${i}-getObject`);
            this.objects.push(monObjet);
        }
        console.log(this.objects)
    }

}

export default Saver;