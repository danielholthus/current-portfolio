// window.addEventListener("resize", function() {
//     location.reload();
// })

//timeline for name logo

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '35%',
        scrub: 1
    }
});

pageWidth = window.screen.width;

if (pageWidth >= 1500) {
    tl1.to('.name-logo', {scale: 1, cursor: 'pointer', x: '-42vw', y: '-46vh'});
}
if (pageWidth < 1500 && pageWidth >= 1400) {
    tl1.to('.name-logo', {scale: 1, cursor: 'pointer', x: '-40vw', y: '-46vh'});
}
if (pageWidth < 1400 && pageWidth >= 1200) {
    tl1.to('.name-logo', {scale: 1, cursor: 'pointer', x: '-39vw', y: '-46vh'});
}
if (pageWidth < 1200 && pageWidth >= 1000) {
    tl1.to('.name-logo', {scale: 1, cursor: 'pointer', x: '-38vw', y: '-46vh'});
}
if (pageWidth < 1000 && pageWidth > 760) {
    tl1.to('.name-logo', {scale: 1, cursor: 'pointer', x: '-36vw', y: '-46vh'});
}
if (pageWidth <= 760 && pageWidth > 660) {
    tl1.to('.name-logo', {scale: 1, cursor: 'pointer', x: '-32vw', y: '-46vh'});
}
if (pageWidth <= 660 && pageWidth > 500) {
    tl1.to('.name-logo', {scale: 1, cursor: 'pointer', x: '-28vw', y: '-46vh'});
}
if (pageWidth <= 500 && pageWidth > 400) {
    tl1.to('.name-logo', {scale: 1, cursor: 'pointer', x: '-24vw', y: '-46vh'});
}
if (pageWidth <= 400 && pageWidth > 300) {
    tl1.to('.name-logo', {scale: 1, cursor: 'pointer', x: '-20vw', y: '-46vh'});
}

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

// define the animation for large screens
if (pageWidth > 825) {

    //timeline for projects row 1
    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: '.project-1',
            start: '15% 90%',
        }
    });

    //timeline for projects row 2 
    let tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: '.projects',
            start: '25% top',
        }
    });

    tl5.fromTo('.project-1', {opacity: 0, top: '20px'}, {opacity: 1, top: 0})
    .fromTo('.project-2', {opacity: 0, top: '20px'}, {opacity: 1, top: 0}, '-=0.2');

    tl6.fromTo('.project-3', {opacity: 0, top: '20px'}, {opacity: 1, top: 0})
    .fromTo('.project-4', {opacity: 0, top: '20px'}, {opacity: 1, top: 0,}, '-=0.2');

} 
// define the animation for small screens
else {

    //timeline for project 1
    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: '.project-1',
            end: 'top 50%',
            scrub: .3,
        }
    });

    //timeline for project 2
    let tl5b = gsap.timeline({
        scrollTrigger: {
            trigger: '.project-2',
            end: 'top 50%',
            scrub: .3,
        }
    });

    //timeline for project 3 
    let tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: '.project-3',
            end: 'top 50%',
            scrub: .3,
        }
    });

    //timeline for project 4
    let tl6b = gsap.timeline({
        scrollTrigger: {
            trigger: '.project-4',
            end: 'top 50%',
            scrub: .3,
        }
    });

    tl5.fromTo('.project-1', {opacity: 0, right: '40px'}, {opacity: 1, right: 0})
    tl5b.fromTo('.project-2', {opacity: 0, left: '40px'}, {opacity: 1, left: 0});

    tl6.fromTo('.project-3', {opacity: 0, right: '40px'}, {opacity: 1, right: 0});
    tl6b.fromTo('.project-4', {opacity: 0, left: '40px'}, {opacity: 1, left: 0});
}

// timeline for projects square 

// let tl7 = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.projects',
//         start: 'top bottom',
//     },
//     repeat: -1
// });

// tl7.to('.projects-square', {duration: 70, x: '102vw', y: '25vh', rotation: 340, ease:'linear'})
//     .to('.projects-square', {duration: 70, x: '-60vw', y: '25vh', rotation: -360, ease: 'linear'});

// // timeline for projects triangle

// let tl8 = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.projects-triangle',
//         start: 'top bottom',
//     },
//     repeat: -1,
// });
    
// tl8.to('.projects-triangle', {duration: 70, x: '-102vw', y: '-20vh', rotation: -340, ease:'linear'})
//     .to('.projects-triangle', {duration: 80, x: '100vw', y: '20vh', rotation: 360, ease: 'linear'});

// // timeline for projects cross

// let tl9 = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.projects-cross',
//         start: 'top bottom',
//     },
//     repeat: -1
// });


// tl9.to('.projects-cross', {duration: 80, x: '102vw', y: '-40vh', rotation: 340, ease:'linear'})
//     .to('.projects-cross', {duration: 90, x: '-100vw', y: '20vh', rotation: -360, ease: 'linear'});

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
        markers: true
    },
});

tl11.from('.about-text', {x: '-40px', y: '40px'});

// timeline for contact animation
let tl12 = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 90%',
        end: 'bottom bottom',
        scrub: 0.1,
    }
});

tl12.from('.contact-title-background', {scaleX: 0.2, transformOrigin: "left center", ease: "none"});