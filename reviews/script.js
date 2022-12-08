const form = document.getElementById('message');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const data = new FormData(form);
	fetch('/add-review.php', {
		method: 'POST',
		body: new FormData(form),
	});
    })
