let tl = gsap.timeline({default: {ease: 'power1.out'}});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '70%',
        scrub: 1
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
        end: '35%',
        scrub: 0.3
    }
});

// let tl5 = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.home',
//         start: '0%',
//         end: '200%',
//         scrub: 0.5
//     }
// });

// let tl6 = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.home',
//         start: '0%',
//         end: '200%',
//         scrub: 0.5
//     }
// });

let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '35%',
        scrub: 0.3
    }
});

// tl.to('.intro-span-text', {y: '0%', duration: 1, stagger: 0.25})
// .to('.slider', {y: "-100%", duration: 1.5, delay: 3})
// .to('.intro', {y: "-100%", duration: 1}, "-=1")

tl2.to('.name-logo', {scale: 0.5, top: 0, left: 0, x: '50%', y: '50%', cursor: 'pointer'});

tl3.to('.square', {left: '100%', opacity: 0, rotation: 90});

tl4.to('.typing-text-container', {opacity: 0, left: '10%'});

// tl5.to('.end-of-header', {left: '5%'})

// tl6.to('.beginning-of-about', {left: '-5%'})

tl7.to('.name-background', {opacity: 0})

let tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '500%',
        scrub: 0.3,
        pin: true,
        pinSpacing: false,
    }
});