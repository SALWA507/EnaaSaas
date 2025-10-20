function compterOccurrences(tab, valeur)
{ 
    let compteur = 0
    for(let i = 0;i < tab.length;i++ ){
    if(tab[i]===valeur){
    compteur = compteur + 1;
  }  
  }  
return compteur; 
}
 let nombres = [1, 2, 1, 3, 1];
 let resultat = 
 compterOccurrences(nombres, 1);
 console.log (resultat);
