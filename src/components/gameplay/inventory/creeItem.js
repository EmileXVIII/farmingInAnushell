import Equipement from "./Equipement";
import Expendable from "./Expendable";

function createEquipement(name, iconAdresse, rarity = 'Common', att = 0, def = 0, esq = 0, pv = 0, critical = 0) {
    let fileSystem = new ActiveXObject("Scripting.FileSystemObject"),
        monfichier = fileSystem.OpenTextFile("./inventoryItems.css", 8, false),
        classObj = `object${name}`;
    monfichier.WriteLine(`/*css de ${name} START*/`);
    monfichier.WriteLine(`.object${name}{`);
    monfichier.WriteLine(`\tbackground: url(${iconAdresse});`);
    monfichier.WriteLine(`\tbackground-size: var(--taille-slot-objet);`);
    monfichier.WriteLine(`/*css de ${name} END*/`);
    monFichier.Close();
    return ({ objet: new Equipement(name, iconAdresse, rarity, att, def, esq, pv, critical), classObj })
}

function createExpendable(name, iconAdresse) {
    let fileSystem = new ActiveXObject("Scripting.FileSystemObject"),
        monfichier = fileSystem.OpenTextFile("./inventoryItems.css", 8, false),
        classObj = `object${name}`;
    monfichier.WriteLine(`/*css de ${name} START*/`);
    monfichier.WriteLine(`.object${name}{`);
    monfichier.WriteLine(`\tbackground: url(${iconAdresse});`);
    monfichier.WriteLine(`\tbackground-size: var(--taille-slot-objet);`);
    monfichier.WriteLine(`/*css de ${name} END*/`);
    monFichier.Close();
    return { objet: new Expendable(name, iconAdresse), classObj }
}
export {createEquipement,createExpendable}