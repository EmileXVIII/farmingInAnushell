import Equipement from "./Equipement";
import Expendable from "./Expendable";

function createEquipement(name, iconAdresse,pieceEquipement=null, rarity = 'Common', att = 0, def = 0, esq = 0, pv = 0, critical = 0) {
    /*let fileSystem = fs.createWriteStream("./inventoryItems.css", {'flags': 'a'}),//fs.writeFileSync("file.txt", 'Text', "UTF-8",{'flags': 'a'});
        //monfichier = fileSystem.OpenTextFile("./inventoryItems.css", 8, false),
        classObj = `object${name}`;
    fileSystem.WriteLine(`/*css de ${name} START/`);
    fileSystem.WriteLine(`.object${name}{`);
    fileSystem.WriteLine(`\tbackground: url(${iconAdresse});`);
    fileSystem.WriteLine(`\tbackground-size: var(--taille-slot-objet);`);
    fileSystem.WriteLine(`/*css de ${name} END/`);
    fileSystem.Close();**/
    return ( new Equipement(name, iconAdresse,pieceEquipement, rarity, att, def, esq, pv, critical))
}

function createExpendable(name, iconAdresse) {
    /*let fileSystem = fs.createWriteStream("./inventoryItems.css", {'flags': 'a'}]),//fs.writeFileSync("file.txt", 'Text', "UTF-8",{'flags': 'a'});
        //monfichier = fileSystem.OpenTextFile("./inventoryItems.css", 8, false),
        classObj = `object${name}`;
    fileSystem.WriteLine(`/*css de ${name} START`);
    fileSystem.WriteLine(`.object${name}{`);
    fileSystem.WriteLine(`\tbackground: url(${iconAdresse});`);
    fileSystem.WriteLine(`\tbackground-size: var(--taille-slot-objet);`);
    fileSystem.WriteLine(`/*css de ${name} END`);
    fileSystem.Close();*/
    return  new Expendable(name, iconAdresse)
}
let objetTest=createEquipement('objetTest','/img/epee1.jpeg')

export {createEquipement,createExpendable,objetTest}