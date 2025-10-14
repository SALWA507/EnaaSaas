const prompt = require("prompt-sync")();

let c = prompt("entrer température en celsius :");

F = ( c * 1.8 ) + 32 ;

console.log("fahrenheit :"+F);