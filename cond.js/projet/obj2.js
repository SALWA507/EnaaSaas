let classe = {
    etudiants: ["sara", "ahmed", "amine"],

    afficherEtudiants: function() {
        for (let i = 0; i < this.etudiants.length; i++) {
            console.log(this.etudiants[i]);
        }
    }
};


classe.afficherEtudiants();
