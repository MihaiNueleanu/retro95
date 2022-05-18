export function dragElement(el: HTMLElement, resizable = false) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;

	el.onmousedown = dragMouseDown;

	function dragMouseDown(e: MouseEvent) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e: MouseEvent) {
		if (resizable) {
			if (e.offsetX > el.clientWidth - 50 || e.offsetY > el.clientHeight - 50) {
				// resizing
				e.preventDefault();

				const width = el.clientWidth + e.movementX;
				const height = el.clientHeight + e.movementY;

				el.style.width = width + 'px';
				el.style.height = height + 'px';

				// console.log(el.style.width);
				// console.log(el.style.height);

				return;
			}
		}

		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		el.style.top = el.offsetTop - pos2 + 'px';
		el.style.left = el.offsetLeft - pos1 + 'px';
	}

	function closeDragElement() {
		// stop moving when mouse button is released:
		document.onmouseup = null;
		document.onmousemove = null;
	}
}
