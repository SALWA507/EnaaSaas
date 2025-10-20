function produitTableau(tab){
let produit = 1

for(let i = 0; i< tab.length; i ++){

    produit = produit * tab[i];

}
return produit;
}
const nombres = [1, 2, 4, 5];
console.log(produitTableau(nombres));







