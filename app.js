gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE
//.line-one 
const lineOneTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.line-one',
        start: 'top top',
        end: '+=500',
        pin: true,
        yoyo: true,
        markers: true,
        toggleActions: 'restart pause resume none',
    }
});

//selecting span elements
const spans = document.querySelectorAll('.line-one span');

lineOneTl.
from(spans, {
    y: '25vh',
    ease: 'none',
    duration: 1,
    opacity: 0,
    stagger: 0.2,
})
//yellow background
.to('.line-one', {
    backgroundColor: 'yellow',
    duration: 1,
})
//sun
.fromTo('.sun', {
    x: '15vw',
    duration: 1,
}, {
    x : '-5vw',
    duration: 1,
})
//moving sun outside
.fromTo('.sun', {
    x: '-5vw',
    duration: 2,
}, {
    x : '-100vw',
}, "+=1")
//moving spans outside
.fromTo(spans, {
    x: '25vw',
    duration: 1,
}, {
    x: '100vw',
})
;