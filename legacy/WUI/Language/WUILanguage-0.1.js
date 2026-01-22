/*
 * WUILanguage - v0.1
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

const languages = {};
class WUILanguage {

	static version = "0.1";
	static #defaults = {
		selector: ".wui-language",
		directory: "Languages/",
		set: "main",
		lang: "es",
		dataKey: "key",
		dataOutput: "text",
		onLoad: null
	};
	static #log = [];

	constructor(properties) {
		Object.keys(WUILanguage.#defaults).forEach(prop => {
			this[prop] = typeof (properties) != "undefined" && prop in properties ? properties[prop] : prop in WUILanguage.#defaults ? WUILanguage.#defaults[prop] : null;
		});
	}

	get selector() {
		return this._selector;
	}

	get directory() {
		return this._directory;
	}

	get set() {
		return this._set;
	}

	get lang() {
		return this._lang;
	}

	get dataKey() {
		return this._dataKey;
	}

	get dataOutput() {
		return this._dataOutput;
	}

	get onLoad() {
		return this._onLoad;
	}

	set selector(value) {
		if (typeof (value) == "string") {
			this._selector = value;
			this._elements = document.querySelectorAll(value);
		}
	}

	set directory(value) {
		if (typeof (value) == "string") {
			this._directory = value;
		}
	}

	set set(value) {
		if (typeof (value) == "string") {
			this._set = value;
		}
	}

	set lang(value) {
		if (typeof (value) == "string") {
			this._lang = value;
		}
	}

	set dataKey(value) {
		if (typeof (value) == "string") {
			this._dataKey = value;
		}
	}

	set dataOutput(value) {
		if (typeof (value) == "string") {
			this._dataOutput = value;
		}
	}

	set onLoad(value) {
		if (typeof (value) == "function") {
			this._onLoad = value;
		}
	}

	load(lang = this._lang, sets = [this._set]) {
		const temp = {};
		const onLoad = (set) => {
			temp[set] = Object.assign(set in temp ? temp[set] : {}, languages[lang]);
			total++;
			if (total == sets.length) {
				sets.forEach(set => {
					Object.keys(temp[set]).forEach(key1 => {
						if (!(key1 in languages[lang])) {
							languages[lang][key1] = {};
						}
						Object.keys(temp[set][key1]).forEach(key2 => {
							if (typeof (temp[set][key1][key2]) == "string") {
								languages[lang][key1][key2] = temp[set][key1][key2];
							} else {
								if (!(key2 in languages[lang][key1])) {
									languages[lang][key1][key2] = {};
								}
								Object.assign(languages[lang][key1][key2], temp[set][key1][key2]);
							}
						});
					});
				});
				document.querySelectorAll(this._selector).forEach(element => {
					const tagName = element.tagName;
					const dataKey = element.dataset[this._dataKey];
					const dataOutput = element.dataset[this._dataOutput];
					if (dataKey != "") {
						const text = eval("languages." + lang + "." + dataKey);
						if (typeof (dataOutput) != "undefined") {
							element.dataset[this._dataOutput] = text;
						} else if (tagName.match(/^(meta)$/i)) {
							element.setAttribute("content", text);
						} else if (tagName.match(/^(h1|h2|h3|h4|h5|h6|div|span|p|i|li|a|legend|label|option|data|button)$/i)) {
							element.innerHTML = text;
						} else if (tagName.match(/^(input|textarea)$/i)) {
							element.setAttribute("placeholder", text);
						}
					}
				});
				if (typeof (this._onLoad) == "function") {
					this._onLoad(lang);
				}
			}
		}
		let total = 0;
		sets.forEach(set => {
			const key = set + "-" + lang;
			if (WUILanguage.#log.indexOf(key) == -1) {
				const script = document.createElement("script");
				const token = new Date().getTime();
				const src = this._directory + set + "-" + lang + ".js?_=" + token;
				script.setAttribute("type", "text/javascript");
				script.setAttribute("charset", "UTF-8");
				script.setAttribute("src", src);
				script.onload = () => { onLoad(set); };
				document.getElementsByTagName("head")[0].appendChild(script);
				WUILanguage.#log.push(key)
			} else {
				onLoad(set);
			}
		});
	}
}