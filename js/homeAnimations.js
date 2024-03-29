function nameLogoAnimation() {
  //timeline for name logo
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "0%",
      end: "50%",
      scrub: 1.2,
    },
  })
  if (!hasTouchScreen && pageWidth > 760 && !isSafari) {
    tl1.to(".name-logo", {
      cursor: "pointer",
      left: "5%",
      top: "2%",
      transform: "scale(1)",
    })
  } else {
    tl1
      .to(".name-logo", { opacity: 0, display: "hidden" })
      .to(".name-logo-alt", { opacity: 1, cursor: "pointer" })
  }
}

nameLogoAnimation()

// load all animations except for name animation AFTER the dom loads

window.onload = function () {
  //timeline for home square
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "0%",
      end: "60%",
      scrub: 0.1,
    },
  })

  tl2.to(".home-square", { rotation: 45, x: "100%", opacity: 0 })

  //timeline for typing text
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "0%",
      end: "50%",
      scrub: 0,
    },
  })

  tl3.to(".typing-text-container", { opacity: 0 })

  //timeline for name background
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "0%",
      end: "50%",
      scrub: 0,
    },
  })

  tl4.to(".name-background", { opacity: 0 })

  //timeline for project 1
  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".project-1",
      start: "30% bottom",
      end: "60% bottom",
      scrub: 0.5,
    },
  })
  tl5.from(".project-1", { opacity: 0, x: "-40px" })

  //timeline for project 2
  let tl5b = gsap.timeline({
    scrollTrigger: {
      trigger: ".project-2",
      start: "40% bottom",
      end: "70% bottom",
      scrub: 0.5,
    },
  })
  tl5b.from(".project-2", { opacity: 0, x: "40px" })

  //timeline for project 3
  let tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".project-3",
      start: "30% bottom",
      end: "60% bottom",
      scrub: 0.5,
    },
  })
  tl6.from(".project-3", { opacity: 0, x: "-40px" })

  //timeline for project 4
  let tl6b = gsap.timeline({
    scrollTrigger: {
      trigger: ".project-4",
      start: "40% bottom",
      end: "70% bottom",
      scrub: 0.5,
    },
  })
  tl6b.from(".project-4", { opacity: 0, x: "40px" })

  //timeline for project 5
  let tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: ".project-5",
      start: "30% bottom",
      end: "60% bottom",
      scrub: 0.5,
    },
  })
  tl7.from(".project-5", { opacity: 0, x: "-40px" })

  //timeline for project 6
  let tl7b = gsap.timeline({
    scrollTrigger: {
      trigger: ".project-6",
      start: "40% bottom",
      end: "70% bottom",
      scrub: 0.5,
    },
  })
  tl7b.from(".project-6", { opacity: 0, x: "40px" })

  //timeline for projects square
  let tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: ".projects",
      start: "top bottom",
    },
    repeat: -1,
  })
  tl8
    .to(".projects-square", {
      duration: 70,
      x: "102vw",
      y: "25vh",
      rotation: 340,
      ease: "linear",
    })
    .to(".projects-square", {
      duration: 70,
      x: "-60vw",
      y: "25vh",
      rotation: -360,
      ease: "linear",
    })

  // timeline for projects triangle
  let tl9 = gsap.timeline({
    scrollTrigger: {
      trigger: ".projects-triangle",
      start: "top bottom",
    },
    repeat: -1,
  })
  tl9
    .to(".projects-triangle", {
      duration: 70,
      x: "-102vw",
      y: "-20vh",
      rotation: -340,
      ease: "linear",
    })
    .to(".projects-triangle", {
      duration: 80,
      x: "100vw",
      y: "20vh",
      rotation: 360,
      ease: "linear",
    })

  // timeline for projects cross
  let tl10 = gsap.timeline({
    scrollTrigger: {
      trigger: ".projects-cross",
      start: "top bottom",
    },
    repeat: -1,
  })
  tl10
    .to(".projects-cross", {
      duration: 80,
      x: "102vw",
      y: "-40vh",
      rotation: 340,
      ease: "linear",
    })
    .to(".projects-cross", {
      duration: 90,
      x: "-100vw",
      y: "20vh",
      rotation: -360,
      ease: "linear",
    })

  //timeline for headshot
  let tl11 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top 90%",
      end: "bottom top",
      scrub: true,
    },
  })
  tl11.from(".headshot", { x: "70px", y: "-30px" })

  // timeline for about me content
  let tl12 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top 70%",
      end: "bottom bottom",
      scrub: true,
    },
  })
  tl12.from(".about-text", { x: "-40px", y: "40px" })
}
