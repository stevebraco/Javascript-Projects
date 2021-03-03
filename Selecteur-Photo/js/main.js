"use strict";
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function onClickListItem() {
    
     //On active ou on désactive la classe selected du <li> sur lequel on a cliqué.
     this.classList.toggle("selected");
     // Recherche de toutes les balises <li> sélectionnées (classe selected).
     const selectedPhotos = document.querySelectorAll(".photo-list li.selected");
     //Mise à jour du nombre total de photos sélectionnées.
    total.textContent = selectedPhotos.length;
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
// Recherche de toutes les balises <li> (les photos) et de la balise <em> (nombre total).
const photos = document.querySelectorAll('.photo-list li');
const total  = document.querySelector('#total em');
// Installation d'un gestionnaire d'évènement clic sur toutes les balises <li>.

for(let i=0; i < photos.length; i++) {
     photos[i].addEventListener("click", onClickListItem);
}

