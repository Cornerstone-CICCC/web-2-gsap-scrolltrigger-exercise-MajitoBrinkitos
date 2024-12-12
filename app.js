gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE
//.line-one 
const lineOneTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.line-one',
        start: 'top top',
        end: '+=200',
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
});

//.line-two
const lineTwoTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.line-two',
        start: "+=200",
        markers: true,
        toggleActions: 'restart pause resume none',
    }
});

//selecting span elements
const spansOR = document.querySelectorAll('.line-two span');

lineTwoTl
.from(spansOR, {
    duration: 1,
    scale: 5,
    ease: "expo.out"
})
//
.to(spansOR, {
    y: -30,
    duration: 1,
    ease: "bounce.out",
    stagger: 0.2
});