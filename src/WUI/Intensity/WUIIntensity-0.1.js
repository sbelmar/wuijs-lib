/*
 * WUIIntensity - v0.1
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIIntensity {

	static version = "0.1";
	static #defaults = {
		selector: ".wui-intensity",
		value: 0,
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
	#dragDiffX;

	constructor(properties = {}) {
		const defaults = structuredClone(WUIIntensity.#defaults);
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
			this.#htmlElements.input = document.querySelector(value + " > input[type='range']");
		}
	}

	set value(value) {
		if (typeof (value).toString().match(/string|number/) && value.toString().match(/^(0|1|2|3|none|low|half|high)$/i) && (typeof (this.#properties.enabled) == "undefined" || this.#properties.enabled)) {
			switch (value.toString().toLowerCase()) {
				case "none": value = 0; break;
				case "low": value = 1; break;
				case "half": value = 2; break;
				case "high": value = 3; break;
				default: value = parseInt(value); break;
			}
			this.#properties.value = value;
			if (this.#htmlElement instanceof HTMLDivElement && this.#htmlElements.input instanceof HTMLInputElement) {
				let intensity = "";
				switch (value) {
					case 0: intensity = "none"; break;
					case 1: intensity = "low"; break;
					case 2: intensity = "half"; break;
					case 3: intensity = "high"; break;
				}
				this.#htmlElement.dataset.value = intensity;
				this.#htmlElements.input.value = value;
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
			const disabled = this.#htmlElements.input.disabled;
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
		this.#dragDiffX = 0;
		if (this.#htmlElement instanceof HTMLDivElement && this.#htmlElements.input instanceof HTMLInputElement) {
			this.#htmlElements.input.min = 0;
			this.#htmlElements.input.max = 3;
			this.#htmlElements.input.step = 1;
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
						this.#dragDiffX = moveX - initX;
					}
				});
			});
			["touchend", "mouseup"].forEach(type => {
				document.addEventListener(type, () => {
					if (this.#drag) {
						this.#drag = false;
						this.#dragInitX = null;
						if (Math.abs(this.#dragDiffX) > 10) {
							const event = new Event("input");
							const iniValue = parseInt(this.#htmlElements.input.value);
							let endValue = iniValue + parseInt(this.#dragDiffX / 40);
							if (endValue < 0) {
								endValue = 0;
							} else if (endValue > 3) {
								endValue = 3;
							}
							this.value = endValue;
							this.#htmlElements.input.dispatchEvent(event);
							setTimeout(() => {
								this.#dragDiffX = 0;
							}, 400);
						}
					}
				});
			});
			this.#htmlElements.input.addEventListener("input", event => {
				const value = parseInt(event.target.value);
				let intensity = "";
				switch (value) {
					case 0: intensity = "none"; break;
					case 1: intensity = "low"; break;
					case 2: intensity = "half"; break;
					case 3: intensity = "high"; break;
				}
				this.#htmlElement.dataset.value = intensity;
				if (typeof (this.#properties.onChange) == "function") {
					this.#properties.onChange(value, intensity);
				}
			});
			this.#setStyle();
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
		this.#dragDiffX = undefined;
	}
}

/*
HTML output:
<div class="wui-intensity">
	<input type="range" value="0" min="0" max="3" step="1">
</div>
*/