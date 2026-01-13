/*
 * WUICheckbox - v0.2
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUICheckbox {

	static version = "0.2";
	static #defaults = {
		selector: ".wui-checkbox",
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
	#dragInitX;
	#dragDirection;

	constructor(properties = {}) {
		const defaults = structuredClone(WUICheckbox.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
	}

	get selector() {
		return this.#properties.selector;
	}

	get value() {
		return (this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.value : this.#properties.value);
	}

	get checked() {
		return (this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.checked : this.#properties.checked);
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
		if (typeof (value).toString().match(/string|number/) && (typeof (this.#properties.enabled) == "undefined" || this.#properties.enabled)) {
			this.#properties.value = value;
			if (this.#htmlElements.input instanceof HTMLInputElement) {
				this.#htmlElements.input.value = value;
			}
		}
	}

	set checked(value) {
		if (typeof (value) == "boolean" && (typeof (this.#properties.enabled) == "undefined" || this.#properties.enabled)) {
			this.#properties.checked = value;
			if (this.#htmlElements.input instanceof HTMLInputElement) {
				this.#htmlElements.input.checked = value;
				if (value) {
					this.#htmlElements.input.setAttribute("checked", "true");
				} else {
					this.#htmlElements.input.removeAttribute("checked");
				}
				this.#setStyle();
			}
		}
	}

	set enabled(value) {
		if (typeof (value) == "boolean") {
			this.#properties.enabled = value;
			if (this.#htmlElements.input instanceof HTMLInputElement) {
				this.#htmlElements.input.disabled = !value;
				if (value) {
					this.#htmlElements.input.removeAttribute("disabled");
				} else {
					this.#htmlElements.input.setAttribute("disabled", "true");
				}
				this.#setStyle();
			}
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

	getViewElements() {
		return [this.#htmlElements.input];
	}

	getInput() {
		return this.#htmlElements.input;
	}

	#setStyle() {
		if (this.#htmlElement instanceof HTMLDivElement && this.#htmlElements.input instanceof HTMLInputElement) {
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
	}

	init() {
		this.#drag = false;
		this.#dragInitX = null;
		this.#dragDirection = null;
		if (this.#htmlElement instanceof HTMLDivElement && this.#htmlElements.input instanceof HTMLInputElement) {
			["touchstart", "mousedown"].forEach(type => {
				this.#htmlElement.addEventListener(type, event => {
					if (!this.#drag) {
						const initX = (event.type == "touchstart" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
						this.#drag = Boolean(type == "touchstart" || event.buttons == 1);
						this.#dragInitX = initX;
					}
				});
			});
			["touchmove", "mousemove"].forEach(type => {
				this.#htmlElement.addEventListener(type, event => {
					if (this.#drag) {
						const initX = parseFloat(this.#dragInitX);
						const moveX = (event.type == "touchmove" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
						const diffX = moveX - initX;
						this.#dragDirection = diffX > 10 ? "right" : diffX < -10 ? "left" : null;
					}
				});
			});
			["touchend", "mouseup"].forEach(type => {
				document.addEventListener(type, () => {
					if (this.#drag) {
						this.#drag = false;
						this.#dragInitX = null;
						if (this.#dragDirection != null) {
							const event = new Event("change");
							this.checked = this.#dragDirection == "left" ? false : this.#dragDirection == "right" ? true : false;
							this.#htmlElements.input.dispatchEvent(event);
							setTimeout(() => {
								this.#dragDirection = null;
							}, 400);
						}
					}
				});
			});
			this.#htmlElement.addEventListener("click", event => {
				if (event.target.classList.contains("wui-checkbox")) {
					setTimeout(() => {
						const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
						if (!mobile && this.#dragDirection == null) {
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
					this.#properties.onChange(this.value, this.checked);
				}
			});
			this.#setStyle();
		}
	}

	toggle() {
		if (this.#htmlElements.input instanceof HTMLInputElement) {
			this.checked = !this.#htmlElements.input.checked;
		}
	}

	destroy() {
		if (this.#htmlElement instanceof HTMLDivElement) {
			Object.entries(this.#htmlElements).forEach(([key, element]) => {
				if (element) {
					element.remove();
				}
				this.#htmlElements[key] = null;
			});
			this.#htmlElement.innerHTML = "";
			this.#htmlElement.remove();
		}
		Object.keys(this.#properties).forEach(name => {
			delete this.#properties[name];
		});
		this.#drag = undefined;
		this.#dragInitX = undefined;
		this.#dragDirection = undefined;
	}
}

/*
HTML output:
<div class="wui-checkbox">
	<input type="checkbox" value="1">
</div>
*/