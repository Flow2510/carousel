const bouton1 = document.querySelector('.bouton_1');
const bouton2 = document.querySelector('.bouton_2');
const bouton3 = document.querySelector('.bouton_3');
const bouton4 = document.querySelector('.bouton_4');

bouton1.addEventListener('click', function() {
    animeLeft();
});

function animeLeft() {
    // Remettre `bouton4` à sa position initiale avant chaque animation
    bouton4.style.transition = "none";
    bouton4.style.width = "50px";
    bouton4.style.left = "50px";

    // Lancer l'animation après un mini-délai pour bien réinitialiser
    setTimeout(() => {
        bouton4.style.transition = "width 0.5s ease, left 0.5s ease";

        // Étape 1 : Agrandir juste pour englober `bouton1`
        bouton4.style.width = "100px";  // Ajuste selon l'espace entre les boutons
        bouton4.style.left = "0px";     // Se décale pour bien englober `bouton1`

        // Étape 2 : Se rétrécir après 1 seconde
        setTimeout(() => {
            bouton4.style.width = "50px";
        }, 1000);

        // Étape 3 : Revenir à sa position initiale après 2 secondes
        setTimeout(() => {
            bouton4.style.left = "50px";
        }, 2000);
    }, 10); // Mini pause pour la réinitialisation
}

document.querySelector('.bouton_3').addEventListener('click', function(){
    animeRight();
});

function animeRight() {
    // Remettre `bouton4` à sa position initiale avant chaque animation
    bouton4.style.transition = "none";
    bouton4.style.width = "50px";
    bouton4.style.left = "50px";  // Position initiale pour bouton 4

    // Lancer l'animation après un mini-délai pour bien réinitialiser
    setTimeout(() => {
        bouton4.style.transition = "width 0.5s ease, left 0.5s ease";

        // Étape 1 : Agrandir juste pour englober le bouton de droite (bouton 3)
        bouton4.style.width = "100px";  // Ajuste selon l'espace entre les boutons
        bouton4.style.right = "0px";   // Se décale pour englober `bouton3`

        // Étape 2 : Se rétrécir après 1 seconde
        setTimeout(() => {
            bouton4.style.left = "100px";
            bouton4.style.width = "50px";
        }, 1000);

        // Étape 3 : Revenir à sa position initiale après 2 secondes
        setTimeout(() => {
            bouton4.style.left = "50px";  // Retour à la position du bouton 3
        }, 2000);
    }, 10); // Mini pause pour la réinitialisation
}




//quand je clique sur le bouton 1 le bouton 4 s'agrandit vers la gauche jusqu'a englober le bouton 1 (le bouton 2 reste et est positionne derriere).
//un fois qu'il a englober le bouton 1 il retrecit vers la gauche pour se positionner au dessus du 1
//ensuite le bouton se replace en position initial au dessus du 2


