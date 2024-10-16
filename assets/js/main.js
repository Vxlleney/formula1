// ----------------- NAVBAR MENU  ----------------- //

const navResponsive = document.querySelector('.nav-menu');

function toggleMenu() {

    if (navResponsive.classList.contains('active')) {
        navResponsive.classList.remove('active');
        document.body.style.overflow = null;

        delay(300).then(() => navResponsive.classList.add('none'));
        delay(300).then(() => document.body.style.overflow = null);

    } else {

        navResponsive.classList.remove('none');

        delay(100).then(() => navResponsive.classList.add('active'));
        delay(100).then(() => document.body.style.overflow = 'hidden');
    }
}


// ----------------- INFOS DRIVERS TOGGLE ----------------- //

// Fonction sans responsive
function viewInfosDrivers(namePilote) {

    let piloteSelectedId = document.getElementById('card-' + namePilote);
    let piloteCard = document.getElementById('drivers');
    
    // Permet de cacher toutes les cartes pilotes
    if (piloteCard.classList.contains('none')) {
        piloteCard.classList.remove('none');
    } else {
        piloteCard.classList.add('none');
        console.log("Hide ajouté");
    }

    // Permet d'affiche les infos précis d'un pilote sur toute la page
    if (piloteSelectedId.classList.contains('active')) {
        piloteSelectedId.classList.remove('active');
        console.log("Active retiré");
    } else {
        piloteSelectedId.classList.add('active');
        console.log("Active ajouté");
    }

}

// Fonction responsive
function viewInfosDriversResponsive(namePilote) {

    let piloteSelectedClass = "." + namePilote;

    let infosDriversResponsive = document.querySelector(piloteSelectedClass);
    let iconInfosDrivers = document.getElementById(namePilote);

    // Permet de cacher ou non le menu d'infos (en lien avec la flèche en dessous)
    if (infosDriversResponsive.classList.contains('active')) {
        infosDriversResponsive.classList.remove('active');
    } else {
        infosDriversResponsive.classList.add('active');
    }

    // Permet de changer le sens de la flèche si le menu est descendu ou non
    if (iconInfosDrivers.classList.contains('uil-angle-down')) {
        iconInfosDrivers.classList.remove('uil-angle-down');
        iconInfosDrivers.classList.add('uil-angle-up');
    } else {
        iconInfosDrivers.classList.remove('uil-angle-up');
        iconInfosDrivers.classList.add('uil-angle-down');
    }
}
// ----------------- DELAI FONCTION  ----------------- //

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}



// ----------------- BARRE RECHERCHE CIRCUITS ----------------- //

// Récupérer l'élément input
const inputElementCircuit = document.getElementById('search-races-input');

// Récupérer tous les éléments avec la classe "track"
const trackElementsCircuit = document.getElementsByClassName('cards-races');

function filterElementsCircuit() {
    // Récupérer le texte saisi dans l'input
    const searchTextCircuit = inputElementCircuit.value.toLowerCase();

    // Parcourir les éléments et vérifier si leurs mots-clés correspondent au texte recherché
    for (let i = 0; i < trackElementsCircuit.length; i++) {
        const elementCircuit = trackElementsCircuit[i];
        const keywordsCircuit = elementCircuit.getAttribute('data-keywords').toLowerCase();

        // Séparer les mots-clés
        const keywordArrayCircuit = keywordsCircuit.split(',');

        // Vérifier si au moins un des mots-clés correspond au texte recherché
        const foundCircuit = keywordArrayCircuit.some(keywordCircuit => keywordCircuit.trim().indexOf(searchTextCircuit) !== -1);

        // Afficher ou masquer l'élément en fonction du résultat  de la détection
        if (foundCircuit) {
            elementCircuit.style.display = 'flex';
        } else {
            elementCircuit.style.display = 'none';
        }
    }
}

inputElementCircuit?.addEventListener('input', filterElementsCircuit);



// ----------------- BARRE RECHERCHE PILOTES ----------------- //

// Récupérer l'élément input
const inputElementPilotes = document.getElementById('search-drivers-input');

// Récupérer tous les éléments avec la classe "track"
const trackElementsPilotes = document.getElementsByClassName('card-drivers');

function filterElementsPilotes() {
    // Récupérer le texte saisi dans l'input
    const searchTextPilotes = inputElementPilotes.value.toLowerCase();

    // Parcourir les éléments et vérifier si leurs mots-clés correspondent au texte recherché
    for (let i = 0; i < trackElementsPilotes.length; i++) {
        const elementPilotes = trackElementsPilotes[i];
        const keywordsPilotes = elementPilotes.getAttribute('data-keywords').toLowerCase();

        // Séparer les mots-clés
        const keywordArrayPilotes = keywordsPilotes.split(',');

        // Vérifier si au moins un des mots-clés correspond au texte recherché
        const foundPilotes = keywordArrayPilotes.some(keywordPilotes => keywordPilotes.trim().indexOf(searchTextPilotes) !== -1);

        // Afficher ou masquer l'élément en fonction du résultat de la détection
        if (foundPilotes) {
            elementPilotes.style.display = 'flex';
        } else {
            elementPilotes.style.display = 'none';
        }
    }
}

inputElementPilotes?.addEventListener('input', filterElementsPilotes);



// ----------------- SELECT PILOTES CATEGORIES ----------------- //


const listButton = document.querySelectorAll('.btn-container-drivers');
const titlePagePilotes = document.getElementById('title-drivers');

listButton.forEach((item) => {
    item.addEventListener('click', () => {
        clickEvent(item);
    });
});

function clickEvent(item) {
    document.querySelector(".selected").classList.remove('selected');
    item.classList.add('selected');

    switch (item.dataset.type) {
        case 'pilotes':
            titlePagePilotes.innerHTML = "Liste des pilotes";
            break;

        case 'teams':
            titlePagePilotes.innerHTML = "Liste des écuries";
            break;

        case 'championnat':
            titlePagePilotes.innerHTML = "Championnat du monde";
            break;
    }

    // peut servir pour la prochaine fois ahah
    console.log(item.dataset.type);
}

function toggleSectionPilotes(sectionName) {
    const allSectionsPilotes = document.querySelectorAll('.container-drivers, .container-teams, .container-championnat');
       
    // Retire ou ajoute le hide au barre de recherche et aux sections en même temps
    allSectionsPilotes.forEach(function(section) {
        if (section.classList.contains(sectionName)) {
            section.classList.remove('hide');
        } else {
            section.classList.add('hide');
        }
    });
}



// ----------------- SELECT TABLE CHAMPIONNAT ----------------- 

function toggleActiveClass(clickedButton) {
    // Retire la classe "active" et la classe de fondu de tous les boutons
    var allButtons = document.querySelectorAll('button');
    allButtons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Ajoute la classe "active" et la classe de fondu au bouton cliqué
    clickedButton.classList.add('active');
}