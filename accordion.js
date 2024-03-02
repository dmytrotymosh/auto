document.addEventListener('DOMContentLoaded', () => {
	const accordionItems = document.querySelectorAll('.accordion-item');
	accordionItems.forEach(item => {
		item.addEventListener('click', event => {
			self = event.currentTarget;
			self.classList.toggle('accordion-open');
		});
	});
});