/*
 * WUIMenubar - v0.1
 * Author: Sergio E. Belmar (sbelmar@wuijs.dev)
 * Copyright (c) Sergio E. Belmar (sbelmar@wuijs.dev)
 */

class WUIMenubar {

	static version = "0.1";
	static #defaults = {
		selector: ".wui-menubar",
		expansive: true,
		options: []
	};

	constructor (properties) {
		const defaults = structuredClone(WUIMenubar.#defaults);
		Object.entries(defaults).forEach(([key, defValue]) => {
			this[key] = key in properties ? properties[key] : defValue;
		});
	}

	get selector() {
		return this._selector;
	}

	get expansive() {
		return this._expansive;
	}

	get options() {
		return this._options;
	}

	set selector(value) {
		if (typeof(value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
			this._bar = document.querySelector(value+" > .bar");
			this._main = this._bar ? this._bar.querySelector(".main") : null;
			this._bottom = this._bar ? this._bar.querySelector(".bottom") : null;
		}
	}

	set expansive(value) {
		if (typeof(value) == "boolean") {
			this._expansive = value;
		}
	}

	set options(value) {
		if (Array.isArray(value)) {
			this._options = value;
		}
	}

	getElement() {
		return this._element;
	}

	getOption(id, options = this._options) {
		for (const option of options) {
			if (option.id == id) {
				return option;
			}
			if (option.options && option.options.length > 0) {
				const found = this.getOption(id, option.options);
				if (found) return found;
			}
		}
		return null;
	}

	setBubble(optionId, number = 0) {
		const bubble = this._element.querySelector(`[data-id='${optionId}'].button > .bubble`);
		bubble.textContent = number;
		if (number > 0) {
			bubble.classList.remove("hidden");
		} else {
			bubble.classList.add("hidden");
		}
	}

	init() {
		this._submenu = document.createElement("div");
		this._submenu.className = "submenu";
		this._element.append(this._submenu);
		this._options.forEach(option => {
			const button = document.createElement("div");
			const icon = document.createElement("div");
			const text = document.createElement("div");
			const tooltip = document.createElement("div");
			const bubble = document.createElement("div");
			button.append(icon);
			button.append(text);
			button.append(tooltip);
			button.append(bubble);
			button.dataset.id = option.id;
			button.className = "button"+(option.enabled == false ? " disabled" : "");
			button.addEventListener("click", () => {
				if (!button.classList.contains("disabled")) {
					if (option.onClick && typeof(option.onClick) == "function") {
						option.onClick();
					}
				}
			});
			(option.iconClass || "").split(/\s+/).forEach(name => {
				icon.classList.add(name);
			});
			text.textContent = option.label || "";
			text.className = "text";
			tooltip.className = "tooltip hidden";
			tooltip.textContent = option.label || "";
			bubble.className = "bubble hidden";
			bubble.innerText = 0;
			if ((typeof(option.position) == "undefined" || option.position == "main") && this._main) {
				this._main.append(button);
			} else if (option.position == "bottom" && this._bottom) {
				this._bottom.append(button);
			}
		});
	}

	enableOption(id, enabled = true) {
		const button = this._element.querySelector(`[data-id='${id}'].button`);
		if (button != null) {
			if (enabled) {
				button.classList.remove("disabled");
			} else {
				button.classList.add("disabled");
			}
		}
		this.getOption(id).enabled = enabled;
	}

	selectOption(id, selected = true) {
		const button = this._element.querySelector(`[data-id='${id}'].button`);
		if (button != null && !button.classList.contains("disabled")) {
			if (selected) {
				button.classList.add("selected");
			} else {
				button.classList.remove("selected");
			}
		}
		this.getOption(id).selected = selected;
	}

	open() {}

	close() {}

	destroy() {
		if (this._element) {
			this._element.innerHTML = "";
		}
	}
}