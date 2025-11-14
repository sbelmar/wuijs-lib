/*
 * WUIColorpicker - v0.2
 * Author: Sergio E. Belmar (sbelmar@wuijs.dev)
 * Copyright (c) Sergio E. Belmar (sbelmar@wuijs.dev)
 */

class WUIColorpicker {

	static version = "0.2";
	static #defaults = {
		selector: ".wui-colorpicker",
		value: "",
		emptyValue: "#000001",
		lang: "en",
		texts: {},
		openDirection: "down",
		enabled: true,
		onOpen: null,
		onChange: null
	};	
	static #icons = {
		open: ""
			+"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+"<path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/>"
			+"</svg>",
		empty: ""
			+"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'>"
			+"<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/>"
			+"<path d='M13.654 2.346a.5.5 0 0 1 0 .708l-10.5 10.5a.5.5 0 0 1-.708-.708l10.5-10.5a.5.5 0 0 1 .708 0Z'/>"
			+"</svg>"
	};
	static #texts = {
		de: {
			empty: "leer",
			grid: "netz",
			list: "liste",
			cancel: "stornieren",
			accept: "akzeptieren",
			colors: {}
		},
		en: {
			empty: "empty",
			grid: "grid",
			list: "list",
			cancel: "cancel",
			accept: "accept",
			colors: {}
		},
		es: {
			empty: "vacío",
			grid: "grilla",
			list: "lista",
			cancel: "cancelar",
			accept: "aceptar",
			colors: {

				// Neutrals

				black: "negro",
				darkSlateGray: "gris pizarra oscuro",
				dimGray: "gris oscuro",
				slateGray: "gris pizarra",
				gray: "gris",
				lightSlateGray: "gris pizarra claro",
				darkGray: "gris oscuro",
				silver: "plata",
				gainsboro: "gainsboro",
				whiteSmoke: "humo blanco",
				aliceBlue: "azul alice",
				ghostWhite: "blanco fantasma",
				white: "blanco",

				// Reds and pinks

				darkRed: "rojo oscuro",
				red: "rojo",
				fireBrick: "ladrillo refractario",
				crimson: "carmesí",
				pink: "rosa",
				lightPink: "rosa claro",
				hotPink: "rosa fuerte",
				deepPink: "rosa intenso",
				paleVioletRed: "rojo violeta pálido",
				mediumVioletRed: "rojo violeta medio",

				// Oranges

				coral: "coral",
				tomato: "tomate",
				orangeRed: "rojo anaranjado",
				darkOrange: "naranja oscuro",
				orange: "naranja",
				bisque: "sopa de mariscos",
				blanchedAlmond: "almendra blanqueada",
				navajoWhite: "blanco navajo",
				seashell: "concha marina",

				// Yellows

				gold: "oro",
				yellow: "amarillo",
				lightYellow: "amarillo claro",
				lemonChiffon: "gasa de limón",
				lightGoldenRodYellow: "amarillo vara de oro claro",
				papayaWhip: "papaya batida",
				moccasin: "mocasín",
				peachPuff: "melocotón",
				cornsilk: "seda de maíz",

				// Greens

				darkGreen: "verde oscuro",
				green: "verde",
				forestGreen: "verde bosque",
				seaGreen: "verde marino",
				mediumSeaGreen: "verde marino medio",
				limeGreen: "verde lima",
				lime: "lima",
				springGreen: "verde primavera",
				mediumSpringGreen: "verde primavera medio",
				lightGreen: "verde claro",
				paleGreen: "verde pálido",
				honeyDew: "rocío de miel",

				// Cyanes

				darkCyan: "cian oscuro",
				teal: "verde azulado",
				aqua: "agua",
				lightCyan: "cian claro",
				darkTurquoise: "turquesa oscuro",
				turquoise: "turquesa",
				mediumTurquoise: "turquesa medio",
				mintCream: "crema de menta",

				// Blues

				midnightBlue: "azul medianoche",
				navy: "azul marino",
				darkBlue: "azul oscuro",
				mediumBlue: "azul medio",
				blue: "azul",
				dodgerBlue: "azul dodger",
				deepSkyBlue: "azul cielo profundo",
				skyBlue: "azul cielo",
				lightSkyBlue: "azul cielo claro",
				steelBlue: "azul acero",
				lightSteelBlue: "azul acero claro",
				aliceBlue: "azul alice",

				// Violets

				indigo: "índigo",
				purple: "púrpura",
				darkMagenta: "magenta oscuro",
				darkViolet: "violeta oscuro",
				mediumPurple: "púrpura medio",
				orchid: "orquídea",
				violet: "violeta",
				plum: "ciruela",
				thistle: "cardo",
				lavender: "lavanda",
				rebeccaPurple: "púrpura rebecca",

				// Browns

				saddleBrown: "marrón silla",
				sienna: "siena",
				chocolate: "chocolate",
				darkGoldenRod: "vara de oro oscuro",
				peru: "perú",
				rosyBrown: "marrón rosado",
				goldenRod: "vara de oro",
				burlyWood: "madera robusta",
				wheat: "trigo",
				tan: "bronceado",
				linen: "lino",

				// Whites

				floralWhite: "blanco floral",
				ivory: "marfil",
				oldLace: "encaje antiguo",
				antiqueWhite: "blanco antiguo",
				cornsilk: "seda de maíz"
			}
		}
	};
	static #colors = {
		grid: [
			["#ffffff", "#ebebeb", "#d6d6d6", "#c2c2c2", "#adadad", "#999999", "#858585", "#707070", "#5c5c5c", "#474747", "#333333", "#000000"],
			["#01374a", "#001d57", "#12013b", "#2f043d", "#3c081a", "#5c0600", "#591d00", "#583300", "#563c00", "#666100", "#4f5503", "#263d0e"],
			["#024d65", "#002f7b", "#1a0a52", "#450c59", "#550f2a", "#831200", "#7b2a00", "#7b4901", "#785800", "#8d8600", "#6f760a", "#38571a"],
			["#056e8f", "#0042a9", "#2c0777", "#61177c", "#79193d", "#b51a00", "#ad3f00", "#a96800", "#a57b02", "#c5bc00", "#9aa50d", "#4d7a27"],
			["#028cb4", "#0056d6", "#371a94", "#7a219e", "#99234f", "#e22400", "#da5100", "#d38302", "#d19d00", "#f5ec00", "#c3d118", "#659d34"],
			["#00a1d8", "#0161fe", "#4d22b2", "#982abd", "#b92d5d", "#ff4013", "#ff6a00", "#ffab02", "#fec701", "#fffb41", "#dbeb38", "#76bb41"],
			["#02c7fc", "#3a87fe", "#5e30eb", "#be37f3", "#e63c7b", "#ff6151", "#ff8648", "#feb43f", "#fecb3e", "#fff76b", "#e3ef65", "#96d35f"],
			["#50d6fc", "#73a7ff", "#864ffe", "#d357fe", "#ee709e", "#ff8c82", "#ffa57d", "#ffc777", "#ffd977", "#fff994", "#e9f28f", "#b1dd8b"],
			["#93e3fd", "#a7c6ff", "#b18cfe", "#e292fe", "#f4a4c0", "#ffb5af", "#ffc5ab", "#ffd9a8", "#fee4a8", "#fffbba", "#f2f7b7", "#cde8b5"],
			["#cbf0ff", "#d3e1ff", "#d9c8fe", "#efcaff", "#f9d3df", "#ffdbd8", "#ffe2d7", "#ffecd4", "#fff3d6", "#fefcdd", "#f9fadb", "#dfedd4"]
		],
		list: {

			// Neutrals

			"#000000": "black",
			"#2f4f4f": "darkSlateGray",
			"#696969": "dimGray",
			"#708090": "slateGray",
			"#808080": "gray",
			"#778899": "lightSlateGray",
			"#a9a9a9": "darkGray",
			"#c0c0c0": "silver",
			"#dcdcdc": "gainsboro",
			"#f5f5f5": "whiteSmoke",
			"#f0f8ff": "aliceBlue",
			"#f8f8ff": "ghostWhite",
			"#ffffff": "white",

			// Reds and pinks

			"#8b0000": "darkRed",
			"#ff0000": "red",
			"#b22222": "fireBrick",
			"#dc143c": "crimson",
			"#ffc0cb": "pink",
			"#ffb6c1": "lightPink",
			"#ff69b4": "hotPink",
			"#ff1493": "deepPink",
			"#db7093": "paleVioletRed",
			"#c71585": "mediumVioletRed",

			// Oranges

			"#ff7f50": "coral",
			"#ff6347": "tomato",
			"#ff4500": "orangeRed",
			"#ff8c00": "darkOrange",
			"#ffa500": "orange",
			"#ffe4c4": "bisque",
			"#ffebcd": "blanchedAlmond",
			"#ffdead": "navajoWhite",
			"#fff5ee": "seashell",

			// Yellows

			"#ffd700": "gold",
			"#ffff00": "yellow",
			"#ffffe0": "lightYellow",
			"#fffacd": "lemonChiffon",
			"#fafad2": "lightGoldenRodYellow",
			"#ffefd5": "papayaWhip",
			"#ffe4b5": "moccasin",
			"#ffdab9": "peachPuff",
			"#fff8dc": "cornsilk",

			// Greens

			"#006400": "darkGreen",
			"#008000": "green",
			"#228b22": "forestGreen",
			"#2e8b57": "seaGreen",
			"#3cb371": "mediumSeaGreen",
			"#32cd32": "limeGreen",
			"#00ff00": "lime",
			"#00ff7f": "springGreen",
			"#00fa9a": "mediumSpringGreen",
			"#90ee90": "lightGreen",
			"#98fb98": "paleGreen",
			"#f0fff0": "honeyDew",

			// Cyanes
			
			"#008b8b": "darkCyan",
			"#008080": "teal",
			"#00ffff": "aqua",
			"#e0ffff": "lightCyan",
			"#00ced1": "darkTurquoise",
			"#40e0d0": "turquoise",
			"#48d1cc": "mediumTurquoise",
			"#f5fffa": "mintCream",

			// Blues

			"#191970": "midnightBlue",
			"#000080": "navy",
			"#00008b": "darkBlue",
			"#0000cd": "mediumBlue",
			"#0000ff": "blue",
			"#1e90ff": "dodgerBlue",
			"#00bfff": "deepSkyBlue",
			"#87ceeb": "skyBlue",
			"#87cefa": "lightSkyBlue",
			"#4682b4": "steelBlue",
			"#b0c4de": "lightSteelBlue",
			"#f0f8ff": "aliceBlue",

			// Violets

			"#4b0082": "indigo",
			"#800080": "purple",
			"#8b008b": "darkMagenta",
			"#9400d3": "darkViolet",
			"#9370db": "mediumPurple",
			"#da70d6": "orchid",
			"#ee82ee": "violet",
			"#dda0dd": "plum",
			"#d8bfd8": "thistle",
			"#e6e6fa": "lavender",
			"#663399": "rebeccaPurple",

			// Browns

			"#8b4513": "saddleBrown",
			"#a0522d": "sienna",
			"#d2691e": "chocolate",
			"#b8860b": "darkGoldenRod",
			"#cd853f": "peru",
			"#bc8f8f": "rosyBrown",
			"#daa520": "goldenRod",
			"#deb887": "burlyWood",
			"#f5deb3": "wheat",
			"#d2b48c": "tan",
			"#faf0e6": "linen",

			// Whites

			"#fffaf0": "floralWhite",
			"#fffff0": "ivory",
			"#fdf5e6": "oldLace",
			"#faebd7": "antiqueWhite",
			"#fff8dc": "cornsilk"
		}
	};

	constructor (properties) {
		const defaults = structuredClone(WUIColorpicker.#defaults);
		Object.entries(defaults).forEach(([key, defValue]) => {
			this[key] = key in properties ? properties[key] : defValue;
		});
		this._colorScheme = null;
	}

	get selector() {
		return this._selector;
	}

	get value() {
		return this._input.value == this._emptyValue ? "" : this._input.value;
	}

	get emptyValue() {
		return this._emptyValue;
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
			this._input = document.querySelector(value+" > input[type='color']");
		}
	}

	set value(value) {
		if (typeof(value) == "string" && (value.match(/^#([0-9A-F]{3}){1,2}$/i) || Object.values(WUIColorpicker.#colors.list).map(x => x.toLowerCase()).indexOf(value.toLowerCase()) > 0) && (typeof(this._enabled) == "undefined" || this._enabled)) {
			this.#setValue(value.trim().toLowerCase());
			this.#prepare();
		}
	}

	set emptyValue(value) {
		if (typeof(value) == "string" && value.match(/^#([0-9A-F]{3}){1,2}$/i)) {
			this._emptyValue = value.toLowerCase();
		}
	}

	set lang(value) {
		if (typeof(value) == "string" && value.match(/^\w{2}$/)) {
			this._lang = value.toLowerCase();
		}
	}

	set texts(value) {
		if (typeof(value) == "object" && !Array.isArray(value) && value !== null) {
			Object.keys(WUIColorpicker.#texts.en).forEach(text => {
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

	set enabled(value) {
		if (typeof(value) == "boolean") {
			this._enabled = value;
			this._input.disabled = !value;
			if (typeof(this._button) != "undefined") {
				this._button.disabled = !value;
				if (value) {
					this._button.removeAttribute("disabled");
				} else {
					this._button.setAttribute("disabled", "true");
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

	getFocusableElements() {
		return [this._button];
	}

	getInput() {
		return this._input;
	}

	#getSRCIcon(name) {
		const element = this._element || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-colorpicker-"+name+"icon-src");
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml,"+WUIColorpicker.#icons[name]+"\")";
	}

	#setValue(value) {
		const list = WUIColorpicker.#colors.list;
		const inverse = Object.fromEntries(Object.entries(list).map(([code, name]) => [name.toLowerCase(), code]));
		value = value.toLowerCase();
		this._input.value = (value in inverse ? inverse[value] : (value || this._emptyValue)).trim();
		this._input.dispatchEvent(new Event("change"));
	}

	#setView(value) {
		const list = WUIColorpicker.#colors.list;
		const empty = Boolean(value == "" || value == this._emptyValue);
		const bgcolor = empty ? "transparent" : value;
		const bgimage = empty ? this.#getSRCIcon("empty") : "url()";
		this._buttonColor.style.backgroundColor = bgcolor;
		this._buttonColor.style.maskImage = bgimage;
		this._previewColor.style.backgroundColor = bgcolor;
		this._previewColor.style.maskImage = bgimage;
		this._previewText.innerHTML = empty ? WUIColorpicker.#texts[this._lang].empty : value in list ? list[value] : value;
		if (empty) {
			this._buttonColor.classList.add("empty");
			this._previewColor.classList.add("empty");
			this._previewText.classList.add("empty");
		} else {
			this._buttonColor.classList.remove("empty");
			this._previewColor.classList.remove("empty");
			this._previewText.classList.remove("empty");
		}
	}

	#setStyle() {
		const disabled = this._input.disabled;
		if (disabled) {
			this._element.classList.add("disabled");
		} else {
			this._element.classList.remove("disabled");
		}
	}

	init() {
		const optionOnClick = (option, mode) => {
			const selected = !Boolean(option.classList.contains("selected"));
			const targetValue = option.dataset.value || "";
			const value = selected ? targetValue : "";
			this["_"+mode].querySelectorAll(mode == "list" ? ".option" : ".color").forEach(div => {
				if (typeof(div.dataset.value) != "undefined" && div.dataset.value != targetValue) {
					div.classList.remove("selected");
				}
			});
			option.classList.toggle("selected");
			this._targetValue = value;
			this.#setValue(value);
			this.#setView(value);
		}
		this._open = document.createElement("div");
		this._button = document.createElement("button");
		this._buttonColor = document.createElement("div");
		this._background = document.createElement("div");
		this._box = document.createElement("div");
		this._header = document.createElement("div");
		this._gridTab = document.createElement("div");
		this._listTab = document.createElement("div");
		this._grid = document.createElement("div");
		this._list = document.createElement("div");
		this._preview = document.createElement("div");
		this._previewColor = document.createElement("div");
		this._previewText = document.createElement("div");
		this._footer = document.createElement("div");
		this._cancelButton = document.createElement("button");
		this._acceptButton = document.createElement("button");
		this._element.appendChild(this._open);
		this._element.appendChild(this._button);
		this._element.appendChild(this._background);
		this._element.appendChild(this._box);
		this._element.addEventListener("click", event => {
			if (this._enabled && event.target.classList.contains("button") || (event.target.classList.contains("color") && event.target.parentNode.classList.contains("button"))) {
				this.toggle();
			}
		});
		if (this._input.getAttribute("style") != null) {
			this._input.removeAttributeNode(this._input.getAttributeNode("style"));
		}
		this._input.addEventListener("change", () => {
			if (typeof(this._onChange) == "function") {
				this._onChange(this._input.value);
			}
		});
		WUIColorpicker.#colors.grid.forEach(row => {
			row.forEach(value => {
				const option = document.createElement("div");
				const selected = Boolean(this._input.value.toLowerCase() == value.toLowerCase());
				option.className = "color"+(selected ? " selected" : "");
				option.style.backgroundColor = value;
				option.dataset.value = value;
				option.addEventListener("click", () => {optionOnClick(option, "grid");});
				this._grid.appendChild(option);
			});
		});
		Object.entries(WUIColorpicker.#colors.list).forEach(([value, name]) => {
			const option = document.createElement("div");
			const color = document.createElement("div");
			const text = document.createElement("div");
			const selected = Boolean(this._input.value.toLowerCase() == value.toLowerCase());
			color.className = "color";
			color.style.backgroundColor = value;
			text.className = "text";
			text.textContent = name.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
			option.className = "option "+name+(selected ? " selected" : "");
			option.dataset.value = value.toLowerCase();
			option.appendChild(color);
			option.appendChild(text);
			option.addEventListener("click", () => {optionOnClick(option, "list");});
			this._list.appendChild(option);
		});
		this._open.className = "open";
		this._open.style.maskImage = this.#getSRCIcon("open");
		this._button.className = "button";
		this._button.appendChild(this._buttonColor);
		this._buttonColor.className = "color";
		this._background.className = "background hidden";
		this._box.className = "box "+this._openDirection+" hidden";
		this._box.appendChild(this._header);
		this._box.appendChild(this._grid);
		this._box.appendChild(this._list);
		this._box.appendChild(this._preview);
		this._box.appendChild(this._footer);
		this._header.className = "header";
		this._header.appendChild(this._gridTab);
		this._header.appendChild(this._listTab);
		this._gridTab.className = "tab grid selected";
		this._gridTab.addEventListener("click", () => {this.selectMode("grid");});
		this._listTab.className = "tab list";
		this._listTab.addEventListener("click", () => {this.selectMode("list");});
		this._grid.className = "grid";
		this._list.className = "list hidden";
		this._preview.className = "preview";
		this._preview.appendChild(this._previewColor);
		this._preview.appendChild(this._previewText);
		this._previewColor.className = "color";
		this._previewText.className = "text";
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
		const texts = WUIColorpicker.#texts;
		const lang = this._lang;
		this._targetValue = this._input.value || "";
		this._cancelValue = this._targetValue;
		this._gridTab.textContent = this._texts.grid != "" ? this._texts.grid : lang in texts ? texts[lang].grid : "";
		this._listTab.textContent = this._texts.list != "" ? this._texts.list : lang in texts ? texts[lang].list : "";
		if (lang.match(/(es)/)) {
			Object.values(WUIColorpicker.#colors.list).forEach(name => {	
				const text = this._list.querySelector(".option."+name+" > .text");
				text.textContent = texts[lang].colors[name];
			});
		}
		this._cancelButton.textContent = this._texts.cancel != "" ? this._texts.cancel : lang in texts ? texts[lang].cancel : "";
		this._acceptButton.textContent = this._texts.accept != "" ? this._texts.accept : lang in texts ? texts[lang].accept : "";
		this.#setView(this._targetValue);
	}

	#loadBox() {
		const value = this._targetValue;
		["grid", "list"].forEach(name => {
			const content = this["_"+name];
			content.querySelectorAll(name == "grid" ? ".color" : ".option").forEach(opt => {
				if (typeof(opt.dataset.value) != "undefined") {
					if (opt.dataset.value == value) {
						opt.classList.add("selected");
						this.selectMode(name);
					} else {
						opt.classList.remove("selected");
					}
				}
			});
		});
	}

	open() {
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		this._background.classList.remove("hidden");
		this._box.className = "box "+this._openDirection;
		this._box.style.marginBottom = !mobile && this._openDirection == "up" ? this._element.clientHeight+"px" : "auto";
		this.#prepare();
		this.#loadBox();
		if (typeof(this._onOpen) == "function") {
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

	selectMode(mode) {
		["grid", "list"].forEach(name => {
			const tab = this["_"+name+"Tab"];
			const content = this["_"+name];
			if (name == mode) {
				tab.classList.add("selected");
				content.classList.remove("hidden");
			} else {
				tab.classList.remove("selected");
				content.classList.add("hidden");
			}
		});
		if (mode == "list") {
			const list = WUIColorpicker.#colors.list;
			const value = this._input.value || "";
			if (value in list) {
				const option = this._list.querySelector(".option."+list[value]);
				this._list.scrollTop = option.offsetTop - parseInt((this._list.clientHeight - option.clientHeight)/2);
			} else {
				this._list.scrollTop = 0;
			}
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
		return this._input.value == "";
	}

	isValid() {
		return this._input.value.match(/^#([0-9A-F]{3}){1,2}$/i);
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

/*
Generated HTML code:
<div class="wui-colorpicker">
	<input type="color" value="(name)" value="">
	<div class="open"></div>
	<button class="button">
		<div class="color"></div>
	</button>
	<div class="background"></div>
	<div class="box">
		<div class="header">
			<div class="tab grid"></div>
			<div class="tab list"></div>
		</div>
		<div class="grid">
			<div class="color" data-value="value1"></div>
			...
		</div>
		<div class="list">
			<div class="option" data-value="value1">
				<div class="color"></div>
				<div class="text"></div>
			</div>
			...
		</div>
		<div class="preview">
			<div class="color"></div>
			<div class="text"></div>
		</div>
		<div class="footer">
			<button class="cancel"></button>
			<button class="accept"></button>
		</div>
	</div>
</div>
*/