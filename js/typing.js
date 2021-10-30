const typedTextSpan = document.querySelector('.typing-text');
const cursorSpan = document.querySelector(".typing-text-cursor");

const textArray = ["full-stack web developer", "computer science graduate", "coffee guzzler", "dog smotherer"];
const typingDelay = 70;
const erasingDelay = 35;
const newTextDelay = 4000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length){
        if(!cursorSpan.classList.contains("is-typing")) cursorSpan.classList.add("is-typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        //time to erase
        cursorSpan.classList.remove("is-typing");
  	    setTimeout(erase, newTextDelay);
    }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("is-typing")) cursorSpan.classList.add("is-typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("is-typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, 1000);
});