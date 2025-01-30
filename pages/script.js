const tl2 = gsap.timeline();
tl2.from(".logo", {
   y: -30,
   opacity: 0,
   duration: 1,
   delay: 0.5
})

tl2.from(".nav-links li", {
   y: -30,
   opacity: 0,
   stagger: 0.25,
   duration: 1
})

var tl = gsap.timeline()
tl.from("h1", {
   y: -20,
   opacity: 0,
   delay: 0.5,
   duration: 1
})
tl.from(".content-wrapper p", {
   y: -20,
   opacity: 0,
   delay: 0.5,
   duration: 1
})
tl.from(".hero-buttons a", {
   y: 30,
   duration: 1,
   opacity: 0,
   stagger: 0.25
})

const cursor = document.querySelector("#cursor");
const body = document.querySelector("body")

body.addEventListener("mousemove", function (e) {
   gsap.to(cursor, {
      x: e.x, y: e.y
   })
})
