//timeline for intro sequence
let tl = gsap.timeline({default: {ease: 'power1.out'}});

//timeline for name logo
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '35%',
        scrub: 1,
    }
});

//timeline for square
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '60%',
        scrub: 0.3
    }
});

//timeline for typing text
let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '50%',
        scrub: 0.3
    }
});

//timeline for name background
let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '50%',
        scrub: 0.3
    }
});

//timeline for projects title
let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: '.project-1',
        start: '15% 90%',
    }
});

//timeline for second row of projects 
let tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: '.project-3',
        start: '25% 90%',
    }
});

//timeline for projects shapes 
let tl9 = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects',
        start: 'top bottom',
    }
});

let tl10 = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects-triangle',
        start: 'top bottom',
    }
});

// tl.to('.intro-span-text', {y: '0%', duration: 1, stagger: 0.25})
// .to('.slider', {y: "-100%", duration: 1.5, delay: 3})
// .to('.intro', {y: "-100%", duration: 1}, "-=1")

tl2.to('.name-logo', {scale: 1, top: '2%', left: '4%', x: '50%', y: '50%'});

tl3.to('.home-square', {rotation: 90, left: '105%', opacity: 0});

tl5.to('.typing-text-container', {opacity: 0});

tl6.to('.name-background', {opacity: 0});

tl7.fromTo('.project-1', {opacity: 0, top: '20px'}, {opacity: 1, top: 0})
    .fromTo('.project-2', {opacity: 0, top: '20px'}, {opacity: 1, top: 0}, '-=0.2');

tl8.fromTo('.project-3', {opacity: 0, top: '20px'}, {opacity: 1, top: 0})
    .fromTo('.project-4', {opacity: 0, top: '20px'}, {opacity: 1, top: 0,}, '-=0.2');

tl9.to('.projects-square', {duration: 110, x: '100vw', y: '20vh', rotation: 360, ease:'linear'})
    .to('.projects-square', {duration: 120, x: '-90vw', y: '20vh', rotation: -360, ease: 'linear'})
    
    
tl10.to('.projects-triangle', {duration: 90, x: '-100vw', y: '-20vh', rotation: -360, ease:'linear'})
    .to('.projects-triangle', {duration: 105, x: '90vw', y: '20vh', rotation: 360, ease: 'linear'});

