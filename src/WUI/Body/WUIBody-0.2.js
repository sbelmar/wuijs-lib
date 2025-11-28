/*
 * WUIBody - v0.2
 * Author: Sergio E. Belmar (sbelmar@wuijs.dev)
 * Copyright (c) Sergio E. Belmar (sbelmar@wuijs.dev)
 */

class WUIBody {

	static version = "0.2";
	static #defaults = {
		environment: "web",
		importDirectory: "",
		importMode: "fetch",
		onCompleted: null,
		debug: false
	};
	static #htmlCount = 0;
	static #cssCount = 0;
	static #jsCount = 0;
	static #partCount = 0;

	#environment;
	#importDirectory;
	#importMode;
	#onCompleted;
	#debug;

	static openURL(url, download = "") {
		const link = document.createElement("a");
		link.href = url;
		link.style.display = "none";
		if (download != "") {
			link.download = download;
		}
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	constructor(properties) {
		const defaults = structuredClone(WUIBody.#defaults);
		Object.entries(defaults).forEach(([key, defValue]) => {
			this[key] = key in properties ? properties[key] : defValue;
		});
	}

	get environment() {
		return this.#environment;
	}

	get importDirectory() {
		return this.#importDirectory;
	}

	get importMode() {
		return this.#importMode;
	}

	get onCompleted() {
		return this.#onCompleted;
	}

	get debug() {
		return this.#debug;
	}

	set environment(value) {
		if (typeof (value) == "string" && value.match(/^(native\.android|native\.ios|web)?$/i)) {
			this.#environment = value.toLowerCase();
		}
	}

	set importDirectory(value) {
		if (typeof (value) == "string") {
			this.#importDirectory = value;
		}
	}

	set importMode(value) {
		if (typeof (value) == "string" && value.match(/^(fetch|xhr)?$/i)) {
			this.#importMode = value;
		}
	}

	set onCompleted(value) {
		if (typeof (value) == "function") {
			this.#onCompleted = value;
		}
	}

	set debug(value) {
		if (typeof (value) == "boolean") {
			this.#debug = value;
		}
	}

	import(id, path, done) {
		const token = Date.now();
		const cssPath = `${this.#importDirectory}${path}.css?_=${token}`;
		const htmlPath = `${this.#importDirectory}${path}.htm?_=${token}`;
		const jsPath = `${this.#importDirectory}${path}.js?_=${token}`;
		const checkPath = (url) => {
			const xhr = new XMLHttpRequest();
			try {
				xhr.open("HEAD", url, false);
				xhr.send();
			} catch (e) { }
			return xhr.status != 404;
		}
		const checkStatus = () => {
			if (2 * WUIBody.#partCount == WUIBody.#htmlCount + WUIBody.#jsCount && typeof (this.#onCompleted) == "function") {
				this.#onCompleted();
			}
		}
		const loadHTML = (html) => {
			if (html) {
				let section = document.getElementById(id);
				section.outerHTML = html;
				section = document.getElementById(id);
				if (this.debug) {
					console.log("ui import htm:", id, section);
				}
			}
			WUIBody.#htmlCount++;
		}
		const loadCSS = (css) => {
			if (css) {
				const section = document.getElementById(id);
				const style = document.createElement("style");
				style.textContent = css;
				section.insertAdjacentElement("beforebegin", style);
				if (this.debug) {
					console.log("ui import css:", id, style);
				}
			}
			WUIBody.#cssCount++;
		}
		const loadJS = (js) => {
			if (js) {
				const section = document.getElementById(id);
				const script = document.createElement("script");
				script.textContent = js;
				section.insertAdjacentElement("afterend", script);
				if (this.debug) {
					console.log("ui import js:", id, script);
				}
			}
			WUIBody.#jsCount++;
			if (typeof (done) == "function") {
				done();
			}
			checkStatus();
		}
		const xhrRequest = (url, onload) => {
			const xhr = new XMLHttpRequest();
			xhr.overrideMimeType("text/plain");
			xhr.onload = function () {
				if (xhr.status == 200 || xhr.status == 0) {
					onload(xhr.responseText);
				}
			}
			xhr.open("GET", url, true);
			xhr.send();
		}
		if (checkPath(htmlPath)) {
			if (this.#importMode == "fetch") {
				fetch(htmlPath).then(response => {
					return response.text();
				}).then(html => {
					loadHTML(html);
					if (checkPath(cssPath)) {
						fetch(cssPath).then(response => {
							return response.text();
						}).then(css => {
							loadCSS(css);
						});
					}
					if (checkPath(jsPath)) {
						fetch(jsPath).then(response => {
							return response.text();
						}).then(js => {
							loadJS(js);
						});
					} else {
						WUIBody.#jsCount++;
					}
				});
			} else if (this.#importMode == "xhr") {
				xhrRequest(htmlPath, html => {
					loadHTML(html);
					if (checkPath(cssPath)) {
						xhrRequest(cssPath, css => {
							loadCSS(css);
						});
					}
					if (checkPath(jsPath)) {
						xhrRequest(jsPath, js => {
							loadJS(js);
						});
					} else {
						WUIBody.#jsCount++;
					}
				});
			}
			WUIBody.#partCount++;
		}
	}

	prepaare() {
		const inputsSelector = "input[type=text], input[type=password], input[type=file], input[type=email], input[type=number], input[type=tel], textarea";
		if (this.environment == "native.android") {
			document.body.querySelectorAll("a[target=_new], a[target=_blank]").forEach(a => {
				a.setAttribute("href", "javascript:WUIBody.openURL('" + a.getAttribute("href") + "', '" + (a.getAttribute("download") || "") + "');");
				a.removeAttribute("target");
			});
			document.body.querySelectorAll(inputsSelector).forEach(input => {
				input.addEventListener("keyup", event => {
					const maxlength = input.getAttribute("maxlength");
					if (typeof (maxlength) != "undefined" && input.value.length > parseInt(maxlength)) {
						input.value = input.value.substring(0, parseInt(maxlength));
					}
				});
			});
		} else if (this.environment == "native.ios") {
			document.body.querySelectorAll(inputsSelector).forEach(input => {
				input.addEventListener("keypress", event => {
					const maxlength = input.getAttribute("maxlength");
					if (typeof (maxlength) != "undefined" && input.value.length >= parseInt(maxlength)) {
						return false;
					}
				});
			});
		}
		document.body.querySelectorAll(inputsSelector + ", select").forEach(input => {
			input.addEventListener("blur", () => {
				document.activeElement.blur();
			});
		});
	}

	openURL() {
		WUIBody.openURL(...arguments);
	}
}