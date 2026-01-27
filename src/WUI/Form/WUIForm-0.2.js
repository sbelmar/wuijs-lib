/*
 * WUIForm - v0.2
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIForm {

	static version = "0.2";
	static #defaults = {
		selector: ".wui-form",
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
		form: null,
		header: null,
		body: null,
		footer: null

	};
	#colorScheme;

	constructor(properties = {}) {
		const defaults = structuredClone(WUIForm.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
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

	getForm() {
		return this.#htmlElements.form;
	}

	getFormData() {
		return new FormData(this.#htmlElements.form instanceof HTMLFormElement ? this.#htmlElements.form : null);
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

	#getNode(name, type) {
		const root = this.#htmlElements.form || this.#htmlElement;
		const input = root.querySelector(`[name="${name}"]`);
		if (!input) return null;
		const field = input.closest(".field");
		if (!field) return null;
		switch (type) {
			case "field": return field;
			case "icon": return field.querySelector(":scope > .icon");
			case "label": return field.querySelector(":scope > label");
			case "input": return field.querySelector(":scope > input, :scope > select, :scope > textarea, :scope > div > input");
			case "data": return field.querySelector(":scope > data");
			default: return null;
		}
	}

	getField(name) {
		return this.#getNode(name, "field");
	}

	getIcon(name) {
		return this.#getNode(name, "icon");
	}

	getLabel(name) {
		return this.#getNode(name, "label");
	}

	getInput(name) {
		return this.#htmlElements.form[name];
	}

	getData(name) {
		return this.#getNode(name, "data");
	}

	getValue(name) {
		const input = this.getInput(name);
		const data = this.getData(name);
		return input instanceof HTMLInputElement || input instanceof HTMLSelectElement || input instanceof HTMLTextAreaElement ? input.value : data instanceof HTMLDataElement ? (data.value || data.innerHTML) : "";
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

	setValue = (name, value) => {
		const label = this.getLabel(name);
		const input = this.getInput(name);
		const type = typeof (input.type) != "undefined" ? input.type.toLowerCase() : "";
		if (label instanceof HTMLLabelElement && type != "hidden") {
			if (value != "" || type.match(/date|time/)) {
				label.classList.add("notempty");
			} else {
				label.classList.remove("notempty");
			}
		}
		if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement || input instanceof HTMLTextAreaElement) {
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
			data.value = value instanceof HTMLElement ? value.textContent : value;
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
		const icon = this.getIcon(name);
		const label = this.getLabel(name);
		const input = this.getInput(name);
		const data = this.getData(name);
		if (icon instanceof HTMLElement) {
			if (value) {
				icon.classList.remove("disabled");
			} else {
				icon.classList.add("disabled");
			}
		}
		if (label instanceof HTMLLabelElement) {
			if (value) {
				label.classList.remove("disabled");
			} else {
				label.classList.add("disabled");
			}
		}
		if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement || input instanceof HTMLTextAreaElement) {
			input.disabled = !value;
			if (value) {
				input.classList.remove("disabled");
			} else {
				input.classList.add("disabled");
			}
		} else if (data instanceof HTMLDataElement) {
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
				const input = field.querySelector("input, select, textarea");
				if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement || input instanceof HTMLTextAreaElement) {
					input.focus();
				}
			});
		});
		this.#htmlElement.querySelectorAll("input, select, textarea, data").forEach(input => {
			const field = input.closest(".field");
			const label = field ? field.querySelector(":scope > label") : null;
			const tag = input.localName.toLowerCase();
			const type = typeof (input.type) != "undefined" ? input.type.toLowerCase() : "";
			if (tag == "select" || type.match(/^(date|time)$/)) {
				if (!input.parentNode.classList.contains("wui-selectpicker") &&
					!input.parentNode.classList.contains("wui-datepicker") &&
					!input.parentNode.classList.contains("wui-timepicker")
				) {
					const opener = document.createElement("div");
					opener.className = "opener";
					opener.style.maskImage = this.#getSRCIcon(input, type.replace(/-(one|multiple)/, "") + "-opener-open");
					input.after(opener);
				}
				["mouseover", "mouseout", "focus", "blur"].forEach(eventName => {
					input.addEventListener(eventName, () => {
						if (label instanceof HTMLLabelElement) {
							if (input.value != "" || type.match(/date|time/) || eventName.match(/mouseover|focus/)) {
								label.classList.add("notempty");
							} else {
								label.classList.remove("notempty");
							}
						}
						if (eventName == "focus") {
							const open = new MouseEvent("mousedown");
							input.dispatchEvent(open);
						}
					});
				});
			} else if (tag == "textarea" && field.classList.contains("autosize")) {
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
				if (tag == "data" || type.match(/^(date|time|range)$/)) {
					label.classList.add("fixed");
				}
				if (input.value != "" || type.match(/date|time/)) {
					label.classList.add("notempty");
				}
				input.addEventListener("change", () => {
					if (input.value != "" || type.match(/date|time/)) {
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
				const type = typeof (input.type) != "undefined" ? input.type.toLowerCase() : "";
				if (tag == "select" || type.match(/^(date|time)$/)) {
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
HTML output:
<form name="form" class="wui-form (line|border [curve]) [mobile]">
	<input type="hidden" name="hidden">
	<div class="header">Header</div>
	<div class="body [scroll]">
		<fieldset>
			<legend>Fieldset</legend>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>Text</label>
				<input type="text" name="text">
			</div>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>Select</label>
				<select name="select">
					<option value="value1">value 1</option>
					[...]
				</select>
			</div>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>Date</label>
				<input type="date" name="date">
			</div>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>Time</label>
				<input type="time" name="time">
			</div>
			<div class="field icon-left inline noborder">
				<div class="icon"></div>
				<label>Color</label>
				<input type="color" name="color">
			</div>
			<div class="field icon-left noborder">
				<div class="icon"></div>
				<label>Range</label>
				<input type="range" name="range">
			</div>
			<div class="field icon-left [autosize]">
				<div class="icon"></div>
				<label for="wuiTextarea">Text area</label>
				<textarea name="textarea [noresize|vresize|hresize]"></textarea>
			</div>
			<div class="field icon-left inline noborder">
				<div class="icon"></div>
				<label for="checkbox" class="pointer">Checkbox</label>
				<input id="checkbox" type="checkbox" name="checkbox" value="1">
			</div>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>Data</label>
				<data class="name" value=""></data>
			</div>
			<div class="text name [disabled|center]">
				[<p></p>]
			</div>
			<div class="message [highlight|center]">
				[<p></p>]
			</div>
		</fieldset>
		<legend>WUI Inputs Fieldset</legend>
		<fieldset>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>WUI Selectpicker</label>
				<div class="wui-selectpicker">
					<select name="wuiSelect">
						<option value="value1">value 1</option>
						[...]
					</select>
				</div>
			</div>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>WUI Datepicker</label>
				<div class="wui-datepicker"><input type="date" name="wuiDate" value=""></div>
			</div>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>WUI Timepicker</label>
				<div class="wui-timepicker"><input type="time" name="wuiTime" value=""></div>
			</div>
			<div class="field icon-left inline noborder">
				<div class="icon"></div>
				<label>WUI Colorpicker</label>
				<div class="wui-colorpicker"><input type="color" name="wuiColor" value=""></div>
			</div>
			<div class="field icon-left inline noborder">
				<div class="icon"></div>
				<label for="wuiCheckbox">WUI Checkbox</label>
				<div class="wui-checkbox"><input id="wuiCheckbox" type="checkbox" name="wuiCheckbox" value="1"></div>
			</div>
		</fieldset>
	</div>
	<div class="footer">
		<button class="wui-button cancel">cancel</button>
		<button class="wui-button submit">submit</button>
	</div>
</form>
*/