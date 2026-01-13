/*
 * WUICookie - v0.1
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUICookie {

	static version = "0.1";
	static #defaults = {
		domain: location.hostname,
		path: "",
		minutes: 365 * 24 * 60,
		overssl: false
	};

	get domain() {
		return this._domain;
	}

	get path() {
		return this._path;
	}

	get minutes() {
		return this._minutes;
	}

	get overssl() {
		return this._overssl;
	}

	set domain(value) {
		if (typeof (value) == "string" && value != "") {
			this._domain = value;
		}
	}

	set path(value) {
		if (typeof (value) == "string") {
			this._path = value;
		}
	}

	set minutes(value) {
		if (typeof (value) == "number" && value.toString().match(/^\d+$/)) {
			this._minutes = value;
		}
	}

	set overssl(value) {
		if (typeof (value) == "boolean") {
			this._overssl = value;
		}
	}

	constructor(properties) {
		Object.keys(WUICookie.#defaults).forEach(prop => {
			this[prop] = typeof (properties) != "undefined" && prop in properties ? properties[prop] : prop in WUICookie.#defaults ? WUICookie.#defaults[prop] : null;
		});
	}

	set(name, value, options = {}) {
		const domain = typeof (options.domain) == "string" ? options.domain : this.domain;
		const path = typeof (options.path) == "string" ? options.path : this.path;
		const minutes = typeof (options.minutes) == "number" ? options.minutes : this.minutes;
		const overssl = typeof (options.overssl) == "boolean" ? options.overssl : this.overssl;
		const cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value)
			+ (domain != "" ? "; domain=" + domain : "")
			+ (path != "" && path != "./" ? "; path=" + path : "")
			+ "; max-age=" + (60 * minutes)
			+ (overssl ? " secure" : "")
		if (navigator.cookieEnabled) {
			try {
				document.cookie = cookie;
			} catch (error) {
				console.error("WUICookie error:", error);
			}
		}
	}

	get(name) {
		const cname = name + "=";
		let cookies = [];
		if (navigator.cookieEnabled) {
			try {
				cookies = decodeURIComponent(document.cookie).split(";");
			} catch (error) {
				console.error("WUICookie error:", error);
			}
			cookies.forEach(part => {
				while (part.charAt(0) == " ") {
					part = part.substring(1);
				}
				if (part.indexOf(cname) == 0) {
					return part.substring(cname.length, part.length);
				}
			});
		}
		return "";
	}

	remove(name) {
		this.set(name, "", { minutes: 0 });
	}
};