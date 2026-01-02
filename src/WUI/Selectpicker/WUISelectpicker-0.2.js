/*
 * WUISelectpicker - v0.2
 * Author: Sergio E. Belmar (sbelmar@wuijs.dev)
 * Copyright (c) Sergio E. Belmar (sbelmar@wuijs.dev)
 */

class WUISelectpicker {

	static version = "0.2";
	static #defaults = {
		selector: "",
		value: "",
		lang: "en",
		texts: {},
		openDirection: "down",
		multiple: false,
		separatorValue: ",",
		separatorText: ", ",
		filterable: true,
		enabled: true,
		onOpen: null,
		onChange: null
	};
	static #icons = {
		"opener-open": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/>"
			+ "</svg>",
		"opener-close": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/>"
			+ "</svg>",
		"box-option-check": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'>"
			+ "<path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z'/>"
			+ "</svg>"
	};
	static #texts = {
		de: {
			empty: "leer",
			cancel: "stornieren",
			accept: "akzeptieren"
		},
		en: {
			empty: "empty",
			cancel: "cancel",
			accept: "accept"
		},
		es: {
			empty: "vacío",
			cancel: "cancelar",
			accept: "aceptar"
		}
	};
	static #active = null;

	static _initClass() {
		document.addEventListener("keydown", event => {
			const active = WUISelectpicker.#active;
			const keys = {
				up: Boolean(event.key == "ArrowUp"),
				down: Boolean(event.key == "ArrowDown"),
				intro: Boolean(event.key == "Enter"),
				esc: Boolean(event.key == "Escape")
			};
			if (active != null && active.enabled && (keys.up || keys.down || keys.intro || keys.esc)) {
				if (!active.isOpen()) {
					if (keys.down) {
						active.open();
					}
				} else {
					const focusOption = active.getOptions().querySelector(".option.focus");
					if (keys.up || keys.down) {
						const options = Array.from(active.getOptions().querySelectorAll(".option")).filter(option => !option.classList.contains("hidden"));
						const focusIndex = options.indexOf(focusOption);
						const nextIndex =
							options.length == 0 ? null :
								keys.up && focusOption == null ? options.length - 1 :
									keys.up && focusOption != null ? focusIndex - 1 :
										keys.down && focusOption == null ? 0 :
											keys.down && focusOption != null ? focusIndex + 1 :
												null;
						const nextOption = nextIndex != null ? options[nextIndex] : null;
						if (focusOption != null) {
							focusOption.classList.remove("focus");
						}
						if (nextOption != null) {
							active.getOptions().scrollTop = nextOption.offsetTop - parseInt(active.getOptions().clientHeight / 2);
							nextOption.classList.add("focus");
						}
					} else if (keys.intro) {
						if (focusOption != null) {
							const value = focusOption.dataset.value;
							active.value = value;
							active.close();
						}
					} else if (keys.esc) {
						active.close();
					}
				}
			}
		});
	}

	#properties = {};
	#htmlElement;
	#htmlElements = {
		input: null,
		opener: null,
		inputText: null,
		background: null,
		box: null,
		options: null,
		footer: null,
		cancelButton: null,
		acceptButton: null
	};
	#targetValue;
	#cancelValue;
	#colorScheme;

	constructor(properties = {}) {
		const defaults = structuredClone(WUISelectpicker.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#targetValue = null;
		this.#cancelValue = null;
		this.#colorScheme = null;
	}

	get selector() {
		return this.#properties.selector;
	}

	get value() {
		return this.#getValue();
	}

	get text() {
		return this.#getText();
	}

	get lang() {
		return this.#properties.lang;
	}

	get texts() {
		return this.#properties.texts;
	}

	get openDirection() {
		return this.#properties.openDirection;
	}

	get multiple() {
		return this.#properties.multiple;
	}

	get separatorValue() {
		return this.#properties.separatorValue;
	}

	get separatorText() {
		return this.#properties.separatorText;
	}

	get filterable() {
		return this.#properties.filterable;
	}

	get enabled() {
		return this.#properties.enabled;
	}

	get onOpen() {
		return this.#properties.onOpen;
	}

	get onChange() {
		return this.#properties.onChange;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.selector = value;
			this.#htmlElement = document.querySelector(value);
			this.#htmlElements.input = document.querySelector(value + " > select");
		}
	}

	set value(value) {
		if (typeof (value).toString().match(/string|number/) && (typeof (this.#properties.enabled) == "undefined" || this.#properties.enabled)) {
			value = value.toString().trim();
			this.#properties.value = value;
			if (this.#properties.enabled) {
				this.#setValue(value);
				this.#refreshView();
				this.#prepare();
			}
		}
	}

	set lang(value) {
		if (typeof (value) == "string" && value.match(/^\w{2}$/)) {
			this.#properties.lang = value.toLowerCase();
		}
	}

	set texts(value) {
		if (typeof (value) == "object" && !Array.isArray(value) && value !== null) {
			Object.keys(WUISelectpicker.#texts.en).forEach(text => {
				if (!(text in value)) {
					value[text] = "";
				}
			});
			this.#properties.texts = value;
		}
	}

	set openDirection(value) {
		if (typeof (value) == "string" && value.match(/^(up|down)$/i)) {
			this.#properties.openDirection = value.toLowerCase();
		}
	}

	set multiple(value) {
		if (typeof (value) == "boolean") {
			this.#properties.multiple = value;
			if (this.#htmlElements.input instanceof HTMLSelectElement) {
				if (value) {
					this.#htmlElements.input.setAttribute("multiple", "true");
				} else {
					this.#htmlElements.input.removeAttribute("multiple");
				}
			}
		}
	}

	set separatorValue(value) {
		if (typeof (value) == "string") {
			this.#properties.separatorValue = value;
		}
	}

	set separatorText(value) {
		if (typeof (value) == "string") {
			this.#properties.separatorText = value;
		}
	}

	set filterable(value) {
		if (typeof (value) == "boolean") {
			this.#properties.filterable = value;
			if (this.#htmlElements.inputText instanceof HTMLInputElement) {
				this.#htmlElements.inputText.readOnly = !value;
				this.#htmlElements.inputText.style.cursor = value ? "default" : "pointer";
				if (value) {
					this.#htmlElements.inputText.removeAttribute("readonly");
				} else {
					this.#htmlElements.inputText.setAttribute("readonly", "true");
				}
			}
		}
	}

	set enabled(value) {
		if (typeof (value) == "boolean") {
			this.#properties.enabled = value;
			if (this.#htmlElements.input instanceof HTMLSelectElement && this.#htmlElements.inputText instanceof HTMLInputElement) {
				this.#htmlElements.input.disabled = !value;
				this.#htmlElements.inputText.disabled = !value;
				if (value) {
					this.#htmlElements.inputText.removeAttribute("disabled");
				} else {
					this.#htmlElements.inputText.setAttribute("disabled", "true");
				}
			}
			this.#setStyle();
		}
	}

	set onOpen(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onOpen = value;
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

	getBox() {
		return this.#htmlElements.box;
	}

	getOptions() {
		return this.#htmlElements.options;
	}

	getFocusableElements() {
		return [this.#htmlElements.inputText];
	}

	getInput() {
		return this.#htmlElements.input;
	}

	#getSelectedOptions() {
		return Array.from(this.#htmlElements.input.options).filter(opt => opt.selected);
	}

	#getValue() {
		return this.#getSelectedOptions().map(opt => opt.value).join(this.#properties.separatorValue) || this.#properties.value || "";
	}

	#getText() {
		return this.#getSelectedOptions().map(opt => opt.text).join(this.#properties.separatorText) || "";
	}

	#getSRCIcon(name) {
		const element = this.#htmlElement || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-selectpicker-" + name + "icon-src");
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml," + WUISelectpicker.#icons[name] + "\")";
	}

	#setValue(value) {
		const valores = value.split(this.#properties.separatorValue);
		if (!this.#properties.multiple) {
			this.#properties.value = value;
		}
		if (this.#htmlElements.input instanceof HTMLSelectElement) {
			Array.from(this.#htmlElements.input.options).forEach(opt => {
				const selected = valores.includes(opt.value);
				opt.selected = selected;
				if (selected) {
					opt.setAttribute("selected", "true");
				} else {
					opt.removeAttribute("selected");
				}
			});
			this.#htmlElements.input.dispatchEvent(new Event("change"));
		}
	}

	#refreshView() {
		if (this.#htmlElements.inputText instanceof HTMLInputElement) {
			this.#htmlElements.inputText.value = this.#getText();
		}
	}

	#setStyle() {
		if (this.#htmlElement instanceof HTMLDivElement && this.#htmlElements.input instanceof HTMLSelectElement) {
			const disabled = this.#htmlElements.input.disabled;
			if (disabled) {
				this.#htmlElement.classList.add("disabled");
			} else {
				this.#htmlElement.classList.remove("disabled");
			}
		}
	}

	addOption(opt) {
		this.#addSelectOption(opt);
		this.#addHTMLOption(opt);
	}

	#addSelectOption(opt) {
		if (this.#htmlElements.input instanceof HTMLSelectElement) {
			const selected = typeof (opt.selected) == "boolean" ? opt.selected : false;
			const option = new Option(opt.text || "", opt.value || "", selected);
			this.#htmlElements.input.appendChild(option);
		}
	}

	#addHTMLOption(opt) {
		if (this.#htmlElements.options instanceof HTMLElement) {
			const option = document.createElement("div");
			const icon = document.createElement("div");
			const text = document.createElement("div");
			const selected = Boolean(opt.selected);
			const customIcon = Boolean(typeof (opt.icon) == "string" && opt.icon != "");
			icon.className = "icon " + (customIcon ? opt.icon : "check");
			icon.style.maskImage = !customIcon ? this.#getSRCIcon("box-option-check", selected ? "focus" : "out") : "url()";
			text.className = "text " + (opt.value == "" ? "empty" : this._selecteableText ? "selecteable" : "");
			text.innerHTML = opt.value == "" ? (this.texts.empty != "" ? this.texts.empty : this.lang in WUISelectpicker.#texts ? WUISelectpicker.#texts[this.lang].empty : "") : opt.text;
			(opt.classList || []).forEach(key => {
				text.classList.add(key);
			});
			Object.keys(opt.dataset || []).forEach(key => {
				text.dataset[key] = opt.dataset[key];
			});
			option.className = "option" + (selected ? " selected" : "");
			option.dataset.value = opt.value;
			option.appendChild(icon);
			option.appendChild(text);
			option.addEventListener("mouseover", () => { option.classList.add("focus"); });
			option.addEventListener("mouseout", () => { option.classList.remove("focus"); });
			option.addEventListener("click", () => {
				const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
				const selected = !Boolean(option.classList.contains("selected"));
				const targetValue = option.dataset.value || "";
				const values = [];
				let value = "";
				option.classList.toggle("selected");
				this.#htmlElements.options.scrollTop = option.offsetTop - parseInt(this.#htmlElements.options.clientHeight / 2);
				this.#htmlElements.options.querySelectorAll(".option").forEach(option => {
					if (typeof (option.dataset.value) != "undefined") {
						option.classList.remove("focus");
						if (!this.#properties.multiple && option.dataset.value != targetValue) {
							option.classList.remove("selected");
						}
						if (this.#properties.multiple && option.classList.contains("selected")) {
							values.push(option.dataset.value);
						}
					}
				});
				value = this.#properties.multiple ? values.join(this.#properties.separatorValue) : selected ? targetValue : "";
				option.classList.add("focus");
				this.#targetValue = value;
				this.value = value;
				if (!this.#properties.multiple && !mobile) {
					this.close();
				}
			});
			this.#htmlElements.options.appendChild(option);
		}
	}

	init() {
		this.#htmlElements.opener = document.createElement("div");
		this.#htmlElements.inputText = document.createElement("input");
		this.#htmlElements.background = document.createElement("div");
		this.#htmlElements.box = document.createElement("div");
		this.#htmlElements.options = document.createElement("div");
		this.#htmlElements.footer = document.createElement("div");
		this.#htmlElements.cancelButton = document.createElement("button");
		this.#htmlElements.acceptButton = document.createElement("button");
		if (this.#htmlElement instanceof HTMLDivElement && this.#htmlElements.input instanceof HTMLSelectElement) {
			this.#htmlElement.appendChild(this.#htmlElements.opener);
			this.#htmlElement.appendChild(this.#htmlElements.inputText);
			this.#htmlElement.appendChild(this.#htmlElements.background);
			this.#htmlElement.appendChild(this.#htmlElements.box);
			this.#htmlElement.addEventListener("click", event => {
				if (this.#properties.enabled && (event.target.classList.contains("wui-selectpicker") || event.target.classList.contains("opener"))) {
					this.toggle();
				}
			});
			this.#htmlElements.opener.className = "opener";
			this.#htmlElements.opener.style.maskImage = this.#getSRCIcon("opener-open");
			if (this.#htmlElements.input.getAttribute("style") != null) {
				this.#htmlElements.input.removeAttributeNode(this.#htmlElements.input.getAttributeNode("style"));
			}
			this.#properties.value = this.#properties.value || "";
			this.#htmlElements.input.addEventListener("change", () => {
				if (typeof (this.#properties.onChange) == "function") {
					this.#properties.onChange(this.value);
				}
			});
			Array.from(this.#htmlElements.input.options).forEach(opt => {
				this.#addHTMLOption(opt);
			});
			this.#htmlElements.inputText.type = "text";
			this.#htmlElements.inputText.name = this.#htmlElements.input.name + "Text";
			this.#htmlElements.inputText.readOnly = !this.#properties.filterable;
			this.#htmlElements.inputText.style.cursor = this.#properties.filterable ? "default" : "pointer";
			this.#htmlElements.inputText.addEventListener("focus", () => {
				if (this.#properties.enabled) {
					setTimeout(() => {
						WUISelectpicker.#active = this;
					}, 10)
				}
			});
			this.#htmlElements.inputText.addEventListener("blur", () => {
				if (this.#properties.enabled) {
					WUISelectpicker.#active = null;
				}
			});
			this.#htmlElements.inputText.addEventListener("click", () => {
				if (this.#properties.enabled) {
					const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
					if (!mobile && this.#properties.filterable) {
						if (!this.isOpen()) {
							this.open();
						}
					} else {
						this.toggle();
					}
				}
			});
			this.#htmlElements.inputText.addEventListener("keyup", (event) => {
				const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
				if (!mobile && this.#properties.filterable && !event.key.match(/^(ArrowUp|ArrowDown|Enter|Escape)$/)) {
					const prepare = str => str.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ñ/g, "n").replace(/\W+/g, "");
					const key = this.#htmlElements.inputText.value;
					const regexp = new RegExp(prepare(key));
					this.#htmlElements.options.querySelectorAll(".option").forEach(option => {
						const value = option.dataset.value;
						const text = this.#htmlElements.input.querySelector("option[value='" + value + "']").text.trim().toLowerCase();
						if (regexp.test(prepare(text))) {
							option.classList.remove("hidden");
						} else {
							option.classList.add("hidden");
						}
					});
					if (!this.isOpen()) {
						this.open();
					}
				}
			});
			this.#htmlElements.background.className = "background hidden";
			this.#htmlElements.box.className = "box " + this.#properties.openDirection + " hidden";
			this.#htmlElements.box.appendChild(this.#htmlElements.options);
			this.#htmlElements.box.appendChild(this.#htmlElements.footer);
			this.#htmlElements.options.className = "options";
			this.#htmlElements.footer.className = "footer";
			this.#htmlElements.footer.appendChild(this.#htmlElements.cancelButton);
			this.#htmlElements.footer.appendChild(this.#htmlElements.acceptButton);
			this.#htmlElements.cancelButton.className = "cancel";
			this.#htmlElements.cancelButton.addEventListener("click", () => { this.cancel(); });
			this.#htmlElements.acceptButton.className = "accept";
			this.#htmlElements.acceptButton.addEventListener("click", () => { this.accept(); });
			this.#prepare();
			this.#darkModeListener(() => {
				this.#setStyle();
			});
			if (this.#properties.value != null) {
				this.value = this.#properties.value
			}
		}
	}

	#prepare() {
		const texts = WUISelectpicker.#texts;
		const lang = this.#properties.lang;
		this.#targetValue = this.#properties.value || "";
		this.#cancelValue = this.#targetValue;
		if (this.#htmlElements.cancelButton instanceof HTMLButtonElement && this.#htmlElements.acceptButton instanceof HTMLButtonElement) {
			this.#htmlElements.cancelButton.textContent = this.#properties.texts.cancel != "" ? this.#properties.texts.cancel : lang in texts ? texts[lang].cancel : "";
			this.#htmlElements.acceptButton.textContent = this.#properties.texts.accept != "" ? this.#properties.texts.accept : lang in texts ? texts[lang].accept : "";
		}
		this.#refreshView();
	}

	#loadBox() {
		Array.from(this.#htmlElements.input.options).forEach((opt, i) => {
			const option = this.#htmlElements.options.querySelector(".option:nth-child(" + (i + 1) + ")");
			if (option instanceof HTMLDivElement && typeof (option.dataset.value) != "undefined") {
				if (opt.selected) {
					this.#htmlElements.options.scrollTop = option.offsetTop - parseInt((this.#htmlElements.options.clientHeight - option.clientHeight) / 2);
					option.classList.add("selected");
				} else {
					option.classList.remove("selected", "focus");
				}
			}
		});
	}

	loadOptions(options) {
		this.clearOptions();
		options.forEach(opt => {
			this.addOption(opt);
		});
	}

	clearOptions() {
		if (this.#htmlElements.input instanceof HTMLSelectElement) {
			this.#htmlElements.input.innerHTML = "";
			this.#htmlElements.options.innerHTML = "";
		}
	}

	open() {
		if (this.#htmlElements.opener instanceof HTMLDivElement && this.#htmlElements.background instanceof HTMLDivElement && this.#htmlElements.box instanceof HTMLDivElement) {
			const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
			this.#htmlElements.opener.style.maskImage = this.#getSRCIcon("opener-close");
			this.#htmlElements.background.classList.remove("hidden");
			this.#htmlElements.box.classList.remove("hidden");
			this.#htmlElements.box.style.marginBottom = !mobile && this.#properties.openDirection == "up" ? this.#htmlElement.clientHeight + "px" : "auto";
			this.#prepare();
			this.#loadBox();
			if (typeof (this.#properties.onOpen) == "function") {
				this.#properties.onOpen(this.value);
			}
			WUISelectpicker.#active = this;
		}
	}

	close() {
		if (this.#htmlElements.opener instanceof HTMLDivElement && this.#htmlElements.background instanceof HTMLDivElement && this.#htmlElements.box instanceof HTMLDivElement) {
			this.#htmlElements.opener.style.maskImage = this.#getSRCIcon("opener-open");
			this.#htmlElements.background.classList.add("hidden");
			this.#htmlElements.box.classList.add("hidden");
			this.#htmlElements.options.querySelectorAll(".option").forEach(option => {
				option.classList.remove("hidden");
			});
		}
	}

	toggle() {
		if (this.#htmlElements.box instanceof HTMLDivElement) {
			if (this.#htmlElements.box.classList.contains("hidden")) {
				this.open();
			} else {
				this.close();
			}
		}
	}

	cancel() {
		this.value = this.#cancelValue;
		this.close();
	}

	accept() {
		this.close();
	}

	isOpen() {
		return Boolean(this.#htmlElements.box instanceof HTMLDivElement ? !this.#htmlElements.box.classList.contains("hidden") : false);
	}

	isEmpty() {
		return Boolean(this.#htmlElements.inputText instanceof HTMLInputElement ? this.#properties.value == "" || this.#htmlElements.inputText.value == "" : false);
	}

	isValid() {
		return Boolean(this.#htmlElements.input instanceof HTMLSelectElement ? (Array.from(this.#htmlElements.input.options).filter(opt => opt.text == this.#htmlElements.inputText.value).length > 0) : false);
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

	destroy() {
		this.close();
		if (this.#htmlElement instanceof HTMLElement) {
			Object.entries(this.#htmlElements).forEach(([key, element]) => {
				if (element) {
					element.remove();
				}
				this.#htmlElements[key] = null;
			});
			this.#htmlElement.innerHTML = "";
		}
		Object.keys(this.#properties).forEach(name => {
			delete this.#properties[name];
		});
		this.#targetValue = undefined;
		this.#cancelValue = undefined;
		this.#colorScheme = undefined;
	}
}

WUISelectpicker._initClass();

/*
Generated HTML code:
<div class="wui-selector">
	<select name="(name)">
		<option value="value1">value 1</option>
		...
	</select>
	<div class="opener"></div>
	<input type="text" value="(name)Text" value="">
	<div class="background"></div>
	<div class="box">
		<div class="options">
			<div class="option" data-value="value1">value 1</div>
			...
		</div>
		<div class="footer">
			<button class="cancel"></button>
			<button class="accept"></button>
		</div>
	</div>
</div>
*/