var typed = new Typed(".text", {
    strings: ["Graphic Designer", "Motion Design", "Frontend Developer"],
    typeSpeed: 150,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});


ScrollReveal().reveal('.home, .about, .favourite, .skill, .portfolio, SlickSlick, contact', {
    distance: '20px',
    interval: 100,
    opacity: 0,
    viewFactor: 0.1,
    duration: 500,
    easing: 'ease-in-out',
    origin: 'bottom'
});