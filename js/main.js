// Fonction du bouton gauche // // Left button function
document.getElementById("previous").onclick = function() {
  previous();
};
// Fonction du bouton droit // Right button function
document.getElementById("next").onclick = function() {
  next();
};
// Carousel auto
var slide = 0; // Variable
//var time = setInterval(carousel, 5000); // Défile les images toutes les 5 secondes // Scroll images every 5 seconds

function carousel() {

  // Range les images/slides dans un tableau // Store images/slides in a table
  var table = Array.from(document.getElementsByClassName('slide'));

  //Permet le défilement des images // Allows scrolling of images
  for (i = 0; i < table.length; i++) {
    table[i].style.display = "none";
  }
  slide++;
  // Permet d'accéder à la première slide une fois arrivé à la fin // Allows access to the first slide once arrived at the end
  if (slide > table.length) {
    slide = 1;
  }
  // Permet aux slides d'être visibles à chaque défilement // Allows slides to be visible with each scroll
  table[slide - 1].style.display = "block";
}
// Appelle la fonction // Call the function
carousel();

// Fonction du bouton droit avec les détails // Right button function with details

// function next(next) {
//   var table = Array.from(document.getElementsByClassName('slide'));
//
//   for (i = 0; i < table.length; i++) {
//     table[i].style.display = "none";
//   }
//   slide++;
//   if (slide > table.length) {
//     slide = 1;
//   }
//   table[slide - 1].style.display = "block";
// }

// Fonction simplifiée // Simplified function
function next(next) {
  carousel();
}

// function previous(previous) {
//   var table = Array.from(document.getElementsByClassName('slide'));
//
//   for (i = 0; i < table.length; i++) {
//     table[i].style.display = "none";
//   }
//   slide--;
//   if (slide > table.length) {
//     slide = 1;
//   }
//   table[slide - 1].style.display = "block";
// }

function previous(previous) {
  carousel();
  slide = -1;
}
