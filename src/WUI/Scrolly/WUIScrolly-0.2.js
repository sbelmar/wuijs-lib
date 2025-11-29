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

	#properties = {
		sections: null,
		behavior: null,
		dataScrollY: null,
		dataDelay: null,
		onStart: null,
		onMove: null,
		onStop: null,
		debug: null
	};
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
		return this.#properties.sections;
	}

	get behavior() {
		return this.#properties.behavior;
	}

	get dataScrollY() {
		return this.#properties.dataScrollY;
	}

	get dataDelay() {
		return this.#properties.dataDelay;
	}

	get onStart() {
		return this.#properties.onStart;
	}

	get onMove() {
		return this.#properties.onMove;
	}

	get onStop() {
		return this.#properties.onStop;
	}

	get scrollY() {
		return this.#properties.scrollY;
	}

	get deltaY() {
		return this.#properties.deltaY;
	}

	get direction() {
		return this.#properties.direction;
	}

	get sceneWidth() {
		return WUIScrolly.screenWidth();
	}

	get sceneHeight() {
		return WUIScrolly.screenHeight();
	}

	get sceneIndex() {
		return this.#properties.sceneIndex;
	}

	get sceneStep() {
		return this.#properties.sceneStep;
	}

	get sceneProgress() {
		return this.#properties.sceneProgress;
	}

	get debug() {
		return this.#properties.debug;
	}

	set sections(value) {
		if (Array.isArray(value)) {
			this.#properties.sections = value;
		}
	}

	set behavior(value) {
		if (typeof (value) == "string" && value.match(/^(auto|smooth)$/i)) {
			this.#properties.behavior = value.toLowerCase();
		}
	}

	set dataScrollY(value) {
		if (typeof (value) == "string") {
			this.#properties.dataScrollY = value;
		}
	}

	set dataDelay(value) {
		if (typeof (value) == "string") {
			this.#properties.dataDelay = value;
		}
	}

	set onStart(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onStart = value;
		}
	}

	set onMove(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onMove = value;
		}
	}

	set onStop(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onStop = value;
		}
	}

	set debug(value) {
		if (typeof (value) == "boolean") {
			this.#properties.debug = value;
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
			document.documentElement.dataset[this.#properties.dataScrollY] = window.scrollY >= 0 ? window.scrollY : 0;
			document.querySelectorAll(".wui-scrolly-load:not(.loaded)").forEach(element => {
				const rect = element.getBoundingClientRect();
				if (rect.top < 0.75 * window.innerHeight) {
					if (typeof (element.dataset[this.#properties.dataDelay]) != "undefined") {
						const dataDelay = element.dataset[this.#properties.dataDelay] || 0;
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
				this.#properties.direction = window.scrollY > this.#properties.scrollY ? "down" : window.scrollY < this.#properties.scrollY ? "up" : this.#properties.direction;
				this.#properties.scrollY = window.scrollY >= 0 ? window.scrollY : 0;
				if (!this.#moving) {
					this.#bodyHeight = WUIScrolly.bodyHeight();
					this.#screenHeight = WUIScrolly.screenHeight();
					this.#maxScrollTop = this.#bodyHeight - this.#screenHeight;
					this.#properties.deltaY = 0;
					this.#moving = true;
					this.#truncated = false;
					if (typeof (this.#properties.onStart) == "function") {
						this.#properties.onStart(event);
					}
				}
				if (!this.#truncated && event.deltaY != 0) {
					this.#properties.deltaY += event.deltaY;
					if (this.#properties.sections.length > 0) {
						let y = 0;
						let i = 0;
						let s = 0;
						let p = 0;
						let h = 0;
						this.#properties.sceneIndex = null;
						this.#properties.sceneStep = 0;
						this.#properties.sceneProgress = 0;
						for (i = 0; i < this.#properties.sections.length; i++) {
							const section = this.#properties.sections[i];
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
							if (this.#properties.scrollY >= h && this.#properties.scrollY < h + height - this.#screenHeight) {
								if (!section._element.classList.contains("static")) {
									section._scene.classList.add("fixed");
									if (section._paging) {
										section._paging.classList.add("fixed");
									}
								}
								this.#properties.sceneIndex = i;
								y = this.#properties.scrollY - h;
								p = y / (height - this.#screenHeight);
								break;
							} else if (this.#properties.scrollY >= h + height - this.#screenHeight && this.#properties.scrollY < h + height) {
								if (this.#properties.scrollY >= h) {
									this.#properties.sceneIndex = i;
									this.#properties.sceneStep = null;
								}
								if (section._scene.classList.contains("fixed")) {
									section._scene.classList.remove("fixed");
									section._scene.style.top = "auto";
									section._scene.style.bottom = "0px";
									if (section._paging) {
										section._paging.classList.remove("fixed");
									}
								}
								if (i + 1 < this.#properties.sections.length && this.#properties.sections[i + 1]._scene.classList.contains("fixed")) {
									this.#properties.sections[i + 1]._scene.classList.remove("fixed");
									this.#properties.sections[i + 1]._scene.style.top = "0px";
									this.#properties.sections[i + 1]._scene.style.bottom = "auto";
									if (this.#properties.sections[i + 1]._paging) {
										this.#properties.sections[i + 1]._paging.classList.remove("fixed");
									}
								}
								break;
							}
							h += height;
						}
						if (y > 0) {
							const steps = this.#properties.sections[this.#properties.sceneIndex].steps;
							for (s = 0; s < steps; s++) {
								if (p >= s / steps && p < (s + 1) / steps) {
									this.#properties.sceneStep = s;
									this.#properties.sceneProgress = steps * p - s;
									break;
								}
							}
						} else if (this.#properties.sceneIndex != null) {
							this.#properties.sceneProgress = this.#properties.deltaY > 0 ? 1 : 0;
						}
						if (this.#properties.sceneIndex != null && typeof (this.#properties.sections[this.#properties.sceneIndex].animation) == "function" && !this.#lock) {
							this.#properties.sections[this.#properties.sceneIndex].animation(this.#properties.sceneStep, this.#properties.sceneProgress);
						}
						if (this.#properties.debug) {
							console.log("WUIScrolly - scrolling > scrollY:", this.#properties.scrollY, "y:", y, "index:", this.#properties.sceneIndex, "step:", this.#properties.sceneStep, "progress:", this.#properties.sceneProgress);
						}
					}
					if (typeof (this.#properties.onMove) == "function") {
						this.#properties.onMove(this.#properties.sceneIndex, this.#properties.sceneStep, this.#properties.sceneProgress);
					}
				}
				if (this.#stop) {
					clearTimeout(this.#stop);
				}
				this.#stop = setTimeout(() => {
					this.#moving = false;
					if (typeof (this.#properties.onStop) == "function") {
						this.#properties.onStop(event);
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
		this.#properties.scrollY = window.scrollY >= 0 ? window.scrollY : 0;
		this.#properties.deltaY = 0;
		this.#properties.direction = null;
		this.#moving = false;
		this.#truncated = false;
		this.#stop = null;
		this.#lock = false;
		this.#properties.sections.forEach((section, i) => {
			if (typeof (section.selector) == "string" && section.selector != "") {
				let height = section.height;
				this.#properties.sections[i]._element = document.querySelector(section.selector);
				this.#properties.sections[i]._scene = this.#properties.sections[i]._element.querySelector(".scene");
				this.#properties.sections[i]._paging = this.#properties.sections[i]._element.querySelector(".paging");
				if (typeof (section.height) == "string" && section.height.match(/^\d+$/)) {
					height = parseInt(section.height);
				}
				this.#properties.sections[i]._element.style.height = typeof (height) == "number" ? height + "px" : height;
				if (this.#properties.debug) {
					console.log("WUIScrolly - init section > selector:", section.selector, "height:", height);
				}
				if (typeof (section.type) == "string" && section.type == "static") {
					this.#properties.sections[i]._element.classList.add("static");
				}
				if (this.#properties.sections[i]._paging && typeof (section.pages) == "number" && section.pages > 0) {
					for (let j = 0; j < section.pages; j++) {
						const child = document.createElement("div");
						this.#properties.sections[i]._paging.appendChild(child);
					}
				}
			}
		}, this);
		document.documentElement.dataset[this.#properties.dataScrollY] = window.scrollY >= 0 ? window.scrollY : 0;
		["scroll", "touchmove"].forEach(type => {
			document.addEventListener(type, debounce(onScrollCSS), { passive: true });
			if (this.#properties.sections.length > 0 || (typeof (this.#properties.onStart) == "function" || typeof (this.#properties.onMove) == "function" || typeof (this.#properties.onStop) == "function")) {
				this.#properties.sceneIndex = null;
				this.#properties.sceneStep = null;
				this.#properties.sceneProgress = null;
				document.addEventListener(type, debounce(onScrollJS), { passive: false });
			}
		}, this);
	}

	stop() {
		this.#truncated = true;
	}

	addSection(options) {
		if (typeof (options) == "object") {
			this.#properties.sections.push(options);
		}
	}

	goSection(target, done, behavior = this.#properties.behavior) {
		const prepareAnimation = (i, sense = "start") => {
			const section = this.#properties.sections[i];
			if (typeof (section.animation) == "function") {
				if (sense == "start" || sense == "backward") {
					section._scene.classList.remove("fixed");
					section._scene.style.top = "0px";
					section._scene.style.bottom = "auto";
					this.#properties.sceneStep = 0;
					this.#properties.sceneProgress = 0;
				} else if (sense == "forward") {
					section._scene.classList.remove("fixed");
					section._scene.style.top = "auto";
					section._scene.style.bottom = "0px";
					this.#properties.sceneStep = section.steps - 1;
					this.#properties.sceneProgress = 1;
				}
				if (sense.match(/^(start|forward|backward)$/)) {
					if (this.#properties.debug) {
						console.log("WUIScrolly - go section prepare animation > index:", i, ", sense:", sense, ", step:", this.#properties.sceneStep, "progress:", this.#properties.sceneProgress);
					}
					section.animation(this.#properties.sceneStep, this.#properties.sceneProgress);
				}
			}
		}
		let top = -1;
		let iniIndex = this.#properties.sceneIndex || 0;
		let endIndex = this.#properties.sceneIndex || 0;
		let scrolling = null;
		this.#bodyHeight = WUIScrolly.bodyHeight();
		this.#screenHeight = WUIScrolly.screenHeight();
		this.#maxScrollTop = this.#bodyHeight - this.#screenHeight;
		this.#properties.sceneIndex = null;
		this.#properties.sceneStep = null;
		this.#properties.sceneProgress = null;
		if (!this.#lock) {
			this.#lock = true;
			this.#properties.sections.every((section, i) => {
				if ((typeof (target) == "number" && i == target) || (typeof (target) == "string" && (section.target == target || section.selector == target))) {
					this.#properties.sceneIndex = i;
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
			this.#properties.deltaY = window.scrollY - top;
			if (behavior == "auto") {
				this.#properties.sections[this.#properties.sceneIndex]._element.scrollIntoView();
			} else if (behavior == "smooth") {
				window.scroll({
					top: top,
					left: 0,
					behavior: behavior
				});
			}
			scrolling = setInterval(() => {
				if (top < 0 || top == window.scrollY) {
					if (this.#properties.debug) {
						console.log("WUIScrolly - go section stop > top:", top, "deltaY:", this.#properties.deltaY);
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
					this.#properties.scrollY = top;
					this.#lock = false;
					if (typeof (this.#properties.onMove) == "function") {
						this.#properties.onMove(this.#properties.sceneIndex, this.#properties.sceneStep, this.#properties.sceneProgress);
					}
					if (typeof (done) == "function") {
						done();
					}
				}
			}, 100);
		}
	}

	selectPage(sectionIndex, pageIndex) {
		if (this.#properties.sections.length > 0 && this.#properties.sections[sectionIndex]._paging) {
			if (this.#properties.sections[sectionIndex]._paging.querySelector(".selected")) {
				this.#properties.sections[sectionIndex]._paging.querySelector(".selected").classList.remove("selected");
			}
			this.#properties.sections[sectionIndex]._paging.childNodes.item(pageIndex).classList.add("selected");
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