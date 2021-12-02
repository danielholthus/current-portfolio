if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

//Get all the hyperlink elements
var links = document.getElementsByTagName("a");

//Browse the previously created array
Array.prototype.forEach.call(links, function(elem, index) {
  //Get the hyperlink target and if it refers to an id go inside condition
  var elemAttr = elem.getAttribute("href");
  if(elemAttr && elemAttr.includes("#")) {
    //Replace the regular action with a scrolling to target on click
    elem.addEventListener("click", function(ev) {
      ev.preventDefault();
      //Scroll to the target element using replace() and regex to find the href's target id
      document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
          });
    });
  }
});

var logo = document.querySelector('.name-logo');
logo.addEventListener("click", function() {
    window.scrollTo(0, 0)
});

var scrollarrow = document.querySelector('.scrollarrow');
scrollarrow.addEventListener("click", function() {
    document.getElementById('projects').scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
});

var email = document.querySelector('.contact-email');
email.addEventListener("click", function(){
    navigator.clipboard.writeText('daniel@danielholthus.com')
});