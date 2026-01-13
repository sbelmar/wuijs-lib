/*
 * WUILanguage - v0.2
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUILanguage {

	static version = "0.2";
	static #defaults = {
		selector: ".wui-language",
		directory: "Languages/",
		sets: ["main"],
		lang: "en",
		mode: "js",
		dataKey: "key",
		dataOutput: "text",
		onLoad: null
	};
	static #log = [];

	#properties = {};
	#languages = {};

	constructor(properties = {}) {
		const defaults = structuredClone(WUILanguage.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
	}

	get selector() {
		return this.#properties.selector;
	}

	get directory() {
		return this.#properties.directory;
	}

	get sets() {
		return this.#properties.sets;
	}

	get lang() {
		return this.#properties.lang;
	}

	get mode() {
		return this.#properties.mode;
	}

	get dataKey() {
		return this.#properties.dataKey;
	}

	get dataOutput() {
		return this.#properties.dataOutput;
	}

	get onLoad() {
		return this.#properties.onLoad;
	}

	set selector(value) {
		if (typeof (value) == "string") {
			this.#properties.selector = value;
		}
	}

	set directory(value) {
		if (typeof (value) == "string") {
			this.#properties.directory = value;
		}
	}

	set sets(value) {
		if (Array.isArray(value)) {
			this.#properties.sets = value;
		}
	}

	set lang(value) {
		if (typeof (value) == "string") {
			this.#properties.lang = value;
		}
	}

	set mode(value) {
		if (typeof (value) == "string" && value.toString().match(/^(js|json)$/i)) {
			this.#properties.mode = value.toLowerCase();
		}
	}

	set dataKey(value) {
		if (typeof (value) == "string") {
			this.#properties.dataKey = value;
		}
	}

	set dataOutput(value) {
		if (typeof (value) == "string") {
			this.#properties.dataOutput = value;
		}
	}

	set onLoad(value) {
		if (typeof (value) == "function" || value === null) {
			this.#properties.onLoad = value;
		}
	}

	load(lang = this.#properties.lang, sets = this.#properties.sets) {
		const temp = {};
		const onLoad = (set) => {
			total++;
			if (total == sets.length) {
				sets.forEach(set => {
					Object.keys(temp[set]).forEach(key1 => {
						if (!(key1 in this.#languages[lang])) {
							this.#languages[lang][key1] = {};
						}
						Object.keys(temp[set][key1]).forEach(key2 => {
							if (typeof (temp[set][key1][key2]) == "string") {
								this.#languages[lang][key1][key2] = temp[set][key1][key2];
							} else {
								if (!(key2 in this.#languages[lang][key1])) {
									this.#languages[lang][key1][key2] = {};
								}
								Object.assign(this.#languages[lang][key1][key2], temp[set][key1][key2]);
							}
						});
					});
				});
				this.refresh();
				if (typeof (this.#properties.onLoad) == "function") {
					this.#properties.onLoad(lang, this.#languages);
				}
			}
		}
		let total = 0;
		this.#properties.lang = lang;
		this.#properties.sets = sets;
		if (!(lang in this.#languages)) {
			this.#languages[lang] = {};
		}
		sets.forEach(set => {
			const key = set + "-" + lang;
			if (WUILanguage.#log.indexOf(key) == -1) {
				const xhr = new XMLHttpRequest();
				const token = new Date().getTime();
				const url = `${this.#properties.directory}${set}-${lang}.${this.#properties.mode}?_=${token}`;
				if (this.#properties.mode == "js") {
					xhr.overrideMimeType("text/plain");
				} else if (this.#properties.mode == "json") {
					xhr.responseType = "json";
					xhr.overrideMimeType("application/json");
				}
				xhr.onload = () => {
					if (xhr.status == 200 || xhr.status == 0) {
						const content = xhr.responseText;
						if (this.#properties.mode == "js") {
							if (content.trim().replace(/[\n\r]+/g, " ").match(/^return\s*\{.+\}\s*;?$/)) {
								try {
									let jsObject = {};
									const jsCode = "jsObject = (() => {" + content + "})()";
									temp[set] = JSON.parse(JSON.stringify(eval(jsCode)));
								} catch (error) {
									console.error(`error stringify-parse JS file '${url}': ${error}`);
								}
							}
						} else if (this.#properties.mode == "json") {
							try {
								temp[set] = JSON.parse(content);
							} catch (error) {
								console.error(`error parse JSON file '${url}': ${error}`);
							}
						}
						onLoad(set);
					} else {
						console.error(`error load ${this.#properties.mode.toUpperCase()} file '${url}'`);
					}
				}
				xhr.open("GET", url, true);
				xhr.send();
				WUILanguage.#log.push(key);
			} else {
				onLoad(set);
			}
		});
	}

	refresh(selector = this.#properties.selector, lang = this.#properties.lang) {
		document.querySelectorAll(selector).forEach(element => {
			const tagName = element.tagName;
			const dataKey = element.dataset[this.#properties.dataKey];
			const dataOutput = element.dataset[this.#properties.dataOutput];
			if (dataKey != "") {
				const keys = dataKey.split(".");
				let text = this.#languages[lang];
				for (const key of keys) {
					if (text && typeof text == "object" && key in text) {
						text = text[key];
					} else {
						text = undefined;
						break;
					}
				}
				if (typeof (dataOutput) != "undefined") {
					element.dataset[this.#properties.dataOutput] = text;
				} else if (tagName.match(/^(meta)$/i)) {
					element.setAttribute("content", text);
				} else if (tagName.match(/^(h1|h2|h3|h4|h5|h6|div|span|p|i|li|a|legend|label|option|data|button)$/i)) {
					element.innerHTML = text;
				} else if (tagName.match(/^(input|textarea)$/i)) {
					element.setAttribute("placeholder", text);
				}
			}
		});
	}
}