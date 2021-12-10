// //if page reloads, always scroll back to splash page
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

// -----
// enable scroll effect from navbar items without adding anything to URL

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

// -----
// event listeners

var logo = document.querySelector('.name-logo');
logo.addEventListener("click", function() {
    window.scrollTo(0, 0)
});
window.addEventListener('resize', function(){
    logoContent = logo.innerHTML;
    logo.innerHTML = logoContent;
});

var scrollarrow = document.querySelector('.scrollarrow');
scrollarrow.addEventListener("click", function() {
    document.getElementById('projects').scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
});

var emailDiv = document.querySelector('.contact-email');
var emailHover = document.querySelector('.email-hover');
var emailAddress = document.querySelector('.email-address');
var copyText = document.querySelector('.copy-text');
emailDiv.addEventListener("mouseover", function() {
    console.log('got hovered')
    emailHover.style.backgroundColor = "#2b60ffc2";
    emailAddress.style.opacity = "0.1";
    copyText.style.opacity = "1";
});
emailDiv.addEventListener("mouseout", function() {
    console.log('got unhovered')
    emailHover.style.backgroundColor = "transparent";
    emailAddress.style.opacity = "1";
    copyText.style.opacity = "0";
});
emailDiv.addEventListener("click", function(){
    copyText.innerHTML = "Copied!&nbsp &nbsp &nbsp &nbsp &nbsp";
    setTimeout(function(){copyText.innerHTML = "Click to copy"}, 2500);
    navigator.clipboard.writeText('daniel@danielholthus.com');
});

// ----