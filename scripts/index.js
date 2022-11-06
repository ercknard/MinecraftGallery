var slideIndex = 1;
var autoScroll = true;

window.onload = function () {
    showSlide(slideIndex);
    resetScroll();
};

// Next/previous controls
function plusSlides(n) {
    showSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    autoScroll = false;
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function showSlides() {
    if (!autoScroll) {
        return;
    }
    var i;
    var slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 10000);
}
  
function resetScroll() {
    if (!autoScroll) {
        autoScroll = true;
        setTimeout(showSlides, 10000);
    }
    setTimeout(resetScroll, 10000); // Change image every 2 seconds
}