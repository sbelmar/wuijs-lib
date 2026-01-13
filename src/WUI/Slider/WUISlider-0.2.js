/*
 * WUISlider - v0.2
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUISlider {

	static version = "0.2";
	static #defaults = {
		selector: "",
		onChange: null
	};

	#properties = {};
	#htmlElement;
	#htmlElements = {
		body: null,
		dots: null
	};
	#index;
	#data;

	constructor(properties = {}) {
		const defaults = structuredClone(WUISlider.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
	}

	get selector() {
		return this.#properties.selector;
	}

	get onChange() {
		return this.#properties.onChange;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.selector = value;
			this.#htmlElement = document.querySelector(value);
			this.#htmlElements.body = this.#htmlElement.querySelector(".body");
			this.#htmlElements.dots = this.#htmlElement.querySelector(".dots");
		}
	}

	set onChange(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onChange = value;
		}
	}

	getElement() {
		return this.#htmlElement;
	}

	getBody() {
		return this.#htmlElements.body;
	}

	getIndex() {
		return this.#index;
	}

	init() {
		this.load();
	}

	load() {
		if (this.#htmlElements.body instanceof HTMLElement) {
			if (this.#htmlElements.dots instanceof HTMLElement) {
				this.#htmlElements.dots.innerHTML = "";
			}
			this.#index = null;
			this.#data = [];
			this.#htmlElements.body.querySelectorAll(".slide").forEach((slide, i) => {
				this.#data[i] = {
					slide: slide,
					dot: document.createElement("div"),
					drag: false,
					initX: null,
					direction: null,
					lock: false
				};
			});
			for (let i = 0; i < this.#data.length; i++) {
				if (i == 0) {
					this.#index = i;
					this.#data[i].slide.style.left = "0px";
					if (this.#htmlElements.dots instanceof HTMLElement) {
						this.#data[i].dot.classList.add("selected");
					}
				}
				["touchstart", "mousedown"].forEach(type => {
					this.#data[i].slide.addEventListener(type, event => {
						if (!this.#data[i].drag) {
							const initX = (event.type == "touchstart" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
							this.#data[i].initX = initX;
							this.#data[i].drag = Boolean(type == "touchstart" || event.buttons == 1);
						}
					});
				});
				["touchmove", "mousemove"].forEach(type => {
					this.#data[i].slide.addEventListener(type, event => {
						if (this.#data[i].drag && !this.#data[i].lock) {
							const initX = parseFloat(this.#data[i].initX);
							const moveX = (event.type == "touchmove" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
							const diffX = moveX - initX;
							this.#data[i].direction = diffX > 10 ? "prev" : diffX < -10 ? "next" : null;
						}
					});
				});
				["touchend", "mouseup"].forEach(type => {
					document.addEventListener(type, () => {
						if (typeof (this.#data[i]) == "object" && this.#data[i].drag) {
							this.#data[i].initX = null;
							this.#data[i].drag = false;
							if (this.#data[i].direction == "next" && i < this.#data.length - 1) {
								this.next();
							} else if (this.#data[i].direction == "prev" && i > 0) {
								this.prev();
							}
						}
					});
				});
				if (this.#htmlElements.dots instanceof HTMLElement) {
					this.#htmlElements.dots.append(this.#data[i].dot);
				}
			}
		}
	}

	prev() {
		const delay = 200;
		let index = this.#index;
		let step = 0;
		if (index > 0 && !this.#data[index].lock) {
			this.#data[index].lock = true;
			const interval = setInterval(() => {
				if (step >= 1) {
					clearInterval(interval);
					step = 1;
				}
				this.#data[index - 1].slide.style.left = (100 * (step - 1)) + "%";
				this.#data[index].slide.style.left = (100 * step) + "%";
				if (step == 1) {
					this.#index = index - 1;
					if (this.#htmlElements.dots instanceof HTMLElement) {
						this.#data[index].dot.classList.remove("selected");
						this.#data[index - 1].dot.classList.add("selected");
					}
					if (typeof (this.#properties.onChange) == "function") {
						this.#properties.onChange(this.#index);
					}
					this.#data[index].lock = false;
				}
				step += .1;
			}, delay / 10);
		}
	}

	next() {
		const delay = 200;
		let index = this.#index;
		let step = 0;
		if (index < this.#data.length - 1 && !this.#data[index].lock) {
			this.#data[index].lock = true;
			const interval = setInterval(() => {
				if (step >= 1) {
					clearInterval(interval);
					step = 1;
				}
				this.#data[index].slide.style.left = (100 * (-step)) + "%";
				this.#data[index + 1].slide.style.left = (100 * (1 - step)) + "%";
				if (step == 1) {
					this.#index = index + 1;
					if (this.#htmlElements.dots instanceof HTMLElement) {
						this.#data[index].dot.classList.remove("selected");
						this.#data[index + 1].dot.classList.add("selected");
					}
					if (typeof (this.#properties.onChange) == "function") {
						this.#properties.onChange(this.#index);
					}
					this.#data[index].lock = false;
				}
				step += .1;
			}, delay / 10);
		}
	}

	go(index) {
		if (index < this.#data.length && index != this.#index) {
			if (index < this.#index) {
				for (let i = this.#index; i > index; i--) {
					this.#data[i].slide.style.left = "100%";
				}
			} else if (index > this.#index) {
				for (let i = this.#index; i < index; i++) {
					this.#data[i].slide.style.left = "-100%";
				}
			}
			this.#data[index].slide.style.left = "0%";
			if (this.#htmlElements.dots instanceof HTMLElement) {
				this.#data[this.#index].dot.classList.remove("selected");
				this.#data[index].dot.classList.add("selected");
			}
			this.#index = index;
		}
	}
}

/*
Generated HTML code:
<div class="wui-slider">
	<div class="body">
		<div class="slide"></div>
		<div class="slide"></div>
		<div class="slide"></div>
	</div>
	<div class="dots">
		<div></div>
		<div></div>
		<div></div>
	</div>
</div>
*/