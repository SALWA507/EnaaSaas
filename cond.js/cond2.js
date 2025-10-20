const prompt = require("prompt-sync")();



let num = prompt("entrer un nombre : ");


if (num > 0) {
    console.log("positive");
 } else if (num<0) {
    console.log("Negative");
    }else {
    console.log("Nul");
    }