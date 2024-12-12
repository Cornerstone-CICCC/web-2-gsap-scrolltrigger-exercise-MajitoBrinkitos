gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE
//.line-one 
const lineOneTl = gsap.timeline({
    scrollTrigger: {
        trigger: 'line-one',
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

lineOneTl.from(spans, {
    y: '25vh',
    ease: 'none',
    duration: 1,
    opacity: 0,
    stagger: 0.2,
});