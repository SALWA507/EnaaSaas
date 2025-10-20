const prompt = require("prompt-sync")();
function doubler(tab){

let tableau =[];
for(i=0; i< tab.length; i++){

let somme = tab[i]*2;
 {
tableau.push(somme);
}

}
return tableau;
}
let tab = [2, 3, 4, 5,];
console.log(doubler(tab));