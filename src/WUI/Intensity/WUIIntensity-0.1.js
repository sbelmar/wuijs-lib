/*
 * WUIIntensity - v0.1
 * Author: Sergio E. Belmar (sbelmar@wuijs.dev)
 * Copyright (c) Sergio E. Belmar (sbelmar@wuijs.dev)
 */

class WUIIntensity {

	static version = "0.1";
	static #defaults = {
		selector: "",
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
	#initX;
	#diffX;

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
			this.#properties.value = value;
			if (this.#htmlElement instanceof HTMLDivElement && this.#htmlElements.input instanceof HTMLInputElement) {
				switch (value.toString().toLowerCase()) {
					case "none": value = 0; break;
					case "low": value = 1; break;
					case "half": value = 2; break;
					case "high": value = 3; break;
					default: value = parseInt(value); break;
				}
				switch (value) {
					case 0: this.#htmlElement.dataset.value = "none"; break;
					case 1: this.#htmlElement.dataset.value = "low"; break;
					case 2: this.#htmlElement.dataset.value = "half"; break;
					case 3: this.#htmlElement.dataset.value = "high"; break;
					default: this.#htmlElement.dataset.value = ""; break;
				}
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

	getFocusableElements() {
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
		this.#initX = null;
		this.#diffX = 0;
		if (this.#htmlElement instanceof HTMLDivElement && this.#htmlElements.input instanceof HTMLInputElement) {
			this.#htmlElements.input.min = 0;
			this.#htmlElements.input.max = 3;
			this.#htmlElements.input.step = 1;
			["touchstart", "mousedown"].forEach(type => {
				this.#htmlElement.addEventListener(type, event => {
					if (!this.#drag) {
						const initX = (event.type == "touchstart" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
						this.#initX = initX;
						this.#drag = true;
					}
				});
			});
			["touchmove", "mousemove"].forEach(type => {
				this.#htmlElement.addEventListener(type, event => {
					if (this.#drag) {
						const initX = parseFloat(this.#initX);
						const moveX = (event.type == "touchmove" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
						this.#diffX = moveX - initX;
					}
				});
			});
			["touchend", "mouseup"].forEach(type => {
				document.addEventListener(type, () => {
					if (this.#drag) {
						this.#drag = false;
						this.#initX = null;
						if (Math.abs(this.#diffX) > 10) {
							const iniValue = parseInt(this.#htmlElements.input.value);
							const event = new Event("input");
							let endValue = iniValue + parseInt(this.#diffX / 40);
							if (endValue < 0) {
								endValue = 0;
							} else if (endValue > 3) {
								endValue = 3;
							}
							this.value = endValue;
							this.#htmlElements.input.dispatchEvent(event);
							setTimeout(() => {
								this.#diffX = 0;
							}, 400);
						}
					}
				});
			});
			this.#htmlElements.input.addEventListener("input", event => {
				const value = parseInt(event.target.value);
				switch (value) {
					case 0: this.#htmlElement.dataset.value = "none"; break;
					case 1: this.#htmlElement.dataset.value = "low"; break;
					case 2: this.#htmlElement.dataset.value = "half"; break;
					case 3: this.#htmlElement.dataset.value = "high"; break;
					default: this.#htmlElement.dataset.value = ""; break;
				}
				if (typeof (this.#properties.onChange) == "function") {
					this.#properties.onChange(event, value);
				}
			});
			this.#setStyle();
		}
	}
}

/*
Generated HTML code:
<div class="wui-intensity">
	<input type="range" value="0" min="0" max="3" step="1">
</div>
DOM form field  struture:
<div class="field intensity">
	<label></label>
	<div class="wui-intensity">
		<input type="range" value="0" min="0" max="3" step="1">
	</div>
</div>
*/