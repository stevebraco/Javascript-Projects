//Button
const buttons = document.querySelectorAll('button');

//Message
const message = document.querySelector('.message');

//Ordinateur
const ordinateur = document.getElementById('ordi');

//Affichage du score
const displayScore = document.querySelector('.score')

//Tableau Score Joueur Ordinateur
const score = [0,0];




// Lancement du jeu au click d'un button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playGame);
}

//LE JEU



function playGame(e) {

    //Valeur du button appuyé
    let player = e.target.innerText;
    console.log('player', player);

    //Valeur Aléatoire de l'ordinateur de 0 à 1.
    let ordinateur =  Math.random().toFixed(2);

    //Si Ordinateur est à inférieur à 0.33 il prendra la valeur de Papier
    if (ordinateur < 0.33) {
        ordinateur = 'Papier'
        console.log(ordinateur);

    //Si Ordinateur est à inférieur à 0.66 il prendra la valeur de Caillou
    } else if (ordinateur <= 0.66) {
        ordinateur = 'Caillou'
        console.log(ordinateur);

    //Sinon il prendra la valeur de Ciseaux
    } else {
        ordinateur = 'Ciseaux'
        console.log(ordinateur);
    
    }

    //Resultat
    let result = checkWinner(player, ordinateur);
    console.log(result);

    //Si le résultat est égale à Player on rajoute plus 1 au score du player
    if(result === 'Player') {
        //Affichage du resultat
        result += " gagné !";

        //+1 à player
        score[0]++;
    }

    //Si le résultat est égale à Ordinateur on rajoute plus 1 au score du ordinateur
    if(result === 'Ordinateur') {
        //Affichage du resultat
        result += " gagné !";

        //+1 à ordinateur
        score[1]++;
    }

    //Affichage du Score
    displayScore.innerHTML = `Player : [ ${score[0]}]  Ordinateur : [ ${score[1]}]`;

    //Affichage du Message 
    messenger('Player: <strong>' + player + '</strong> Computer: <strong>' + ordinateur + '</strong><br>' + result);

}

function checkWinner(player, ordinateur) {
    //Si joueur et ordinateur à la meme Valeur
    if(player === ordinateur) {
        return 'Draw';
    }

    //Si joueur obtient Caillou et que ordinateur oblient Papier
    if (player === 'Caillou'){
        if(ordinateur === 'Papier') {
            return 'Ordinateur';

        } else {
            return 'Player';
        }
    }

    //Si joueur obtient Papier et que ordinateur oblient Ciseaux
    if (player === 'Papier'){
        if(ordinateur === 'Ciseaux') {
            return 'Ordinateur';

        } else {
            return 'Player';
        }
    }

    //Si joueur obtient Ciseaux et que ordinateur oblient Caillou
    if (player === 'Ciseaux'){
        if(ordinateur === 'Caillou') {
            return 'Ordinateur';

        } else {
            return 'Player';
        }
    }


}

//Function Message
function messenger(selectionMessage){
    message.innerHTML = selectionMessage;
}