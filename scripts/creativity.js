const typedTextSpan1 = document.querySelector(".typed-text1");
const cursorSpan1 = document.querySelector(".cursor1");

const textArray1 = [" is seeing what others see and thinking what no one else ever thought.   - Albert Einstein."];
const typing1Delay1 = 100;
const erasingDelay1 = 100;
const newTextDelay1 = 1000; // Delay between current and next text
let textArray1Index = 0;
let charIndex1 = 0;

function type() {
  if (charIndex1 < textArray1[textArray1Index].length) {
    if(!cursorSpan1.classList.contains("typing1")) cursorSpan1.classList.add("typing1");
    typedTextSpan1.textContent += textArray1[textArray1Index].charAt(charIndex1);
    charIndex1++;
    setTimeout(type, typing1Delay1);
  } 
  else {
    cursorSpan1.classList.remove("typing1");
  	setTimeout(erase, newTextDelay1);
  }
}

function erase() {
	if (charIndex1 > 0) {
    if(!cursorSpan1.classList.contains("typing1")) cursorSpan1.classList.add("typing1");
    typedTextSpan1.textContent = textArray1[textArray1Index].substring(0, charIndex1-1);
    charIndex1--;
    setTimeout(erase, erasingDelay1);
  } 
  else {
    cursorSpan1.classList.remove("typing1");
    textArray1Index++;
    if(textArray1Index>=textArray1.length) textArray1Index=0;
    setTimeout(type, typing1Delay1 + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray1.length) setTimeout(type, newTextDelay1 + 250);
});