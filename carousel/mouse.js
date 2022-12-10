
addEventListener('mousemove', (event) => {
	console.log ('mousemove: '+event.clientX+', '+event.clientY);
});

addEventListener('mousedown', () => {
	console.log ('mousedown')
});



let move = false;
let x = 0;
let y = 0;

const photo = document .getElementById ('photo');
photo .addEventListener ('mousedown', (event) => {
	const photo = document .getElementById ('photo');
	const photo_cell = document .getElementById ('photo_cell');
	photo .addEventListener('click', () => {
	photo_cell.classList.toggle('move');
	});
});
photo_cell.addEventListener('mousedown', (e) => {
	x = e.offsetX;
	y = e.offsetY;
	move = true;
  });
  photo_cell.addEventListener('mousemove', (e) => {
	if (move) {
	  drawLine(context, x, y, e.offsetX, e.offsetY);
	  x = e.offsetX;
	  y = e.offsetY;
	}
  });
  window.addEventListener('mouseup', (e) => {
	if (move) {
	  drawLine(context, x, y, e.offsetX, e.offsetY);
	  x = 0;
	  y = 0;
	  move = false;
	  photo_cell.classList.toggle('move');
	}
});


