import Equipement from "./Equipement";
import Expendable from "./Expendable";
import fs from 'fs';

function createEquipement(name, iconAdresse, classObj, rarity = 'Common', att = 0, def = 0, esq = 0, pv = 0, critical = 0) {
    /*let fileSystem = fs.createWriteStream("./inventoryItems.css", {'flags': 'a'}),//fs.writeFileSync("file.txt", 'Text', "UTF-8",{'flags': 'a'});
        //monfichier = fileSystem.OpenTextFile("./inventoryItems.css", 8, false),
        classObj = `object${name}`;
    fileSystem.WriteLine(`/*css de ${name} START/`);
    fileSystem.WriteLine(`.object${name}{`);
    fileSystem.WriteLine(`\tbackground: url(${iconAdresse});`);
    fileSystem.WriteLine(`\tbackground-size: var(--taille-slot-objet);`);
    fileSystem.WriteLine(`/*css de ${name} END/`);
    fileSystem.Close();**/
    return ({ objet: new Equipement(name, iconAdresse, rarity, att, def, esq, pv, critical), classObj })
}

function createExpendable(name, iconAdresse,classObj) {
    /*let fileSystem = fs.createWriteStream("./inventoryItems.css", {'flags': 'a'}]),//fs.writeFileSync("file.txt", 'Text', "UTF-8",{'flags': 'a'});
        //monfichier = fileSystem.OpenTextFile("./inventoryItems.css", 8, false),
        classObj = `object${name}`;
    fileSystem.WriteLine(`/*css de ${name} START`);
    fileSystem.WriteLine(`.object${name}{`);
    fileSystem.WriteLine(`\tbackground: url(${iconAdresse});`);
    fileSystem.WriteLine(`\tbackground-size: var(--taille-slot-objet);`);
    fileSystem.WriteLine(`/*css de ${name} END`);
    fileSystem.Close();*/
    return { objet: new Expendable(name, iconAdresse), classObj }
}
export {createEquipement,createExpendable}