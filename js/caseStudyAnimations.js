let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.header',
        start: '0%',
        end: '100%',
        scrub: true,
        pin: '.hoamsy-title'
    }
})

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.header',
        start: '0%',
        end: '100%',
        scrub: true,
        pin: '.contributions'
    }
})

tl1.to('.hoamsy-title', {opacity: 0, xPercent: '-50'});

tl1.from('.contributions', {opacity: 0, xPercent: '50'});