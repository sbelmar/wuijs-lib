/*
 * WUIScrolly - v0.1
 * Author: Sergio E. Belmar (sbelmar@wuijs.dev)
 * Copyright (c) Sergio E. Belmar (sbelmar@wuijs.dev)
 */

class WUIScrolly {

	static version = "0.1";
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

	constructor (properties) {
		Object.keys(WUIScrolly.#defaults).forEach(prop => {
			this[prop] = typeof(properties) != "undefined" && prop in properties ? properties[prop] : prop in WUIScrolly.#defaults ? WUIScrolly.#defaults[prop] : null;
		});
	}

	get sections() {
		return this._sections;
	}

	get behavior() {
		return this._behavior;
	}

	get dataScrollY() {
		return this._dataScrollY;
	}

	get dataDelay() {
		return this._dataDelay;
	}

	get onStart() {
		return this._onStart;
	}

	get onMove() {
		return this._onMove;
	}

	get onStop() {
		return this._onStop;
	}

	get scrollY() {
		return this._scrollY;
	}

	get direction() {
		return this._direction;
	}

	get deltaY() {
		return this._deltaY;
	}

	get sceneWidth() {
		return WUIScrolly.screenWidth();
	}

	get sceneHeight() {
		return WUIScrolly.screenHeight();
	}

	get sceneIndex() {
		return this._sceneIndex;
	}

	get sceneStep() {
		return this._sceneStep;
	}

	get sceneProgress() {
		return this._sceneProgress;
	}

	get debug() {
		return this._debug;
	}

	set sections(value) {
		if (Array.isArray(value)) {
			this._sections = value;
		}
	}

	set behavior(value) {
		if (typeof(value) == "string" && value.match(/^(auto|smooth)$/i)) {
			this._behavior = value.toLowerCase();
		}
	}

	set dataScrollY(value) {
		if (typeof(value) == "string") {
			this._dataScrollY = value;
		}
	}

	set dataDelay(value) {
		if (typeof(value) == "string") {
			this._dataDelay = value;
		}
	}

	set onStart(value) {
		if (typeof(value) == "function") {
			this._onStart = value;
		}
	}

	set onMove(value) {
		if (typeof(value) == "function") {
			this._onMove = value;
		}
	}

	set onStop(value) {
		if (typeof(value) == "function") {
			this._onStop = value;
		}
	}

	set debug(value) {
		if (typeof(value) == "boolean") {
			this._debug = value;
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
			document.documentElement.dataset[this._dataScrollY] = window.scrollY >= 0 ? window.scrollY : 0;
			document.querySelectorAll(".wui-scrolly-load:not(.loaded)").forEach(element => {
				const rect = element.getBoundingClientRect();
				if (rect.top < 0.75 * window.innerHeight) {
					if (typeof(element.dataset[this._dataDelay]) != "undefined") {
						const dataDelay = element.dataset[this._dataDelay] || 0;
						element.style.webkitTransitionDelay = dataDelay+"s";
						element.style.mozTransitionDelay = dataDelay+"s";
						element.style.transitionDelay = dataDelay+"s";
					}
					element.classList.add("loaded");
				}
			}, this);
		}
		const onScrollJS = (event) => {
			if (!this._lock) {
				this._scrollY = window.scrollY >= 0 ? window.scrollY : 0;
				this._direction = event.deltaY > 0 ? "down" : (event.deltaY < 0 ? "up" : this._direction);
				if (!this._moving) {
					this._bodyHeight = WUIScrolly.bodyHeight();
					this._screenHeight = WUIScrolly.screenHeight();
					this._maxScrollTop = this._bodyHeight - this._screenHeight;		
					this._deltaY = 0;
					this._moving = true;
					this._truncated = false;
					if (typeof(this._onStart) == "function") {
						this._onStart(event);
					}
				}
				if (!this._truncated && event.deltaY != 0) {
					this._deltaY += event.deltaY;
					if (this._sections.length > 0) {
						let y = 0;
						let i = 0;
						let s = 0;
						let p = 0;
						let h = 0;
						this._sceneIndex = null;
						this._sceneStep = 0;
						this._sceneProgress = 0;
						for (i = 0; i < this._sections.length; i++) {
							const section = this._sections[i];
							let height = section.height;
							if (typeof(section.height) == "string") {
								if (section.height.match(/^\d+$/)) {
									height = parseInt(section.height);
								} else if (section.height.match(/^\d+%$/)) {
									height = this._screenHeight * parseInt(section.height.replace("%", ""))/100;
								} else if (section.height == "auto") {
									height = section._element.clientHeight || section._element.innerHeight;
								}
							} else if (typeof(section.height) == "undefined") {
								height = section._element.clientHeight || section._element.innerHeight;
							}
							if (this._scrollY >= h && this._scrollY < h +height -this._screenHeight) {
								if (!section._element.classList.contains("static")) {
									section._scene.classList.add("fixed");
									if (section._paging) {
										section._paging.classList.add("fixed");
									}
								}
								this._sceneIndex = i;
								y = this._scrollY -h;
								p = y/(height -this._screenHeight);
								break;
							} else if (this._scrollY >= h +height -this._screenHeight && this._scrollY < h +height) {
								if (this._scrollY >= h) {
									this._sceneIndex = i;
									this._sceneStep = null;
								}
								if (section._scene.classList.contains("fixed")) {
									section._scene.classList.remove("fixed");
									section._scene.style.top = "auto";
									section._scene.style.bottom = "0px";
									if (section._paging) {
										section._paging.classList.remove("fixed");
									}
								}
								if (i +1 < this._sections.length && this._sections[i +1]._scene.classList.contains("fixed")) {
									this._sections[i +1]._scene.classList.remove("fixed");
									this._sections[i +1]._scene.style.top = "0px";
									this._sections[i +1]._scene.style.bottom = "auto";
									if (this._sections[i +1]._paging) {
										this._sections[i +1]._paging.classList.remove("fixed");
									}
								}
								break;
							}
							h += height;
						}
						if (y > 0) {
							const steps = this._sections[this._sceneIndex].steps +1;
							for (s = 0; s < steps; s++) {
								if (p >= s/steps && p < (s +1)/steps) {
									this._sceneStep = s;
									this._sceneProgress = steps*p -s;
									break;
								}
							}
						} else if (this._sceneIndex != null) {
							this._sceneProgress = this._deltaY > 0 ? 1 : 0;
						}
						if (this._sceneIndex != null && typeof(this._sections[this._sceneIndex].animation) == "function" && !this._lock) {
							this._sections[this._sceneIndex].animation(this._sceneStep, this._sceneProgress);
						}
						if (this._debug) {
							console.log("scrolling > scrollY:", this._scrollY, "y:", y, "index:", this._sceneIndex, "step:", this._sceneStep, "progress:", this._sceneProgress);
						}
					}
					if (typeof(this._onMove) == "function") {
						this._onMove(event);
					}
				}
				if (this._stop) {
					clearTimeout(this._stop);
				}
				this._stop = setTimeout(() => {
					this._moving = false;
					if (typeof(this._onStop) == "function") {
						this._onStop(event);
					}
					if (this._truncated) {
						this._truncated = false;
						event.stopPropagation();
						event.stopImmediatePropagation();
						event.preventDefault();
					}
				}, 100);
			}
		};
		this._bodyHeight = WUIScrolly.bodyHeight();
		this._screenHeight = WUIScrolly.screenHeight();
		this._maxScrollTop = this._bodyHeight - this._screenHeight;
		this._scrollY = window.scrollY >= 0 ? window.scrollY : 0;
		this._direction = null;
		this._deltaY = 0;
		this._moving = false;
		this._truncated = false;
		this._stop = null;
		this._lock = false;
		this._sections.forEach((section, i) => {
			if (typeof(section.selector) == "string" && section.selector != "") {
				let height = section.height;
				this._sections[i]._element = document.querySelector(section.selector);
				this._sections[i]._scene = this._sections[i]._element.querySelector(".scene");
				this._sections[i]._paging = this._sections[i]._element.querySelector(".paging");
				if (typeof(section.height) == "string" && section.height.match(/^\d+$/)) {
					height = parseInt(section.height);
				}
				this._sections[i]._element.style.height = typeof(height) == "number" ? height+"px" : height;
				if (this._debug) {
					console.log("init section > selector:", section.selector, "height:", height);
				}
				if (typeof(section.type) == "string" && section.type == "static") {
					this._sections[i]._element.classList.add("static");
				}
				if (this._sections[i]._paging && typeof(section.pages) == "number" && section.pages > 0) {
					for (let j = 0; j < section.pages; j++) {
						const child = document.createElement("div");
						this._sections[i]._paging.appendChild(child);
					}
				}
			}
		}, this);
		document.documentElement.dataset[this._dataScrollY] = window.scrollY >= 0 ? window.scrollY : 0;
		["scroll", "touchmove"].forEach(type => {
			document.addEventListener(type, debounce(onScrollCSS), {passive: true});
			if (this._sections.length > 0 || (typeof(this._onStart) == "function" || typeof(this._onMove) == "function" || typeof(this._onStop) == "function")) {
				this._sceneIndex = null;
				this._sceneStep = null;
				this._sceneProgress = null;
				document.addEventListener(type, debounce(onScrollJS), {passive: false});
			}
		}, this);
	}

	stop() {
		this._truncated = true;
	}

	addSection(options) {
		if (typeof(options) == "object") {
			this._sections.push(options);
		}
	}

	goSection(target, done, behavior = this._behavior) {
		const prepareAnimation = (i, sense = "start") => {
			const section = this._sections[i];
			if (typeof(section.animation) == "function") {
				if (sense == "start" || sense == "backward") {
					section._scene.classList.remove("fixed");
					section._scene.style.top = "0px";
					section._scene.style.bottom = "auto";
					this._sceneStep = 0;
					this._sceneProgress = 0;
				} else if (sense == "forward") {
					section._scene.classList.remove("fixed");
					section._scene.style.top = "auto";
					section._scene.style.bottom = "0px";
					this._sceneStep = section.steps;
					this._sceneProgress = 1;
				}
				if (sense.match(/^(start|forward|backward)$/)) {
					if (this._debug) {
						console.log("go section prepare animation > index:", i, ", sense:", sense, ", step:", this._sceneStep, "progress:", this._sceneProgress);
					}
					section.animation(this._sceneStep, this._sceneProgress);
				}
			}
		}
		let top = -1;
		let iniIndex = this._sceneIndex || 0;
		let endIndex = this._sceneIndex || 0;
		let scrolling = null;
		this._bodyHeight = WUIScrolly.bodyHeight();
		this._screenHeight = WUIScrolly.screenHeight();
		this._maxScrollTop = this._bodyHeight - this._screenHeight;
		this._sceneIndex = null;
		this._sceneStep = null;
		this._sceneProgress = null;
		if (!this._lock) {
			this._lock = true;
			this._sections.every((section, i) => {
				if ((typeof(target) == "number" && i == target) || (typeof(target) == "string" && (section.target == target || section.selector == target))) {
					this._sceneIndex = i;
					endIndex = i;
					prepareAnimation(i);
					return false;
				} else {
					let height = section.height;
					if (typeof(section.height) == "string") {
						if (section.height.match(/^\d+$/)) {
							height = parseInt(section.height);
						} else if (section.height.match(/^\d+%$/)) {
							height = this._screenHeight * parseInt(section.height.replace("%", ""))/100;
						} else if (section.height == "auto") {
							height = section._element.clientHeight || section._element.innerHeight;
						}
					} else if (typeof(section.height) == "undefined") {
						height = section._element.clientHeight || section._element.innerHeight;
					}
					top += height;
					return true;
				}
			});
			if (top > this._maxScrollTop) {
				top = this._maxScrollTop;
			}
			this._deltaY = window.scrollY - top;
			if (behavior == "auto") {
				this._sections[this._sceneIndex]._element.scrollIntoView();
			} else if (behavior == "smooth") {
				window.scroll({
					top: top,
					left: 0,
					behavior: behavior
				});
			}
			scrolling = setInterval(() => {
				if (top < 0 || top == window.scrollY) {
					if (this._debug) {
						console.log("go section stop > top:", top, "deltaY:", this._deltaY);
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
					this._scrollY = top;
					this._lock = false;
					if (typeof(this._onMove) == "function") {
						this._onMove();
					}
					if (typeof(done) == "function") {
						done();
					}
				}
			}, 100);
		}
	}

	selectPage(sectionIndex, pageIndex) {
		if (this._sections.length > 0 && this._sections[sectionIndex]._paging) {
			if (this._sections[sectionIndex]._paging.querySelector(".selected")) {
				this._sections[sectionIndex]._paging.querySelector(".selected").classList.remove("selected");
			}
			this._sections[sectionIndex]._paging.childNodes.item(pageIndex).classList.add("selected");
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
			axis.style.width = (o == "h" ? 20 : 1)+"px";
			axis.style.height = (o == "v" ? 20 : 1)+"px";
			axis.style["margin"+(o == "v" ? "Top" : "Left")] = "-10px";
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
		for (let h = 0; h < this._bodyHeight; h += 100) {
			const line = document.createElement("div");
			line.style.position = "absolute";
			line.style.top = h+"px";
			line.style.borderTop = "1px solid "+color;
			line.style.opacity = 1;
			line.style.color = color;
			line.innerHTML = h;
			ruler.appendChild(line);
		}
		document.documentElement.appendChild(ruler);
	}
}