let pageWidth = window.innerWidth;

function nameLogoAnimation() {
    //timeline for name logo

    let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.home',
            start: '0%',
            end: '35%',
            scrub: 1
        }
    });

    if (pageWidth >= 1500 && !(hasTouchScreen)) {
        tl1.to('.name-logo', {scale: 1, cursor: 'pointer', x: '-42vw', y: '-46vh'});
    }
    else if (pageWidth < 1500 && pageWidth >= 1400 && !(hasTouchScreen)) {
        tl1.to('.name-logo', {scale: 1, cursor: 'pointer', x: '-40vw', y: '-46vh'});
    }
    else if (pageWidth < 1400 && pageWidth >= 1200 && !(hasTouchScreen)) {
        tl1.to('.name-logo', {scale: 1, cursor: 'pointer', x: '-39vw', y: '-46vh'});
    }
    else if (pageWidth < 1200 && pageWidth >= 1000 && !(hasTouchScreen)) {
        tl1.to('.name-logo', {scale: 1, cursor: 'pointer', x: '-38vw', y: '-46vh'});
    }
    else if (pageWidth < 1000 && pageWidth > 760 && !(hasTouchScreen)) {
        tl1.to('.name-logo', {scale: 1, cursor: 'pointer', x: '-36vw', y: '-46vh'});
    }
    else {
        tl1.to('.name-logo', {opacity: 0, display: 'hidden'}).to('.name-logo-alt', {opacity: 1});
    }
}

nameLogoAnimation();

window.addEventListener("resize", function() {
    nameLogoAnimation();
    let nameLogo = document.querySelector('.name-logo');
    let nameLogoContent = nameLogo.innerHTML;
    nameLogo.innerHTML = nameLogoContent;

})

// checking if user screen is a touch screen

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

// load all animations except for name animation AFTER the dom loads

window.onload = function () {
    
    //timeline for home square
    
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.home',
            start: '0%',
            end: '60%',
            scrub: 0.3
        }
    });
    
    tl2.to('.home-square', {rotation: 45, x: '100%', opacity: 0});
    
    //timeline for typing text
    
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.home',
            start: '0%',
            end: '50%',
            scrub: 0.3
        }
    });
    
    tl3.to('.typing-text-container', {opacity: 0});
    
    //timeline for name background
    
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.home',
            start: '0%',
            end: '50%',
            scrub: 0.3
        }
    });
    
    tl4.to('.name-background', {opacity: 0});
    
    //timeline for project 1
    
    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: '.project-1',
            start: '30% bottom',
            end: '50% bottom',
            scrub: 1,
        }
    });
    
    tl5.from('.project-1', {opacity: 0, x: '-40px'});
    
    //timeline for project 2
    
    let tl5b = gsap.timeline({
        scrollTrigger: {
            trigger: '.project-2',
            start: '40% bottom',
            end: '60% bottom',
            scrub: 1,
        }
    });
    
    tl5b.from('.project-2', {opacity: 0, x: '40px'});
    
    //timeline for project 3 
    
    let tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: '.project-3',
            start: '30% bottom',
            end: '50% bottom',
            scrub: 1,
        }
    });
    
    tl6.from('.project-3', {opacity: 0, x: '-40px'});
    
    //timeline for project 4
    
    let tl6b = gsap.timeline({
        scrollTrigger: {
            trigger: '.project-4',
            start: '40% bottom',
            end: '60% bottom',
            scrub: 1,
        }
    });
    
    tl6b.from('.project-4', {opacity: 0, x: '40px'});
    
    //timeline for projects square 
    
    let tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: '.projects',
            start: 'top bottom',
        },
        repeat: -1
    });
    
    tl7.to('.projects-square', {duration: 70, x: '102vw', y: '25vh', rotation: 340, ease:'linear'})
        .to('.projects-square', {duration: 70, x: '-60vw', y: '25vh', rotation: -360, ease: 'linear'});
    
    // timeline for projects triangle
    
    let tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: '.projects-triangle',
            start: 'top bottom',
        },
        repeat: -1,
    });
        
    tl8.to('.projects-triangle', {duration: 70, x: '-102vw', y: '-20vh', rotation: -340, ease:'linear'})
        .to('.projects-triangle', {duration: 80, x: '100vw', y: '20vh', rotation: 360, ease: 'linear'});
    
    // timeline for projects cross
    
    let tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: '.projects-cross',
            start: 'top bottom',
        },
        repeat: -1
    });
    
    
    tl9.to('.projects-cross', {duration: 80, x: '102vw', y: '-40vh', rotation: 340, ease:'linear'})
        .to('.projects-cross', {duration: 90, x: '-100vw', y: '20vh', rotation: -360, ease: 'linear'});
    
    //timeline for headshot
    
    let tl10 = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: 'top 90%',
            end: 'bottom top',
            scrub: true,
        },
    });
    
    tl10.from('.headshot', {x: '70px', y: '-30px'});
    
    // timeline for about me content
    
    let tl11 = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            end: 'bottom bottom',
            scrub: true,
        },
    });
    
    tl11.from('.about-text', {x: '-40px', y: '40px'});
    
    // timeline for contact animation
    
    let tl12 = gsap.timeline({
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 90%',
            end: 'bottom bottom',
            scrub: 0.2,
        }
    });
    
    tl12.from('.contact-title-background', {scaleX: 0.2, transformOrigin: "left center", ease: "none"});

}