/*
 * WUIList - v0.1
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIList {

	static version = "0.1";
	static #defaults = {
		selector: ".wui-list",
		columns: [],
		rows: [],
		buttons: [],
		buttonsStyle: "round",
		onClick: null
	};

	constructor(properties) {
		Object.keys(WUIList.#defaults).forEach(prop => {
			this[prop] = typeof (properties) != "undefined" && prop in properties ? properties[prop] : prop in WUIList.#defaults ? WUIList.#defaults[prop] : null;
		});
	}

	get selector() {
		return this._selector;
	}

	get columns() {
		return this._columns;
	}

	get rows() {
		return this._rows;
	}

	get buttons() {
		return this._buttons;
	}

	get buttonsStyle() {
		return this._buttonsStyle;
	}

	get onClick() {
		return this._onClick;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
		}
	}

	set columns(value) {
		if (Array.isArray(value)) {
			this._columns = value;
		}
	}

	set rows(value) {
		if (Array.isArray(value)) {
			this._rows = value;
		}
	}

	set buttons(value) {
		if (Array.isArray(value)) {
			this._buttons = value;
		}
	}

	set buttonsStyle(value) {
		if (typeof (value) == "string" && value.match(/^(round|stretch)$/i)) {
			this._buttonsStyle = value.toLowerCase();
		}
	}

	set onClick(value) {
		if (typeof (value) == "function") {
			this._onClick = value;
		}
	}

	getElement() {
		return this._element;
	}

	init() {
		this._strips = [];
		if (this._rows.length > 0) {
			this.print();
		}
	}

	addColumn(options) {
		this._columns.push(options);
	}

	addRow(options) {
		this._rows.push(options);
	}

	addButton(options) {
		this._buttons.push(options);
	}

	enabledRow(index, enabled = true) {
		this._rows[index].enabled = enabled;
		if (this._element.innerHTML != "") {
			const row = this._element.querySelector(".row:nth-of-type(" + (index + 1) + ")");
			if (!enabled) {
				row.classList.add("disabled");
			} else {
				row.classList.remove("disabled");
			}
		}
	}

	print() {
		this._strips = [];
		if (this._element != null) {
			this._element.innerHTML = "";
			this._rows.forEach((rowOptions, i) => {
				const row = document.createElement("div");
				const strip = document.createElement("div");
				const id = "id" in rowOptions ? rowOptions.id : null;
				const enabled = "enabled" in rowOptions ? rowOptions.enabled : true;
				row.dataset.index = i;
				if (id != null) {
					row.dataset.id = id;
				}
				row.className = "row" + (this._buttons.length > 0 ? " slider" : "") + (!enabled ? " disabled" : "");
				row.append(strip);
				strip.className = "strip";
				this._columns.forEach((colOptions, j) => {
					const cell = document.createElement("div");
					cell.className = "cell";
					cell.classList.add(colOptions.align || "left");
					if (typeof (colOptions.width) == "number") {
						cell.style.width = colOptions.width + "px";
					} else {
						cell.style.flex = "1";
					}
					cell.style.textAlign = colOptions.align || "left";
					cell.innerHTML = rowOptions.data[j] || "";
					strip.append(cell);
				});
				strip.addEventListener("click", event => {
					if (this._buttons.length == 0 || this._strips[i].direction == null) {
						if (!row.classList.contains("disabled") && typeof (this._onClick) == "function") {
							this._onClick(i, id, event, rowOptions);
						}
						this._strips.forEach((str, s) => {
							if (str.open) {
								this._element.querySelector(".row:nth-of-type(" + (s + 1) + ") > .strip").style.marginRight = "0px";
								this._strips[s].open = false;
							}
						});
					}
				});
				if (this._buttons.length > 0) {
					const buttons = document.createElement("div");
					buttons.className = "buttons";
					this._strips[i] = {
						drag: false,
						initX: null,
						direction: null,
						open: false
					};
					this._buttons.forEach(btnOptions => {
						const button = document.createElement("div");
						const icon = document.createElement("div");
						const iconClass = typeof (btnOptions.iconClass) == "string" ? btnOptions.iconClass : typeof (btnOptions.iconClass) == "function" ? btnOptions.iconClass(i, id) : "";
						const bgcolor = typeof (btnOptions.bgcolor) == "string" ? btnOptions.bgcolor : typeof (btnOptions.bgcolor) == "function" ? btnOptions.bgcolor(i, id) : "";
						const enabled = (typeof (btnOptions.enabled) == "boolean" && btnOptions.enabled) || (typeof (btnOptions.enabled) == "function" && btnOptions.enabled(i, id)) ? true : false;
						button.className = "button " + this._buttonsStyle;
						icon.className = "icon";
						if (!enabled) {
							button.classList.add("disabled");
						} else if (bgcolor != "") {
							button.style.backgroundColor = bgcolor;
						}
						if (iconClass != "") {
							iconClass.split(/\s+/).forEach(name => {
								icon.classList.add(name);
							});
						}
						button.addEventListener("click", event => {
							const strip = this._element.querySelector(".row:nth-of-type(" + (i + 1) + ") > .strip");
							if (enabled && typeof (btnOptions.onClick) == "function") {
								btnOptions.onClick(i, id, event);
							}
							if (strip != null) {
								strip.style.marginRight = "0px";
							}
						});
						button.append(icon);
						buttons.append(button);
						["touchstart", "mousedown"].forEach(type => {
							strip.addEventListener(type, event => {
								if (!row.classList.contains("disabled") && !this._strips[i].drag) {
									const initX = (event.type == "touchstart" ? event.touches[0].clientX : event.clientX || event.clientX) - event.target.offsetParent.offsetLeft;
									this._strips[i].initX = initX;
									this._strips[i].drag = true;
								}
							});
						});
						["touchmove", "mousemove"].forEach(type => {
							strip.addEventListener(type, event => {
								if (this._strips[i].drag) {
									const initX = parseFloat(this._strips[i].initX);
									const moveX = (event.type == "touchmove" ? event.touches[0].clientX : event.clientX || event.clientX) - event.target.offsetParent.offsetLeft;
									const diffX = moveX - initX;
									const direction = diffX > 10 ? "right" : diffX < -10 ? "left" : null;
									if (direction == "left") {
										this._strips.forEach((_, s) => {
											if (this._strips[s].open && s != i) {
												this._element.querySelector(".row:nth-of-type(" + (s + 1) + ") > .strip").style.marginRight = "0px";
												this._strips[s].open = false;
											}
										});
									}
									this._strips[i].direction = direction;
								}
							});
						});
						["touchend", "mouseup"].forEach(type => {
							strip.addEventListener(type, () => {
								if (this._strips[i].drag) {
									this._strips[i].drag = false;
									this._strips[i].initX = null;
									if (this._strips[i].direction != null) {
										if (this._strips[i].direction == "left") {
											strip.style.marginRight = buttons.clientWidth + "px";
											this._strips[i].open = true;
										} else if (this._strips[i].direction == "right") {
											strip.style.marginRight = "0px";
											this._strips[i].open = false;
										}
										setTimeout(() => {
											this._strips[i].direction = null;
										}, 400);
									}
								}
							});
						});
					});
					row.append(buttons);
				}
				this._element.append(row);
				if ("inner" in rowOptions && typeof (rowOptions.inner) == "string" && rowOptions.inner.trim() != "") {
					const inner = document.createElement("div");
					const opened = Boolean("opened" in rowOptions && rowOptions.opened);
					inner.dataset.index = i;
					inner.className = "inner-row" + (!opened ? " hidden" : "");
					inner.innerHTML = rowOptions.inner;
					this._element.append(inner);
				}
			});
		}
	}
}

/*
HTML code:
<div class="wui-list"></div>

JS code:
const list = new WUIList({
	selector: ".wui-list",
	columns: []
});
list.init();

Generated HTML code:
<div class="wui-list">
	<div class="row">
		<div class="strip">
			<div class="cell"></div>
			...
		</div>
		<div class="buttons">
			<div class="button edit"></div>
			<div class="button delete"></div>
			...
		</div>
	</div>
	<div class="inner-row hidden">
		...
	</div>
	...
</div>
*/