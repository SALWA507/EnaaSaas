const prompt = require("prompt-sync")();

const voiture = {
marque :"range rover",
modele : "sport",
annee : 2020, 

}


console.log(voiture.marque,voiture.annee);
voiture.annee = (Number(prompt("annee du modele : ")));
console.log(voiture.marque,voiture.annee);
voiture.couleur = (prompt("couleur du voiture : "));
console.log(voiture.marque,voiture.annee,voiture.couleur);
delete voiture.modele;





