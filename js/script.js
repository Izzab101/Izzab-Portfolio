const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

// Show Menu when Click the Burger
// Hide Menu when Click the Overlay
if (burgerMenu && navbarMenu && bgOverlay) {
	burgerMenu.addEventListener("click", () => {
		navbarMenu.classList.toggle("is-active");
		bgOverlay.classList.toggle("is-active");
	});

	bgOverlay.addEventListener("click", () => {
		navbarMenu.classList.toggle("is-active");
		bgOverlay.classList.toggle("is-active");
	});
}

// Hide Menu when Click the Links
document.querySelectorAll(".menu-link").forEach((link) => {
	link.addEventListener("click", () => {
		navbarMenu.classList.remove("is-active");
		bgOverlay.classList.remove("is-active");
	});
});

var typed = new Typed('.box', {
	strings: ["MS OFFICE", "WEB-DEVELOPER", "CREATIVE-DESIGNER", "LOGO-DESIGNER"],
	typeSpeed: 40,
	backspaceSpeed: 20,
	backspaceDelay: 80,
	repeatDelay: 10,
	repeat: true,
	autoStart: true,
	startDelay: 10,
	loop: true,
  });