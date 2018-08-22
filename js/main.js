document.getElementById("previous").onclick = function() {
  previous()
};
document.getElementById("next").onclick = function() {
  next()
};

// function previous() {
//   var img = document.getElementsByClassName('slide');
//
//   slider--;
// }
//
// function next() {
//
//
//   slider++;
// }

var slider = 0;

function carousel() {
  var img = document.getElementsByClassName('slide');

  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  slider++;
  if (slider > img.length) {
    slider = 1;
  }
  img[slider - 1].style.display = "block";
  setTimeout(carousel, 3000);
}
carousel();
