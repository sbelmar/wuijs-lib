/*
 * WUITable - v0.1
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUITable {

	static version = "0.1";
	static #defaults = {
		selector: ".wui-table",
		width: "auto",
		paging: 0,
		columns: [],
		rows: [],
		align: "left",
		valign: "middle",
		sortable: true,
		resizable: true,
		draggable: true,
		selectable: true,
		onPrint: null,
		onClick: null,
		onDblClick: null,
		onSelect: null
	};
	static #icons = {
		"column-sorter-asc": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/>"
			+ "</svg>",
		"column-sorter-desc": ""
			+ "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+ "<path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/>"
			+ "</svg>"
	};

	#properties = {};
	#htmlElement;
	#htmlElements = {
		table: null,
		thead: null,
		tbody: null
	};
	#sortingIndex;
	#sortingDirection;
	#resizing;
	#draggingTarget;
	#colorScheme;

	constructor(properties = {}) {
		const defaults = structuredClone(WUITable.#defaults);
		Object.entries(defaults).forEach(([key, value]) => {
			this[key] = key in properties ? properties[key] : value;
		});
		this.#properties.page = 0;
		this.#sortingIndex = null;
		this.#sortingDirection = null;
		this.#resizing = false;
		this.#draggingTarget = null;
		this.#colorScheme = null;
	}

	get selector() {
		return this.#properties.selector;
	}

	get width() {
		return this.#properties.width;
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

	get align() {
		return this.#properties.align;
	}

	get valign() {
		return this.#properties.valign;
	}

	get sortable() {
		return this.#properties.sortable;
	}

	get resizable() {
		return this.#properties.resizable;
	}

	get draggable() {
		return this.#properties.draggable;
	}

	get selectable() {
		return this.#properties.selectable;
	}

	get onPrint() {
		return this.#properties.onPrint;
	}

	get onClick() {
		return this.#properties.onClick;
	}

	get onDblClick() {
		return this.#properties.onDblClick;
	}

	get onSelect() {
		return this.#properties.onSelect;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.selector = value;
			this.#htmlElement = document.querySelector(value);
		}
	}

	set width(value) {
		if (typeof (value) == "number" || typeof (value) == "string" && (value.match(/^[0-9]+(px|em|%)$/) || value == "auto")) {
			this.#properties.width = value;
		}
	}

	set paging(value) {
		if (typeof (value) == "number" && value >= 0) {
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

	set align(value) {
		if (value == null || typeof (value) == "string" && value.match(/^(left|center|right)$/i)) {
			this.#properties.align = typeof (value) == "string" ? value.toLowerCase() : value;
		}
	}

	set valign(value) {
		if (value == null || typeof (value) == "string" && value.match(/^(top|middle|bottom)$/i)) {
			this.#properties.valign = typeof (value) == "string" ? value.toLowerCase() : value;
		}
	}

	set sortable(value) {
		if (typeof (value) == "boolean") {
			this.#properties.sortable = value;
		}
	}

	set resizable(value) {
		if (typeof (value) == "boolean") {
			this.#properties.resizable = value;
		}
	}

	set draggable(value) {
		if (typeof (value) == "boolean") {
			this.#properties.draggable = value;
		}
	}

	set selectable(value) {
		if (typeof (value) == "boolean") {
			this.#properties.selectable = value;
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

	set onDblClick(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onDblClick = value;
		}
	}

	set onSelect(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onSelect = value;
		}
	}

	getElement() {
		return this.#htmlElement;
	}

	#getSRCIcon(name) {
		const element = this.#htmlElement || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-table-" + name + "icon-src");
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml," + WUITable.#icons[name] + "\")";
	}

	init() {
		if (!this.#htmlElement) {
			throw new Error("WUITable: invalid selector or element not found.");
		}
		this.#htmlElements.table = document.createElement("table");
		this.#htmlElements.thead = document.createElement("thead");
		this.#htmlElements.tbody = document.createElement("tbody");
		this.#htmlElements.table.setAttribute("cellspacing", "0");
		this.#htmlElements.table.appendChild(this.#htmlElements.thead);
		this.#htmlElements.table.appendChild(this.#htmlElements.tbody);
		this.#htmlElement.style.width = typeof (this.#properties.width) == "number" ? this.#properties.width + "px" : typeof (this.#properties.width) == "string" ? this.#properties.width : "auto";
		this.#htmlElement.style.setProperty("--wui-table-width", getComputedStyle(this.#htmlElement).width);
		this.#htmlElement.appendChild(this.#htmlElements.table);
		if (this.#properties.columns.length > 0) {
			this.#printHead();
		}
		if (this.#properties.rows.length > 0) {
			this.#printBody();
		}
		this.#darkModeListener(() => {
			if (this.#htmlElements.thead.querySelector(".sorter")) {
				const theadRow = this.#htmlElements.thead.rows[0];
				if (theadRow.children[this.#sortingIndex]) {
					theadRow.children[this.#sortingIndex].querySelector(".sorter").style.maskImage = this.#getSRCIcon(`column-sorter-${this.#sortingDirection == "asc" ? "asc" : "desc"}`);
				}
			}
		});
	}

	addColumn(options) {
		this.#properties.columns.push(options);
	}

	addRow(options) {
		this.#properties.rows.push(options);
	}

	#printHead() {
		const tr = document.createElement("tr");
		const align = this.#properties.align || null;
		const valign = this.#properties.valign || null;
		["align-left", "align-center", "align-right", "valign-top", "valign-middle", "valign-bottom"].forEach(cls => {
			this.#htmlElements.table.classList.remove(cls);
		});
		if (align != null && align.match(/^(left|center|right)$/i)) {
			this.#htmlElements.table.classList.add("align-" + align);
		}
		if (valign != null && valign.match(/^(top|middle|bottom)$/i)) {
			this.#htmlElements.table.classList.add("valign-" + valign);
		}
		this.#htmlElements.thead.innerHTML = "";
		this.#htmlElements.thead.append(tr);
		this.#properties.columns.forEach(colOptions => {
			const th = document.createElement("th");
			const width = typeof (colOptions.width) == "number" || (typeof (colOptions.width) == "string" && colOptions.width.match(/^[0-9]+(px|em|%)$/)) ? colOptions.width : null;
			const align = colOptions.align || this.#properties.align || null;
			const valign = colOptions.valign || this.#properties.valign || null;
			const resizable = typeof (colOptions.resizable) != "undefined" ? colOptions.resizable : this.#properties.resizable;
			tr.appendChild(th);
			th.innerHTML = colOptions.label || "";
			if (width != null) {
				th.style[resizable ? "maxWidth" : "width"] = typeof (width) == "number" ? width + "px" : width;
			}
			if (align != null && align.match(/^(left|center|right)$/i)) {
				th.classList.add("align-" + align);
			}
			if (valign != null && valign.match(/^(top|middle|bottom)$/i)) {
				th.classList.add("valign-" + valign);
			}
			["sortable", "resizable", "draggable"].forEach(prop => {
				const active = prop in colOptions ? colOptions[prop] : this[prop];
				if (active) {
					th.classList.add(prop);
					if (prop == "sortable") {
						const sorter = document.createElement("div");
						sorter.className = "sorter";
						th.append(sorter);
						th.addEventListener("click", event => this.#sort(event));
					} else if (prop == "resizable") {
						const resizer = document.createElement("div");
						resizer.className = "resizer";
						resizer.addEventListener("mousedown", event => this.#resize(event), { passive: false });
						th.append(resizer);
					} else if (prop == "draggable") {
						th.draggable = true;
						th.addEventListener("dragstart", event => this.#drag("start", event), { passive: false });
						th.addEventListener("dragover", event => this.#drag("over", event), { passive: false });
						th.addEventListener("dragenter", event => this.#drag("enter", event), { passive: false });
						th.addEventListener("dragleave", event => this.#drag("leave", event), { passive: false });
						th.addEventListener("dragend", event => this.#drag("end", event), { passive: false });
						th.addEventListener("drop", event => this.#drag("drop", event), { passive: false });
					}
				}
			});
		});
	}

	#printBody(page = this.#properties.page) {
		const paging = this.#properties.paging == 0 ? this.#properties.rows.length : this.#properties.paging;
		this.#htmlElements.tbody.innerHTML = "";
		if (this.#htmlElement instanceof HTMLElement && page * paging >= 0 && page * paging < this.#properties.rows.length) {
			const ini = page * paging;
			const end = (page + 1) * paging > this.#properties.rows.length ? this.#properties.rows.length : (page + 1) * paging;
			for (let i = ini; i < end; i++) {
				const rowOptions = this.#properties.rows[i] || null;
				if (rowOptions != null) {
					const tr = document.createElement("tr");
					const id = "id" in rowOptions ? rowOptions.id : null;
					const align = rowOptions.align || null;
					const valign = rowOptions.valign || null;
					const selected = "selected" in rowOptions ? rowOptions.selected : false;
					const enabled = "enabled" in rowOptions ? rowOptions.enabled : true;
					if (align != null && align.match(/^(left|center|right)$/i)) {
						tr.classList.add("align-" + align);
					}
					if (valign != null && valign.match(/^(top|middle|bottom)$/i)) {
						tr.classList.add("valign-" + valign);
					}
					if (selected) {
						tr.classList.add("selected");
					}
					if (!enabled) {
						tr.classList.add("disabled");
					}
					if (id != null) {
						tr.dataset.id = id;
					}
					tr.dataset.index = i;
					tr.addEventListener("click", () => {
						if (typeof (this.#properties.onClick) == "function") {
							this.#properties.onClick(i, id, !tr.classList.contains("disabled"), rowOptions);
						}
						if (this.#properties.selectable && typeof (this.#properties.onSelect) == "function") {
							const selected = !tr.classList.contains("selected");
							tr.classList.toggle("selected");
							if (selected) {
								this.#properties.onSelect(i, id, !tr.classList.contains("disabled"), rowOptions);
							}
							this.#properties.rows[i].selected = selected;
						}
					});
					tr.addEventListener("dblclick", () => {
						if (typeof (this.#properties.onDblClick) == "function") {
							this.#properties.onDblClick(i, id, !tr.classList.contains("disabled"), rowOptions);
						}
					});
					this.#properties.columns.forEach((colOptions, j) => {
						const td = document.createElement("td");
						const width = typeof (colOptions.width) == "number" || (typeof (colOptions.width) == "string" && colOptions.width.match(/^[0-9]+(px|em|%)$/)) ? colOptions.width : null;
						const align = typeof (colOptions.align) != "undefined" && colOptions.align != this.#properties.align ? colOptions.align : null;
						const valign = typeof (colOptions.valign) != "undefined" && colOptions.valign != this.#properties.valign ? colOptions.valign : null;
						const resizable = typeof (colOptions.resizable) != "undefined" ? colOptions.resizable : this.#properties.resizable;
						td.innerHTML = rowOptions.data[j] || "";
						if (width != null) {
							td.style[resizable ? "maxWidth" : "width"] = typeof (width) == "number" ? width + "px" : width;
						}
						if (align != null && align.match(/^(left|center|right)$/i)) {
							td.classList.add("align-" + align);
						}
						if (valign != null && valign.match(/^(top|middle|bottom)$/i)) {
							td.classList.add("valign-" + valign);
						}
						tr.appendChild(td);
					});
					this.#htmlElements.tbody.appendChild(tr);
				}
			}
			this.#properties.page = page;
			if (typeof (this.#properties.onPrint) == "function") {
				this.#properties.onPrint(page, this.pages, this.total);
			}
		}
	}

	print(page = this.#properties.page) {
		this.#printBody(page);
	}

	#sort(event) {
		const thTarget = event.currentTarget;
		const targetIndex = thTarget.cellIndex;
		this.sort(targetIndex);
	}

	sort(index, direction = null) {
		if (this.#resizing) return;
		const theadRow = this.#htmlElements.thead.rows[0];
		const rows = Array.from(this.#htmlElements.tbody.querySelectorAll("tr"));
		const parseValue = (value, cell) => {
			if (!value.trim()) return {
				value: null,
				raw: cell.innerHTML.trim()
			};
			if (!isNaN(value)) return {
				value: parseFloat(value),
				raw: value
			};
			const date = Date.parse(value);
			if (!isNaN(date)) return {
				value: date,
				raw: value.toLowerCase()
			};
			return {
				value: value.toLowerCase(),
				raw: value
			};
		}
		if (direction == null) {
			direction = (this.#sortingIndex == index && this.#sortingDirection == "asc") ? "desc" : "asc";
		}
		theadRow.querySelectorAll("th .sorter").forEach(sorter => {
			sorter.style.maskImage = "url()";
		});
		theadRow.children[index].querySelector(".sorter").style.maskImage = this.#getSRCIcon(`column-sorter-${direction == "asc" ? "asc" : "desc"}`);
		rows.sort((rowA, rowB) => {
			const cellA = rowA.cells[index];
			const cellB = rowB.cells[index];
			const textA = cellA.textContent.trim();
			const textB = cellB.textContent.trim();
			const valueA = parseValue(textA, cellA);
			const valueB = parseValue(textB, cellB);
			if (valueA.value == null && valueB.value != null) return direction == "asc" ? -1 : 1;
			if (valueA.value != null && valueB.value == null) return direction == "asc" ? 1 : -1;
			if (valueA.value == null && valueB.value == null) return direction == "asc" ? valueA.raw.length - valueB.raw.length : valueB.raw.length - valueA.raw.length;
			if (valueA.value > valueB.value) return direction == "asc" ? 1 : -1;
			if (valueA.value < valueB.value) return direction == "asc" ? -1 : 1;
			return 0;
		});
		rows.forEach(row => this.#htmlElements.tbody.appendChild(row));
		this.#sortingIndex = index;
		this.#sortingDirection = direction;
	}

	#resize(event) {
		const thTarget = event.target.parentElement;
		const startX = event.pageX;
		const startWidth = parseInt(document.defaultView.getComputedStyle(thTarget).width, 10);
		const index = thTarget.cellIndex;
		const draggable = thTarget.draggable;
		const onMouseMove = (event) => {
			const rows = Array.from(this.#htmlElements.tbody.querySelectorAll("tr"));
			const width = startWidth + (event.pageX - startX);
			thTarget.style.maxWidth = width + "px";
			rows.forEach(row => {
				row.children[index].style.maxWidth = width + "px";
			});
		}
		const onMouseUp = () => {
			document.documentElement.removeEventListener("mousemove", onMouseMove);
			document.documentElement.removeEventListener("mouseup", onMouseUp);
			setTimeout(() => {
				this.#resizing = false;
				thTarget.draggable = draggable;
			}, 100);
		}
		event.preventDefault();
		this.#resizing = true;
		thTarget.draggable = false;
		document.documentElement.addEventListener("mousemove", onMouseMove);
		document.documentElement.addEventListener("mouseup", onMouseUp);
	}

	#drag(type, event) {
		if (this.#resizing) return;
		const theadCells = Array.from(this.#htmlElements.thead.rows[0].cells);
		const thTarget = event.currentTarget;
		if (type === "start") {
			theadCells.forEach(th => th.classList.remove("drop"));
			thTarget.classList.add("drag");
			event.dataTransfer.effectAllowed = "move";
			event.dataTransfer.setData("text/plain", String(thTarget.cellIndex));
			this.#draggingTarget = thTarget;
		} else if (type === "over") {
			event.preventDefault();
			event.dataTransfer.dropEffect = "move";
		} else if (type === "enter") {
			event.preventDefault();
			thTarget.classList.add("over");
		} else if (type === "leave") {
			thTarget.classList.remove("over");
		} else if (type === "end") {
			theadCells.forEach(th => th.classList.remove("over"));
			thTarget.classList.remove("drag");
		} else if (type === "drop") {
			event.preventDefault();
			event.stopPropagation();
			this.#htmlElements.table.style.tableLayout = "fixed";
			this.#draggingTarget.classList.add("drop");
			if (!thTarget.isSameNode(this.#draggingTarget)) {
				const currentTheadCells = Array.from(this.#htmlElements.thead.rows[0].cells);
				const targetIndex = thTarget.cellIndex;
				const targetCell = currentTheadCells[targetIndex];
				const sourceIndex = parseInt(event.dataTransfer.getData("text/plain"), 10);
				const sourceCell = currentTheadCells[sourceIndex];
				const position = targetIndex < sourceIndex ? "beforebegin" : "afterend";
				targetCell.insertAdjacentElement(position, sourceCell);
				Array.from(this.#htmlElements.tbody.rows).forEach(tr => {
					const cells = Array.from(tr.cells);
					const sourceTd = cells[sourceIndex];
					const targetTd = cells[targetIndex];
					targetTd.insertAdjacentElement(position, sourceTd);
				});
				theadCells.forEach(th => {
					if (!th.isSameNode(this.#draggingTarget)) {
						th.classList.remove("drag", "over", "drop");
					}
				});
			}
			setTimeout(() => {
				this.#htmlElements.table.style.tableLayout = "";
			}, 50);
		}
	}

	export() {
		const textify = (cell) => {
			return cell.textContent.replace(/\s+/g, " ").trim();
		}
		const escape = (value) => {
			const string = String(value).replace(/"/g, '""');
			return `"${string}"`;
		}
		// ...
	}

	selectRow(index, selected = true) {
		if (index >= 0 && index < this.#properties.rows.length) {
			const tr = this.#htmlElements.tbody.querySelector("tr:nth-of-type(" + (index + 1) + ")");
			if (tr instanceof HTMLTableRowElement) {
				if (selected) {
					tr.classList.add("selected");
				} else {
					tr.classList.remove("selected");
				}
			}
			this.#properties.rows[index].selected = selected;
		}
	}

	enableRow(index, enabled = true) {
		if (index >= 0 && index < this.#properties.rows.length) {
			const tr = this.#htmlElements.tbody.querySelector("tr:nth-of-type(" + (index + 1) + ")");
			if (tr instanceof HTMLTableRowElement) {
				if (enabled) {
					tr.classList.remove("disabled");
				} else {
					tr.classList.add("disabled");
				}
			}
			this.#properties.rows[index].enabled = enabled;
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

	#darkModeListener(callback) {
		const observer = new MutationObserver(() => {
			const colorScheme = getComputedStyle(document.documentElement).getPropertyValue("color-scheme").trim();
			if (this.#colorScheme != colorScheme) {
				this.#colorScheme = colorScheme;
				callback();
			}
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["style", "class"],
			subtree: false
		});
		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
			callback();
		});
	}

	destroy() {
		if (this.#htmlElement instanceof HTMLElement) {
			Object.entries(this.#htmlElements).forEach(([key, element]) => {
				if (element) {
					element.remove();
				}
				this.#htmlElements[key] = null;
			});
			this.#htmlElement.innerHTML = "";
			this.#htmlElement.remove();
		}
		Object.keys(this.#properties).forEach(name => {
			delete this.#properties[name];
		});
		this.#sortingIndex = undefined;
		this.#sortingDirection = undefined;
		this.#resizing = undefined;
		this.#draggingTarget = undefined;
		this.#colorScheme = undefined;
	}
}

/*
HTML output:
<div class="wui-table">
	<table>
		<thead>
			<tr>
				<th></th>
				[...]
			</tr>
			[...]
		</thead>
		<tbody>
			<tr>
				<td></td>
				[...]
			</tr>
			[...]
		</tbody>
	</table>
</div>
*/