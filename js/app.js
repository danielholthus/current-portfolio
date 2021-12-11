// //if page reloads, always scroll back to splash page
// if (history.scrollRestoration) {
//     history.scrollRestoration = 'manual';
// } else {
//     window.onbeforeunload = function () {
//         window.scrollTo(0, 0);
//     }
// }

//checking if user screen is a touch screen

var hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
    var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
    if (mQ && mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
    } else if ('orientation' in window) {
        hasTouchScreen = true; // deprecated, but good fallback
    } else {
        // Only as a last resort, fall back to user agent sniffing
        var UA = navigator.userAgent;
        hasTouchScreen = (
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        );
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

var nav = document.getElementById("nav");

var logo = document.querySelector('.name-logo');
if (hasTouchScreen && window.innerWidth < 760) {
    logo.style.position = "absolute";
    nav.style.position = "absolute";
}
logo.addEventListener("click", function() {
    window.scrollTo(0, 0)
});
window.addEventListener('resize', function(){
    logoContent = logo.innerHTML;
    logo.innerHTML = logoContent;
});

var mobileLogo = document.querySelector('.name-logo-alt');
mobileLogo.addEventListener("click", function() {
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

var emailDiv = document.querySelector('.contact-email');
var emailHover = document.querySelector('.email-hover');
var emailAddress = document.querySelector('.email-address');
var copyText = document.querySelector('.copy-text');
emailDiv.addEventListener("mouseover", function() {
    emailHover.style.backgroundColor = "#2b60ffc2";
    emailAddress.style.opacity = "0.1";
    copyText.style.opacity = "1";
});
emailDiv.addEventListener("mouseout", function() {
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