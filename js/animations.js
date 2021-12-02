//timeline for name logo
let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '35%',
        scrub: 1,
    }
});

//timeline for home square
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '60%',
        scrub: 0.3
    }
});

//timeline for typing text
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '50%',
        scrub: 0.3
    }
});

//timeline for name background
let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '50%',
        scrub: 0.3
    }
});

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

//timeline for projects square 
let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects',
        start: 'top bottom',
    },
    repeat: -1
});

//timeline for projects triangle
let tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects-triangle',
        start: 'top bottom',
    },
    repeat: -1,
});

//timeline for projects cross
let tl9 = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects-cross',
        start: 'top bottom',
    },
    repeat: -1
});

//timeline for about me content
let tl11 = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        end: '70% top',
        scrub: true,
    },
});

//timeline for headshot
let tl10 = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        end: 'bottom top',
        scrub: true,
    },
});

//timeline for contact animation
let tl12 = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 90%',
        end: 'bottom bottom',
        scrub: 0.1,
    }
});

tl1.to('.name-logo', {scale: 1, cursor: 'pointer', x: '-43vw', y: '-45.5vh'})

tl2.to('.home-square', {rotation: 45, x: '100%', opacity: 0});

tl3.to('.typing-text-container', {opacity: 0});

tl4.to('.name-background', {opacity: 0});

tl5.fromTo('.project-1', {opacity: 0, top: '20px'}, {opacity: 1, top: 0})
    .fromTo('.project-2', {opacity: 0, top: '20px'}, {opacity: 1, top: 0}, '-=0.2');

tl6.fromTo('.project-3', {opacity: 0, top: '20px'}, {opacity: 1, top: 0})
    .fromTo('.project-4', {opacity: 0, top: '20px'}, {opacity: 1, top: 0,}, '-=0.2');

tl7.to('.projects-square', {duration: 60, x: '102vw', y: '20vh', rotation: 340, ease:'linear'})
    .to('.projects-square', {duration: 70, x: '-100vw', y: '20vh', rotation: -360, ease: 'linear'});
    
    
tl8.to('.projects-triangle', {duration: 70, x: '-102vw', y: '-20vh', rotation: -340, ease:'linear'})
    .to('.projects-triangle', {duration: 80, x: '100vw', y: '20vh', rotation: 360, ease: 'linear'});

tl9.to('.projects-cross', {duration: 80, x: '102vw', y: '-80vh', rotation: 340, ease:'linear'})
    .to('.projects-cross', {duration: 90, x: '-100vw', y: '20vh', rotation: -360, ease: 'linear'});

tl10.to('.headshot', {x: '-15px', y: '80px'});

tl11.to('.about-content', {y: '-76px', x: '15px'});

tl12.from('.contact-title-background', {scaleX: 0.2, transformOrigin: "left center", ease: "none"});