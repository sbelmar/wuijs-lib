/*
 * WUIModalSelector - v0.1
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIModalSelect extends WUIModal {

	static version = "0.1";

	constructor(properties) {
		super(properties);
		this._input = null;
		this._value = "";
		this._options = [];
		this._multiple = false;
		this._emptyText = "";
		this._selecteableText = false;
		this._maxScreenWidth = 768;
		this._acceptButton = null;
		this._acceptDisplay = true;
		this._acceptOnClick = null;
		this._cancelButton = null;
		this._cancelDisplay = true;
		this._cancelOnClick = null;
		this._onSelect = null;
		this.setProperties(properties);
	}

	get value() {
		return this._value;
	}

	get options() {
		return this._options;
	}

	get multiple() {
		return this._multiple;
	}

	get emptyText() {
		return this._emptyText;
	}

	get selecteableText() {
		return this._selecteableText;
	}

	get maxScreenWidth() {
		return this._maxScreenWidth;
	}

	get acceptButton() {
		return this._acceptButton;
	}

	get acceptDisplay() {
		return this._acceptDisplay;
	}

	get acceptOnClick() {
		return this._acceptOnClick;
	}

	get cancelButton() {
		return this._cancelButton;
	}

	get cancelDisplay() {
		return this._cancelDisplay;
	}

	get cancelOnClick() {
		return this._cancelOnClick;
	}

	get onSelect() {
		return this._onSelect;
	}

	set value(value) {
		if (typeof (value) == "string") {
			this._value = value;
		}
	}

	set options(value) {
		if (Array.isArray(value)) {
			this._options = value;
		}
	}

	set multiple(value) {
		if (typeof (value) == "boolean") {
			this._multiple = value;
		}
	}

	set emptyText(value) {
		if (typeof (value) == "string") {
			this._emptyText = value;
		}
	}

	set selecteableText(value) {
		if (typeof (value) == "boolean") {
			this._selecteableText = value;
		}
	}

	set maxScreenWidth(value) {
		if (typeof (value) == "integer") {
			this._maxScreenWidth = value;
		}
	}

	set acceptButton(value) {
		if (typeof (value) == "object" && value.constructor.name == "WUIButton") {
			this._acceptButton = value;
		}
	}

	set acceptDisplay(value) {
		if (typeof (value) == "boolean") {
			this._acceptDisplay = value;
		}
	}

	set acceptOnClick(value) {
		if (typeof (value) == "function") {
			this._acceptOnClick = value;
		}
	}

	set cancelButton(value) {
		if (typeof (value) == "object" && value.constructor.name == "WUIButton") {
			this._cancelButton = value;
		}
	}

	set cancelDisplay(value) {
		if (typeof (value) == "boolean") {
			this._cancelDisplay = value;
		}
	}

	set cancelOnClick(value) {
		if (typeof (value) == "function") {
			this._cancelOnClick = value;
		}
	}

	set onSelect(value) {
		if (typeof (value) == "function") {
			this._onSelect = value;
		}
	}

	/*build() {
		if (this._box == null) {
			const box = document.createElement("div");
			const options = document.createElement("div");
			const footer = document.createElement("div");
			const cancelButton = document.createElement("button");
			const acceptButton = document.createElement("button");
			this._element.classList.add("wui-modal", "select", "mobile", "priority");
			this._element.appendChild(this._box);
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
		this._acceptButton = new WUIButton({ selector: this._selector + " > .box > .footer > button.submit" });
		this._cancelButton = new WUIButton({ selector: this._selector + " > .box > .footer > button.cancel" });
		this._acceptButton.onClick = () => {
			let indexes = [];
			let values = [];
			let texts = [];
			this._box.querySelectorAll(".option.selected").forEach(option => {
				indexes.push(option.dataset.index);
				values.push(option.dataset.value);
				texts.push(option.dataset.text);
			});
			this._value = values.join(",");
			if (this._input != null) {
				this._input.value = this._value;
				this._input.dispatchEvent(new Event("change"));
			}
			if (typeof (this._acceptOnClick) == "function") {
				this._acceptOnClick(this._value, indexes.join(","), texts.join(","));
			}
			this.close();
		};
		this._acceptButton.init();
		this._cancelButton.onClick = () => {
			if (typeof (this._cancelOnClick) == "function") {
				this._cancelOnClick();
			}
			this.close();
		};
		this._cancelButton.init();
	}

	prepareInput(input, options = {}) {
		if (typeof (input) == "object" && input instanceof HTMLElement && input.tagName.toLowerCase() == "select") {
			const defaults = {
				emptyText: this._emptyText,
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
				if (screenWidth <= this._maxScreenWidth || options.force) {
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
							this._input = input;
							this._value = input.value;
							this._options = [];
							this._selecteableText = false;
							this._input.querySelectorAll("option").forEach(option => {
								this._options.push({
									icon: null,
									text: option.text || option.emptyText || "",
									value: option.value || "",
									selected: values.indexOf(option.value) > -1 ? true : false
								});
							});
							this._acceptDisplay = true;
							this._cancelDisplay = true;
							this.open();
						}
					}
				}
			});
		}
	}

	open() {
		const options = this._box.querySelector(".options");
		let index = 0;
		/*if (this.multiple) {
			options.classList.add("multiple");
		} else {
			options.classList.remove("multiple");
		}*/
		options.innerHTML = "";
		if (Array.isArray(this._options)) {
			this._options.forEach((opt, i) => {
				const option = document.createElement("div");
				const icon = document.createElement("div");
				const text = document.createElement("div");
				/*const checker = this.multiple ? document.createElement("div") : null;*/
				const enabled = typeof (opt.enabled) == "boolean" && !opt.enabled ? false : true;
				const selected = Boolean(opt.selected);
				icon.className = "icon " + (typeof (opt.icon) == "string" && opt.icon != "" ? opt.icon : "wui-icon check-line");
				text.className = "text " + (this._selecteableText ? "selecteable" : "");
				text.innerHTML = opt.value == "" ? "<i class='empty'>" + this._emptyText + "</i>" : opt.text;
				option.className = "option" + (selected ? " selected" : "");
				option.dataset.index = i;
				option.dataset.value = opt.value;
				option.dataset.text = opt.text;
				option.addEventListener("click", () => {
					if (enabled) {
						const index = option.dataset.index;
						const value = option.dataset.value;
						this._box.querySelectorAll(".option").forEach((opt, j) => {
							if (opt.dataset.value == value) {
								opt.classList.add("selected");
								this._options[j].selected = true;
							} else {
								opt.classList.remove("selected");
								opt.dataset.selected = false;
							}
						});
						if (typeof (this._onSelect) == "function") {
							this._onSelect(value, index);
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
		if (this._acceptDisplay || this._cancelDisplay) {
			this._footer.classList.remove("hidden");
		} else {
			this._footer.classList.add("hidden");
		}
		if (this._acceptDisplay) {
			this._acceptButton.getElement().classList.remove("hidden");
		} else {
			this._acceptButton.getElement().classList.add("hidden");
		}
		if (this._cancelDisplay) {
			this._cancelButton.getElement().classList.remove("hidden");
		} else {
			this._cancelButton.getElement().classList.add("hidden");
		}
		super.open(() => {
			const top = index * this._box.querySelectorAll(".option")[index].offsetHeight;
			options.scrollTop = top;
		});
	}

	close() {
		super.close();
		if (this._input != null) {
			this._input.setAttribute("dir", "ltr");
			this._input.querySelectorAll("option").forEach(opt => {
				opt.style.display = "block";
			});
		}
		this._input = null;
		this._acceptDisplay = true;
		this._acceptOnClick = null;
		this._cancelDisplay = true;
		this._cancelOnClick = null;
		this._onOpen = null;
		this._onClose = null;
		this._onSelect = null;
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