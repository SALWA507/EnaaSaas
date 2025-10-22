const prompt = require("prompt-sync")();


let taches = [
{  id : 1, titre :"aller au marcher",terminee : false },
{id : 2, titre :"faire les devoir",terminee : false },
{ id : 3, titre :"lire un livre",terminee : true }
]

function afficherTaches() {
  for (let i = 0; i < taches.length; i++) {
    
    let tache = taches[i];
    
    let statut = tache.terminee ? "Terminée" : "En attente";
    
    console.log(tache.id ," ", tache.nom,"status: ",statut);
  }
}



function recherchertache(titre){

    for(let i = 0; i < taches.length;i++ ){
 
        let tache = taches[i];

        if(tache.titre === titre){

            return tache;
}
}

}

function ajouterTache(description){


    let nouvelleTache = {
    id : dernierId,
    titre : description,
    terminee : false

};
  tache.push(nouvelletache);
  console.log("tache ajoutée :",nouvelletache);

}

  function modifierTache(idRecherche, nouvelleDescription) {
  for (let i = 0; i < taches.length; i++) {
    if (taches[i].id === idRecherche) {
      taches[i].titre = nouvelleDescription;
      console.log("Tâche modifiée :", taches[i]);
      return;
    }
  }
  console.log("Aucune tâche trouvée avec l'id :", idRecherche);

}

function supprimerTache(idRecherche) {
  let nouvellesTaches = []; 

  for (let i = 0; i < taches.length; i++) {
    let tache = taches[i];
    if (tache.id !== idRecherche) {
      
      nouvellesTaches.push(tache);
    }
  }

  taches = nouvellesTaches; 
  console.log("Tableau mis à jour :", taches);
}

console.log( "=== to do list === ");
console.log("1.afficherTaches()");
console.log("2.rechercherTaches()");
console.log("3.ajouterTache()");
console.log("4.modifierTache()");
console.log("5.supprimerTache()");
 
choix=prompt("enter un choix");
switch (choix) {
      case "1":
        afficherTaches();
        break;
      
       case "3":
        rechercherTache();
        break;
       
       case "2":
        ajouterTache();
        break;
      
      case "4":
        modifierTache();
        break;
      case "5":
        supprimerTache();
        break;
 default:
        console.log(" invalide choise.");
    }
  
