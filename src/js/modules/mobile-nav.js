function mobileNav() {
	// Mobile nav button
	// const navBtn = document.querySelector('.mobile-nav-btn');
	const navBtn = document.querySelector('.hamburger');
	const nav = document.querySelector('.mobile-nav');
	// const menuIcon = document.querySelector('.nav-icon');
	// const menuIcon = document.querySelector('.line');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		// menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};
}


// function mobileNav() {
// 	// Mobile nav button
// 	const navBtn = document.querySelector('.mobile-nav');
// 	const nav = document.querySelector('.mobile-nav-btn-box');
// 	const menuIcon = document.querySelector('.nav-icon');

// 	navBtn.onclick = function () {
// 		nav.classList.toggle('mobile-nav--open');
// 		menuIcon.classList.toggle('nav-icon--active');
// 		document.body.classList.toggle('no-scroll');
// 	};
// }





document.addEventListener('DOMContentLoaded', function () {
	const hamburgers = document.querySelectorAll('.hamburger');

	hamburgers.forEach(function (hamburger) {
		hamburger.addEventListener('click', function () {
			this.classList.toggle('is-active');
		});
	});
});
export default mobileNav;