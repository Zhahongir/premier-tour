document.addEventListener('DOMContentLoaded', () => {
	const accordeons = document.querySelectorAll('.faq__wrap__inner__accardeon');

	accordeons.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.faq__wrap__inner__accardeon__control');
			const content = self.querySelector('.faq__wrap__inner__accardeon__content');

			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});