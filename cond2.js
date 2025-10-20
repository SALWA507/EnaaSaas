
const prompt = require("prompt-sync");


let nombre = prompt("Entrez un nombre : ");


if (nombre % 2 === 0) {
  console.log(nombre + " est un nombre pair.");
} else {
  console.log(nombre + " est un nombre impair.");
}
 