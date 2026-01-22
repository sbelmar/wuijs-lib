/*
 * WUIBody - v0.1
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIBody {

	static version = "0.1";
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
		Object.keys(WUIBody.#defaults).forEach(prop => {
			this[prop] = typeof (properties) != "undefined" && prop in properties ? properties[prop] : prop in WUIBody.#defaults ? WUIBody.#defaults[prop] : null;
		});
	}

	get environment() {
		return this._environment;
	}

	get importDirectory() {
		return this._importDirectory;
	}

	get importMode() {
		return this._importMode;
	}

	get onCompleted() {
		return this._onCompleted;
	}

	get debug() {
		return this._debug;
	}

	set environment(value) {
		if (typeof (value) == "string" && value.match(/^(native\.android|native\.ios|web)?$/i)) {
			this._environment = value.toLowerCase();
		}
	}

	set importDirectory(value) {
		if (typeof (value) == "string") {
			this._importDirectory = value;
		}
	}

	set importMode(value) {
		if (typeof (value) == "string" && value.match(/^(fetch|xhr)?$/i)) {
			this._importMode = value;
		}
	}

	set onCompleted(value) {
		if (typeof (value) == "function") {
			this._onCompleted = value;
		}
	}

	set debug(value) {
		if (typeof (value) == "boolean") {
			this._debug = value;
		}
	}

	import(id, path, done) {
		const token = Date.now();
		const cssPath = `${this._importDirectory}${path}.css?_=${token}`;
		const htmlPath = `${this._importDirectory}${path}.htm?_=${token}`;
		const jsPath = `${this._importDirectory}${path}.js?_=${token}`;
		const checkPath = (url) => {
			const xhr = new XMLHttpRequest();
			try {
				xhr.open("HEAD", url, false);
				xhr.send();
			} catch (e) { }
			return xhr.status != 404;
		}
		const checkStatus = () => {
			if (2 * WUIBody.#partCount == WUIBody.#htmlCount + WUIBody.#jsCount && typeof (this._onCompleted) == "function") {
				this._onCompleted();
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
			if (this._importMode == "fetch") {
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
			} else if (this._importMode == "xhr") {
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

	openURL(url, download = "") {
		WUIBody._openURL(...arguments);
	}
}

/*
HTML code:
<section id="section1"></section>

JS code:
const body = new WUIBody();
body.import("section1", "sections/section-1", () => {});
body.init(() => {
});

Generated HTML code:
<style>[...]</style>
<section id="section1" [...]>[...]</section>
<script>[...]</script>
*/