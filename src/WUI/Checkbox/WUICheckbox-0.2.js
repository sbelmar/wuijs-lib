/*
 * WUICheckbox - v0.2
 * Author: Sergio E. Belmar (sbelmar@wuijs.dev)
 * Copyright (c) Sergio E. Belmar (sbelmar@wuijs.dev)
 */

class WUICheckbox {

	static version = "0.2";
	static #defaults = {
		selector: "",
		value: "1",
		checked: false,
		enabled: true,
		onChange: null
	};

	#properties = {};
	#htmlElement;
	#htmlElements = {
		input: null
	};
	#drag;
	#initX;
	#direction;

	constructor(properties) {
		const defaults = structuredClone(WUICheckbox.#defaults);
		Object.entries(defaults).forEach(([key, defValue]) => {
			this[key] = key in properties ? properties[key] : defValue;
		});
	}

	get selector() {
		return this.#properties.selector;
	}

	get value() {
		return this.#htmlElements.input.value;
	}

	get checked() {
		return this.#htmlElements.input.checked;
	}

	get enabled() {
		return this.#properties.enabled;
	}

	get onChange() {
		return this.#properties.onChange;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.selector = value;
			this.#htmlElement = document.querySelector(value);
			this.#htmlElements.input = document.querySelector(value + " > input[type='checkbox']");
		}
	}

	set value(value) {
		if (typeof (value).match(/(string|number)/) && (typeof (this.#properties.enabled) == "undefined" || this.#properties.enabled)) {
			this.#htmlElements.input.value = value;
		}
	}

	set checked(value) {
		if (typeof (value) == "boolean" && (typeof (this.#properties.enabled) == "undefined" || this.#properties.enabled)) {
			this.#htmlElements.input.checked = value;
			if (value) {
				this.#htmlElements.input.setAttribute("checked", "true");
			} else {
				this.#htmlElements.input.removeAttribute("checked");
			}
			this.#setStyle();
		}
	}

	set enabled(value) {
		if (typeof (value) == "boolean") {
			this.#properties.enabled = value;
			this.#htmlElements.input.disabled = !value;
			if (value) {
				this.#htmlElements.input.removeAttribute("disabled");
			} else {
				this.#htmlElements.input.setAttribute("disabled", "true");
			}
			this.#setStyle();
		}
	}

	set onChange(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onChange = value;
		}
	}

	getElement() {
		return this.#htmlElement;
	}

	getFocusableElements() {
		return [this.#htmlElements.input];
	}

	getInput() {
		return this.#htmlElements.input;
	}

	#setStyle() {
		const checked = this.#htmlElements.input.checked;
		const disabled = this.#htmlElements.input.disabled;
		if (checked) {
			this.#htmlElement.classList.add("checked");
		} else {
			this.#htmlElement.classList.remove("checked");
		}
		if (disabled) {
			this.#htmlElement.classList.add("disabled");
		} else {
			this.#htmlElement.classList.remove("disabled");
		}
	}

	init() {
		this.#drag = false;
		this.#initX = null;
		this.#direction = null;
		["touchstart", "mousedown"].forEach(type => {
			this.#htmlElement.addEventListener(type, event => {
				if (!this.#drag) {
					const initX = (event.type == "touchstart" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
					this.#initX = initX;
					this.#drag = Boolean(type == "touchstart" || event.buttons == 1);
				}
			});
		});
		["touchmove", "mousemove"].forEach(type => {
			this.#htmlElement.addEventListener(type, event => {
				if (this.#drag) {
					const initX = parseFloat(this.#initX);
					const moveX = (event.type == "touchmove" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
					const diffX = moveX - initX;
					const direction = diffX > 10 ? "right" : diffX < -10 ? "left" : null;
					this.#direction = direction;
				}
			});
		});
		["touchend", "mouseup"].forEach(type => {
			document.addEventListener(type, () => {
				if (this.#drag) {
					this.#drag = false;
					this.#initX = null;
					if (this.#direction != null) {
						const event = new Event("change");
						this.checked = this.#direction == "left" ? false : this.#direction == "right" ? true : false;
						this.#htmlElements.input.dispatchEvent(event);
						setTimeout(() => {
							this.#direction = null;
						}, 400);
					}
				}
			});
		});
		this.#htmlElement.addEventListener("click", event => {
			if (event.target.classList.contains("wui-checkbox")) {
				setTimeout(() => {
					const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
					if (!mobile && this.#direction == null) {
						const event = new Event("change");
						this.checked = !this.checked;
						this.#htmlElements.input.dispatchEvent(event);
					}
				}, 10);
			}
		});
		this.#htmlElements.input.addEventListener("change", event => {
			this.#setStyle();
			if (typeof (this.#properties.onChange) == "function") {
				this.#properties.onChange(event, event.target.checked);
			}
		});
		this.#setStyle();
	}

	toggle() {
		this.checked = !this.#htmlElements.input.checked;
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