const scrollIndicator = document.querySelector('#scrollDiv');

//innerHeight : renvoie la valeur en pixels de la partie visible de la fenêtre de navigation
//scrollHeight : est une mesure de la hauteur contenu d'un élément qui inclut le contenu débordant et non visible à l'écran
const maxHeight = window.document.body.scrollHeight - window.innerHeight;

console.log(window.innerHeight);
console.log(window.document.body.scrollHeight);

function moveScrollIndicator(e) {
    const percentage = ((window.scrollY) / maxHeight) * 100;
    
    
    scrollIndicator.style.width = percentage + '%'
}
window.addEventListener('scroll', moveScrollIndicator);