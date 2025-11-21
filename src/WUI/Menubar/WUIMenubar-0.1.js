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
		buttons: []
	};

	static #icons = {
		"barexpander-expand": ""
			+"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+"<path d='M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z'/>"
			+"</svg>",
		"barexpander-contract": ""
			+"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+"<path d='M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z'/>"
			+"</svg>"
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

	get buttons() {
		return this._buttons;
	}

	set selector(value) {
		if (typeof(value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
		}
	}

	set expansive(value) {
		if (typeof(value) == "boolean") {
			this._expansive = value;
		}
	}

	set buttons(value) {
		if (Array.isArray(value)) {
			this._buttons = value;
		}
	}

	getElement() {
		return this._element;
	}

	getButton(id, buttons = this._buttons) {
		for (const option of buttons) {
			if (option.id == id) {
				return option;
			}
			if (option.buttons && option.buttons.length > 0) {
				const found = this.getButton(id, option.buttons);
				if (found) return found;
			}
		}
		return null;
	}

	#getSRCIcon(name) {
		const element = this._element || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-menubar-"+name+"icon-src");
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml,"+WUIMenubar.#icons[name]+"\")";
	}

	init() {
		this._bar = document.createElement("div");
		this._top = document.createElement("div");
		this._main = document.createElement("div");
		this._bottom = document.createElement("div");
		this._submenu = document.createElement("div");
		this._element.append(this._bar);
		this._element.append(this._submenu);
		this._bar.className = "bar";
		this._bar.append(this._top);
		this._bar.append(this._main);
		this._bar.append(this._bottom);
		this._top.className = "top";
		this._main.className = "main";
		this._bottom.className = "bottom";
		this._submenu.className = "submenu";
		if (this._expansive) {
			this._expander = document.createElement("div");
			this._expanderIcon = document.createElement("div");
			this._expander.append(this._expanderIcon);
			this._expander.className = "expander";
			this._expanderIcon.className = "icon";
			this._expanderIcon.style.maskImage = this.#getSRCIcon("barexpander-expand");
			this._expander.addEventListener("click", () => {
				const expanded = this._element.classList.contains("expanded");
				this._element.classList.toggle("expanded");
				this._expanderIcon.style.maskImage = this.#getSRCIcon("barexpander-"+(expanded ? "expand" : "contract"));
			});
			this._top.append(this._expander);
		}
		this._buttons.forEach(option => {
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
					if (typeof(option.type) == "string" && option.type == "toggle") {
						this.selectButton(option.id, !option.selected);
					} else {
						this._buttons.forEach(opt => {
							if (opt.id == option.id) {
								this.selectButton(opt.id, !opt.selected);
							} else {
								this.selectButton(opt.id, false);
							}
						});
					}
					if (option.onClick && typeof(option.onClick) == "function") {
						option.onClick();
					} else if (this.onClick && typeof(this.onClick) == "function") {
						this.onClick(option.id);
					}
				}
			});
			icon.className = "icon";
			(option.iconClass || "").split(/\s+/).forEach(name => {
				icon.classList.add(name);
			});
			text.innerHTML = option.label || "";
			text.className = "text";
			tooltip.className = "tooltip hidden";
			tooltip.innerHTML = option.label || "";
			bubble.className = "bubble hidden";
			bubble.innerText = 0;
			if ((typeof(option.section) == "undefined" || option.section == "main") && this._main) {
				this._main.append(button);
			} else if (option.section == "bottom" && this._bottom) {
				this._bottom.append(button);
			}
			if (typeof(option.selected) == "boolean" && option.selected) {
				this.selectButton(option.id, true);
			}
		});
	}

	selectButton(id, selected = true) {
		const button = this._element.querySelector(`[data-id='${id}'].button`);
		if (button != null && !button.classList.contains("disabled")) {
			if (selected) {
				button.classList.add("selected");
			} else {
				button.classList.remove("selected");
			}
		}
		this.getButton(id).selected = selected;
	}

	enableButton(id, enabled = true) {
		const button = this._element.querySelector(`[data-id='${id}'].button`);
		if (button != null) {
			if (enabled) {
				button.classList.remove("disabled");
			} else {
				button.classList.add("disabled");
			}
		}
		this.getButton(id).enabled = enabled;
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

	#open() {}

	close() {}

	destroy() {
		if (this._element) {
			this._element.innerHTML = "";
		}
	}
}

/*
<div class="wui-menubar">
	<div class="bar">
		<div class="top">
			<div class="expand">
				<div class="icon"></div>
			</div>
		</div>
		<div class="main">
			<div class="button">
				<div class="icon"></div>
				<div class="text"></div>
				<div class="tooltip"></div>
				<div class="bubble"></div>
			</div>
			...
		</div>
		<div class="bottom"></div>
	</div>
</div>
 */