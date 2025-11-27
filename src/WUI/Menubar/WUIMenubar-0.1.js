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
		buttons: [],
		onClick: null,
		onSelect: null
	};

	static #icons = {
		"barexpander-expand": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z'/>"
			+ "</svg>",
		"barexpander-contract": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z'/>"
			+ "</svg>",
		"submenu-opener-open": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z'/>"
			+ "</svg>"
	};

	constructor(properties) {
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

	get onClick() {
		return this._onClick;
	}

	get onSelect() {
		return this._onSelect;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
		}
	}

	set expansive(value) {
		if (typeof (value) == "boolean") {
			this._expansive = value;
		}
	}

	set buttons(value) {
		if (Array.isArray(value)) {
			this._buttons = value;
		}
	}

	set onClick(value) {
		if (typeof (value) == "function") {
			this._onClick = value;
		}
	}

	set onSelect(value) {
		if (typeof (value) == "function") {
			this._onSelect = value;
		}
	}

	getElement() {
		return this._element;
	}

	getButton(id, buttons = this._buttons) {
		for (const options of buttons) {
			if (options.id == id) {
				return options;
			}
			if (options.buttons && options.buttons.length > 0) {
				const found = this.getButton(id, options.buttons);
				if (found) return found;
			}
		}
		return null;
	}

	#getSRCIcon(name) {
		const element = this._element || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-menubar-" + name + "icon-src");
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml," + WUIMenubar.#icons[name] + "\")";
	}

	init() {
		this._bar = document.createElement("div");
		this._barTop = document.createElement("div");
		this._barMain = document.createElement("div");
		this._barBottom = document.createElement("div");
		this._submenu = document.createElement("div");
		this._submenuMain = document.createElement("div");
		this._element.append(this._bar);
		this._element.append(this._submenu);
		this._bar.className = "bar";
		this._bar.append(this._barTop);
		this._bar.append(this._barMain);
		this._bar.append(this._barBottom);
		this._barTop.className = "top";
		this._barMain.className = "main";
		this._barBottom.className = "bottom";
		this._submenu.className = "submenu";
		this._submenu.append(this._submenuMain);
		this._submenuMain.className = "main";
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
				this._expanderIcon.style.maskImage = this.#getSRCIcon("barexpander-" + (expanded ? "expand" : "contract"));
			});
			this._barTop.append(this._expander);
		}
		this._buttons.forEach(options => {
			const button = this.#addButton(options);
			if ((typeof (options.section) == "undefined" || options.section.match(/^(main)$/)) && this._barMain) {
				this._barMain.append(button);
			} else if (options.section.match(/^(bottom)$/) && this._barBottom) {
				this._barBottom.append(button);
			}
		});
	}

	#addButton(options) {
		const button = document.createElement("div");
		const icon = document.createElement("div");
		const text = document.createElement("div");
		const tooltip = document.createElement("div");
		const bubble = document.createElement("div");
		icon.className = "icon";
		(options.iconClass || "").split(/\s+/).forEach(name => {
			icon.classList.add(name);
		});
		text.innerHTML = options.label || "";
		text.className = "text";
		tooltip.className = "tooltip hidden";
		tooltip.innerHTML = options.label || "";
		bubble.className = "bubble hidden";
		bubble.innerText = 0;
		button.append(icon);
		button.append(text);
		button.append(tooltip);
		button.append(bubble);
		button.dataset.id = options.id;
		button.className = "button" + (options.enabled == false ? " disabled" : "");
		options.submenu = false;
		if (typeof (options.buttons) == "object" && Array.isArray(options.buttons) && options.buttons.length > 0) {
			const opener = document.createElement("div");
			opener.className = "opener";
			opener.style.maskImage = this.#getSRCIcon("submenu-opener-open");
			button.append(opener);
			options.submenu = true;
		}
		button.addEventListener("click", () => {
			if (!button.classList.contains("disabled")) {
				if (typeof (options.radio) == "boolean" && !options.radio) {
					this.selectButton(options.id, !options.selected);
				} else if (typeof (options.selectable) == "undefined" || options.selectable) {
					this._buttons.forEach(opt => {
						if (opt.id == options.id) {
							this.selectButton(opt.id, true);
							this.#open(opt.id);
						} else {
							this.selectButton(opt.id, false);
						}
					});
					if (this._onSelect && typeof (this._onSelect) == "function") {
						this._onSelect(options.id);
					}
				}
				if (!options.submenu) {
					this.close();
				}
				if (options.onClick && typeof (options.onClick) == "function") {
					options.onClick();
				} else if (this._onClick && typeof (this._onClick) == "function") {
					this._onClick(options.id);
				}
			}
		});
		if (typeof (options.selected) == "boolean" && options.selected) {
			this.selectButton(options.id, true);
		}
		return button;
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

	#open(id) {
		const buttons = this.getButton(id).buttons || [];
		this._submenuMain.innerHTML = "";
		buttons.forEach(options => {
			const button = this.#addButton(options);
			this._submenuMain.append(button);
		});
		this._submenu.classList.add("opened");
	}

	close() {
		this._submenu.classList.remove("opened");
	}

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