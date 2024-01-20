// Circle rotate
window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("circle");
  image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

// Slider
let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap.to(".slide-part", {
    xPercent: -100,
    repeat: -1,
    duration: 10,
    ease: "linear"
  }).totalProgress(0.5);

// cursor
const cursorDot = document.querySelector("[data-selector-dot]");
const cursorOutline = document.querySelector("[data-selector-outline]");

window.addEventListener("mousemove", function(e) {
	const posX = e.clientX;
	const posY = e.clientY;

	cursorDot.style.left = `${posX}px`;
	cursorDot.style.top = `${posY}px`;

	// cursorOutline.style.left = `${posX}px`;
	// cursorOutline.style.top = `${posY}px`;
	
	cursorOutline.animate({
		left: `${posX}px`,
		top: `${posY}px`
	}, {duration: 800, fill: "forwards"});
});

// Highlight images
function setupMouseTracking(focusId) {
  const focus = document.getElementById(focusId);

  window.addEventListener("mousemove", function (e) {
    const focusRect = focus.getBoundingClientRect();
    const posX = e.clientX - focusRect.width / 2;
    const posY = e.clientY - focusRect.height / 2;
    focus.style.left = `${posX}px`;
    focus.style.top = `${posY}px`;
  });
};

// Call the function for each "focus" element
setupMouseTracking("focus1");
setupMouseTracking("focus2");
setupMouseTracking("focus3");
setupMouseTracking("focus4");
setupMouseTracking("focus5");
setupMouseTracking("focus6");

// Move element
gsap.registerPlugin(ScrollTrigger);
// Hero
const animateX = (el, x, dur) => gsap.from(el, { 
	x: x, 
	duration: dur, 
	scrollTrigger: el
});
const animateY = (el, y, dur) => gsap.from(el, { 
	y: y, 
	duration: dur, 
	scrollTrigger: el 
});

// Navbar
animateX(".nav", 100, 1);

// Hero
const heroLeft = [".hero-text", ".greet"]; 
const heroRight = [".scroll", ".circle"];

heroLeft.map((el) => animateX(el, -200, 1));
heroRight.map((el) => animateX(el, 200, 1));
animateY(".socials", 100, 1);

// Intro
animateX(".intro-left", -200, 1);
animateY(".intro-right", 100, 1);
// dmenu
animateY(".dmenu.fashion a", 200, 1);
animateY(".dmenu-1.magazine a", 200, 1);
animateY(".dmenu.graphics a", 200, 1);
animateY(".dmenu-1.motion a", 200, 1);
animateY(".dmenu.products a", 200, 1);
animateY(".dmenu-1.blog a", 200, 1);
// Services
animateX(".serv p", 200, 1);
animateX(".service h1", -200, 1);
animateY(".companies", 100, 1);
animateY(".companies.images", 100, 1);
//contact
animateY(".contact", 100, 1);
