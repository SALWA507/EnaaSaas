const prompt = require("prompt-sync")();

let nombres = [];
for (let i = 0; i < 5; i++) { 
let saisie = prompt ("veuillez entrer un entier (entier"+(i+1)+"/5:");

nombres.push(parseInt(saisie));
}

console.log("tableau original:",nombres.join(","));
nombres.reverse();

console.log("tableau inversé:",nombres.join(","));
