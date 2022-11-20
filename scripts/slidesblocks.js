var slideIndexs = 0;
carousels();

function carousels() {
  var q;
  var s = document.getElementsByClassName("mySlides-2");
  for (q = 0; q < s.length; q++) {
    s[q].style.display = "none"; 
  }
  slideIndexs++;
  if (slideIndexs > s.length) {slideIndexs = 1} 
  s[slideIndexs-1].style.display = "block"; 
  setTimeout(carousels, 5000); 
}