
function inverserTableau(tab){
let nouveauTab = [];

for(let i = tab.length - 1; i >= 0; i-- ){
    nouveauTab.push(tab[i]);
   } 
    return nouveauTab;
}
    let nombres = [1, 2, 1, 3, 1];
 let resultat = inverserTableau(nombres);
 console.log(resultat);

