/*
 * WUIButton - v0.2
 * Author: Sergio E. Belmar (sbelmar@wuijs.dev)
 * Copyright (c) Sergio E. Belmar (sbelmar@wuijs.dev)
 */

class WUIButton {

	static version = "0.2";
	static #defaults = {
		selector: ".wui-button",
		text: "",
		selectable: false,
		locked: false,
		enabled: true,
		onClick: null,
		onDblClick: null
	};

	#properties = {};
	#htmlElement;

	constructor(properties) {
		const defaults = structuredClone(WUIButton.#defaults);
		Object.entries(defaults).forEach(([key, defValue]) => {
			this[key] = key in properties ? properties[key] : defValue;
		});
	}

	get selector() {
		return this.#properties.selector;
	}

	get text() {
		return this.#properties.text;
	}

	get selectable() {
		return this.#properties.selectable;
	}

	get locked() {
		return this.#properties.locked;
	}

	get enabled() {
		return this.#properties.enabled;
	}

	get onClick() {
		return this.#properties.onClick;
	}

	get onDblClick() {
		return this.#properties.onDblClick;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.selector = value;
			this.#htmlElement = document.querySelector(value);
		}
	}

	set text(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.text = value;
			this.#htmlElement.innerHTML = value;
		}
	}

	set selectable(value) {
		if (typeof (value) == "boolean") {
			this.#properties.selectable = value;
		}
	}

	set locked(value) {
		if (typeof (value) == "boolean") {
			this.#properties.locked = value;
		}
	}

	set enabled(value) {
		if (typeof (value) == "boolean") {
			this.#properties.enabled = value;
			this.#htmlElement.disabled = !value;
			if (value) {
				this.#htmlElement.removeAttribute("disabled");
			} else {
				this.#htmlElement.setAttribute("disabled", "true");
			}
			this.#setStyle();
		}
	}

	set onClick(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onClick = value;
		}
	}

	set onDblClick(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onDblClick = value;
		}
	}

	getElement() {
		return this.#htmlElement;
	}

	#setStyle() {
		const disabled = this.#htmlElement.disabled;
		if (disabled) {
			this.#htmlElement.classList.add("disabled");
		} else {
			this.#htmlElement.classList.remove("disabled");
		}
	}

	init() {
		this.#properties.text = this.#htmlElement.innerHTML;
		this.#htmlElement.addEventListener("click", () => {
			this.#setStyle();
			if (this.#properties.selectable && this.#properties.enabled) {
				this.#htmlElement.classList.toggle("selected");
			}
			if (!this.#properties.locked && this.#properties.enabled && typeof (this.#properties.onClick) == "function") {
				this.#properties.onClick();
			}
		});
		this.#htmlElement.addEventListener("dblclick", () => {
			this.#setStyle();
			if (!this.#properties.locked && this.#properties.enabled && typeof (this.#properties.onDblClick) == "function") {
				this.#properties.onDblClick();
			}
		});
		this.#setStyle();
	}

	focus() {
		this.#htmlElement.focus();
	}

	select() {
		if (this.#properties.selectable && this.#properties.enabled) {
			this.#htmlElement.classList.add("selected");
		}
	}

	unselect() {
		if (this.#properties.selectable && this.#properties.enabled) {
			this.#htmlElement.classList.remove("selected");
		}
	}

	isSelected() {
		if (this.#properties.selectable && this.#properties.enabled) {
			return this.#htmlElement.classList.contains("selected");
		}
		return false;
	}
}