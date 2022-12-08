document.onmousemove = mouseMove

function mouseMove(event){ 
	event = fixEvent(event)
	document.getElementById('mouseX').value = event.pageX
	document.getElementById('mouseY').value = event.pageY
}