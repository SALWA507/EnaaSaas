function moyenne(tab){
    let somme = 0
for(let i = 0;i < tab.length; i++)
    {
    somme = somme + tab[i];

} 

let moyenne = somme / tab.length;

return moyenne;

}

const nombres = [ 1, 2, 3, 4];
console.log (moyenne(nombres));
