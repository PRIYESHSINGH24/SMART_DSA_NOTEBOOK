gsap.from("#aim-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".mission-container",
        scroller: "body",
        scrub: 2,
        // markers: true,
        start: "top 50%",
        end: "top 10%",
    }
})

gsap.from(".values-container .value-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".values-container",
        scroller: "body",
        scrub: 2,
        // markers: true,
        start: "top 50%",
        end: "top 30%",
    }
})

