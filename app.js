const tl = gsap.timeline({ default: { ease: 'power1.out' } });

//gsap tl is used to create a timeline of our animations. Line 1 will be the norm for all project if i want to use this in the future. 

//the order of these is the order of the animations
//gsap uses the to.() method. First param is the element to control and second is what to do with it. 

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 })

tl.to('.slider', { y: '-100%', duration: 1.5, delay: 1 });

tl.to('.intro', { y: "-100%", duration: 1 }, "-=1");

tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });

tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');