/*
 * WUICheckbox - v0.1
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUICheckbox {

	static version = "0.1";
	static #defaults = {
		selector: "",
		value: "1",
		checked: false,
		enabled: true,
		onChange: null
	};

	constructor(properties) {
		Object.keys(WUICheckbox.#defaults).forEach(prop => {
			this[prop] = typeof (properties) != "undefined" && prop in properties ? properties[prop] : prop in WUICheckbox.#defaults ? WUICheckbox.#defaults[prop] : null;
		});
	}

	get selector() {
		return this._selector;
	}

	get type() {
		return this.constructor.name;
	}

	get value() {
		return this._input.value;
	}

	get checked() {
		return this._input.checked;
	}

	get enabled() {
		return this._enabled;
	}

	get onChange() {
		return this._onChange;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
			this._input = document.querySelector(value + " > input[type='checkbox']");
		}
	}

	set value(value) {
		if (typeof (value).match(/(string|number)/) && (typeof (this._enabled) == "undefined" || this._enabled)) {
			this._input.value = value;
		}
	}

	set checked(value) {
		if (typeof (value) == "boolean" && (typeof (this._enabled) == "undefined" || this._enabled)) {
			this._checked = value;
			this._input.checked = value;
			if (value) {
				this._input.setAttribute("checked", "true");
			} else {
				this._input.removeAttribute("checked");
			}
			this.#setStyle();
		}
	}

	set enabled(value) {
		if (typeof (value) == "boolean") {
			this._enabled = value;
			this._input.disabled = !value;
			if (value) {
				this._input.removeAttribute("disabled");
			} else {
				this._input.setAttribute("disabled", "true");
			}
			this.#setStyle();
		}
	}

	set onChange(value) {
		if (typeof (value) == "function") {
			this._onChange = value;
		}
	}

	getElement() {
		return this._element;
	}

	getViewElements() {
		return [this._input];
	}

	getInput() {
		return this._input;
	}

	#setStyle() {
		const checked = this._input.checked;
		const disabled = this._input.disabled;
		if (checked) {
			this._element.classList.add("checked");
		} else {
			this._element.classList.remove("checked");
		}
		if (disabled) {
			this._element.classList.add("disabled");
		} else {
			this._element.classList.remove("disabled");
		}
	}

	init() {
		this._drag = false;
		this._initX = null;
		this._direction = null;
		["touchstart", "mousedown"].forEach(type => {
			this._element.addEventListener(type, event => {
				if (!this._drag) {
					const initX = (event.type == "touchstart" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
					this._initX = initX;
					this._drag = true;
				}
			});
		});
		["touchmove", "mousemove"].forEach(type => {
			this._element.addEventListener(type, event => {
				if (this._drag) {
					const initX = parseFloat(this._initX);
					const moveX = (event.type == "touchmove" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
					const diffX = moveX - initX;
					const direction = diffX > 10 ? "right" : diffX < -10 ? "left" : null;
					this._direction = direction;
				}
			});
		});
		["touchend", "mouseup"].forEach(type => {
			document.addEventListener(type, () => {
				if (this._drag) {
					this._drag = false;
					this._initX = null;
					if (this._direction != null) {
						const event = new Event("change");
						this.checked = this._direction == "left" ? false : this._direction == "right" ? true : false;
						this._input.dispatchEvent(event);
						setTimeout(() => {
							this._direction = null;
						}, 400);
					}
				}
			});
		});
		this._element.addEventListener("click", event => {
			if (event.target.classList.contains("wui-checkbox")) {
				setTimeout(() => {
					const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
					if (!mobile && this._direction == null) {
						const event = new Event("change");
						this.checked = !this.checked;
						this._input.dispatchEvent(event);
					}
				}, 10);
			}
		});
		this._input.addEventListener("change", event => {
			this.#setStyle();
			if (typeof (this._onChange) == "function") {
				this._onChange(event, event.target.checked);
			}
		});
	}

	toggle() {
		this.checked = !this._input.checked;
	}
}

/*
Generated HTML code:
<div class="wui-checkbox">
	<input type="checkbox" value="1">
</div>
DOM form field  struture:
<div class="field checkbox">
	<label for="wuiCheckbox"></label>
	<div class="wui-checkbox">
		<input type="checkbox" name="wuiCheckbox" value="1">
	</div>
</div>
*/