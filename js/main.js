const btnIcon = document.getElementById('btn-icon');
const navMenu = document.getElementById('nav-menu');
const openMenu = () => {
	btnIcon.classList.toggle('fa-times');
	navMenu.classList.toggle('active');
};
btnIcon.addEventListener('click', openMenu);