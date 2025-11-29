/*
 * WUIForm - v0.2
 * Author: Sergio E. Belmar (sbelmar@wuijs.dev)
 * Copyright (c) Sergio E. Belmar (sbelmar@wuijs.dev)
 */

class WUIForm {

	static version = "0.2";
	static #defaults = {
		selector: "",
		submit: true,
		onScrolling: null,
		onSubmit: null
	};
	static #icons = {
		"date-opener-open": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/>"
			+ "</svg>",
		"date-opener-close": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/>"
			+ "</svg>",
		"time-opener-open": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/>"
			+ "</svg>",
		"time-opener-close": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/>"
			+ "</svg>",
		"select-opener-open": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/>"
			+ "</svg>",
		"select-opener-close": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/>"
			+ "</svg>"
	};

	#properties = {};
	#htmlElement;
	#htmlElements = {
		header: null,
		body: null,
		footer: null,
		form: null
	};
	#colorScheme;

	constructor(properties) {
		const defaults = structuredClone(WUIForm.#defaults);
		Object.entries(defaults).forEach(([key, defValue]) => {
			this[key] = key in properties ? properties[key] : defValue;
		});
		this.#colorScheme = null;
	}

	get selector() {
		return this.#properties.selector;
	}

	get submit() {
		return this.#properties.submit;
	}

	get onScrolling() {
		return this.#properties.onScrolling;
	}

	get onSubmit() {
		return this.#properties.onSubmit;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.selector = value;
			this.#htmlElement = document.querySelector(value);
			this.#htmlElements.header = document.querySelector(value + " > .header");
			this.#htmlElements.body = document.querySelector(value + " > .body");
			this.#htmlElements.footer = document.querySelector(value + " > .footer");
			this.#htmlElements.form = this.#htmlElement.localName == "form" ? this.#htmlElement : this.#htmlElement.querySelector("form");
		}
	}

	set submit(value) {
		if (typeof (value) == "boolean") {
			this.#properties.submit = value;
		}
	}

	set onScrolling(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onScrolling = value;
		}
	}

	set onSubmit(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onSubmit = value;
		}
	}

	getElement() {
		return this.#htmlElement;
	}

	getHeader() {
		return this.#htmlElements.header;
	}

	getBody() {
		return this.#htmlElements.body;
	}

	getFooter() {
		return this.#htmlElements.footer;
	}

	getForm() {
		return this.#htmlElements.form;
	}

	getFormData() {
		return new FormData(this.#htmlElements.form);
	}

	getNode(name, type) {
		let node = this.#htmlElement.querySelector("data." + name) || this.#htmlElements.form[name] || null;
		if (type.match(/^(input|data)$/)) {
			return node;
		} else if (node instanceof HTMLElement) {
			let loop = 0;
			let nodeReturn = null;
			while (node != this.#htmlElement.parentNode && loop <= 100) {
				if (type.match(/^(label)$/) && node.querySelector(type)) {
					node.querySelectorAll(type).forEach(nodeType => {
						if (nodeReturn == null && (node.querySelector("[name=" + name + "]") || node.querySelector("data." + name))) {
							nodeReturn = nodeType;
						}
					});
					return nodeReturn;
				} else if (type.match(/^(field)$/) && node.querySelector("." + type)) {
					node.querySelectorAll("." + type).forEach(nodeType => {
						if (nodeReturn == null && (nodeType.querySelector("[name=" + name + "]") || nodeType.querySelector("data." + name))) {
							nodeReturn = nodeType;
						}
					});
					return nodeReturn;
				} else {
					node = node.parentNode;
				}
				loop++;
			}
		}
		return null;
	}

	getField(name) {
		return this.getNode(name, "field");
	}

	getLabel(name) {
		return this.getNode(name, "label");
	}

	getInput(name) {
		return this.#htmlElements.form[name];
	}

	getValue(name) {
		const input = this.getInput(name);
		const data = this.getData(name);
		return input instanceof HTMLInputElement ? input.value : data instanceof HTMLDataElement ? data.innerHTML : "";
	}

	getData(name) {
		return this.#htmlElement.querySelector("data." + name);
	}

	getText(name) {
		return this.#htmlElement.querySelector(".text." + name);
	}

	#getSRCIcon(input, name) {
		const element = input || this.#htmlElements.form || this.#htmlElement || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-form-" + name + "icon-src");
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml," + WUIForm.#icons[name] + "\")";
	}

	setType = (name, type) => {
		const input = this.getInput(name);
		input.type = type.toLowerCase();
	}

	setValue = (name, value, visible = true) => {
		const label = this.getLabel(name);
		const input = this.getInput(name);
		if (label instanceof HTMLLabelElement && visible) {
			if (value != "") {
				label.classList.add("notempty");
			} else {
				label.classList.remove("notempty");
			}
		}
		if (input instanceof HTMLInputElement) {
			input.value = value;
		}
		return input;
	}

	setData(name, value) {
		const label = this.getLabel(name);
		const data = this.getData(name);
		if (label instanceof HTMLLabelElement) {
			if (value != "") {
				label.classList.add("notempty");
			} else {
				label.classList.remove("notempty");
			}
		}
		if (data instanceof HTMLDataElement) {
			data.value = value;
			data.innerHTML = value;
		}
		return data;
	}

	setText(name, value) {
		const text = this.getText(name);
		if (text instanceof HTMLElement) {
			text.innerHTML = value;
		}
		return text;
	}

	setEnabled = (name, value) => {
		const label = this.getLabel(name);
		const input = this.getInput(name);
		const data = this.getData(name);
		if (label instanceof HTMLLabelElement) {
			if (value) {
				label.classList.remove("disabled");
			} else {
				label.classList.add("disabled");
			}
		}
		if (input instanceof HTMLInputElement) {
			input.disabled = !value;
			if (value) {
				label.classList.remove("disabled");
			} else {
				label.classList.add("disabled");
			}
		}
		if (data instanceof HTMLDataElement) {
			if (value) {
				data.classList.remove("disabled");
			} else {
				data.classList.add("disabled");
			}
		}
	}

	init() {
		const debounce = (fn) => {
			let frame;
			return (...params) => {
				if (frame) {
					cancelAnimationFrame(frame);
				}
				frame = requestAnimationFrame(() => {
					fn(...params);
				});
			}
		};
		this.#htmlElements.form.addEventListener("submit", event => {
			if (!this.#properties.submit) {
				event.preventDefault();
			}
			if (typeof (this.#properties.onSubmit) == "function") {
				this.#properties.onSubmit();
			}
		});
		if (this.#htmlElement instanceof HTMLElement && this.#htmlElements.body instanceof HTMLElement) {
			this.#htmlElement.dataset.scrollBody = 0;
			if (this.#htmlElements.body.classList.contains("scroll")) {
				["scroll", "touchmove"].forEach(type => {
					this.#htmlElements.body.addEventListener(type, debounce(() => {
						let top = this.#htmlElements.body.scrollTop;
						if (top < 0) {
							top = 0;
						}
						this.#htmlElement.dataset.scrollBody = top;
						if (typeof (this.#properties.onScrolling) == "function") {
							this.#properties.onScrolling(top);
						}
					}), { passive: true });
				});
			}
		}
		this.#htmlElement.querySelectorAll(".field > label").forEach(label => {
			label.addEventListener("click", () => {
				const field = label.parentNode;
				const input = field.querySelector("input,select,textarea");
				if (input instanceof HTMLInputElement) {
					input.focus();
				}
			});
		});
		this.#htmlElement.querySelectorAll("input, select, textarea").forEach(input => {
			const tag = input.localName.toLowerCase();
			const type = input.getAttribute("type") || "";
			const label = input.parentNode.querySelector("label") || input.parentNode.parentNode.querySelector("label") || this.getLabel(input.name);
			if (type.match(/^(date|time)$/i) || tag.match(/^(select)$/i)) {
				if (!input.parentNode.classList.contains("wui-selectpicker") &&
					!input.parentNode.classList.contains("wui-datepicker") &&
					!input.parentNode.classList.contains("wui-timepicker")
				) {
					const opener = document.createElement("div");
					opener.className = "opener";
					opener.style.maskImage = this.#getSRCIcon(input, (type || tag) + "-opener-open");
					input.after(opener);
				}
				["mouseover", "mouseout", "focus", "blur"].forEach(type => {
					input.addEventListener(type, () => {
						if (label instanceof HTMLLabelElement) {
							if (type.match(/mouseover|focus/) || input.value != "") {
								label.classList.add("notempty");
							} else {
								label.classList.remove("notempty");
							}
						}
						if (type == "focus") {
							const open = new MouseEvent("mousedown");
							input.dispatchEvent(open);
						}
					});
				});
			} else if (tag == "textarea" && input.classList.contains("autosize")) {
				const resize = () => {
					this.autosize(input.name);
				}
				input.addEventListener("change", resize);
				["cut", "paste", "drop", "keydown"].forEach(name => {
					input.addEventListener(name, () => {
						window.setTimeout(resize, 0);
					});
				});
				if (input.value != "") {
					resize();
				}
			}
			if (label instanceof HTMLLabelElement) {
				if (type.match(/^(date|time)$/)) {
					label.classList.add("fixed");
				}
				if (input.value != "") {
					label.classList.add("notempty");
				}
				input.addEventListener("change", () => {
					if (input.value != "") {
						label.classList.add("notempty");
					} else {
						label.classList.remove("notempty");
					}
				});
			}
		});
		this.#darkModeListener(() => {
			this.#htmlElement.querySelectorAll("input, select").forEach(input => {
				const tag = input.localName.toLowerCase();
				const type = input.getAttribute("type") || "";
				if (type.match(/^(date|time)$/i) || tag.match(/^(select)$/i)) {
					input.style.maskImage = this.#getSRCIcon(input, (type || tag) + "-opener-open");
				}
			});
		});
	}

	reset() {
		this.#htmlElements.form.reset();
		this.#htmlElement.querySelectorAll("input,select,textarea").forEach(input => {
			const field = input.parentNode.querySelector(".field") || input.parentNode.parentNode.querySelector(".field") || input.name != "" ? this.getField(input.name) : null;
			const label = input.parentNode.querySelector("label") || input.parentNode.parentNode.querySelector("label") || input.name != "" ? this.getLabel(input.name) : null;
			if (field instanceof HTMLElement) {
				field.classList.remove("invalid");
			}
			if (label instanceof HTMLLabelElement) {
				label.classList.remove("notempty");
			}
			input.value = "";
		});
	}

	focus(name) {
		this.#htmlElements.form[name].focus();
	}

	blur(name) {
		this.#htmlElements.form[name].blur();
	}

	change(name) {
		var event = new Event("change");
		this.#htmlElements.form[name].dispatchEvent(event);
	}

	autosize(name) {
		this.#htmlElements.form[name].style.height = "auto";
		this.#htmlElements.form[name].style.height = this.#htmlElements.form[name].scrollHeight + "px";
	}

	#darkModeListener(callback) {
		const observer = new MutationObserver(() => {
			const colorScheme = getComputedStyle(document.documentElement).getPropertyValue("color-scheme").trim();
			if (this.#colorScheme != colorScheme) {
				this.#colorScheme = colorScheme;
				callback();
			}
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["style", "class"],
			subtree: false
		});
		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
			callback();
		});
	}
}

/*
Implemented HTML structure:
<form class="wui-form (line|border [curve]) [mobile]">
	<input type="hidden" name="hidden">
	<div class="header"></div>
	<div class="body">
		<legend>Fieldset</legend>
		<fieldset>
			<div class="field">
				<label>Text</label>
				<input type="text" name="text">
			</div>
			<div class="field">
				<label>Date</label>
				<input type="date" name="date">
			</div>
			<div class="field">
				<label>Time</label>
				<input type="time" name="time">
			</div>
			<div class="field">
				<label>Select</label>
				<select name="select">
					<option value="value1">value 1</option>
					...
				</select>
			</div>
			<div class="field color">
				<label>Color</label>
				<input type="color" name="color">
			</div>
			<div class="field textarea">
				<label for="wuiTextarea"></label>
				<textarea name="textarea"></textarea>
			</div>
			<div class="field checkbox">
				<label for="checkbox">Checkbox</label>
				<input id="checkbox" type="checkbox" name="checkbox" value="1">
			</div>
			<div class="field">
				<label>Data</label>
				<data value="" class="name"></data>
			</div>
		</fieldset>
		<legend>WUI Fieldset</legend>
		<fieldset>
			<div class="field">
				<label>WUI Selectpicker</label>
				<div class="wui-selectpicker">
					<select name="wuiSelect">
						<option value="value1">value 1</option>
						...
					</select>
				</div>
			</div>
			<div class="field">
				<label>WUI Datepicker</label>
				<div class="wui-datepicker"><input type="date" name="wuiDate" value=""></div>
			</div>
			<div class="field">
				<label>WUI Timepicker</label>
				<div class="wui-timepicker"><input type="time" name="wuiTime" value=""></div>
			</div>
			<div class="field color">
				<label>WUI Timepicker</label>
				<div class="wui-colorpicker"><input type="color" name="wuiColor" value=""></div>
			</div>
			<div class="field checkbox">
				<label for="wuiCheckbox">WUI Checkbox</label>
				<div class="wui-checkbox"><input id="wuiCheckbox" type="checkbox" name="wuiCheckbox" value="1"></div>
			</div>
		</fieldset>
		<div class="text"></div>
	</div>
	<div class="footer">
		<button class="wui-button cancel">cancel</button>
		<button class="wui-button submit">submit</button>
	</div>
</form>
*/