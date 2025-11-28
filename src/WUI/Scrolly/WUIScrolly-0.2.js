/*
 * WUIScrolly - v0.2
 * Author: Sergio E. Belmar (sbelmar@wuijs.dev)
 * Copyright (c) Sergio E. Belmar (sbelmar@wuijs.dev)
 */

class WUIScrolly {

	static version = "0.2";
	static #defaults = {
		sections: [],
		behavior: "smooth",
		dataScrollY: "scrollY",
		dataDelay: "delay",
		onStart: null,
		onMove: null,
		onStop: null,
		debug: false
	};

	#sections;
	#behavior;
	#dataScrollY;
	#dataDelay;
	#onStart;
	#onMove;
	#onStop;
	#scrollY;
	#deltaY;
	#direction;
	#sceneIndex;
	#sceneStep;
	#sceneProgress;
	#debug;

	#bodyHeight;
	#screenHeight;
	#maxScrollTop;
	#moving;
	#truncated;
	#stop;
	#lock;

	static screenWidth = () => {
		return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	}

	static screenHeight = () => {
		return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	}

	static bodyHeight = () => {
		const html = document.documentElement;
		const body = document.body;
		return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	}

	constructor(properties) {
		const defaults = structuredClone(WUIScrolly.#defaults);
		Object.entries(defaults).forEach(([key, defValue]) => {
			this[key] = key in properties ? properties[key] : defValue;
		});
	}

	get sections() {
		return this.#sections;
	}

	get behavior() {
		return this.#behavior;
	}

	get dataScrollY() {
		return this.#dataScrollY;
	}

	get dataDelay() {
		return this.#dataDelay;
	}

	get onStart() {
		return this.#onStart;
	}

	get onMove() {
		return this.#onMove;
	}

	get onStop() {
		return this.#onStop;
	}

	get scrollY() {
		return this.#scrollY;
	}

	get deltaY() {
		return this.#deltaY;
	}

	get direction() {
		return this.#direction;
	}

	get sceneWidth() {
		return WUIScrolly.screenWidth();
	}

	get sceneHeight() {
		return WUIScrolly.screenHeight();
	}

	get sceneIndex() {
		return this.#sceneIndex;
	}

	get sceneStep() {
		return this.#sceneStep;
	}

	get sceneProgress() {
		return this.#sceneProgress;
	}

	get debug() {
		return this.#debug;
	}

	set sections(value) {
		if (Array.isArray(value)) {
			this.#sections = value;
		}
	}

	set behavior(value) {
		if (typeof (value) == "string" && value.match(/^(auto|smooth)$/i)) {
			this.#behavior = value.toLowerCase();
		}
	}

	set dataScrollY(value) {
		if (typeof (value) == "string") {
			this.#dataScrollY = value;
		}
	}

	set dataDelay(value) {
		if (typeof (value) == "string") {
			this.#dataDelay = value;
		}
	}

	set onStart(value) {
		if (typeof (value) == "function") {
			this.#onStart = value;
		}
	}

	set onMove(value) {
		if (typeof (value) == "function") {
			this.#onMove = value;
		}
	}

	set onStop(value) {
		if (typeof (value) == "function") {
			this.#onStop = value;
		}
	}

	set debug(value) {
		if (typeof (value) == "boolean") {
			this.#debug = value;
		}
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
		const onScrollCSS = () => {
			document.documentElement.dataset[this.#dataScrollY] = window.scrollY >= 0 ? window.scrollY : 0;
			document.querySelectorAll(".wui-scrolly-load:not(.loaded)").forEach(element => {
				const rect = element.getBoundingClientRect();
				if (rect.top < 0.75 * window.innerHeight) {
					if (typeof (element.dataset[this.#dataDelay]) != "undefined") {
						const dataDelay = element.dataset[this.#dataDelay] || 0;
						element.style.webkitTransitionDelay = dataDelay + "s";
						element.style.mozTransitionDelay = dataDelay + "s";
						element.style.transitionDelay = dataDelay + "s";
					}
					element.classList.add("loaded");
				}
			}, this);
		}
		const onScrollJS = (event) => {
			if (!this.#lock) {
				this.#direction = window.scrollY > this.#scrollY ? "down" : window.scrollY < this.#scrollY ? "up" : this.#direction;
				this.#scrollY = window.scrollY >= 0 ? window.scrollY : 0;
				if (!this.#moving) {
					this.#bodyHeight = WUIScrolly.bodyHeight();
					this.#screenHeight = WUIScrolly.screenHeight();
					this.#maxScrollTop = this.#bodyHeight - this.#screenHeight;
					this.#deltaY = 0;
					this.#moving = true;
					this.#truncated = false;
					if (typeof (this.#onStart) == "function") {
						this.#onStart(event);
					}
				}
				if (!this.#truncated && event.deltaY != 0) {
					this.#deltaY += event.deltaY;
					if (this.#sections.length > 0) {
						let y = 0;
						let i = 0;
						let s = 0;
						let p = 0;
						let h = 0;
						this.#sceneIndex = null;
						this.#sceneStep = 0;
						this.#sceneProgress = 0;
						for (i = 0; i < this.#sections.length; i++) {
							const section = this.#sections[i];
							let height = section.height;
							if (typeof (section.height) == "string") {
								if (section.height.match(/^\d+$/)) {
									height = parseInt(section.height);
								} else if (section.height.match(/^\d+%$/)) {
									height = this.#screenHeight * parseInt(section.height.replace("%", "")) / 100;
								} else if (section.height == "auto") {
									height = section._element.clientHeight || section._element.innerHeight;
								}
							} else if (typeof (section.height) == "undefined") {
								height = section._element.clientHeight || section._element.innerHeight;
							}
							if (this.#scrollY >= h && this.#scrollY < h + height - this.#screenHeight) {
								if (!section._element.classList.contains("static")) {
									section._scene.classList.add("fixed");
									if (section._paging) {
										section._paging.classList.add("fixed");
									}
								}
								this.#sceneIndex = i;
								y = this.#scrollY - h;
								p = y / (height - this.#screenHeight);
								break;
							} else if (this.#scrollY >= h + height - this.#screenHeight && this.#scrollY < h + height) {
								if (this.#scrollY >= h) {
									this.#sceneIndex = i;
									this.#sceneStep = null;
								}
								if (section._scene.classList.contains("fixed")) {
									section._scene.classList.remove("fixed");
									section._scene.style.top = "auto";
									section._scene.style.bottom = "0px";
									if (section._paging) {
										section._paging.classList.remove("fixed");
									}
								}
								if (i + 1 < this.#sections.length && this.#sections[i + 1]._scene.classList.contains("fixed")) {
									this.#sections[i + 1]._scene.classList.remove("fixed");
									this.#sections[i + 1]._scene.style.top = "0px";
									this.#sections[i + 1]._scene.style.bottom = "auto";
									if (this.#sections[i + 1]._paging) {
										this.#sections[i + 1]._paging.classList.remove("fixed");
									}
								}
								break;
							}
							h += height;
						}
						if (y > 0) {
							const steps = this.#sections[this.#sceneIndex].steps;
							for (s = 0; s < steps; s++) {
								if (p >= s / steps && p < (s + 1) / steps) {
									this.#sceneStep = s;
									this.#sceneProgress = steps * p - s;
									break;
								}
							}
						} else if (this.#sceneIndex != null) {
							this.#sceneProgress = this.#deltaY > 0 ? 1 : 0;
						}
						if (this.#sceneIndex != null && typeof (this.#sections[this.#sceneIndex].animation) == "function" && !this.#lock) {
							this.#sections[this.#sceneIndex].animation(this.#sceneStep, this.#sceneProgress);
						}
						if (this.#debug) {
							console.log("WUIScrolly - scrolling > scrollY:", this.#scrollY, "y:", y, "index:", this.#sceneIndex, "step:", this.#sceneStep, "progress:", this.#sceneProgress);
						}
					}
					if (typeof (this.#onMove) == "function") {
						this.#onMove(this.#sceneIndex, this.#sceneStep, this.#sceneProgress);
					}
				}
				if (this.#stop) {
					clearTimeout(this.#stop);
				}
				this.#stop = setTimeout(() => {
					this.#moving = false;
					if (typeof (this.#onStop) == "function") {
						this.#onStop(event);
					}
					if (this.#truncated) {
						this.#truncated = false;
						event.stopPropagation();
						event.stopImmediatePropagation();
						event.preventDefault();
					}
				}, 100);
			}
		};
		this.#bodyHeight = WUIScrolly.bodyHeight();
		this.#screenHeight = WUIScrolly.screenHeight();
		this.#maxScrollTop = this.#bodyHeight - this.#screenHeight;
		this.#scrollY = window.scrollY >= 0 ? window.scrollY : 0;
		this.#deltaY = 0;
		this.#direction = null;
		this.#moving = false;
		this.#truncated = false;
		this.#stop = null;
		this.#lock = false;
		this.#sections.forEach((section, i) => {
			if (typeof (section.selector) == "string" && section.selector != "") {
				let height = section.height;
				this.#sections[i]._element = document.querySelector(section.selector);
				this.#sections[i]._scene = this.#sections[i]._element.querySelector(".scene");
				this.#sections[i]._paging = this.#sections[i]._element.querySelector(".paging");
				if (typeof (section.height) == "string" && section.height.match(/^\d+$/)) {
					height = parseInt(section.height);
				}
				this.#sections[i]._element.style.height = typeof (height) == "number" ? height + "px" : height;
				if (this.#debug) {
					console.log("WUIScrolly - init section > selector:", section.selector, "height:", height);
				}
				if (typeof (section.type) == "string" && section.type == "static") {
					this.#sections[i]._element.classList.add("static");
				}
				if (this.#sections[i]._paging && typeof (section.pages) == "number" && section.pages > 0) {
					for (let j = 0; j < section.pages; j++) {
						const child = document.createElement("div");
						this.#sections[i]._paging.appendChild(child);
					}
				}
			}
		}, this);
		document.documentElement.dataset[this.#dataScrollY] = window.scrollY >= 0 ? window.scrollY : 0;
		["scroll", "touchmove"].forEach(type => {
			document.addEventListener(type, debounce(onScrollCSS), { passive: true });
			if (this.#sections.length > 0 || (typeof (this.#onStart) == "function" || typeof (this.#onMove) == "function" || typeof (this.#onStop) == "function")) {
				this.#sceneIndex = null;
				this.#sceneStep = null;
				this.#sceneProgress = null;
				document.addEventListener(type, debounce(onScrollJS), { passive: false });
			}
		}, this);
	}

	stop() {
		this.#truncated = true;
	}

	addSection(options) {
		if (typeof (options) == "object") {
			this.#sections.push(options);
		}
	}

	goSection(target, done, behavior = this.#behavior) {
		const prepareAnimation = (i, sense = "start") => {
			const section = this.#sections[i];
			if (typeof (section.animation) == "function") {
				if (sense == "start" || sense == "backward") {
					section._scene.classList.remove("fixed");
					section._scene.style.top = "0px";
					section._scene.style.bottom = "auto";
					this.#sceneStep = 0;
					this.#sceneProgress = 0;
				} else if (sense == "forward") {
					section._scene.classList.remove("fixed");
					section._scene.style.top = "auto";
					section._scene.style.bottom = "0px";
					this.#sceneStep = section.steps - 1;
					this.#sceneProgress = 1;
				}
				if (sense.match(/^(start|forward|backward)$/)) {
					if (this.#debug) {
						console.log("WUIScrolly - go section prepare animation > index:", i, ", sense:", sense, ", step:", this.#sceneStep, "progress:", this.#sceneProgress);
					}
					section.animation(this.#sceneStep, this.#sceneProgress);
				}
			}
		}
		let top = -1;
		let iniIndex = this.#sceneIndex || 0;
		let endIndex = this.#sceneIndex || 0;
		let scrolling = null;
		this.#bodyHeight = WUIScrolly.bodyHeight();
		this.#screenHeight = WUIScrolly.screenHeight();
		this.#maxScrollTop = this.#bodyHeight - this.#screenHeight;
		this.#sceneIndex = null;
		this.#sceneStep = null;
		this.#sceneProgress = null;
		if (!this.#lock) {
			this.#lock = true;
			this.#sections.every((section, i) => {
				if ((typeof (target) == "number" && i == target) || (typeof (target) == "string" && (section.target == target || section.selector == target))) {
					this.#sceneIndex = i;
					endIndex = i;
					prepareAnimation(i);
					return false;
				} else {
					let height = section.height;
					if (typeof (section.height) == "string") {
						if (section.height.match(/^\d+$/)) {
							height = parseInt(section.height);
						} else if (section.height.match(/^\d+%$/)) {
							height = this.#screenHeight * parseInt(section.height.replace("%", "")) / 100;
						} else if (section.height == "auto") {
							height = section._element.clientHeight || section._element.innerHeight;
						}
					} else if (typeof (section.height) == "undefined") {
						height = section._element.clientHeight || section._element.innerHeight;
					}
					top += height;
					return true;
				}
			});
			if (top > this.#maxScrollTop) {
				top = this.#maxScrollTop;
			}
			this.#deltaY = window.scrollY - top;
			if (behavior == "auto") {
				this.#sections[this.#sceneIndex]._element.scrollIntoView();
			} else if (behavior == "smooth") {
				window.scroll({
					top: top,
					left: 0,
					behavior: behavior
				});
			}
			scrolling = setInterval(() => {
				if (top < 0 || top == window.scrollY) {
					if (this.#debug) {
						console.log("WUIScrolly - go section stop > top:", top, "deltaY:", this.#deltaY);
					}
					clearInterval(scrolling);
					if (iniIndex != endIndex) {
						if (iniIndex < endIndex) {
							for (let i = iniIndex; i < endIndex; i++) {
								prepareAnimation(i, "forward");
							}
						} else if (iniIndex > endIndex) {
							for (let i = iniIndex; i > endIndex; i--) {
								prepareAnimation(i, "backward");
							}
						}
					}
					this.#scrollY = top;
					this.#lock = false;
					if (typeof (this.#onMove) == "function") {
						this.#onMove(this.#sceneIndex, this.#sceneStep, this.#sceneProgress);
					}
					if (typeof (done) == "function") {
						done();
					}
				}
			}, 100);
		}
	}

	selectPage(sectionIndex, pageIndex) {
		if (this.#sections.length > 0 && this.#sections[sectionIndex]._paging) {
			if (this.#sections[sectionIndex]._paging.querySelector(".selected")) {
				this.#sections[sectionIndex]._paging.querySelector(".selected").classList.remove("selected");
			}
			this.#sections[sectionIndex]._paging.childNodes.item(pageIndex).classList.add("selected");
		}
	}

	drawCenter(color = "#000") {
		const center = document.createElement("div");
		const body = document.body;
		center.style.position = "fixed";
		center.style.zIndex = 1000;
		center.style.top = "50%";
		center.style.left = "50%";
		["h", "v"].forEach(o => {
			const axis = document.createElement("div");
			axis.style.position = "absolute";
			axis.style.width = (o == "h" ? 20 : 1) + "px";
			axis.style.height = (o == "v" ? 20 : 1) + "px";
			axis.style["margin" + (o == "v" ? "Top" : "Left")] = "-10px";
			axis.style.backgroundColor = color;
			center.appendChild(axis);
		});
		body.appendChild(center);
	}

	drawRuler(color = "#000") {
		const ruler = document.createElement("div");
		ruler.style.position = "absolute";
		ruler.style.zIndex = 1000;
		ruler.style.top = "0px";
		ruler.style.left = "0px";
		for (let h = 0; h < this.#bodyHeight; h += 100) {
			const line = document.createElement("div");
			line.style.position = "absolute";
			line.style.top = h + "px";
			line.style.borderTop = "1px solid " + color;
			line.style.opacity = 1;
			line.style.color = color;
			line.innerHTML = h;
			ruler.appendChild(line);
		}
		document.documentElement.appendChild(ruler);
	}
}