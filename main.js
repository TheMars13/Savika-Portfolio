var typed = new Typed(".text", {
    strings: ["Graphic Designer", "Motion Design", "Frontend Developer"],
    typeSpeed: 150,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});


// Script navbar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

var closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var navbar = document.getElementById('navbar');
    navbar.classList.remove('active');
});




// Navbar Focus
var navbar = document.getElementById("navbar");

var links = navbar.getElementsByClassName("scroll-link");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var current = document.querySelector("#navbar .active");
        if (current) {
            current.classList.remove("active");
        }
        this.classList.add("active");
    });
}