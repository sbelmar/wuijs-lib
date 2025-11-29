/*
 * WUIHead - v0.1
 * Author: Sergio E. Belmar (sbelmar@wuijs.dev)
 * Copyright (c) Sergio E. Belmar (sbelmar@wuijs.dev)
 */

class WUIHead {

	static version = "0.1";

	setTitle(value = "") {
		document.head.querySelector("title").innerHTML = value;
	}

	setMetaContent(name, content = "") {
		document.head.querySelector("meta[name='" + name + "']").setAttribute("content", content);
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
		document.head.querySelectorAll("link[href]").forEach(link => {
			link.href = url(link.href);
		});
		document.head.querySelectorAll("script[src]").forEach(script => {
			script.src = url(script.src);
		});
	}
}