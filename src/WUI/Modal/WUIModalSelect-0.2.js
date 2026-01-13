/*
 * WUIModalSelector - v0.2
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIModalSelect extends WUIModal {

	static version = "0.2";

	#properties = {
		value: null,
		options: null,
		multiple: null,
		emptyText: null,
		selecteableText: null,
		maxScreenWidth: null,
		acceptButton: null,
		acceptDisplay: null,
		acceptOnClick: null,
		cancelButton: null,
		cancelDisplay: null,
		cancelOnClick: null,
		onSelect: null
	};
	#input;

	constructor(properties = {}) {
		super(properties);
		this.#properties.value = "";
		this.#properties.options = [];
		this.#properties.multiple = false;
		this.#properties.emptyText = "";
		this.#properties.selecteableText = false;
		this.#properties.maxScreenWidth = 768;
		this.#properties.acceptButton = null;
		this.#properties.acceptDisplay = true;
		this.#properties.acceptOnClick = null;
		this.#properties.cancelButton = null;
		this.#properties.cancelDisplay = true;
		this.#properties.cancelOnClick = null;
		this.#properties.onSelect = null;
		this.#input = null;
	}

	get value() {
		return this.#properties.value;
	}

	get options() {
		return this.#properties.options;
	}

	get multiple() {
		return this.#properties.multiple;
	}

	get emptyText() {
		return this.#properties.emptyText;
	}

	get selecteableText() {
		return this.#properties.selecteableText;
	}

	get maxScreenWidth() {
		return this.#properties.maxScreenWidth;
	}

	get acceptButton() {
		return this.#properties.acceptButton;
	}

	get acceptDisplay() {
		return this.#properties.acceptDisplay;
	}

	get acceptOnClick() {
		return this.#properties.acceptOnClick;
	}

	get cancelButton() {
		return this.#properties.cancelButton;
	}

	get cancelDisplay() {
		return this.#properties.cancelDisplay;
	}

	get cancelOnClick() {
		return this.#properties.cancelOnClick;
	}

	get onSelect() {
		return this.#properties.onSelect;
	}

	set value(value) {
		if (typeof (value) == "string") {
			this.#properties.value = value;
		}
	}

	set options(value) {
		if (Array.isArray(value)) {
			this.#properties.options = value;
		}
	}

	set multiple(value) {
		if (typeof (value) == "boolean") {
			this.#properties.multiple = value;
		}
	}

	set emptyText(value) {
		if (typeof (value) == "string") {
			this.#properties.emptyText = value;
		}
	}

	set selecteableText(value) {
		if (typeof (value) == "boolean") {
			this.#properties.selecteableText = value;
		}
	}

	set maxScreenWidth(value) {
		if (typeof (value) == "integer") {
			this.#properties.maxScreenWidth = value;
		}
	}

	set acceptButton(value) {
		if (typeof (value) == "object" && value.constructor.name == "WUIButton") {
			this.#properties.acceptButton = value;
		}
	}

	set acceptDisplay(value) {
		if (typeof (value) == "boolean") {
			this.#properties.acceptDisplay = value;
		}
	}

	set acceptOnClick(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.acceptOnClick = value;
		}
	}

	set cancelButton(value) {
		if (typeof (value) == "object" && value.constructor.name == "WUIButton") {
			this.#properties.cancelButton = value;
		}
	}

	set cancelDisplay(value) {
		if (typeof (value) == "boolean") {
			this.#properties.cancelDisplay = value;
		}
	}

	set cancelOnClick(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.cancelOnClick = value;
		}
	}

	set onSelect(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onSelect = value;
		}
	}

	/*build() {
		if (this.getBox() == null) {
			const box = document.createElement("div");
			const options = document.createElement("div");
			const footer = document.createElement("div");
			const cancelButton = document.createElement("button");
			const acceptButton = document.createElement("button");
			this.#element.classList.add("wui-modal", "select", "mobile", "priority");
			this.#element.appendChild(this.getBox());
			box.classList.add("box");
			box.appendChild(options);
			box.appendChild(footer);
			options.classList.add("options");
			footer.classList.add("footer");
			footer.appendChild(cancelButton);
			footer.appendChild(acceptButton);
			cancelButton.classList.add("wui-button", "cancel", "wui-language", "flat");
			acceptButton.classList.add("wui-button", "submit", "wui-language");
		}
	}*/

	init() {
		super.init();
		this.#properties.acceptButton = new WUIButton({ selector: this.selector + " > .box > .footer > button.submit" });
		this.#properties.cancelButton = new WUIButton({ selector: this.selector + " > .box > .footer > button.cancel" });
		this.#properties.acceptButton.onClick = () => {
			let indexes = [];
			let values = [];
			let texts = [];
			this.getBox().querySelectorAll(".option.selected").forEach(option => {
				indexes.push(option.dataset.index);
				values.push(option.dataset.value);
				texts.push(option.dataset.text);
			});
			this.#properties.value = values.join(",");
			if (this.#input != null) {
				this.#input.value = this.#properties.value;
				this.#input.dispatchEvent(new Event("change"));
			}
			if (typeof (this.#properties.acceptOnClick) == "function") {
				this.#properties.acceptOnClick(this.#properties.value, indexes.join(","), texts.join(","));
			}
			this.close();
		};
		this.#properties.acceptButton.init();
		this.#properties.cancelButton.onClick = () => {
			if (typeof (this.#properties.cancelOnClick) == "function") {
				this.#properties.cancelOnClick();
			}
			this.close();
		};
		this.#properties.cancelButton.init();
	}

	prepareInput(input, options = {}) {
		if (typeof (input) == "object" && input instanceof HTMLElement && input.tagName.toLowerCase() == "select") {
			const defaults = {
				emptyText: this.#properties.emptyText,
				direction: "ltr",
				force: false
			};
			Object.entries(defaults).forEach(([name, value]) => {
				if (typeof (options[name]) == "undefined") {
					options[name] = value;
				}
			});
			input.style.position = "relative";
			input.style.zIndex = 1;
			input._touches = [];
			input._drag = false;
			input.addEventListener("touchstart", event => {
				input._touches = event.touches || event.targetTouches;
				input._drag = false;
			});
			input.addEventListener("touchmove", () => {
				input._touches = [];
				input._drag = true;
			});
			input.addEventListener("touchend", event => {
				const screenWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
				if (screenWidth <= this.#properties.maxScreenWidth || options.force) {
					if (!input._drag) {
						if (event.cancelable) {
							event.preventDefault();
						}
						const values = input.value.split(",");
						const rect = input.getBoundingClientRect();
						const rightTouch = event.target.clientWidth - (input._touches[0].clientX - rect.left);
						input.setAttribute("dir", options.direction);
						input.querySelectorAll("option").forEach(option => {
							option.style.display = "none";
						});
						if (rightTouch <= 30) {
							this.#input = input;
							this.#properties.value = input.value;
							this.#properties.options = [];
							this.#properties.selecteableText = false;
							this.#input.querySelectorAll("option").forEach(option => {
								this.#properties.options.push({
									icon: null,
									text: option.text || option.emptyText || "",
									value: option.value || "",
									selected: values.indexOf(option.value) > -1 ? true : false
								});
							});
							this.#properties.acceptDisplay = true;
							this.#properties.cancelDisplay = true;
							this.open();
						}
					}
				}
			});
		}
	}

	open() {
		const options = this.getBox().querySelector(".options");
		let index = 0;
		/*if (this.multiple) {
			options.classList.add("multiple");
		} else {
			options.classList.remove("multiple");
		}*/
		options.innerHTML = "";
		if (Array.isArray(this.#properties.options)) {
			this.#properties.options.forEach((opt, i) => {
				const option = document.createElement("div");
				const icon = document.createElement("div");
				const text = document.createElement("div");
				/*const checker = this.multiple ? document.createElement("div") : null;*/
				const enabled = typeof (opt.enabled) == "boolean" && !opt.enabled ? false : true;
				const selected = Boolean(opt.selected);
				icon.className = "icon " + (typeof (opt.icon) == "string" && opt.icon != "" ? opt.icon : "wui-icon check-line");
				text.className = "text " + (this.#properties.selecteableText ? "selecteable" : "");
				text.innerHTML = opt.value == "" ? "<i class='empty'>" + this.#properties.emptyText + "</i>" : opt.text;
				option.className = "option" + (selected ? " selected" : "");
				option.dataset.index = i;
				option.dataset.value = opt.value;
				option.dataset.text = opt.text;
				option.addEventListener("click", () => {
					if (enabled) {
						const index = option.dataset.index;
						const value = option.dataset.value;
						this.getBox().querySelectorAll(".option").forEach((opt, j) => {
							if (opt.dataset.value == value) {
								opt.classList.add("selected");
								this.#properties.options[j].selected = true;
							} else {
								opt.classList.remove("selected");
								opt.dataset.selected = false;
							}
						});
						if (typeof (this.#properties.onSelect) == "function") {
							this.#properties.onSelect(value, index);
						}
					}
				});
				option.appendChild(icon);
				option.appendChild(text);
				/*if (this.multiple) {
					checker.className = "checker";
					option.appendChild(checker);
				}*/
				if (!enabled) {
					option.classList.add("disabled");
				}
				options.appendChild(option);
				if (selected) {
					index = i;
				}
			});
		}
		if (this.#properties.acceptDisplay || this.#properties.cancelDisplay) {
			this.getFooter().classList.remove("hidden");
		} else {
			this.getFooter().classList.add("hidden");
		}
		if (this.#properties.acceptDisplay) {
			this.#properties.acceptButton.getElement().classList.remove("hidden");
		} else {
			this.#properties.acceptButton.getElement().classList.add("hidden");
		}
		if (this.#properties.cancelDisplay) {
			this.#properties.cancelButton.getElement().classList.remove("hidden");
		} else {
			this.#properties.cancelButton.getElement().classList.add("hidden");
		}
		super.open(() => {
			const top = index * this.getBox().querySelectorAll(".option")[index].offsetHeight;
			options.scrollTop = top;
		});
	}

	close() {
		super.close();
		if (this.#input != null) {
			this.#input.setAttribute("dir", "ltr");
			this.#input.querySelectorAll("option").forEach(opt => {
				opt.style.display = "block";
			});
		}
		this.#properties.acceptDisplay = true;
		this.#properties.acceptOnClick = null;
		this.#properties.cancelDisplay = true;
		this.#properties.cancelOnClick = null;
		this.onOpen = null;
		this.onClose = null;
		this.#properties.onSelect = null;
		this.#input = null;
	}
}

/*
Generated HTML code:
<div class="wui-modal select [priority]">
	<div class="box">
		<div class="options">
			<div class="option"></div>
			...
		</div>
		<div class="footer">
			<button class="wui-button cancel flat wui-language" data-key="buttons.cancel"></button>
			<button class="wui-button submit wui-language" data-key="buttons.accept"></button>
		</div>
	</div>
</div>
*/