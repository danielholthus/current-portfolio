let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '90%',
        scrub: 0.3
    }
});

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '40%',
        scrub: 0.3
    }
});

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '50%',
        scrub: 0.3
    }
});

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '35%',
        scrub: 0.3
    }
});

tl.fromTo('.name-logo', {scale: 3}, {scale: 0.5, top: 0, left: 0, x: '50%', y: '50%', cursor: 'pointer'});

tl3.fromTo('.square', {left: '80%'}, {left: '100%', opacity: 0, rotation: 90});

tl4.to('.circle', {opacity: 0});

tl5.to('.typing-text-container', {opacity: 0, left: '10%'});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '200%',
        scrub: 0.3,
        pin: true,
        pinSpacing: false,
    }
});