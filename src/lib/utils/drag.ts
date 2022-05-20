export function dragElement(el: HTMLElement) {
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

export function makeResizableDiv(element: HTMLElement) {
	const resizers = element.querySelectorAll('.resizer');
	console.log(resizers);
	const minimum_size = 20;
	let original_width = 0;
	let original_height = 0;
	let original_x = 0;
	let original_y = 0;
	let original_mouse_x = 0;
	let original_mouse_y = 0;
	for (let i = 0; i < resizers.length; i++) {
		const currentResizer = resizers[i];
		currentResizer.addEventListener('mousedown', function (e) {
			e.preventDefault();
			e.stopPropagation();
			original_width = parseFloat(
				getComputedStyle(element, null).getPropertyValue('width').replace('px', '')
			);
			original_height = parseFloat(
				getComputedStyle(element, null).getPropertyValue('height').replace('px', '')
			);
			original_x = element.getBoundingClientRect().left;
			original_y = element.getBoundingClientRect().top;
			// @ts-ignore
			original_mouse_x = e.pageX;
			// @ts-ignore
			original_mouse_y = e.pageY;
			window.addEventListener('mousemove', resize);
			window.addEventListener('mouseup', stopResize);
		});

		function resize(e: MouseEvent) {
			if (currentResizer.classList.contains('bottom-right')) {
				const width = original_width + (e.pageX - original_mouse_x);
				const height = original_height + (e.pageY - original_mouse_y);
				if (width > minimum_size) {
					element.style.width = width + 'px';
				}
				if (height > minimum_size) {
					element.style.height = height + 'px';
				}
			} else if (currentResizer.classList.contains('bottom-left')) {
				const height = original_height + (e.pageY - original_mouse_y);
				const width = original_width - (e.pageX - original_mouse_x);
				if (height > minimum_size) {
					element.style.height = height + 'px';
				}
				if (width > minimum_size) {
					element.style.width = width + 'px';
					element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
				}
			} else if (currentResizer.classList.contains('top-right')) {
				const width = original_width + (e.pageX - original_mouse_x);
				const height = original_height - (e.pageY - original_mouse_y);
				if (width > minimum_size) {
					element.style.width = width + 'px';
				}
				if (height > minimum_size) {
					element.style.height = height + 'px';
					element.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
				}
			} else {
				const width = original_width - (e.pageX - original_mouse_x);
				const height = original_height - (e.pageY - original_mouse_y);
				if (width > minimum_size) {
					element.style.width = width + 'px';
					element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
				}
				if (height > minimum_size) {
					element.style.height = height + 'px';
					element.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
				}
			}
		}

		function stopResize() {
			window.removeEventListener('mousemove', resize);
		}
	}
}
