const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector('#arrow_left');
const arrowRight = document.querySelector('#arrow_right');
const totalImage = slides.length;
let currentImg = document.querySelector('.banner-img');
const dotsContainer = document.querySelector('.dots');
let imageEnCours = 0;


// Créer dynamiquement les spans
for (let i = 0; i < totalImage; i++) {
    const dot = document.createElement('span');  // Créer un élément <span>
    dot.classList.add('dot');  // Ajouter la classe 'dot' à chaque span

	dot.addEventListener('click', function() {
        imageEnCours = i;  // Mettre à jour l'image en cours avec l'indice du dot cliqué
        changeSlide();     // Changer l'image affichée
    });

    if (i === 0) {
        dot.classList.add('dot_selected');  // Ajouter la classe 'dot_selected' au premier span
    }

    dotsContainer.appendChild(dot);  // Ajouter chaque span à la div 'dots'
};



arrowLeft.addEventListener('click', function(){
	imageEnCours--;
	if (imageEnCours < 0 ){
		imageEnCours = 3;
	}
	changeSlide();
});

arrowRight.addEventListener('click', function(){
	imageEnCours++;
	if (imageEnCours > 3 ){
		imageEnCours = 0;
	}
	changeSlide();
});


function changeSlide(){
	document.querySelector('.banner-img').classList.remove('animate');
	document.querySelector('.dot_selected').classList.remove('dot_selected');
	document.querySelectorAll('.dot')[imageEnCours].classList.add('dot_selected');	
	currentImg.src = "./assets/images/slideshow/"+slides[imageEnCours].image;
	document.querySelector('#banner p').innerHTML = slides[imageEnCours].tagLine;
	setTimeout(() => {
		document.querySelector('.banner-img').classList.add('animate');
	},50)
}

setInterval(() => {
	document.querySelector('.arrow').click();
}, 3000);