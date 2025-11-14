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
		open: ""
			+"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+"<path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/>"
			+"</svg>",
		"box-option-check": ""
			+"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'>"
			+"<path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z'/>"
			+"</svg>"
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
			if (active != null && active.enabled) {
				if (!active.isOpen()) {
					if (keys.down) {
						active.open();
					}
				} else {
					const focusOption = active._options.querySelector(".option.focus");
					if (keys.up || keys.down) {
						const options = Array.from(active._options.querySelectorAll(".option")).filter(option => !option.classList.contains("hidden"));
						const focusIndex = options.indexOf(focusOption);
						const nextIndex =
							options.length == 0 ? null :
							keys.up && focusOption == null ? options.length -1 :
							keys.up && focusOption != null ? focusIndex -1 :
							keys.down && focusOption == null ? 0 :
							keys.down && focusOption != null ? focusIndex +1 :
							null;
						const nextOption = nextIndex != null ? options[nextIndex] : null;
						if (focusOption != null) {
							focusOption.classList.remove("focus");
						}
						if (nextOption != null) {
							active._options.scrollTop = nextOption.offsetTop - parseInt(active._options.clientHeight/2);
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

	constructor (properties) {
		const defaults = structuredClone(WUISelectpicker.#defaults);
		Object.entries(defaults).forEach(([key, defValue]) => {
			this[key] = key in properties ? properties[key] : defValue;
		});
		this._colorScheme = null;
	}

	get selector() {
		return this._selector;
	}

	get value() {
		return this._input.value;
	}

	get lang() {
		return this._lang;
	}

	get texts() {
		return this._texts;
	}

	get openDirection() {
		return this._openDirection;
	}

	get multiple() {
		return this._multiple;
	}

	get separatorValue() {
		return this._separatorValue;
	}

	get separatorText() {
		return this._separatorText;
	}

	get filterable() {
		return this._filterable;
	}

	get enabled() {
		return this._enabled;
	}

	get onOpen() {
		return this._onOpen;
	}

	get onChange() {
		return this._onChange;
	}

	set selector(value) {
		if (typeof(value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
			this._input = document.querySelector(value+" > select");
		}
	}

	set value(value) {
		if (typeof(value).toString().match(/string|number/) && (typeof(this._enabled) == "undefined" || this._enabled)) {
			value = value.toString().trim();
			this._value = value;
			if (this._enabled) {
				this.#setValue(value);
				this.#setView(value);
				this.#prepare();
			}
		}
	}

	set lang(value) {
		if (typeof(value) == "string" && value.match(/^\w{2}$/)) {
			this._lang = value.toLowerCase();
		}
	}

	set texts(value) {
		if (typeof(value) == "object" && !Array.isArray(value) && value !== null) {
			Object.keys(WUISelectpicker.#texts.en).forEach(text => {
				if (!(text in value)) {
					value[text] = "";
				}
			});
			this._texts = value;
		}
	}

	set openDirection(value) {
		if (typeof(value) == "string" && value.match(/^(up|down)$/i)) {
			this._openDirection = value.toLowerCase();
		}
	}

	set multiple(value) {
		if (typeof(value) == "boolean") {
			this._multiple = value;
			if (typeof(this._input) != "undefined") {
				if (value) {
					this._input.setAttribute("multiple", "true");
				} else {
					this._input.removeAttribute("multiple");
				}
			}
		}
	}

	set separatorValue(value) {
		if (typeof(value) == "string") {
			this._separatorValue = value;
		}
	}

	set separatorText(value) {
		if (typeof(value) == "string") {
			this._separatorText = value;
		}
	}

	set filterable(value) {
		if (typeof(value) == "boolean") {
			this._filterable = value;
			if (typeof(this._inputText) != "undefined") {
				this._inputText.readOnly = !value;
				this._inputText.style.cursor = value ? "default" : "pointer";
				if (value) {
					this._inputText.removeAttribute("readonly");
				} else {
					this._inputText.setAttribute("readonly", "true");
				}
			}
		}
	}

	set enabled(value) {
		if (typeof(value) == "boolean") {
			this._enabled = value;
			this._input.disabled = !value;
			if (typeof(this._inputText) != "undefined") {
				this._inputText.disabled = !value;
				if (value) {
					this._inputText.removeAttribute("disabled");
				} else {
					this._inputText.setAttribute("disabled", "true");
				}
			}
			this.#setStyle();
		}
	}

	set onOpen(value) {
		if (typeof(value) == "function") {
			this._onOpen = value;
		}
	}

	set onChange(value) {
		if (typeof(value) == "function") {
			this._onChange = value;
		}
	}

	getElement() {
		return this._element;
	}

	getBox() {
		return this._box;
	}

	getFocusableElements() {
		return [this._inputText];
	}

	getInput() {
		return this._input;
	}

	#getSelectedOptions() {
		return !this._multiple ? [this._input.value] : Array.from(this._input.options).filter(opt => opt.selected);
	}

	getValue() {
		return this.#getSelectedOptions().map(opt => opt.value).join(this._separatorValue) || "";
	}

	getText() {
		return this.#getSelectedOptions().map(opt => opt.text).join(this._separatorText) || "";
	}

	#getSRCIcon(name) {
		const element = this._element || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-selectpicker-"+name+"icon-src");
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml,"+WUISelectpicker.#icons[name]+"\")";
	}

	#setValue(value) {
		const valores = value.split(this._separatorValue);
		if (!this._multiple) {
			this._input.value = value;
		}
		Array.from(this._input.options).forEach(opt => {
			const selected = valores.includes(opt.value);
			opt.selected = selected;
			if (selected) {
				opt.setAttribute("selected", "true");
			} else {
				opt.removeAttribute("selected");
			}
		});
		this._input.dispatchEvent(new Event("change"));
	}

	#setView(value) {
		const text = !this._multiple ? Array.from(this._input.options).filter(opt => opt.value == value).map(opt => opt.text)[0] || "" : this.getText();
		this._inputText.value = text;
	}

	#setStyle() {
		const disabled = this._input.disabled;
		if (disabled) {
			this._element.classList.add("disabled");
		} else {
			this._element.classList.remove("disabled");
		}
	}

	addOption(opt) {
		this.#addSelectOption(opt);
		this.#addHTMLOption(opt);
	}

	#addSelectOption(opt) {
		if (typeof(this._input) != "undefined") {
			const selected = typeof(opt.selected) == "boolean" ? opt.selected : false;
			const option = new Option(opt.text || "", opt.value || "", selected);
			if (typeof(opt.className) == "string") {
				option.className = opt.className;
			}
			this._input.appendChild(option);
		}
	}

	#addHTMLOption(opt) {
		if (typeof(this._options) != "undefined") {
			const option = document.createElement("div");
			const icon = document.createElement("div");
			const text = document.createElement("div");
			const selected = Boolean(opt.selected);
			const customIcon = Boolean(typeof(opt.icon) == "string" && opt.icon != "");
			icon.className = "icon "+(customIcon ? opt.icon : "check");
			icon.style.maskImage = !customIcon ? this.#getSRCIcon("box-option-check", selected ? "focus" : "out") : "url()";
			text.className = "text "+(opt.value == "" ? "empty" : this._selecteableText ? "selecteable" : "");
			text.innerHTML = opt.value == "" ? (this.texts.empty != "" ? this.texts.empty : lang in WUISelectpicker.#texts ? WUISelectpicker.#texts[lang].empty : "") : opt.text;
			(opt.classList || []).forEach(key => {
				text.classList.add(key);
			});
			Object.keys(opt.dataset || []).forEach(key => {
				text.dataset[key] = opt.dataset[key];
			});
			option.className = "option"+(selected ? " selected" : "");	
			option.dataset.value = opt.value;
			option.appendChild(icon);
			option.appendChild(text);
			option.addEventListener("mouseover", () => {option.classList.add("focus");});
			option.addEventListener("mouseout", () => {option.classList.remove("focus");});
			option.addEventListener("click", () => {
				const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
				const selected = !Boolean(option.classList.contains("selected"));
				const targetValue = option.dataset.value || "";
				const values = [];
				let value = "";
				option.classList.toggle("selected");
				this._options.scrollTop = option.offsetTop - parseInt(this._options.clientHeight/2);
				this._options.querySelectorAll(".option").forEach(option => {
					if (typeof(option.dataset.value) != "undefined") {
						option.classList.remove("focus");
						if (!this._multiple && option.dataset.value != targetValue) {
							option.classList.remove("selected");
						}
						if (this._multiple && option.classList.contains("selected")) {
							values.push(option.dataset.value);
						}
					}
				});
				value = this._multiple ? values.join(this._separatorValue) : selected ? targetValue : "";
				option.classList.add("focus");
				this._targetValue = value;
				this.#setValue(value);
				this.#setView(value);
				if (!this._multiple && !mobile) {
					this.close();
				}
			});
			this._options.appendChild(option);
		}
	}

	init() {
		this._open = document.createElement("div");
		this._inputText = document.createElement("input");
		this._background = document.createElement("div");
		this._box = document.createElement("div");
		this._options = document.createElement("div");
		this._footer = document.createElement("div");
		this._cancelButton = document.createElement("button");
		this._acceptButton = document.createElement("button");
		this._element.appendChild(this._open);
		this._element.appendChild(this._inputText);
		this._element.appendChild(this._background);
		this._element.appendChild(this._box);
		this._element.addEventListener("click", event => {
			if (this._enabled && (event.target.classList.contains("wui-selectpicker") || event.target.classList.contains("open"))) {
				this.toggle();
			}
		});
		this._open.className = "open";
		this._open.style.maskImage = this.#getSRCIcon("open");
		if (this._input.getAttribute("style") != null) {
			this._input.removeAttributeNode(this._input.getAttributeNode("style"));
		}
		this._input.value = this._value || "";
		this._input.addEventListener("change", () => {
			if (typeof(this._onChange) == "function") {
				this._onChange(this._input.value);
			}
		});
		Array.from(this._input.options).forEach(opt => {
			this.#addHTMLOption(opt);
		});
		this._inputText.type = "text";
		this._inputText.name = this._input.name+"Text";
		this._inputText.readOnly = !this._filterable;
		this._inputText.style.cursor = this._filterable ? "default" : "pointer";
		this._inputText.addEventListener("focus", () => {
			if (this._enabled) {
				setTimeout(() => {
					WUISelectpicker.#active = this;
				}, 10)
			}
		});
		this._inputText.addEventListener("blur", () => {
			if (this._enabled) {
				WUISelectpicker.#active = null;
			}
		});
		this._inputText.addEventListener("click", () => {
			if (this._enabled) {
				const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
				if (!mobile && this._filterable) {
					if (!this.isOpen()) {
						this.open();
					}
				} else {
					this.toggle();
				}
			}
		});
		this._inputText.addEventListener("keyup", (event) => {
			const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
			if (!mobile && this._filterable && !event.key.match(/^(ArrowUp|ArrowDown|Enter|Escape)$/)) {
				const prepare = str => str.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ñ/g, "n").replace(/\W+/g, "");
				const key = this._inputText.value;
				const regexp = new RegExp(prepare(key));
				this._options.querySelectorAll(".option").forEach(option => {
					const value = option.dataset.value;
					const text = this._input.querySelector("option[value='"+value+"']").text.trim().toLowerCase();
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
		this._background.className = "background hidden";
		this._box.className = "box "+this._openDirection+" hidden";
		this._box.appendChild(this._options);
		this._box.appendChild(this._footer);
		this._options.className = "options";
		this._footer.className = "footer";
		this._footer.appendChild(this._cancelButton);
		this._footer.appendChild(this._acceptButton);
		this._cancelButton.className = "cancel";
		this._cancelButton.addEventListener("click", () => {this.cancel();});
		this._acceptButton.className = "accept";
		this._acceptButton.addEventListener("click", () => {this.accept();});
		this.#prepare();
		this.#darkModeListener(() => {
			this.#setStyle();
		});
	}

	#prepare() {
		const texts = WUISelectpicker.#texts;
		const lang = this._lang;
		this._targetValue = this._input.value || "";
		this._cancelValue = this._targetValue;
		this._cancelButton.textContent = this._texts.cancel != "" ? this._texts.cancel : lang in texts ? texts[lang].cancel : "";
		this._acceptButton.textContent = this._texts.accept != "" ? this._texts.accept : lang in texts ? texts[lang].accept : "";
		this.#setView(this._targetValue);
	}

	#loadBox() {
		Array.from(this._input.options).forEach((opt, i) => {
			const option = this._options.querySelector(".option:nth-child("+(i +1)+")");
			if (typeof(option.dataset.value) != "undefined") {
				if (opt.selected) {
					this._options.scrollTop = option.offsetTop - parseInt((this._options.clientHeight - option.clientHeight)/2);
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
		if (typeof(this._input) != "undefined") {
			this._input.innerHTML = "";
			this._options.innerHTML = "";
		}
	}

	open() {
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		this._background.classList.remove("hidden");
		this._box.classList.remove("hidden");
		this._box.style.marginBottom = !mobile && this._openDirection == "up" ? this._element.clientHeight+"px" : "auto";
		this.#prepare();
		this.#loadBox();
		if (typeof(this._onOpen) == "function") {
			this._onOpen(this.getValue());
		}
		WUISelectpicker.#active = this;
	}

	close() {
		this._background.classList.add("hidden");
		this._box.classList.add("hidden");
		this._options.querySelectorAll(".option").forEach(option => {
			option.classList.remove("hidden");
		});
	}

	toggle() {
		if (this._box.classList.contains("hidden")) {
			this.open();
		} else {
			this.close();
		}
	}

	cancel() {
		this.#setValue(this._cancelValue);
		this.#setView(this._cancelValue);
		this.close();
	}

	accept() {
		this.close();
	}

	isOpen() {
		return !Boolean(this._box.classList.contains("hidden"));
	}

	isEmpty() {
		return this._input.value == "" || this._inputText.value == "";
	}

	isValid() {
		return (Array.from(this._input.options).filter(opt => opt.text == this._inputText.value).length > 0);
	}

	#darkModeListener(callback) {
		const observer = new MutationObserver(() => {
			const colorScheme = getComputedStyle(document.documentElement).getPropertyValue("color-scheme").trim();
			if (this._colorScheme != colorScheme) {
				this._colorScheme = colorScheme;
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

WUISelectpicker._initClass();

/*
Generated HTML code:
<div class="wui-selector">
	<select name="(name)">
		<option value="value1">value 1</option>
		...
	</select>
	<div class="open"></div>
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