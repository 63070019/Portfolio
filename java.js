const toggleButton = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');
sidebar.classList.toggle('hide');
toggleButton.addEventListener('click', function() {
	sidebar.classList.toggle('hide');
	toggleButton.classList.toggle('hide');
});

