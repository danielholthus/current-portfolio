const windowWidth = window.innerWidth;

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
    }
});

tl1.from('.progress-bar', {scaleX: 0.05, transformOrigin: "left center", ease: "none"});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.header',
        start: '0%',
        end: '100%',
        scrub: true,
        pin: '.title'
    }
});

let tl2b = gsap.timeline({
    scrollTrigger: {
        trigger: '.header',
        start: '0%',
        end: '100%',
        scrub: true,
        pin: '.contributions'
    }
});

tl2.to('.title', {opacity: 0, xPercent: '-50'});

tl2.from('.contributions', {opacity: 0, xPercent: '50'});

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home-page',
        scrub: 0.5,
        end: "20% top",
    }
});

tl3.fromTo('.homepage-title', {x: '-100%'}, {x: '-30%'});

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact-page',
        scrub: 0.5,
        end: "20% top",
    }
});

tl4.fromTo('.contact-page-title', {x: windowWidth}, {x: '-30%'});

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.feedback-page',
        scrub: 0.5,
        end: "20% top",
    }
});

tl5.fromTo('.feedback-page-title', {x: '-100%'}, {x: '-30%'});

let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: '.user-cards',
        scrub: 0.5,
        end: "20% top",
    }
});

tl6.fromTo('.user-cards-title', {x: windowWidth}, {x: '-30%'});

let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: '.user-onboarding',
        scrub: 0.5,
        end: "20% top",
    }
});

tl7.fromTo('.user-onboarding-title', {x: '-100%'}, {x: '-35%'});

let tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: '.messenger',
        scrub: 0.5,
        end: "20% top",
    }
});

tl8.fromTo('.messenger-title', {x: windowWidth}, {x: '-30%'});