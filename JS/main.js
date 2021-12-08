const burger = document.querySelector('.nav__burger');
const menu = [document.querySelector('.nav__list'), document.querySelector('.nav__contact')];


burger.onclick = () => {
	if (window.getComputedStyle(menu[0]).display === 'none') {
		menu.forEach(el => {
			el.style.display = 'flex';
		})
	} else {
		menu.forEach(el => {
			el.style.display = 'none';
		})
	}
}

window.onresize = () => {
	if (window.screen.width > 768) {
		menu[1].style.display = 'block';
	} else if (window.screen.width < 769) {
		menu[1].style.display = 'none';
	}
}