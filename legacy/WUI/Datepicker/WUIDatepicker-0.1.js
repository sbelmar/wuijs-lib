/*
 * WUIDatepicker - v0.1
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIDatepicker {

	static version = "0.1";
	static #defaults = {
		selector: "",
		locales: "en-US",
		value: "",
		min: "",
		max: "",
		monthsNames: [],
		weekDaysNames: [],
		texts: {},
		openDirection: "down",
		boxAlign: "center",
		enabled: true,
		onOpen: null,
		onChange: null
	};
	static #icons = {
		open: ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/>"
			+ "</svg>",
		"box-up": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/>"
			+ "</svg>",
		"box-down": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/>"
			+ "</svg>",
		"box-prev": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z'/>"
			+ "</svg>",
		"box-next": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z'/>"
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
	static #localesSet = ("" // https://www.techonthenet.com/js/language_tags.php 20241007
		+ "ar-SA bn-BD bn-IN cs-CZ da-DK de-AT de-CH de-DE el-GR en-AU en-CA en-GB en-IE en-IN en-NZ en-US en-ZA es-AR es-CL es-CO es-ES es-MX es-US fi-FI fr-BE fr-CA fr-CH fr-FR he-IL hi-IN hu-HU id-ID it-CH it-IT ja-JP ko-KR nl-BE nl-NL no-NO pl-PL pt-BR pt-PT ro-RO ru-RU sk-SK sv-SE ta-IN ta-LK th-TH tr-TR zh-CN zh-HK zh-TW"
		+ "").toLowerCase().split(/\s+/);
	static #firstWeekDayCountry = {
		0: "AG AS AU BD BR BS BT BW BZ CA CN CO DM DO ET GT GU HK HN ID IL IN JM JP KE KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PT PY SA SG SV TH TT TW UM US VE VI WS YE ZA ZW",
		1: "AD AI AL AM AN AR AT AX AZ BA BE BG BM BN BY CH CL CM CR CY CZ DE DK EC EE ES FI FJ FO FR GB GE GF GP GR HR HU IE IS IT KG KZ LB LI LK LT LU LV MC MD ME MK MN MQ MY NL NO NZ PL RE RO RS RU SE SI SK SM TJ TM TR UA UY UZ VA VN XK",
		2: "",
		3: "",
		4: "",
		5: "MV",
		6: "AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY"
	};
	static #countryFirstWeekDay = {};

	static _initClass() {
		Object.entries(WUIDatepicker.#firstWeekDayCountry).forEach(([wday, countries]) => {
			countries.split(/\s+/).forEach(code => {
				WUIDatepicker.#countryFirstWeekDay[code] = wday;
			});
		});
	}

	constructor(properties) {
		Object.keys(WUIDatepicker.#defaults).forEach(prop => {
			this[prop] = typeof (properties) != "undefined" && prop in properties ? properties[prop] : prop in WUIDatepicker.#defaults ? WUIDatepicker.#defaults[prop] : null;
		});
	}

	get selector() {
		return this._selector;
	}

	get locales() {
		return this._locales;
	}

	get value() {
		return this._input.value;
	}

	get min() {
		return this._min;
	}

	get max() {
		return this._max;
	}

	get monthsNames() {
		return this._monthsNames;
	}

	get weekDaysNames() {
		return this._weekDaysNames;
	}

	get texts() {
		return this._texts;
	}

	get openDirection() {
		return this._openDirection;
	}

	get boxAlign() {
		return this._boxAlign;
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
		if (typeof (value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
			this._input = document.querySelector(value + " > input[type='date']");
		}
	}

	set locales(value) {
		if (typeof (value) == "string" && value.match(/^[a-z]{2}-[a-z]{2}$/i) && WUIDatepicker.#localesSet.indexOf(value.toLowerCase()) > -1) {
			this._locales = value.split("-").map((x, i) => {
				return i == 0 ? x.toLowerCase() : x.toUpperCase();
			}).join("-");
			if (typeof (this._inputs) != "undefined") {
				this.#loadInputs();
			}
		}
	}

	set value(value) {
		if (typeof (value) == "string" && value.match(/^(\d{4}-\d{2}-\d{2})?$/) && (typeof (this._enabled) == "undefined" || this._enabled)) {
			this.#setValue(value);
			this.#prepareValue();
		}
	}

	set min(value) {
		if (typeof (value) == "string" && value.match(/^(\d{4}-\d{2}-\d{2})?$/)) {
			this._min = value;
		}
	}

	set max(value) {
		if (typeof (value) == "string" && value.match(/^(\d{4}-\d{2}-\d{2})?$/)) {
			this._max = value;
		}
	}

	set monthsNames(value) {
		if (Array.isArray(value)) {
			this._monthsNames = value;
		}
	}

	set weekDaysNames(value) {
		if (Array.isArray(value)) {
			this._weekDaysNames = value;
		}
	}

	set texts(value) {
		if (typeof (value) == "object" && !Array.isArray(value) && value !== null) {
			Object.keys(WUIDatepicker.#texts.en).forEach(text => {
				if (!(text in value)) {
					value[text] = "";
				}
			});
			this._texts = value;
		}
	}

	set openDirection(value) {
		if (typeof (value) == "string" && value.match(/^(up|down)$/i)) {
			this._openDirection = value.toLowerCase();
		}
	}

	set boxAlign(value) {
		if (typeof (value) == "string" && value.match(/^(left|center|right)$/i)) {
			this._boxAlign = value.toLowerCase();
		}
	}

	set enabled(value) {
		if (typeof (value) == "boolean") {
			this._enabled = value;
			this._input.disabled = !value;
			if (typeof (this._inputs) != "undefined") {
				this._inputYear.disabled = !value;
				this._inputMonth.disabled = !value;
				this._inputDay.disabled = !value;
				if (value) {
					this._inputYear.removeAttribute("disabled");
					this._inputMonth.removeAttribute("disabled");
					this._inputDay.removeAttribute("disabled");
				} else {
					this._inputYear.setAttribute("disabled", "true");
					this._inputMonth.setAttribute("disabled", "true");
					this._inputDay.setAttribute("disabled", "true");
				}
			}
			this.#setStyle();
		}
	}

	set onOpen(value) {
		if (typeof (value) == "function") {
			this._onOpen = value;
		}
	}

	set onChange(value) {
		if (typeof (value) == "function") {
			this._onChange = value;
		}
	}

	getElement() {
		return this._element;
	}

	getViewElements() {
		return [this._inputYear, this._inputMonth, this._inputDay];
	}

	getInput() {
		return this._input;
	}

	#getSRCIcon(name, event) {
		const rgb2Hex = (rgba) => "#" + rgba.map((x, i) => { return ("0" + parseInt(i == 3 ? 255 * x : x).toString(16)).slice(-2); }).join("");
		const prepareColor = (color) => {
			return color.replace(/\s+/g, "").match(/\d+\,\d+\,\d+/) ? rgb2Hex(color.replace(/\s+/g, "").replace(/^rgba?\((\d+\,\d+\,\d+)(\,[\d.]+)?\)$/, "$1$2").split(",")) : color;
		}
		const element = this._element || document.documentElement;
		const baseColor = getComputedStyle(element).getPropertyValue("--wui-datepicker-" + name + "color-" + event);
		const hexColor = prepareColor(baseColor).replace(/#/g, "%23").trim();
		const src = getComputedStyle(element).getPropertyValue("--wui-datepicker-" + name + "icon-src").replace(/currentColor/g, hexColor);
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml," + WUIDatepicker.#icons[name].replace(/currentColor/g, hexColor) + "\")";
	}

	#setValue(value) {
		this._input.value = value;
		this._input.dispatchEvent(new Event("change"));
	}

	#setView(date) {
		if (this._inputYear && this._inputMonth && this._inputDay) {
			this._inputYear.value = date instanceof Date ? ("000" + date.getFullYear()).slice(-4) : "";
			this._inputMonth.value = date instanceof Date ? ("0" + (date.getMonth() + 1)).slice(-2) : "";
			this._inputDay.value = date instanceof Date ? ("0" + date.getDate()).slice(-2) : "";
		}
	}

	#setStyle() {
		const disabled = this._input.disabled;
		if (disabled) {
			this._element.classList.add("disabled");
		} else {
			this._element.classList.remove("disabled");
		}
		this._element.style.backgroundImage = this.#getSRCIcon("open", disabled ? "disabled" : "out");
	}

	init() {
		this._inputs = document.createElement("div");
		this._inputYear = document.createElement("input");
		this._inputMonth = document.createElement("input");
		this._inputDay = document.createElement("input");
		this._background = document.createElement("div");
		this._box = document.createElement("div");
		this._header = document.createElement("div");
		this._period = document.createElement("div");
		this._periodText = document.createElement("div");
		this._periodIcon = document.createElement("div");
		this._prev = document.createElement("div");
		this._next = document.createElement("div");
		this._months = document.createElement("div");
		this._week = document.createElement("div");
		this._days = document.createElement("div");
		this._footer = document.createElement("div");
		this._cancelButton = document.createElement("button");
		this._acceptButton = document.createElement("button");
		this._element.appendChild(this._inputs);
		this._element.appendChild(this._background);
		this._element.appendChild(this._box);
		this._element.style.backgroundImage = this.#getSRCIcon("open", !this._enabled ? "disabled" : "out");
		this._element.addEventListener("click", event => {
			if (this._enabled && event.target.classList.contains("wui-datepicker") && this._element.offsetWidth - event.offsetX < 30) {
				this.toggle();
			}
		});
		["mouseover", "mouseout", "focus", "blur"].forEach(type => {
			this._element.addEventListener(type, () => {
				const event = !this._enabled ? "disabled" : type == "blur" ? "out" : type.replace(/mouse/, "");
				this._element.style.backgroundImage = this.#getSRCIcon("open", event);
			});
			this._period.addEventListener(type, () => {
				this._periodIcon.style.backgroundImage = this.#getSRCIcon("box-" + (this._mode == "months" ? "up" : "down"), event);
			});
		});
		["min", "max", "style"].forEach(name => {
			if (this._input.hasAttribute(name)) {
				if (name.match(/(min|max)/)) {
					this["_" + name] = this._input[name];
				}
				if (this._input.getAttribute(name) != null) {
					this._input.removeAttributeNode(this._input.getAttributeNode(name));
				}
			}
		});
		["year", "month", "day"].forEach(part => {
			const name = part.charAt(0).toUpperCase() + part.slice(1);
			const input = this["_input" + name];
			input.type = "text";
			input.name = this._input.name + name;
			input.placeholder = part == "year" ? "yyyy" : part == "month" ? "mm" : "dd";
			input.maxLength = part == "year" ? 4 : 2;
			input.className = part;
			input.addEventListener("click", () => { this.toggle(); });
			input.addEventListener("keyup", event => {
				const value = event.target.value;
				const part = event.target.className;
				const min = 1;
				const max = part == "year" ? 3000 : part == "month" ? 12 : 31;
				event.target.value = parseInt(value) > max ? max : parseInt(value) < min ? min : value;
				this.#loadValue();
				if (this.isOpen()) {
					this.#prepare();
					this.#loadBox();
				}
			});
		});
		this._input.type = "hidden";
		this._inputs.className = "inputs";
		this._background.className = "background hidden";
		this._box.className = `box ${this._boxAlign} ${this._openDirection} hidden`;
		this._box.appendChild(this._header);
		this._box.appendChild(this._months);
		this._box.appendChild(this._week);
		this._box.appendChild(this._days);
		this._box.appendChild(this._footer);
		this._header.className = "header";
		this._header.appendChild(this._period);
		this._header.appendChild(this._prev);
		this._header.appendChild(this._next);
		this._period.className = "period";
		this._period.addEventListener("click", () => { this.toggleMode(); });
		this._period.appendChild(this._periodText);
		this._period.appendChild(this._periodIcon);
		this._periodText.className = "text";
		this._periodIcon.className = "icon";
		this._prev.className = "prev";
		this._prev.style.backgroundImage = this.#getSRCIcon("box-prev", this._input.disabled ? "disabled" : "out");
		this._prev.addEventListener("click", () => { this.prev(); });
		this._next.className = "next";
		this._next.style.backgroundImage = this.#getSRCIcon("box-next", this._input.disabled ? "disabled" : "out");
		this._next.addEventListener("click", () => { this.next(); });
		this._months.className = "months";
		this._week.className = "week";
		this._days.className = "days";
		this._footer.className = "footer";
		this._footer.appendChild(this._cancelButton);
		this._footer.appendChild(this._acceptButton);
		this._cancelButton.className = "cancel";
		this._cancelButton.addEventListener("click", () => { this.cancel(); });
		this._acceptButton.className = "accept";
		this._acceptButton.addEventListener("click", () => { this.accept(); });
		this.#prepare();
		this.#loadInputs();
	}

	#prepare() {
		const texts = WUIDatepicker.#texts;
		const lang = this._locales.split("-")[0].toLowerCase();
		this.#prepareValue();
		this._mode = "days";
		this._weekDaysNames = [];
		this._monthsNames = [];
		for (let i = 0; i < 7; i++) {
			const name = new Date(2023, 0, i + 1, 0, 0, 0).toLocaleString(this._locales, { weekday: "long" }); // 2023-01-01: sunday
			this._weekDaysNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
		}
		for (let i = 0; i < 12; i++) {
			const name = new Date(2023, i, 1, 0, 0, 0).toLocaleString(this._locales, { month: "long" });
			this._monthsNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
		}
		this._cancelButton.textContent = typeof (this._texts) == "object" && this._texts.cancel != "" ? this._texts.cancel : lang in texts ? texts[lang].cancel : "";
		this._acceptButton.textContent = typeof (this._texts) == "object" && this._texts.accept != "" ? this._texts.accept : lang in texts ? texts[lang].accept : "";
	}

	#prepareValue() {
		const today = (() => {
			const date = new Date();
			const offset = date.getTimezoneOffset();
			return new Date(date.getTime() - offset * 60 * 1000).toISOString().split("T")[0];
		})();
		this._todayValue = today;
		this._todayYear = today.replace(/-\d{2}-\d{2}/, "");
		this._todayMonth = today.replace(/\d{4}-0?(\d+)-\d{2}/, "$1");
		this._targetValue = this._input.value || today;
		this._targetDate = new Date(this._targetValue + "T00:00:00");
		this._cancelValue = this._targetValue;
		this._cancelDate = new Date(this._targetValue + "T00:00:00");
		this.#setView(this._targetDate);
	}

	#loadValue() {
		const value = this._input.value;
		const year = this._inputYear.value;
		const month = this._inputMonth.value;
		const day = this._inputDay.value;
		this._input.value = year != "" && month != "" && day != "" ? ("000" + year).slice(-4) + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2) : "";
		if (this._input.value != value && typeof (this._onChange) == "function") {
			this._onChange(this._input.value);
		}
	}

	#loadInputs() {
		const format =
			this._locales.match(/(en-CA|en-ZA|ja-JP|ko-KR|zh-CN)/) ? ["year", "month", "day"] :
				this._locales.match(/(en-US)/) ? ["month", "day", "year"] :
					["day", "month", "year"];
		this._inputs.innerHTML = "";
		format.forEach((part, i) => {
			const name = part.charAt(0).toUpperCase() + part.slice(1);
			const input = this["_input" + name];
			this._inputs.appendChild(input);
			if (i < 2) {
				const span = document.createElement("span");
				span.textContent = "/";
				this._inputs.appendChild(span);
			}
		});
	}

	#loadBox() {
		if (this._mode == "months") {
			this.#printMonths();
		} else if (this._mode == "days") {
			this.#printDays();
		}
	}

	#printMonths() {
		const year = this._targetDate.getFullYear();
		const month = this._targetDate.getMonth() + 1;
		let y = year;
		let m = 1;
		this._box.classList.remove("extended");
		this._periodText.textContent = this._monthsNames[month - 1] + " " + year;
		this._periodIcon.style.backgroundImage = this.#getSRCIcon("box-up", this._input.disabled ? "disabled" : "out");
		this._months.style.display = "grid";
		this._months.innerHTML = "";
		this._week.style.display = "none";
		this._week.innerHTML = "";
		this._days.style.display = "none";
		this._days.innerHTML = "";
		for (let i = 0; i < 13 * 2; i++) {
			const cell = document.createElement("div");
			if (i % 13 == 0) {
				const option = document.createElement("div");
				option.innerHTML = y;
				cell.appendChild(option);
				y++;
				m = 1;
			} else {
				const option = document.createElement("div");
				const optionValue = this._targetValue.replace(/^\d{4}-\d{2}-/, (y - 1) + "-" + ("0" + m).slice(-2) + "-");
				const optionYear = y - 1;
				const optionMonth = m;
				if (optionYear == this._todayYear && optionMonth == this._todayMonth) {
					option.classList.add("today");
				}
				if (optionValue == this._input.value) {
					option.classList.add("selected");
				}
				option.dataset.value = optionValue;
				option.dataset.year = optionYear;
				option.dataset.month = optionMonth;
				option.textContent = this.monthsNames[m - 1].substring(0, 3);
				option.addEventListener("click", () => {
					const selected = !Boolean(option.classList.contains("selected"));
					const targetValue = optionValue;
					const targetDate = new Date(targetValue + "T00:00:00");
					const value = selected ? targetValue : "";
					const date = selected ? targetDate : null;
					this._months.querySelectorAll("div").forEach(div => {
						if (typeof (div.dataset.value) != "undefined" && div.dataset.value != targetValue) {
							div.classList.remove("selected");
						}
					});
					option.classList.toggle("selected");
					this._targetValue = targetValue;
					this._targetDate = targetDate;
					this._period.innerHTML = this._monthsNames[option.dataset.month - 1] + " " + option.dataset.year + " <div class='icon up'></div>";
					this.#setValue(value);
					this.#setView(date);
				});
				cell.appendChild(option);
				m++;
			}
			this._months.appendChild(cell);
		}
	}

	#printDays() {
		const year = this._targetDate.getFullYear();
		const month = this._targetDate.getMonth() + 1;
		const country = this.locales.split("-")[1].toUpperCase();
		const firstwday = parseInt(WUIDatepicker.#countryFirstWeekDay[country] || 0);
		const firstmday = new Date(year, month - 1, 1, 0, 0, 0).getDay();
		const lasmday = month == 2 ? year & 3 || !(year % 25) && year & 15 ? 28 : 29 : 30 + (month + (month >> 3) & 1);
		let ini = 0;
		let rows = 5;
		let d = 1;
		this._box.classList.remove("extended");
		this._periodText.textContent = this._monthsNames[month - 1] + " " + year;
		this._periodIcon.style.backgroundImage = this.#getSRCIcon("box-down", this._input.disabled ? "disabled" : "out");
		this._months.style.display = "none";
		this._months.innerHTML = "";
		this._week.style.display = "grid";
		this._week.innerHTML = "";
		this._days.style.display = "grid";
		this._days.innerHTML = "";
		for (let i = 0; i < 7; i++) {
			const wday = document.createElement("div");
			let index = firstwday + i;
			if (index > 6) {
				index -= 7;
			}
			if (index == firstmday) {
				ini = i;
			}
			wday.textContent = this._weekDaysNames[index].substring(0, 3);
			this._week.appendChild(wday);
		}
		for (let i = 0; i < 7 * rows; i++) {
			const cell = document.createElement("div");
			if (i >= ini && d <= lasmday) {
				const option = document.createElement("div");
				const optionValue = this._targetValue.replace(/-\d{2}$/, "-" + ("0" + d).slice(-2));
				if (optionValue == this._todayValue) {
					option.classList.add("today");
				}
				if (optionValue == this._input.value) {
					option.classList.add("selected");
				}
				option.dataset.value = optionValue;
				option.textContent = d;
				option.addEventListener("click", () => {
					const selected = !Boolean(option.classList.contains("selected"));
					const targetValue = optionValue;
					const targetDate = new Date(targetValue + "T00:00:00");
					const value = selected ? targetValue : "";
					const date = selected ? targetDate : null;
					this._days.querySelectorAll("div").forEach(div => {
						if (typeof (div.dataset.value) != "undefined" && div.dataset.value != targetValue) {
							div.classList.remove("selected");
						}
					});
					option.classList.toggle("selected");
					this._targetValue = targetValue;
					this._targetDate = targetDate;
					this.#setValue(value);
					this.#setView(date);
				});
				cell.appendChild(option);
				if (i + 1 == 7 * 5 && d < lasmday) {
					this._box.classList.add("extended");
					rows++;
				}
				d++;
			}
			this._days.appendChild(cell);
		}
	}

	#yearsStep(step) {
		const year = this._targetDate.getFullYear() + step;
		this._targetDate.setFullYear(year);
		this._targetValue = this._targetDate.toISOString().split("T")[0];
		this.#printMonths();
	}

	#monthsStep(step) {
		let month = this._targetDate.getMonth() + step;
		if (month < 0) {
			while (month < 0) {
				this._targetDate.setFullYear(this._targetDate.getFullYear() - 1);
				month += 12;
			}
		} else if (month > 11) {
			while (month > 11) {
				this._targetDate.setFullYear(this._targetDate.getFullYear() + 1);
				month -= 12;
			}
		}
		this._targetDate.setMonth(month);
		this._targetValue = this._targetDate.toISOString().split("T")[0];
		this.#printDays();
	}

	open() {
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		this._background.classList.remove("hidden");
		this._box.classList.remove("hidden");
		this._box.style.marginBottom = !mobile && this._openDirection == "up" ? this._element.clientHeight + "px" : "auto";
		this.#prepare();
		this.#loadBox();
		if (typeof (this._onOpen) == "function") {
			this._onOpen(this._input.value);
		}
	}

	close() {
		this._background.classList.add("hidden");
		this._box.classList.add("hidden");
	}

	toggle() {
		if (this._box.classList.contains("hidden")) {
			this.open();
		} else {
			this.close();
		}
	}

	toggleMode() {
		this._mode = this._mode == "days" ? "months" : "days";
		this.#loadBox();
	}

	prev() {
		switch (this._mode) {
			case "months": this.#yearsStep(-2); break;
			case "days": this.#monthsStep(-1); break;
		}
	}

	next() {
		switch (this._mode) {
			case "months": this.#yearsStep(+2); break;
			case "days": this.#monthsStep(+1); break;
		}
	}

	cancel() {
		this.#setValue(this._cancelValue);
		this.#setView(this._cancelDate);
		this.close();
	}

	accept() {
		this.close();
	}

	isOpen() {
		return !Boolean(this._box.classList.contains("hidden"));
	}

	isEmpty() {
		return this._input.value == "" || this._inputYear.value == "" || this._inputMonth.value == "" || this._inputDay.value == "";
	}

	isValid() {
		return this._input.value.match(/^(\d{4}-\d{2}-\d{2})?$/);
	}
}

WUIDatepicker._initClass();

/*
Generated HTML code:
<div class="wui-datepicker">
	<input type="date" value="(name)" value="">
	<div class="inputs">
		<input type="text" value="(name)Year">
		<span></span>
		<input type="text" value="(name)Month">
		<span></span>
		<input type="text" value="(name)Day">
	</div>
	<div class="background"></div>
	<div class="box">
		<div class="header">
			<div class="period"></div>
			<div class="prev"></div>
			<div class="next"></div>
		</div>
		<div class="years"></div>
		<div class="week"></div>
		<div class="days"></div>
		<div class="footer">
			<button class="cancel"></button>
			<button class="accept"></button>
		</div>
	</div>
</div>
*/