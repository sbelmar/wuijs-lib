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
		topButtons: [],
		mainButtons: [],
		bottomButtons: [],
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

	#properties = {
		selector: null,
		expansive: null,
		topButtons: null,
		mainButtons: null,
		bottomButtons: null,
		onClick: null,
		onSelect: null
	};
	#htmlElement;
	#htmlElements = {
		bar: null,
		barHeader: null,
		barTop: null,
		barMain: null,
		barBottom: null,
		submenu: null,
		submenuMain: null,
		expander: null,
		expanderIcon: null
	};
	#buttons;

	constructor(properties) {
		const defaults = structuredClone(WUIMenubar.#defaults);
		Object.entries(defaults).forEach(([key, defValue]) => {
			this[key] = key in properties ? properties[key] : defValue;
		});
	}

	get selector() {
		return this.#properties.selector;
	}

	get expansive() {
		return this.#properties.expansive;
	}

	get topButtons() {
		return this.#properties.topButtons;
	}

	get mainButtons() {
		return this.#properties.mainButtons;
	}

	get bottomButtons() {
		return this.#properties.bottomButtons;
	}

	get onClick() {
		return this.#properties.onClick;
	}

	get onSelect() {
		return this.#properties.onSelect;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.selector = value;
			this.#htmlElement = document.querySelector(value);
		}
	}

	set expansive(value) {
		if (typeof (value) == "boolean") {
			this.#properties.expansive = value;
		}
	}

	set topButtons(value) {
		if (Array.isArray(value)) {
			this.#properties.topButtons = value;
		}
	}

	set mainButtons(value) {
		if (Array.isArray(value)) {
			this.#properties.mainButtons = value;
		}
	}

	set bottomButtons(value) {
		if (Array.isArray(value)) {
			this.#properties.bottomButtons = value;
		}
	}

	set onClick(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onClick = value;
		}
	}

	set onSelect(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onSelect = value;
		}
	}

	getElement() {
		return this.#htmlElement;
	}

	getButton(id, buttons = this.#buttons) {
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
		const element = this.#htmlElement || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-menubar-" + name + "icon-src");
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml," + WUIMenubar.#icons[name] + "\")";
	}

	init() {
		this.#htmlElements.bar = document.createElement("div");
		this.#htmlElements.barHeader = document.createElement("div");
		this.#htmlElements.barTop = document.createElement("div");
		this.#htmlElements.barMain = document.createElement("div");
		this.#htmlElements.barBottom = document.createElement("div");
		this.#htmlElements.submenu = document.createElement("div");
		this.#htmlElements.submenuMain = document.createElement("div");
		this.#htmlElement.append(this.#htmlElements.bar);
		this.#htmlElement.append(this.#htmlElements.submenu);
		this.#htmlElements.bar.className = "bar";
		this.#htmlElements.bar.append(this.#htmlElements.barHeader);
		this.#htmlElements.bar.append(this.#htmlElements.barTop);
		this.#htmlElements.bar.append(this.#htmlElements.barMain);
		this.#htmlElements.bar.append(this.#htmlElements.barBottom);
		this.#htmlElements.barHeader.className = "header";
		this.#htmlElements.barTop.className = "top";
		this.#htmlElements.barMain.className = "main";
		this.#htmlElements.barBottom.className = "bottom";
		this.#htmlElements.submenu.className = "submenu";
		this.#htmlElements.submenu.append(this.#htmlElements.submenuMain);
		this.#htmlElements.submenuMain.className = "main";
		if (this.#properties.expansive) {
			this.#htmlElements.expander = document.createElement("div");
			this.#htmlElements.expanderIcon = document.createElement("div");
			this.#htmlElements.expander.append(this.#htmlElements.expanderIcon);
			this.#htmlElements.expander.className = "expander";
			this.#htmlElements.expanderIcon.className = "icon";
			this.#htmlElements.expanderIcon.style.maskImage = this.#getSRCIcon("barexpander-expand");
			this.#htmlElements.expander.addEventListener("click", () => {
				const expanded = this.#htmlElement.classList.contains("expanded");
				this.#htmlElement.classList.toggle("expanded");
				this.#htmlElements.expanderIcon.style.maskImage = this.#getSRCIcon("barexpander-" + (expanded ? "expand" : "contract"));
			});
			this.#htmlElements.barHeader.append(this.#htmlElements.expander);
		}
		this.#buttons = [];
		this.#properties.topButtons.forEach(options => {
			this.#buttons.push(options);
			this.#htmlElements.barTop.append(this.#addButton(options));
		});
		this.#properties.mainButtons.forEach(options => {
			this.#buttons.push(options);
			this.#htmlElements.barMain.append(this.#addButton(options));
		});
		this.#properties.bottomButtons.forEach(options => {
			this.#buttons.push(options);
			this.#htmlElements.barBottom.append(this.#addButton(options));
		});
	}

	#addButton(options) {
		const button = document.createElement("div");
		const icon = document.createElement(options.iconImage ? "img" : "div");
		const text = document.createElement("div");
		const tooltip = document.createElement("div");
		const bubble = document.createElement("div");
		if (options.iconImage) {
			icon.src = options.iconImage;
		} else {
			icon.className = "icon";
			(options.iconClass || "").split(/\s+/).forEach(name => {
				icon.classList.add(name);
			});
		}
		text.innerHTML = options.label || "";
		text.className = "text";
		tooltip.className = "tooltip" + (!options.label ? " hidden" : "");
		tooltip.innerHTML = options.label || "";
		bubble.className = "bubble hidden";
		bubble.innerText = 0;
		button.append(icon);
		button.append(text);
		button.append(tooltip);
		button.append(bubble);
		button.dataset.id = options.id;
		button.className = "button" + (options.selected ? " selected" : "") + (options.enabled == false ? " disabled" : "");
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
					this.#buttons.forEach(opt => {
						if (opt.id == options.id) {
							this.selectButton(opt.id, true);
							this.#open(opt.id);
						} else {
							this.selectButton(opt.id, false);
						}
					});
					if (this.#properties.onSelect && typeof (this.#properties.onSelect) == "function") {
						this.#properties.onSelect(options.id);
					}
				}
				if (!options.submenu) {
					this.close();
				}
				if (options.onClick && typeof (options.onClick) == "function") {
					options.onClick();
				} else if (this.#properties.onClick && typeof (this.#properties.onClick) == "function") {
					this.#properties.onClick(options.id);
				}
			}
		});
		if (typeof (options.selected) == "boolean" && options.selected) {
			this.selectButton(options.id, true);
		}
		return button;
	}

	selectButton(id, selected = true) {
		const button = this.#htmlElement.querySelector(`[data-id='${id}'].button`);
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
		const button = this.#htmlElement.querySelector(`[data-id='${id}'].button`);
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
		const bubble = this.#htmlElement.querySelector(`[data-id='${optionId}'].button > .bubble`);
		bubble.textContent = number;
		if (number > 0) {
			bubble.classList.remove("hidden");
		} else {
			bubble.classList.add("hidden");
		}
	}

	#open(id) {
		const buttons = this.getButton(id).buttons || [];
		this.#htmlElements.submenuMain.innerHTML = "";
		buttons.forEach(options => {
			const button = this.#addButton(options);
			this.#htmlElements.submenuMain.append(button);
		});
		this.#htmlElements.submenu.classList.add("opened");
	}

	close() {
		this.#htmlElements.submenu.classList.remove("opened");
	}

	destroy() {
		this.#buttons = [];
		if (this.#htmlElement) {
			this.#htmlElement.innerHTML = "";
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