const mobileMenu = document.querySelector('.mobile-menu');
const headerArea = document.querySelector('.header-area');
const navbarLinks = document.querySelectorAll('.menu a');

// Get the offset position of the navbar
const sticky = headerArea.offsetTop;

console.log(sticky)

// Mobile Menu Toggle
function closeMenu() {
    headerArea.classList.remove("open");
    document.body.classList.remove("stop-scroll");
}

mobileMenu.addEventListener('click', () => {
    if (!headerArea.classList.contains("open")) {
        headerArea.classList.add("open");
        document.body.classList.add("stop-scroll");
    } else {
        closeMenu();
    }
});

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    })
})

// Add the sticky class to the header when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position
function stickyMenu() {
	if (window.pageYOffset > sticky) {
    	headerArea.classList.add("sticky");
  	} else {
    	headerArea.classList.remove("sticky");
  	}
}

/* Sticky Menu On Scroll */
window.onscroll = () => {
	stickyMenu();
};

