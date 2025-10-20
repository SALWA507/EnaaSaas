function sommeTableau(tab){
let somme = 0;
 
for(let i = 0; i < tab.length; i++){
  
    somme = somme + tab[i];
}
return somme;
}

const nombres = [ 1, 2, 3, 4];
console.log (sommeTableau(nombres));


