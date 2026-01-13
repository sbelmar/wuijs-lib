/*
 * WUILoader - v0.1
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUILoader {

	static version = "0.1";
	static #defaults = {
		selector: ".wui-loader",
		style: "ring",
		size: 60,
		dataStyle: "style",
		dataSize: "size"
	};
	static #styles = ["ring", "dualring", "spinner", "roller", "ellipsis", "grid"];

	constructor(properties) {
		Object.keys(WUILoader.#defaults).forEach(prop => {
			this[prop] = typeof (properties) != "undefined" && prop in properties ? properties[prop] : prop in WUILoader.#defaults ? WUILoader.#defaults[prop] : null;
		});
	}

	get selector() {
		return this._selector;
	}

	get style() {
		return this._style;
	}

	get size() {
		return this._size;
	}

	get dataStyle() {
		return this._dataStyle;
	}

	get dataSize() {
		return this._dataSize;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this._selector = value;
			this._elements = document.querySelectorAll(value);
		}
	}

	set style(value) {
		if (typeof (value) == "string" && WUILoader.#styles.indexOf(value.toLowerCase()) != -1) {
			this._style = value.toLowerCase();
		}
	}

	set size(value) {
		if (typeof (value) == "number") {
			this._size = value;
			this._scale = value / 80;
		}
	}

	set dataStyle(value) {
		if (typeof (value) == "string") {
			this._dataStyle = value;
		}
	}

	set dataSize(value) {
		if (typeof (value) == "string") {
			this._dataSize = value;
		}
	}

	getElements() {
		return this._elements;
	}

	init() {
		this._elements.forEach(element => {
			const dataStyle = element.dataset[this._dataStyle];
			const dataSize = element.dataset[this._dataSize];
			let type = this._type;
			let size = this._size;
			let scale = this._scale;
			let childs = 0;
			element.classList.forEach(name => {
				if (WUILoader.#styles.indexOf(name.toLowerCase()) != -1) {
					type = name.toLowerCase();
				}
			});
			if (typeof (dataStyle) != "undefined") {
				type = dataStyle;
			}
			if (typeof (dataSize) != "undefined") {
				size = parseFloat(dataSize);
				scale = size / 80;
			}
			childs =
				type == "ring" ? 4 :
					type == "dualring" ? 0 :
						type == "spinner" ? 12 :
							type == "roller" ? 8 :
								type == "ellipsis" ? 4 :
									type == "grid" ? 9 :
										0;
			if (!element.classList.contains(type)) {
				element.classList.add(type);
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