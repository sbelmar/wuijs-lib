/*
 * WUIButton - v0.1
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIButton {

	static version = "0.1";
	static #defaults = {
		selector: "",
		text: "",
		selectable: false,
		locked: false,
		enabled: true,
		onClick: null
	};

	constructor(properties) {
		Object.keys(WUIButton.#defaults).forEach(prop => {
			this[prop] = typeof (properties) != "undefined" && prop in properties ? properties[prop] : prop in WUIButton.#defaults ? WUIButton.#defaults[prop] : null;
		});
	}

	get selector() {
		return this._selector;
	}

	get text() {
		return this._text;
	}

	get selectable() {
		return this._selectable;
	}

	get locked() {
		return this._locked;
	}

	get enabled() {
		return this._enabled;
	}

	get onClick() {
		return this._onClick;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
		}
	}

	set text(value) {
		if (typeof (value) == "string" && value != "") {
			this._text = value;
			this._element.innerHTML = value;
		}
	}

	set selectable(value) {
		if (typeof (value) == "boolean") {
			this._selectable = value;
		}
	}

	set locked(value) {
		if (typeof (value) == "boolean") {
			this._locked = value;
		}
	}

	set enabled(value) {
		if (typeof (value) == "boolean") {
			this._enabled = value;
			this._element.disabled = !value;
			if (value) {
				this._element.removeAttribute("disabled");
			} else {
				this._element.setAttribute("disabled", "true");
			}
			this.#setStyle();
		}
	}

	set onClick(value) {
		if (typeof (value) == "function") {
			this._onClick = value;
		}
	}

	getElement() {
		return this._element;
	}

	#setStyle() {
		const disabled = this._element.disabled;
		if (disabled) {
			this._element.classList.add("disabled");
		} else {
			this._element.classList.remove("disabled");
		}
	}

	init() {
		this._element.addEventListener("click", event => {
			this.#setStyle();
			if (this._selectable && this._enabled) {
				this._element.classList.toggle("selected");
			}
			if (!this._locked && this._enabled && typeof (this._onClick) == "function") {
				this._onClick(event);
			}
		});
	}

	focus() {
		this._element.focus();
	}

	select() {
		if (this._selectable && this._enabled) {
			this._element.classList.add("selected");
		}
	}

	unselect() {
		if (this._selectable && this._enabled) {
			this._element.classList.remove("selected");
		}
	}

	isSelected() {
		if (this._selectable && this._enabled) {
			return this._element.classList.contains("selected");
		}
		return false;
	}
}
/*
Generated HTML code:
<button class="wui-button"></button>
*/