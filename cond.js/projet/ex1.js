const prompt = require("prompt-sync")();

function addition (a,b){
 
    resultat = a + b; 
    return resultat;
    console.log(resultat)
}

function Soustraction (a,b){
resultat = a - b;
return resultat;
    
}

function Multiplication(a,b){

    resultat = a * b;
    return resultat;
}

function Division(a,b){
resultat = a / b;
return resultat;
} 

function Puissance (a,b){
resultat = a ** b;
return resultat;
}

function Racinecarrée(a){

let racineCarree = Math.sqrt(a);

}

function Factorielle (a){
for(i = 2; i<= a; i++);
resultat *=i;
return resultat;

}

console.log("1.addition 2.soustraction 3.multiplication 4.division 5.puissance 6.racinecarrée 7.factorielle " );
let choix = parseInt( prompt("entrer un choix :"));
Tableau = [];
let resultat;


if(choix >= 1 && choix <=5){

let a= parseInt(prompt("entrer un nombre 1 :"));
let b= parseInt(prompt("entrer un nombre 2 :"));


switch(choix){
    case 1:  
    resultat = addition(a, b);
    
    Tableau.push(resultat);
    break;

    case 2:  
    resultat = Soustraction(a, b);
    Tableau.push(resultat);
    break;

    case 3:  
    resultat = multiplication(a, b);
    Tableau.push(resultat);

    break;
    case 4:  
    resultat = division(a, b);
    Tableau.push(resultat);
    break;

    case 5:  
    resultat = puissance(a, b);
    Tableau.push(resultat);
    break;

}

}

else if (choix >= 6 && choix <=7){


    let a= parseInt(prompt("entrer un nombre 1 :"));

switch(choix){

    case 6:  
    resultat = racinecarrée(a, b);
    Tableau.push(resultat);
    break;


case 7:  
    resultat = Factorielle(a, b);
    Tableau.push(resultat);
    break;
}
}

console.log(resultat);
