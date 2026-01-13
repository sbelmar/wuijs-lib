/*
 * WUIDatepicker - v0.2
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIDatepicker {

	static version = "0.2";
	static #defaults = {
		selector: ".wui-datepicker",
		locales: "en-US",
		value: "",
		min: "",
		max: "",
		monthsNames: [],
		weekDaysNames: [],
		texts: {},
		openDirection: "down",
		boxAlign: "left",
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
		"box-period-up": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/>"
			+ "</svg>",
		"box-period-down": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/>"
			+ "</svg>",
		"box-paging-prev": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z'/>"
			+ "</svg>",
		"box-paging-next": ""
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

	#properties = {};
	#htmlElement;
	#htmlElements = {
		input: null,
		opener: null,
		inputs: null,
		inputYear: null,
		inputMonth: null,
		inputDay: null,
		background: null,
		box: null,
		footer: null,
		cancelButton: null,
		acceptButton: null
	};
	#mode;
	#todayValue;
	#todayYear;
	#todayMonth;
	#targetValue;
	#targetDate;
	#cancelValue;
	#cancelDate;
	#colorScheme;

	constructor(properties = {}) {
		const defaults = structuredClone(WUIDatepicker.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#colorScheme = null;
	}

	get selector() {
		return this.#properties.selector;
	}

	get locales() {
		return this.#properties.locales;
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

	get monthsNames() {
		return this.#properties.monthsNames;
	}

	get weekDaysNames() {
		return this.#properties.weekDaysNames;
	}

	get texts() {
		return this.#properties.texts;
	}

	get openDirection() {
		return this.#properties.openDirection;
	}

	get boxAlign() {
		return this.#properties.boxAlign;
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
			this.#htmlElements.input = document.querySelector(value + " > input[type='date']");
		}
	}

	set locales(value) {
		if (typeof (value) == "string" && value.match(/^[a-z]{2}-[a-z]{2}$/i) && WUIDatepicker.#localesSet.indexOf(value.toLowerCase()) > -1) {
			this.#properties.locales = value.split("-").map((x, i) => {
				return i == 0 ? x.toLowerCase() : x.toUpperCase();
			}).join("-");
			if (this.#htmlElements.inputs instanceof HTMLElement) {
				this.#loadInputs();
			}
		}
	}

	set value(value) {
		if (typeof (value) == "string" && value.match(/^(\d{4}-\d{2}-\d{2})?$/) && (typeof (this.#properties.enabled) == "undefined" || this.#properties.enabled)) {
			this.#targetValue = value;
			this.#targetDate = new Date(value + "T00:00:00");
			this.#setValue(value);
			this.#refreshView();
		}
	}

	set min(value) {
		if (typeof (value) == "string" && value.match(/^(\d{4}-\d{2}-\d{2})?$/)) {
			this.#properties.min = value;
			if (this.#htmlElements.inputs instanceof HTMLElement) {
				this.#loadInputs();
			}
		}
	}

	set max(value) {
		if (typeof (value) == "string" && value.match(/^(\d{4}-\d{2}-\d{2})?$/)) {
			this.#properties.max = value;
			if (this.#htmlElements.inputs instanceof HTMLElement) {
				this.#loadInputs();
			}
		}
	}

	set monthsNames(value) {
		if (Array.isArray(value)) {
			this.#properties.monthsNames = value;
		}
	}

	set weekDaysNames(value) {
		if (Array.isArray(value)) {
			this.#properties.weekDaysNames = value;
		}
	}

	set texts(value) {
		if (typeof (value) == "object" && !Array.isArray(value) && value !== null) {
			Object.keys(WUIDatepicker.#texts.en).forEach(text => {
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

	set boxAlign(value) {
		if (typeof (value) == "string" && value.match(/^(left|center|right)$/i)) {
			this.#properties.boxAlign = value.toLowerCase();
		}
	}

	set enabled(value) {
		if (typeof (value) == "boolean") {
			this.#properties.enabled = value;
			this.#htmlElements.input.disabled = !value;
			if (this.#htmlElements.inputYear instanceof HTMLInputElement && this.#htmlElements.inputMonth instanceof HTMLInputElement && this.#htmlElements.inputDay instanceof HTMLInputElement) {
				this.#htmlElements.inputYear.disabled = !value;
				this.#htmlElements.inputMonth.disabled = !value;
				this.#htmlElements.inputDay.disabled = !value;
				if (value) {
					this.#htmlElements.inputYear.removeAttribute("disabled");
					this.#htmlElements.inputMonth.removeAttribute("disabled");
					this.#htmlElements.inputDay.removeAttribute("disabled");
				} else {
					this.#htmlElements.inputYear.setAttribute("disabled", "true");
					this.#htmlElements.inputMonth.setAttribute("disabled", "true");
					this.#htmlElements.inputDay.setAttribute("disabled", "true");
				}
			}
			this.#setStyle();
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

	getViewElements() {
		return [this.#htmlElements.inputYear, this.#htmlElements.inputMonth, this.#htmlElements.inputDay];
	}

	getInput() {
		return this.#htmlElements.input;
	}

	#getSRCIcon(name) {
		const element = this.#htmlElement || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-datepicker-" + name + "icon-src");
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml," + WUIDatepicker.#icons[name] + "\")";
	}

	#setValue(value) {
		this.#properties.value = value;
		if (this.#htmlElements.input instanceof HTMLInputElement) {
			this.#htmlElements.input.value = value;
			this.#htmlElements.input.dispatchEvent(new Event("change"));
		}
	}

	#refreshView() {
		if (this.#htmlElements.inputYear instanceof HTMLInputElement && this.#htmlElements.inputMonth instanceof HTMLInputElement && this.#htmlElements.inputDay instanceof HTMLInputElement) {
			const date = this.#targetDate;
			this.#htmlElements.inputYear.value = date instanceof Date ? ("000" + date.getFullYear()).slice(-4) : "";
			this.#htmlElements.inputMonth.value = date instanceof Date ? ("0" + (date.getMonth() + 1)).slice(-2) : "";
			this.#htmlElements.inputDay.value = date instanceof Date ? ("0" + date.getDate()).slice(-2) : "";
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
		this.#htmlElements.inputYear = document.createElement("input");
		this.#htmlElements.inputMonth = document.createElement("input");
		this.#htmlElements.inputDay = document.createElement("input");
		this.#htmlElements.background = document.createElement("div");
		this.#htmlElements.box = document.createElement("div");
		this.#htmlElements.header = document.createElement("div");
		this.#htmlElements.period = document.createElement("div");
		this.#htmlElements.periodText = document.createElement("div");
		this.#htmlElements.periodIcon = document.createElement("div");
		this.#htmlElements.prev = document.createElement("div");
		this.#htmlElements.next = document.createElement("div");
		this.#htmlElements.months = document.createElement("div");
		this.#htmlElements.week = document.createElement("div");
		this.#htmlElements.days = document.createElement("div");
		this.#htmlElements.footer = document.createElement("div");
		this.#htmlElements.cancelButton = document.createElement("button");
		this.#htmlElements.acceptButton = document.createElement("button");
		if (this.#htmlElement instanceof HTMLDivElement && this.#htmlElements.input instanceof HTMLInputElement) {
			this.#htmlElement.appendChild(this.#htmlElements.opener);
			this.#htmlElement.appendChild(this.#htmlElements.inputs);
			this.#htmlElement.appendChild(this.#htmlElements.background);
			this.#htmlElement.appendChild(this.#htmlElements.box);
			this.#htmlElement.addEventListener("click", event => {
				if (this.#properties.enabled && (event.target.classList.contains("wui-datepicker") || event.target.classList.contains("opener"))) {
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
			["year", "month", "day"].forEach(part => {
				const name = part.charAt(0).toUpperCase() + part.slice(1);
				const input = this.#htmlElements["input" + name];
				input.type = "text";
				input.name = this.#htmlElements.input.name + name;
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
			this.#htmlElements.opener.className = "opener";
			this.#htmlElements.opener.style.maskImage = this.#getSRCIcon("opener-open");
			this.#htmlElements.inputs.className = "inputs";
			this.#htmlElements.background.className = "background hidden";
			this.#htmlElements.box.className = `box ${this.#properties.boxAlign} ${this.#properties.openDirection} hidden`;
			this.#htmlElements.box.appendChild(this.#htmlElements.header);
			this.#htmlElements.box.appendChild(this.#htmlElements.months);
			this.#htmlElements.box.appendChild(this.#htmlElements.week);
			this.#htmlElements.box.appendChild(this.#htmlElements.days);
			this.#htmlElements.box.appendChild(this.#htmlElements.footer);
			this.#htmlElements.header.className = "header";
			this.#htmlElements.header.appendChild(this.#htmlElements.period);
			this.#htmlElements.header.appendChild(this.#htmlElements.prev);
			this.#htmlElements.header.appendChild(this.#htmlElements.next);
			this.#htmlElements.period.className = "period";
			this.#htmlElements.period.addEventListener("click", () => { this.toggleMode(); });
			this.#htmlElements.period.appendChild(this.#htmlElements.periodText);
			this.#htmlElements.period.appendChild(this.#htmlElements.periodIcon);
			this.#htmlElements.periodText.className = "text";
			this.#htmlElements.periodIcon.className = "icon";
			this.#htmlElements.prev.className = "prev";
			this.#htmlElements.prev.style.maskImage = this.#getSRCIcon("box-paging-prev");
			this.#htmlElements.prev.addEventListener("click", () => { this.prev(); });
			this.#htmlElements.next.className = "next";
			this.#htmlElements.next.style.maskImage = this.#getSRCIcon("box-paging-next");
			this.#htmlElements.next.addEventListener("click", () => { this.next(); });
			this.#htmlElements.months.className = "months";
			this.#htmlElements.week.className = "week";
			this.#htmlElements.days.className = "days";
			this.#htmlElements.footer.className = "footer";
			this.#htmlElements.footer.appendChild(this.#htmlElements.cancelButton);
			this.#htmlElements.footer.appendChild(this.#htmlElements.acceptButton);
			this.#htmlElements.cancelButton.className = "cancel";
			this.#htmlElements.cancelButton.addEventListener("click", () => { this.cancel(); });
			this.#htmlElements.acceptButton.className = "accept";
			this.#htmlElements.acceptButton.addEventListener("click", () => { this.accept(); });
			this.#prepare();
			this.#loadInputs();
			this.#darkModeListener(() => {
				this.#setStyle();
			});
			if (this.#properties.value != "") {
				this.value = this.#properties.value;
			}
		}
	}


	#prepare() {
		const texts = WUIDatepicker.#texts;
		const lang = this.#properties.locales.split("-")[0].toLowerCase();
		const today = (() => {
			const date = new Date();
			const offset = date.getTimezoneOffset();
			return new Date(date.getTime() - offset * 60 * 1000).toISOString().split("T")[0];
		})();
		this.#todayValue = today;
		this.#todayYear = today.replace(/-\d{2}-\d{2}/, "");
		this.#todayMonth = today.replace(/\d{4}-0?(\d+)-\d{2}/, "$1");
		this.#targetValue = this.#properties.value || today;
		this.#targetDate = new Date(this.#targetValue + "T00:00:00");
		this.#cancelValue = this.#targetValue;
		this.#cancelDate = new Date(this.#targetValue + "T00:00:00");
		this.#mode = "days";
		this.#properties.weekDaysNames = [];
		this.#properties.monthsNames = [];
		for (let i = 0; i < 7; i++) {
			const name = new Date(2023, 0, i + 1, 0, 0, 0).toLocaleString(this.#properties.locales, { weekday: "long" }); // 2023-01-01: sunday
			this.#properties.weekDaysNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
		}
		for (let i = 0; i < 12; i++) {
			const name = new Date(2023, i, 1, 0, 0, 0).toLocaleString(this.#properties.locales, { month: "long" });
			this.#properties.monthsNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
		}
		if (this.#htmlElements.cancelButton instanceof HTMLButtonElement && this.#htmlElements.acceptButton instanceof HTMLButtonElement) {
			this.#htmlElements.cancelButton.textContent = typeof (this.#properties.texts) == "object" && this.#properties.texts.cancel != "" ? this.#properties.texts.cancel : lang in texts ? texts[lang].cancel : "";
			this.#htmlElements.acceptButton.textContent = typeof (this.#properties.texts) == "object" && this.#properties.texts.accept != "" ? this.#properties.texts.accept : lang in texts ? texts[lang].accept : "";
		}
		this.#refreshView();
	}

	#loadValue() {
		if (this.#htmlElements.input instanceof HTMLInputElement && this.#htmlElements.inputYear instanceof HTMLInputElement && this.#htmlElements.inputMonth instanceof HTMLInputElement && this.#htmlElements.inputDay instanceof HTMLInputElement) {
			const value = this.#properties.value;
			const year = this.#htmlElements.inputYear.value;
			const month = this.#htmlElements.inputMonth.value;
			const day = this.#htmlElements.inputDay.value;
			this.#setValue(year != "" && month != "" && day != "" ? ("000" + year).slice(-4) + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2) : "");
			if (this.#properties.value != value && typeof (this.#properties.onChange) == "function") {
				this.#properties.onChange(this.value);
			}
		}
	}

	#loadInputs() {
		if (this.#htmlElements.inputs instanceof HTMLElement) {
			let format = ["day", "month", "year"];
			if (this.#properties.locales.match(/(en-CA|en-ZA|ja-JP|ko-KR|zh-CN)/)) {
				format = ["year", "month", "day"];
			} else if (this.#properties.locales.match(/(en-US)/)) {
				format = ["month", "day", "year"];
			}
			this.#htmlElements.inputs.innerHTML = "";
			format.forEach((part, i) => {
				const name = part.charAt(0).toUpperCase() + part.slice(1);
				const input = this.#htmlElements["input" + name];
				this.#htmlElements.inputs.appendChild(input);
				if (i < 2) {
					const span = document.createElement("span");
					span.textContent = "/";
					this.#htmlElements.inputs.appendChild(span);
				}
			});
		}
	}

	#loadBox() {
		if (this.#mode == "months") {
			this.#printMonths();
		} else if (this.#mode == "days") {
			this.#printDays();
		}
	}

	#printMonths() {
		if (this.#htmlElements.box instanceof HTMLDivElement && this.#htmlElements.periodText instanceof HTMLDivElement && this.#htmlElements.periodIcon instanceof HTMLDivElement && this.#htmlElements.months instanceof HTMLDivElement && this.#htmlElements.week instanceof HTMLDivElement && this.#htmlElements.days instanceof HTMLDivElement) {
			const year = this.#targetDate.getFullYear();
			const month = this.#targetDate.getMonth() + 1;
			let y = year;
			let m = 1;
			this.#htmlElements.box.classList.remove("extended");
			this.#htmlElements.periodText.textContent = this.#properties.monthsNames[month - 1] + " " + year;
			this.#htmlElements.periodIcon.style.maskImage = this.#getSRCIcon("box-period-up");
			this.#htmlElements.months.style.display = "grid";
			this.#htmlElements.months.innerHTML = "";
			this.#htmlElements.week.style.display = "none";
			this.#htmlElements.week.innerHTML = "";
			this.#htmlElements.days.style.display = "none";
			this.#htmlElements.days.innerHTML = "";
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
					const optionValue = this.#targetValue.replace(/^\d{4}-\d{2}-/, (y - 1) + "-" + ("0" + m).slice(-2) + "-");
					const optionYear = y - 1;
					const optionMonth = m;
					if (optionYear == this.#todayYear && optionMonth == this.#todayMonth) {
						option.classList.add("today");
					}
					if (optionValue == this.#properties.value) {
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
						this.#htmlElements.months.querySelectorAll("div").forEach(div => {
							if (typeof (div.dataset.value) != "undefined" && div.dataset.value != targetValue) {
								div.classList.remove("selected");
							}
						});
						option.classList.toggle("selected");
						this.#targetValue = targetValue;
						this.#targetDate = date;
						this.#htmlElements.period.innerHTML = this.#properties.monthsNames[option.dataset.month - 1] + " " + option.dataset.year + " <div class='icon up'></div>";
						this.#setValue(value);
						this.#refreshView();
					});
					cell.appendChild(option);
					m++;
				}
				this.#htmlElements.months.appendChild(cell);
			}
		}
	}

	#printDays() {
		if (this.#htmlElements.box instanceof HTMLDivElement && this.#htmlElements.periodText instanceof HTMLDivElement && this.#htmlElements.periodIcon instanceof HTMLDivElement && this.#htmlElements.months instanceof HTMLDivElement && this.#htmlElements.week instanceof HTMLDivElement && this.#htmlElements.days instanceof HTMLDivElement) {
			const year = this.#targetDate.getFullYear();
			const month = this.#targetDate.getMonth() + 1;
			const country = this.locales.split("-")[1].toUpperCase();
			const firstwday = parseInt(WUIDatepicker.#countryFirstWeekDay[country] || 0);
			const firstmday = new Date(year, month - 1, 1, 0, 0, 0).getDay();
			const lasmday = month == 2 ? year & 3 || !(year % 25) && year & 15 ? 28 : 29 : 30 + (month + (month >> 3) & 1);
			let ini = 0;
			let rows = 5;
			let d = 1;
			this.#htmlElements.box.classList.remove("extended");
			this.#htmlElements.periodText.textContent = this.#properties.monthsNames[month - 1] + " " + year;
			this.#htmlElements.periodIcon.style.maskImage = this.#getSRCIcon("box-period-down");
			this.#htmlElements.months.style.display = "none";
			this.#htmlElements.months.innerHTML = "";
			this.#htmlElements.week.style.display = "grid";
			this.#htmlElements.week.innerHTML = "";
			this.#htmlElements.days.style.display = "grid";
			this.#htmlElements.days.innerHTML = "";
			for (let i = 0; i < 7; i++) {
				const wday = document.createElement("div");
				let index = firstwday + i;
				if (index > 6) {
					index -= 7;
				}
				if (index == firstmday) {
					ini = i;
				}
				wday.textContent = this.#properties.weekDaysNames[index].substring(0, 3);
				this.#htmlElements.week.appendChild(wday);
			}
			for (let i = 0; i < 7 * rows; i++) {
				const cell = document.createElement("div");
				if (i >= ini && d <= lasmday) {
					const option = document.createElement("div");
					const optionValue = this.#targetValue.replace(/-\d{2}$/, "-" + ("0" + d).slice(-2));
					if (optionValue == this.#todayValue) {
						option.classList.add("today");
					}
					if (optionValue == this.#properties.value) {
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
						this.#htmlElements.days.querySelectorAll("div").forEach(div => {
							if (typeof (div.dataset.value) != "undefined" && div.dataset.value != targetValue) {
								div.classList.remove("selected");
							}
						});
						option.classList.toggle("selected");
						this.#targetValue = targetValue;
						this.#targetDate = date;
						this.#setValue(value);
						this.#refreshView();
					});
					cell.appendChild(option);
					if (i + 1 == 7 * 5 && d < lasmday) {
						this.#htmlElements.box.classList.add("extended");
						rows++;
					}
					d++;
				}
				this.#htmlElements.days.appendChild(cell);
			}
		}
	}

	#yearsStep(step) {
		const year = this.#targetDate.getFullYear() + step;
		this.#targetDate.setFullYear(year);
		this.#targetValue = this.#targetDate.toISOString().split("T")[0];
		this.#printMonths();
	}

	#monthsStep(step) {
		let month = this.#targetDate.getMonth() + step;
		if (month < 0) {
			while (month < 0) {
				this.#targetDate.setFullYear(this.#targetDate.getFullYear() - 1);
				month += 12;
			}
		} else if (month > 11) {
			while (month > 11) {
				this.#targetDate.setFullYear(this.#targetDate.getFullYear() + 1);
				month -= 12;
			}
		}
		this.#targetDate.setMonth(month);
		this.#targetValue = this.#targetDate.toISOString().split("T")[0];
		this.#printDays();
	}

	open() {
		if (this.#htmlElements.opener instanceof HTMLDivElement && this.#htmlElements.background instanceof HTMLDivElement && this.#htmlElements.box instanceof HTMLDivElement) {
			const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
			this.#htmlElements.opener.style.maskImage = this.#getSRCIcon("opener-close");
			this.#htmlElements.background.classList.remove("hidden");
			this.#htmlElements.box.className = `box ${this.#properties.boxAlign} ${this.#properties.openDirection}`;
			this.#htmlElements.box.style.marginBottom = !mobile && this.#properties.openDirection == "up" ? this.#htmlElement.clientHeight + "px" : "auto";
			this.#prepare();
			this.#loadBox();
			if (typeof (this.#properties.onOpen) == "function") {
				this.#properties.onOpen(this.value);
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

	toggleMode() {
		this.#mode = this.#mode == "days" ? "months" : "days";
		this.#loadBox();
	}

	prev() {
		switch (this.#mode) {
			case "months": this.#yearsStep(-2); break;
			case "days": this.#monthsStep(-1); break;
		}
	}

	next() {
		switch (this.#mode) {
			case "months": this.#yearsStep(+2); break;
			case "days": this.#monthsStep(+1); break;
		}
	}

	cancel() {
		this.#targetDate = this.#cancelDate;
		this.#setValue(this.#cancelValue);
		this.#refreshView();
		this.close();
	}

	accept() {
		if (typeof (this.#properties.onChange) == "function") {
			this.#properties.onChange(this.value);
		}
		this.close();
	}

	isOpen() {
		return Boolean(this.#htmlElements.box instanceof HTMLDivElement ? !this.#htmlElements.box.classList.contains("hidden") : false);
	}

	isEmpty() {
		return Boolean(this.#htmlElements.inputYear instanceof HTMLInputElement && this.#htmlElements.inputMonth instanceof HTMLInputElement && this.#htmlElements.inputDay instanceof HTMLInputElement ? (this.#properties.value == "" || this.#htmlElements.inputYear.value == "" || this.#htmlElements.inputMonth.value == "" || this.#htmlElements.inputDay.value == "") : false);
	}

	isValid() {
		return Boolean(this.#properties.value.match(/^(\d{4}-\d{2}-\d{2})?$/));
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
			this.#htmlElement.remove();
		}
		Object.keys(this.#properties).forEach(name => {
			delete this.#properties[name];
		});
		this.#mode = undefined;
		this.#todayValue = undefined;
		this.#todayYear = undefined;
		this.#todayMonth = undefined;
		this.#targetValue = undefined;
		this.#targetDate = undefined;
		this.#cancelValue = undefined;
		this.#cancelDate = undefined;
		this.#colorScheme = undefined;
	}
}

WUIDatepicker._initClass();

/*
HTML output:
<div class="wui-datepicker">
	<input type="date" value="(name)" value="">
	<div class="opener"></div>
	<div class="inputs">
		<input type="text" value="(name)Year">
		<span></span>
		<input type="text" value="(name)Month">
		<span></span>
		<input type="text" value="(name)Day">
	</div>
	<div class="background[ hidden]"></div>
	<div class="box[ hidden]">
		<div class="header">
			<div class="period">
				<div class="icon"></div>
			</div>
			<div class="prev"></div>
			<div class="next"></div>
		</div>
		<div class="months">
			<div></div>
			[...]
		</div>
		<div class="week">
			<div></div>
			[...]
		</div>
		<div class="days">
			<div></div>
			[...]
		</div>
		<div class="footer">
			<button class="cancel"></button>
			<button class="accept"></button>
		</div>
	</div>
</div>
*/