let etudiant = {
nom : "Ahmed",
age : 24,
sePresenter:function(){
console.log("Bonjour, je m’appelle " + this.nom + "et j’ai" + this.age + "ans.");

}

};
etudiant.sePresenter();