document.addEventListener('DOMContentLoaded', () => {
	const burgerButton = document.querySelector('.header__burger');
	const modileNavigation = document.querySelector('.header__mobile-navigation');
	const modileNavigationItems = document.querySelectorAll('.mobile-navigation__item');
	const header = document.querySelector('.header');
	const mobileNav = document.querySelector('.mobile-navigation__wrapper');
	const burgerCircles = document.querySelectorAll('.burger-circle');
	burgerButton.addEventListener('click', () => {
		modileNavigation.classList.toggle('header__mobile-navigation--open');
		// burgerButton.classList.toggle('burger--active');
		header.classList.toggle('header--active');
		burgerCircles.forEach(circle => {
			circle.classList.toggle('burger-circle--active');
		});
	});
	modileNavigationItems.forEach(item => {
		item.addEventListener('click', () => {
			// burgerButton.classList.remove('burger--active');
			modileNavigation.classList.remove('header__mobile-navigation--open');
			header.classList.remove('header--active');
			burgerCircles.forEach(circle => {
				circle.classList.remove('burger-circle--active');
			});
		});
	});
	mobileNav.addEventListener('click', () => {
		modileNavigation.classList.remove('header__mobile-navigation--open');
		header.classList.remove('header--active');
		burgerCircles.forEach(circle => {
			circle.classList.remove('burger-circle--active');
		});
	});
});
