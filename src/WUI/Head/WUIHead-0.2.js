/*
 * WUIHead - v0.2
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIHead {

	static version = "0.2";

	setTitle(value = "") {
		const title = document.querySelector("head > title");
		if (title) {
			title.textContent = value;
		}
	}

	setMetaContent(name, content = "") {
		const meta = document.querySelector("head > meta[name='" + name + "']");
		if (meta) {
			meta.setAttribute("content", content);
		}
	}

	setApplicationName(value = "") {
		this.setMetaContent("application-name", value);
	}

	setThemeColor(value = "") {
		this.setMetaContent("theme-color", value);
	}

	refresh = () => {
		const token = Date.now();
		const url = (url) => {
			return url + (url.match(/\?/) ? "&" : "?") + token;
		};
		document.querySelectorAll("head > link[href]").forEach(link => {
			link.href = url(link.href);
		});
		document.querySelectorAll("head > script[src]").forEach(script => {
			script.src = url(script.src);
		});
	}
}