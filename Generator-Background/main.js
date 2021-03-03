const body = document.querySelector('body');
const button = document.querySelector('#button');
const p = document.querySelector('p');


function generator() {
//Nombre aléatoire entre 1 - 255
let red = Math.floor(Math.random() * (255 - 1 +1)) + 1;
let green = Math.floor(Math.random() * (255 - 1 +1)) + 1;
let blue = Math.floor(Math.random() * (255 - 1 +1)) + 1;
let alpha = Math.random().toFixed(2);

//Affichage du code couleur
p.innerHTML = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

return body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`

}



button.addEventListener('click', generator)
