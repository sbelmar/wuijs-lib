/*
 * WUILoader - v0.2
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUILoader {

	static version = "0.2";
	static #defaults = {
		selector: ".wui-loader",
		style: "ring",
		size: 60,
		dataStyle: "style",
		dataSize: "size"
	};
	static #styles = ["ring", "dualring", "spinner", "roller", "ellipsis", "grid"];

	#properties = {};
	#htmlElements;
	#scale;

	constructor(properties = {}) {
		const defaults = structuredClone(WUILoader.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
	}

	get selector() {
		return this.#properties.selector;
	}

	get style() {
		return this.#properties.style;
	}

	get size() {
		return this.#properties.size;
	}

	get dataStyle() {
		return this.#properties.dataStyle;
	}

	get dataSize() {
		return this.#properties.dataSize;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.selector = value;
			this.#htmlElements = document.querySelectorAll(value);
		}
	}

	set style(value) {
		if (typeof (value) == "string" && WUILoader.#styles.indexOf(value.toLowerCase()) != -1) {
			this.#properties.style = value.toLowerCase();
		}
	}

	set size(value) {
		if (typeof (value) == "number") {
			this.#properties.size = value;
			this.#scale = value / 80;
		}
	}

	set dataStyle(value) {
		if (typeof (value) == "string") {
			this.#properties.dataStyle = value;
		}
	}

	set dataSize(value) {
		if (typeof (value) == "string") {
			this.#properties.dataSize = value;
		}
	}

	getElements() {
		return this.#htmlElements;
	}

	init() {
		this.#htmlElements.forEach(element => {
			const dataStyle = element.dataset[this.#properties.dataStyle];
			const dataSize = element.dataset[this.#properties.dataSize];
			let style = this.#properties.style;
			let size = this.#properties.size;
			let scale = this.#scale;
			let childs = 0;
			element.classList.forEach(name => {
				if (WUILoader.#styles.indexOf(name.toLowerCase()) != -1) {
					style = name.toLowerCase();
				}
			});
			if (typeof (dataStyle) != "undefined") {
				style = dataStyle;
			}
			if (typeof (dataSize) != "undefined") {
				size = parseFloat(dataSize);
				scale = size / 80;
			}
			switch (style) {
				case "ring": childs = 4; break;
				case "dualring": childs = 0; break;
				case "spinner": childs = 12; break;
				case "roller": childs = 8; break;
				case "ellipsis": childs = 4; break;
				case "grid": childs = 9; break;
				default: childs = 0; break;
			}
			if (!element.classList.contains(style)) {
				element.classList.add(style);
			}
			if (scale != 1) {
				element.style.transform = "scale(" + scale + ")";
			}
			for (let i = 0; i < childs; i++) {
				const child = document.createElement("div");
				element.appendChild(child);
			}
		});
	}
}

/*
HTML code:
<div class="wui-loader [ring|dualring|spinner|roller|ellipsis|grid]"></div>

JS code:
const loader = new WUILoader({
	selector: ".wui-loader",
	size: 60
});
loader.init();
*/