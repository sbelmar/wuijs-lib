/*
 * WUITimepicker - v0.2
 * Author: Sergio E. Belmar (sbelmar@wuijs.dev)
 * Copyright (c) Sergio E. Belmar (sbelmar@wuijs.dev)
 */

class WUITimepicker {

	static version = "0.2";
	static #defaults = {
		selector: "",
		value: "",
		min: "00:00",
		max: "23:59",
		lang: "en",
		texts: {},
		openDirection: "down",
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
			+ "</svg>"
	};
	static #texts = {
		de: {
			cancel: "stornieren",
			accept: "akzeptieren"
		},
		en: {
			cancel: "cancel",
			accept: "accept"
		},
		es: {
			cancel: "cancelar",
			accept: "aceptar"
		}
	};

	#properties = {};
	#htmlElement;
	#htmlElements = {
		input: null,
		opener: null,
		inputs: null,
		background: null,
		box: null,
		listHours: null,
		listMinutes: null,
		footer: null,
		cancelButton: null,
		acceptButton: null
	};
	#nowValue;
	#nowHours;
	#nowMinutes;
	#targetValue;
	#targetDate;
	#targetTime;
	#cancelValue;
	#cancelTime;
	#colorScheme;

	constructor(properties = {}) {
		const defaults = structuredClone(WUITimepicker.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#colorScheme = null;
	}

	get selector() {
		return this.#properties.selector;
	}

	get value() {
		return (this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.value : this.#properties.value);
	}

	get min() {
		return (this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.min : this.#properties.min);
	}

	get max() {
		return (this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.max : this.#properties.max);
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
			this.#htmlElements.input = document.querySelector(value + " > input[type='time']");
		}
	}

	set value(value) {
		if (typeof (value) == "string" && value.match(/^(\d{2}:\d{2})?$/) && (typeof (this.#properties.enabled) == "undefined" || this.#properties.enabled)) {
			this.#setValue(value);
			this.#prepare();
		}
	}

	set min(value) {
		if (typeof (value) == "string" && value.match(/^(\d{2}:\d{2})?$/)) {
			this.#properties.min = value;
			if (this.#htmlElements.input instanceof HTMLInputElement) {
				this.#htmlElements.input.min = value;
			}
		}
	}

	set max(value) {
		if (typeof (value) == "string" && value.match(/^(\d{2}:\d{2})?$/)) {
			this.#properties.max = value;
			if (this.#htmlElements.input instanceof HTMLInputElement) {
				this.#htmlElements.input.max = value;
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
			Object.keys(WUITimepicker.#texts.en).forEach(text => {
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

	set enabled(value) {
		if (typeof (value) == "boolean") {
			this.#properties.enabled = value;
			this.#htmlElements.input.disabled = !value;
			if (this.#htmlElements.inputHours instanceof HTMLInputElement && this.#htmlElements.inputMinutes instanceof HTMLInputElement) {
				this.#htmlElements.inputHours.disabled = !value;
				this.#htmlElements.inputMinutes.disabled = !value;
				if (value) {
					this.#htmlElements.inputHours.removeAttribute("disabled");
					this.#htmlElements.inputMinutes.removeAttribute("disabled");
				} else {
					this.#htmlElements.inputHours.setAttribute("disabled", "true");
					this.#htmlElements.inputMinutes.setAttribute("disabled", "true");
				}
				this.#setStyle();
			}
		}
	}

	set onOpen(value) {
		if (typeof (value) == "function" || value === null) {
			this.#properties.onOpen = value;
		}
	}

	set onChange(value) {
		if (typeof (value) == "function" || value === null) {
			this.#properties.onChange = value;
		}
	}

	getElement() {
		return this.#htmlElement;
	}

	getFocusableElements() {
		return [this.#htmlElements.inputHours, this.#htmlElements.inputMinutes];
	}

	getInput() {
		return this.#htmlElements.input;
	}

	#getSRCIcon(name) {
		const element = this.#htmlElement || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-timepicker-" + name + "icon-src");
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml," + WUITimepicker.#icons[name] + "\")";
	}

	#setValue(value) {
		this.#properties.value = value;
		if (this.#htmlElements.input instanceof HTMLInputElement) {
			this.#htmlElements.input.value = value;
			this.#htmlElements.input.dispatchEvent(new Event("change"));
		}
	}

	#setView(time) {
		if (this.#htmlElements.inputHours instanceof HTMLInputElement && this.#htmlElements.inputMinutes instanceof HTMLInputElement) {
			this.#htmlElements.inputHours.value = time instanceof Date ? ("0" + time.getHours()).slice(-2) : "";
			this.#htmlElements.inputMinutes.value = time instanceof Date ? ("0" + time.getMinutes()).slice(-2) : "";
		}
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
		this.#htmlElements.opener = document.createElement("div");
		this.#htmlElements.inputs = document.createElement("div");
		this.#htmlElements.inputHours = document.createElement("input");
		this.#htmlElements.inputMinutes = document.createElement("input");
		this.#htmlElements.background = document.createElement("div");
		this.#htmlElements.box = document.createElement("div");
		this.#htmlElements.lists = document.createElement("div");
		this.#htmlElements.listHours = document.createElement("ul");
		this.#htmlElements.listMinutes = document.createElement("ul");
		this.#htmlElements.footer = document.createElement("div");
		this.#htmlElements.cancelButton = document.createElement("button");
		this.#htmlElements.acceptButton = document.createElement("button");
		if (this.#htmlElement instanceof HTMLDivElement && this.#htmlElements.input instanceof HTMLInputElement) {
			this.#htmlElement.appendChild(this.#htmlElements.opener);
			this.#htmlElement.appendChild(this.#htmlElements.inputs);
			this.#htmlElement.appendChild(this.#htmlElements.background);
			this.#htmlElement.appendChild(this.#htmlElements.box);
			this.#htmlElement.addEventListener("click", event => {
				if (this.#properties.enabled && (event.target.classList.contains("wui-timepicker") || event.target.classList.contains("opener"))) {
					this.toggle();
				}
			});
			["min", "max", "style"].forEach(name => {
				if (this.#htmlElements.input.hasAttribute(name)) {
					if (name.match(/(min|max)/)) {
						this[name] = this.#htmlElements.input[name];
					}
					if (this.#htmlElements.input.getAttribute(name) != null) {
						this.#htmlElements.input.removeAttributeNode(this.#htmlElements.input.getAttributeNode(name));
					}
				}
			});
			["hours", "minutes"].forEach((part, i) => {
				const name = part.charAt(0).toUpperCase() + part.slice(1);
				const input = this.#htmlElements["input" + name];
				const list = this.#htmlElements["list" + name];
				const max = part == "hours" ? 23 : 59;
				input.type = "text";
				input.name = this.#htmlElements.input.name + name;
				input.placeholder = part == "hours" ? "hh" : "mm";
				input.maxLength = 2;
				input.className = part;
				input.addEventListener("click", () => { this.toggle(); });
				input.addEventListener("keyup", event => {
					const value = event.target.value;
					const part = event.target.className;
					const min = 0;
					const max = part == "hours" ? 23 : 59;
					event.target.value = parseInt(value) > max ? max : parseInt(value) < min ? min : value;
					this.#loadValue();
				});
				this.#htmlElements.inputs.appendChild(input);
				if (i < 1) {
					const span = document.createElement("span");
					span.textContent = ":";
					this.#htmlElements.inputs.appendChild(span);
				}
				for (let i = 0; i <= max; i++) {
					const option = document.createElement("li");
					option.dataset.value = i;
					option.textContent = i;
					option.addEventListener("click", () => {
						const selected = !Boolean(option.classList.contains("selected"));
						const targetValue =
							part == "hours" ? ("0" + i).slice(-2) + ":" + ("0" + this.#htmlElements.inputMinutes.value).slice(-2) :
								part == "minutes" ? ("0" + this.#htmlElements.inputHours.value).slice(-2) + ":" + ("0" + i).slice(-2) :
									"";
						const value = selected ? targetValue : "";
						const time = selected ? new Date("1970-01-01T" + targetValue + ":00") : null;
						list.scrollTop = option.offsetTop - parseInt(list.clientHeight / 2);
						list.querySelectorAll("li").forEach(li => {
							if (typeof (li.dataset.value) != "undefined" && li.dataset.value != i) {
								li.classList.remove("selected");
							}
						});
						option.classList.toggle("selected");
						this.#targetValue = value;
						this.#targetDate = time;
						this.#setValue(value);
						this.#setView(time);
					});
					list.appendChild(option);
				}
			});
			this.#htmlElements.opener.className = "opener";
			this.#htmlElements.opener.style.maskImage = this.#getSRCIcon("opener-open");
			this.#htmlElements.inputs.className = "inputs";
			this.#htmlElements.background.className = "background hidden";
			this.#htmlElements.box.className = "box " + this.#properties.openDirection + " hidden";
			this.#htmlElements.box.appendChild(this.#htmlElements.lists);
			this.#htmlElements.box.appendChild(this.#htmlElements.footer);
			this.#htmlElements.lists.className = "lists";
			this.#htmlElements.lists.appendChild(this.#htmlElements.listHours);
			this.#htmlElements.lists.appendChild(this.#htmlElements.listMinutes);
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
		}
	}

	#prepare() {
		const texts = WUITimepicker.#texts;
		const lang = this.#properties.lang;
		const now = (() => {
			const date = new Date();
			const offset = date.getTimezoneOffset();
			return new Date(date.getTime() - offset * 60 * 1000).toISOString().split("T")[1].slice(0, 5);
		})();
		this.#nowValue = now;
		this.#nowHours = parseInt(this.#nowValue.split(":")[0]);
		this.#nowMinutes = parseInt(this.#nowValue.split(":")[1]);
		this.#targetValue = this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.value : now;
		this.#targetTime = new Date("1970-01-01T" + this.#targetValue + ":00");
		this.#cancelValue = this.#targetValue;
		this.#cancelTime = new Date("1970-01-01T" + this.#targetValue + ":00");
		if (this.#htmlElements.cancelButton instanceof HTMLButtonElement && this.#htmlElements.acceptButton instanceof HTMLButtonElement) {
			this.#htmlElements.cancelButton.textContent = this.#properties.texts.cancel != "" ? this.#properties.texts.cancel : lang in texts ? texts[lang].cancel : "";
			this.#htmlElements.acceptButton.textContent = this.#properties.texts.accept != "" ? this.#properties.texts.accept : lang in texts ? texts[lang].accept : "";
		}
		this.#setView(this.#targetTime);
	}

	#loadBox() {
		const hours = this.#targetTime.getHours();
		const minutes = this.#targetTime.getMinutes();
		["hours", "minutes"].forEach(part => {
			const name = part.charAt(0).toUpperCase() + part.slice(1);
			const list = this.#htmlElements["list" + name];
			const value = part == "hours" ? hours : minutes;
			const nowValue = part == "hours" ? this.#nowHours : this.#nowMinutes;
			if (list instanceof HTMLUListElement) {
				list.querySelectorAll("li").forEach((li, i) => {
					if (i == nowValue) {
						li.classList.add("now");
					} else {
						li.classList.remove("now");
					}
					if (i == value) {
						list.scrollTop = li.offsetTop - parseInt(list.clientHeight / 2);
						li.classList.add("selected");
					} else {
						li.classList.remove("selected");
					}
				});
			}
		});
	}

	#loadValue() {
		if (this.#htmlElements.input instanceof HTMLInputElement && this.#htmlElements.inputHours instanceof HTMLInputElement && this.#htmlElements.inputMinutes instanceof HTMLInputElement) {
			const value = this.#htmlElements.input.value;
			const hours = this.#htmlElements.inputHours.value;
			const minutes = this.#htmlElements.inputMinutes.value;
			this.#setValue(hours != "" && minutes != "" ? ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) : "");
			if (this.#htmlElements.input.value != value && typeof (this.#properties.onChange) == "function") {
				this.#properties.onChange(this.#htmlElements.input.value);
			}
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
				this.#properties.onOpen(this.#htmlElements.input.value);
			}
		}
	}

	close() {
		if (this.#htmlElements.opener instanceof HTMLDivElement && this.#htmlElements.background instanceof HTMLDivElement && this.#htmlElements.box instanceof HTMLDivElement) {
			this.#htmlElements.opener.style.maskImage = this.#getSRCIcon("opener-open");
			this.#htmlElements.background.classList.add("hidden");
			this.#htmlElements.box.classList.add("hidden");
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
		this.#setValue(this.#cancelValue);
		this.#setView(this.#cancelTime);
		this.close();
	}

	accept() {
		this.close();
	}

	isOpen() {
		return Boolean(this.#htmlElements.box instanceof HTMLDivElement ? !this.#htmlElements.box.classList.contains("hidden") : false);
	}

	isEmpty() {
		return Boolean(this.#htmlElements.input instanceof HTMLInputElement && this.#htmlElements.inputHours instanceof HTMLInputElement && this.#htmlElements.inputMinutes instanceof HTMLInputElement ? (this.#htmlElements.input.value == "" || this.#htmlElements.inputHours.value == "" || this.#htmlElements.inputMinutes.value == "") : false);
	}

	isValid() {
		return Boolean(this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.value.match(/^(\d{2}:\d{2})?$/) : false);
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
		this.#nowValue = undefined;
		this.#nowHours = undefined;
		this.#nowMinutes = undefined;
		this.#targetValue = undefined;
		this.#targetDate = undefined;
		this.#targetTime = undefined;
		this.#cancelValue = undefined;
		this.#cancelTime = undefined;
		this.#colorScheme = undefined;
	}
}

/*
Generated HTML code:
<div class="wui-timepicker">
	<input type="time" name="(name)" value="">
	<div class="opener"></div>
	<div class="inputs">
		<input type="text" name="(name))Hours" class="hours">
		<span></span>
		<input type="text" name="(name)Minutes" class="minutes">
	</div>
	<div class="background[ hidden]"></div>
	<div class="box[ hidden]">
		<div class="select">
			<ul class="hours">
				<li></li>
				...
			</ul>
			<ul class="minutes">
				<li></li>
				...
			</ul>
		</div>
		<div class="footer">
			<button class="cancel"></button>
			<button class="accept"></button>
		</div>
	</div>
</div>
*/