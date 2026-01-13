/*
 * WUIPaging - v0.1
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIPaging {

	static version = "0.1";
	static #defaults = {
		selector: "",
		index: null,
		dataTarget: "target",
		onSelect: null,
		onChange: null,
		onBack: null,
		onScrolling: null
	};

	constructor(properties) {
		this._target = null;
		this._history = [];
		Object.keys(WUIPaging.#defaults).forEach(prop => {
			this[prop] = typeof (properties) != "undefined" && prop in properties ? properties[prop] : prop in WUIPaging.#defaults ? WUIPaging.#defaults[prop] : null;
		});
	}

	get selector() {
		return this._selector;
	}

	get index() {
		return this._index;
	}

	get target() {
		return this._target;
	}

	get dataTarget() {
		return this._dataTarget;
	}

	get onSelect() {
		return this._onSelect;
	}

	get onChange() {
		return this._onChange;
	}

	get onBack() {
		return this._onBack;
	}

	get onScrolling() {
		return this._onScrolling;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
		}
	}

	set index(value) {
		if (typeof (value) == "number") {
			this._index = value;
		}
	}

	set dataTarget(value) {
		if (typeof (value) == "string") {
			this._dataTarget = value;
		}
	}

	set onSelect(value) {
		if (typeof (value) == "function") {
			this._onSelect = value;
		}
	}

	set onChange(value) {
		if (typeof (value) == "function") {
			this._onChange = value;
		}
	}

	set onBack(value) {
		if (typeof (value) == "function") {
			this._onBack = value;
		}
	}

	set onScrolling(value) {
		if (typeof (value) == "function") {
			this._onScrolling = value;
		}
	}

	static getDelay() {
		const time = getComputedStyle(document.body).getPropertyValue("--wui-paging-page-transition-time");
		const factor = time.match(/ms$/) ? 1 : time.match(/s$/) ? 1000 : 0;
		const delay = factor * parseFloat(time.replace(/\D$/, ""));
		return delay;
	}

	#target2index(target) {
		let index = 0;
		if (typeof (target) == "number" && target > 0) {
			index = target;
		} else if (typeof (target) == "string" && target != "") {
			Array.from(this.getPages()).every((page, i) => {
				if (page.dataset[this._dataTarget] == target) {
					index = i;
					return false;
				}
				return true;
			});
		}
		return index;
	}

	#index2target(index) {
		let target = "";
		if (typeof (index) == "number" && index > -1) {
			Array.from(this.getPages()).every((page, i) => {
				if (i == this.index) {
					target = page.dataset[this._dataTarget];
					return true;
				}
				return false;
			});
		} else if (typeof (index) == "string" && index != "") {
			target = index;
		}
		return target;
	}

	getElement() {
		return this._element;
	}

	getIndex(target = this.target) {
		return this.#target2index(target);
	}

	getTarget(index = this.index) {
		return this.#index2target(index);
	}

	getPages() {
		return this._element.querySelectorAll(".page") || [];
	}

	getPage(target) {
		const index = this.getIndex(target);
		return this.getPages()[index] || null;
	}

	init() {
		const debounce = (fn) => {
			let frame;
			return (...params) => {
				if (frame) {
					cancelAnimationFrame(frame);
				}
				frame = requestAnimationFrame(() => {
					fn(...params);
				});
			}
		};
		if (this.getPages().length > 0) {
			const index = this._index || 0;
			this.getPages().forEach((page, i) => {
				if (i == index) {
					page.classList.add("selected");
					this._target = page.dataset[this._dataTarget];
				} else if (i < index) {
					page.classList.add("left");
				} else if (i > index) {
					page.classList.add("right");
				}
				page.dataset.scrollPage = 0;
				if (page.classList.contains("scroll")) {
					["scroll", "touchmove"].forEach(type => {
						page.addEventListener(type, debounce(() => {
							const top = page.scrollTop;
							const scroll = top >= 0 ? top : 0;
							page.dataset.scrollPage = scroll;
							if (typeof (this._onScrolling) == "function") {
								this._onScrolling(scroll);
							}
						}), { passive: true });
					});
				}
			});
			this._index = index;
		}
	}

	select(target, onChange = this._onChange) {
		const index = this.#target2index(target);
		if (this._index != index) {
			const inputIndex = index;
			const inputPage = this.getPage(index);
			const outputIndex = this._index;
			const outputPage = this.getPage(this._index);
			const delay = WUIPaging.getDelay();
			inputPage.classList.remove("left", "right");
			inputPage.classList.add("selected");
			if (this._index < index) {
				outputPage.classList.add("left");
			} else if (this._index > index) {
				outputPage.classList.add("right");
			}
			this._history.push({
				index: this._index,
				target: this._target
			});
			if (typeof (this._onSelect) == "function") {
				this._onSelect(index, target, this._index, this._target);
			}
			this._index = index;
			this._target = target;
			setTimeout(() => {
				if (outputPage != null) {
					outputPage.classList.remove("selected");
				}
				this.getPages().forEach((page, i) => {
					if (i != inputIndex && i != outputIndex) {
						if (i < index) {
							page.classList.remove("right");
							page.classList.add("left");
						} else if (i > index) {
							page.classList.remove("left");
							page.classList.add("right");
						}
					}
				});
				if (typeof (onChange) == "function") {
					onChange(index, target);
				}
			}, delay);
		}
	}

	setHistory(history = []) {
		if (Array.isArray(history)) {
			this._history = [];
			history.forEach(item => {
				let index = 0;
				let target = "";
				if (typeof (item) == "number") {
					index = item;
					target = this.#index2target(item);
				} else if (typeof (item) == "string") {
					index = this.#target2index(item);
					target = item;
				}
				this._history.push({ index, target });
			});
		}
	}

	back(onBack = this._onBack) {
		if (this._history.length > 0) {
			const back = this._history.pop();
			const delay = WUIPaging.getDelay();
			this.select(back.target);
			this._history.pop();
			setTimeout(() => {
				if (typeof (onBack) == "function") {
					onBack(back.index, back.target);
				}
			}, delay);
		}
	}

	reset() {
		if (this.getPages().length > 0) {
			this.select(0);
			this._index = 0;
			this._target = null;
		}
	}
}

/*
Generated HTML code:
<div class="wui-paging">
	<div class="page selected" data-target="pg1"></div>
	<div class="page" data-target="pg2"></div>
	...
</div>
*/