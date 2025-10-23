const prompt = require("prompt-sync")();

let livres = [];
let idlivres = 1;

function introdu() {
    const titre = prompt("entrerz le titre du livre");
    const année = parseInt(prompt("entrez lannée de publication : "));

    livres.push({ id: livres.length + 1, titre: titre, année: année, statut: false });
    console.log(livres);

};

function ajouter() {
    const numero = parseInt(prompt("entrer le numero de livres a ajouter : "));
    for ( let i = 0; i < numero; i++ ) {
       

    const ntitre = prompt("entrerz le titre du livre");
    const nannée = parseInt(prompt("entrez lannée de publication : "));

    livres.push({ id: livres.length + 1, titre: ntitre, année: nannée, statut: false });
    console.log(livres);
        console.log("numero de livre ( i+1 )")       


}
}
 
function afficher() {
    if (livres.length == 0) {
        console.log("auccun livre pour le moment ");
    }else{
        console.log("list des livres ");
        for (let i = 0; i < livres.length; i++) {
           aff = livres[i];
  console.log("id : " + livres[i].id +  " : Titre: " + livres[i].titre + " : Année: " + livres[i].année);
}

}
};


function trier(){
let ordre = prompt("pour ordre ascendant ecrit 'a' pour descendant 'd'")
if (ordre === "a"){
    livres.sort(function (a, b) {
        if (a.titre < b.titre) return -1;
        else if (a.titre > b.titre) return 1;
       else {return 0;}
    })}
else if (ordre === "d"){
    livres.sort(function (a, b) {
        if (a.titre > b.titre) return -1;
        else if (a.titre < b.titre) return 1;
        else {return 0;}
    })};


    for (let i = 0; i < livres.length; i++) {
        console.log(livres[i].titre);
    }

}

livres.sort(function (a, b) {
    if (a.titre < b.titre) return 1;
    if (a.titre > b.titre) return -1;
    return 0;
});


function trierAnnee(){

    livres.sort(function (a, b) {
        return a.année - b.année;
    });

    for (let i = 0; i < livres.length; i++) {
        console.log(livres[i].année);
    }
}

function LivresDisponibles() {
  console.log(" Livres disponibles :");
  for (let i = 0; i < livres.length; i++) {
    if (livres[i].statut === false) {
      console.log("id : " + livres[i].id +  " : Titre: " + livres[i].titre + " : Année: " + livres[i].année);

}
}
}
function rechercheid(){
const idn  = Number(prompt("entrerz id du livre"));
for (let i = 0; i < livres.length; i++) {
if(livres[i].id === idn ){

console.log("id : " + livres[i].id +  " : Titre: " + livres[i].titre + " : Année: " + livres[i].année)
}
}}


function afficherMenu() {
  let choix = "";
  while(choix!== "8") {


console.log("=== Menu de la bibliothéque ===");
console.log("1.function introdu : ");
console.log("2. function ajouter : ");
console.log("3.function afficher : ");
console.log("4.function trier : ");
console.log("5. function trierAnnee : ");
console.log("6.function LivresDisponibles : ");
console.log("7.function rechercheid :  ");
console.log("8.Quiter : ")

choix = prompt("enter un choix : ");

switch (choix) {
    case "1":
        introdu();
        break;

    case "2":
        ajouter();
        break;

    case "3":
        afficher();
        break;

    case "4":
        trier();
        break;
    case "5":
        trierAnnee();
         break;

    case "6":
        LivresDisponibles();
         break;

    case"7":
        rechercheid();
        break
    case "8":
        console.log(" fin de programme.");
        break;
}
}
}
afficherMenu();