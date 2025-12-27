/*
 * WUIList - v0.2
 * Author: Sergio E. Belmar (sbelmar@wuijs.dev)
 * Copyright (c) Sergio E. Belmar (sbelmar@wuijs.dev)
 */

class WUIList {

	static version = "0.2";
	static #defaults = {
		selector: ".wui-list",
		paging: 0,
		columns: [],
		rows: [],
		buttons: [],
		buttonsStyle: "round",
		onPrint: null,
		onClick: null
	};

	#properties = {};
	#htmlElement;
	#strips;

	constructor(properties = {}) {
		const defaults = structuredClone(WUIList.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#properties.page = 0;
	}

	get selector() {
		return this.#properties.selector;
	}

	get paging() {
		return this.#properties.paging;
	}

	get page() {
		return this.#properties.page;
	}

	get pages() {
		return this.#properties.paging == 0 ? 1 : Math.ceil(this.#properties.rows.length / this.#properties.paging);
	}

	get total() {
		return this.#properties.rows.length;
	}

	get columns() {
		return this.#properties.columns;
	}

	get rows() {
		return this.#properties.rows;
	}

	get buttons() {
		return this.#properties.buttons;
	}

	get buttonsStyle() {
		return this.#properties.buttonsStyle;
	}

	get onPrint() {
		return this.#properties.onPrint;
	}

	get onClick() {
		return this.#properties.onClick;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.selector = value;
			this.#htmlElement = document.querySelector(value);
		}
	}

	set paging(value) {
		if (typeof (value) == "number" || (typeof (value) == "string" && value.match(/^\d+$/))) {
			this.#properties.paging = parseInt(value);
		}
	}

	set columns(value) {
		if (Array.isArray(value)) {
			this.#properties.columns = value;
		}
	}

	set rows(value) {
		if (Array.isArray(value)) {
			this.#properties.rows = value;
		}
	}

	set buttons(value) {
		if (Array.isArray(value)) {
			this.#properties.buttons = value;
		}
	}

	set buttonsStyle(value) {
		if (typeof (value) == "string" && value.match(/^(round|stretch)$/i)) {
			this.#properties.buttonsStyle = value.toLowerCase();
		}
	}

	set onPrint(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onPrint = value;
		}
	}

	set onClick(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onClick = value;
		}
	}

	getElement() {
		return this.#htmlElement;
	}

	init() {
		this.#strips = [];
		if (this.#properties.rows.length > 0) {
			this.print();
		}
	}

	addColumn(options) {
		this.#properties.columns.push(options);
	}

	addRow(options) {
		this.#properties.rows.push(options);
	}

	addButton(options) {
		this.#properties.buttons.push(options);
	}

	print(page = this.#properties.page) {
		const paging = this.#properties.paging == 0 ? this.#properties.rows.length : this.#properties.paging;
		this.#strips = [];
		this.#htmlElement.innerHTML = "";
		if (this.#htmlElement instanceof HTMLElement && page * paging >= 0 && page * paging < this.#properties.rows.length) {
			const ini = page * paging;
			const end = (page + 1) * paging > this.#properties.rows.length ? this.#properties.rows.length : (page + 1) * paging;
			for (let i = ini; i < end; i++) {
				const rowOptions = this.#properties.rows[i];
				const row = document.createElement("div");
				const strip = document.createElement("div");
				const id = "id" in rowOptions ? rowOptions.id : null;
				const enabled = "enabled" in rowOptions ? rowOptions.enabled : true;
				row.dataset.index = i;
				if (id != null) {
					row.dataset.id = id;
				}
				row.className = "row" + (this.#properties.buttons.length > 0 ? " slider" : "") + (!enabled ? " disabled" : "");
				row.append(strip);
				strip.className = "strip";
				this.#properties.columns.forEach((colOptions, j) => {
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
				strip.addEventListener("click", () => {
					if (this.#properties.buttons.length == 0 || this.#strips[i].direction == null) {
						if (typeof (this.#properties.onClick) == "function") {
							this.#properties.onClick(i, id, !row.classList.contains("disabled"), rowOptions);
						}
						this.#strips.forEach((str, s) => {
							if (str.open) {
								this.#htmlElement.querySelector(".row:nth-of-type(" + (s + 1) + ") > .strip").style.marginRight = "0px";
								this.#strips[s].open = false;
							}
						});
					}
				});
				if (this.#properties.buttons.length > 0) {
					const buttons = document.createElement("div");
					buttons.className = "buttons";
					this.#strips[i] = {
						drag: false,
						initX: null,
						direction: null,
						open: false
					};
					this.#properties.buttons.forEach(btnOptions => {
						const button = document.createElement("div");
						const icon = document.createElement("div");
						const iconClass = typeof (btnOptions.iconClass) == "string" ? btnOptions.iconClass : typeof (btnOptions.iconClass) == "function" ? btnOptions.iconClass(i, id) : "";
						const bgcolor = typeof (btnOptions.bgcolor) == "string" ? btnOptions.bgcolor : typeof (btnOptions.bgcolor) == "function" ? btnOptions.bgcolor(i, id) : "";
						const enabled = typeof (btnOptions.enabled) == "undefined" || (typeof (btnOptions.enabled) == "boolean" && btnOptions.enabled) || (typeof (btnOptions.enabled) == "function" && btnOptions.enabled(i, id)) ? true : false;
						button.className = "button " + this.#properties.buttonsStyle;
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
						button.addEventListener("click", () => {
							const strip = this.#htmlElement.querySelector(".row:nth-of-type(" + (i + 1) + ") > .strip");
							if (enabled && typeof (btnOptions.onClick) == "function") {
								btnOptions.onClick(i, id);
							}
							if (strip instanceof HTMLElement) {
								strip.style.marginRight = "0px";
							}
						});
						button.append(icon);
						buttons.append(button);
						["touchstart", "mousedown"].forEach(type => {
							strip.addEventListener(type, event => {
								if (!row.classList.contains("disabled") && !this.#strips[i].drag) {
									const initX = (event.type == "touchstart" ? event.touches[0].clientX : event.clientX || event.clientX) - event.target.offsetParent.offsetLeft;
									this.#strips[i].initX = initX;
									this.#strips[i].drag = Boolean(type == "touchstart" || event.buttons == 1);
								}
							});
						});
						["touchmove", "mousemove"].forEach(type => {
							strip.addEventListener(type, event => {
								if (this.#strips[i].drag) {
									const initX = parseFloat(this.#strips[i].initX);
									const moveX = (event.type == "touchmove" ? event.touches[0].clientX : event.clientX || event.clientX) - event.target.offsetParent.offsetLeft;
									const diffX = moveX - initX;
									const direction = diffX > 10 ? "right" : diffX < -10 ? "left" : null;
									if (direction == "left") {
										this.#strips.forEach((_, s) => {
											if (this.#strips[s].open && s != i) {
												this.#htmlElement.querySelector(".row:nth-of-type(" + (s + 1) + ") > .strip").style.marginRight = "0px";
												this.#strips[s].open = false;
											}
										});
									}
									this.#strips[i].direction = direction;
								}
							});
						});
						["touchend", "mouseup"].forEach(type => {
							strip.addEventListener(type, () => {
								if (this.#strips[i].drag) {
									this.#strips[i].drag = false;
									this.#strips[i].initX = null;
									if (this.#strips[i].direction != null) {
										if (this.#strips[i].direction == "left") {
											strip.style.marginRight = buttons.clientWidth + "px";
											this.#strips[i].open = true;
										} else if (this.#strips[i].direction == "right") {
											strip.style.marginRight = "0px";
											this.#strips[i].open = false;
										}
										setTimeout(() => {
											this.#strips[i].direction = null;
										}, 400);
									}
								}
							});
						});
					});
					row.append(buttons);
				}
				this.#htmlElement.append(row);
				if ("innerContent" in rowOptions && typeof (rowOptions.innerContent) == "string" && rowOptions.innerContent.trim() != "") {
					const innerRow = document.createElement("div");
					const opened = Boolean("innerOpened" in rowOptions && rowOptions.innerOpened);
					innerRow.dataset.index = i;
					innerRow.className = "inner-row" + (!opened ? " hidden" : "");
					innerRow.innerHTML = rowOptions.innerContent;
					this.#htmlElement.append(innerRow);
				}
			}
			this.#properties.page = page;
			if (typeof (this.#properties.onPrint) == "function") {
				this.#properties.onPrint(page, this.pages, this.total);
			}
		}
	}

	enableRow(index, enabled = true) {
		if (index >= 0 && index < this.#properties.rows.length) {
			const row = this.#htmlElement.querySelector(".row:nth-of-type(" + (index + 1) + ")");
			if (row instanceof HTMLElement) {
				if (enabled) {
					row.classList.remove("disabled");
				} else {
					row.classList.add("disabled");
				}
			}
			this.#properties.rows[index].enabled = enabled;
		}
	}

	openInnerRow(index, open = true) {
		if (index >= 0 && index < this.#properties.rows.length && "innerContent" in this.#properties.rows[index] && typeof (this.#properties.rows[index].innerContent) == "string" && this.#properties.rows[index].innerContent.trim() != "") {
			const innerRow = this.#htmlElement.querySelector(".inner-row:nth-of-type(" + (index + 1) + ")");
			if (innerRow instanceof HTMLElement) {
				if (open) {
					innerRow.classList.remove("hidden");
				} else {
					innerRow.classList.add("hidden");
				}
			}
		}
	}

	first() {
		this.print(0);
	}

	last() {
		const page = this.#properties.paging == 0 ? 0 : Math.ceil(this.#properties.rows.length / this.#properties.paging) - 1;
		this.print(page);
	}

	prev() {
		this.print(this.#properties.page - 1);
	}

	next() {
		this.print(this.#properties.page + 1);
	}

	isPrevEnable() {
		const paging = this.#properties.paging == 0 ? this.#properties.rows.length : this.#properties.paging;
		return Boolean((this.#properties.page - 1) * paging >= 0);
	}

	isNextEnable() {
		const paging = this.#properties.paging == 0 ? this.#properties.rows.length : this.#properties.paging;
		return Boolean((this.#properties.page + 1) * paging < this.#properties.rows.length);
	}

	destroy() {
		if (this.#htmlElement instanceof HTMLElement) {
			this.#htmlElement.innerHTML = "";
		}
		Object.keys(this.#properties).forEach(name => {
			delete this.#properties[name];
		});
		this.#strips = undefined;
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