/*
 * WUIModal - v0.1
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIModal {

	static version = "0.1";
	static #defaults = {
		selector: "",
		openDelay: 200,
		onStartOpen: null,
		onOpen: null,
		onMaximize: null,
		onScrolling: null,
		onStartClose: null,
		onClose: null,
		onBack: null
	};
	static #instances = [];

	static _initClass() {
		window.addEventListener("resize", () => {
			WUIModal.getOpenInstances().forEach(modal => {
				modal.resposive();
			});
		});
		document.addEventListener("keydown", event => {
			if (event.key == "Escape") {
				WUIModal.getAllInstances().every(modal => {
					const classList = modal._element.classList;
					if (classList.contains("opened") && !classList.contains("under")) {
						setTimeout(() => {
							modal.close();
						}, 100);
						return false;
					}
					return true;
				});
			}
		});
	}

	static getAllInstances() {
		return WUIModal.#instances;
	}

	static getOpenInstances() {
		return WUIModal.#instances.filter(modal => modal.isOpen());
	}

	static closeAll(except) {
		WUIModal.getOpenInstances().forEach(modal => {
			if (modal.selector != except) {
				modal.close();
			}
		});
	}

	constructor(properties) {
		this.setProperties(properties);
		WUIModal.#instances.push(this);
	}

	get selector() {
		return this._selector;
	}

	get openDelay() {
		return this._openDelay;
	}

	get onStartOpen() {
		return this._onStartOpen;
	}

	get onOpen() {
		return this._onOpen;
	}

	get onMaximize() {
		return this._onMaximize;
	}

	get onScrolling() {
		return this._onScrolling;
	}

	get onStartClose() {
		return this._onStartClose;
	}

	get onClose() {
		return this._onClose;
	}

	get onBack() {
		return this._onBack;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
			this._box = document.querySelector(value + " > .box");
			this._header = document.querySelector(value + " > .box > .header");
			this._back = this._header ? document.querySelector(value + " > .box > .header > .back") : null;
			this._topbar = this._header ? document.querySelector(value + " > .box > .header > .topbar") : null;
			this._title = this._header ? document.querySelector(value + " > .box > .header > .title") : null;
			this._close = this._header ? document.querySelector(value + " > .box > .header > .close") : null;
			this._body = document.querySelector(value + " > .box > .body");
			this._footer = document.querySelector(value + " > .box > .footer");
		}
	}

	set openDelay(value) {
		if (typeof (value) == "number") {
			this._openDelay = value;
		}
	}

	set onStartOpen(value) {
		if (typeof (value) == "function") {
			this._onStartOpen = value;
		}
	}

	set onOpen(value) {
		if (typeof (value) == "function") {
			this._onOpen = value;
		}
	}

	set onMaximize(value) {
		if (typeof (value) == "function") {
			this._onMaximize = value;
		}
	}

	set onScrolling(value) {
		if (typeof (value) == "function") {
			this._onScrolling = value;
		}
	}

	set onStartClose(value) {
		if (typeof (value) == "function") {
			this._onStartClose = value;
		}
	}

	set onClose(value) {
		if (typeof (value) == "function") {
			this._onClose = value;
		}
	}

	set onBack(value) {
		if (typeof (value) == "function") {
			this._onBack = value;
		}
	}

	getElement() {
		return this._element;
	}

	getBox() {
		return this._box;
	}

	getHeader() {
		return this._header;
	}

	getBack() {
		return this._back;
	}

	getTopbar() {
		return this._topbar;
	}

	getTitle() {
		return this._title;
	}

	getClose() {
		return this._close;
	}

	getBody() {
		return this._body;
	}

	getFooter() {
		return this._footer;
	}

	getStatus() {
		let status = [];
		["opened", "maximized", "under", "close"].forEach(className => {
			if (this._element.classList.contains(className)) {
				status.push(className);
			}
		});
		return status.join(",");
	}

	setProperties(properties) {
		Object.keys(WUIModal.#defaults).forEach(prop => {
			this[prop] = typeof (properties) != "undefined" && prop in properties ? properties[prop] : prop in WUIModal.#defaults ? WUIModal.#defaults[prop] : null;
		});
	}

	setHeadBorder(border) {
		if (this._header != null) {
			if (border) {
				this._header.classList.remove("border");
			} else {
				this._header.classList.add("border");
			}
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
		this._bodyStyle = {};
		if (navigator.userAgent.match(/iphone|ipad|android/i) && navigator.maxTouchPoints > 1) {
			this._element.classList.add("mobile");
		}
		if (this._topbar != null) {
			this._drag = false;
			this._initY = null;
			this._direction = null;
			["touchstart", "mousedown"].forEach(type => {
				this._topbar.addEventListener(type, event => {
					if (!this._drag) {
						const initY = (event.type == "touchstart" ? event.touches[0].clientY : event.clientY || event.pageY) - event.target.offsetParent.offsetTop;
						this._initY = initY;
						this._drag = true;
					}
				});
			});
			["touchmove", "mousemove"].forEach(type => {
				this._topbar.addEventListener(type, event => {
					if (this._drag) {
						const initY = parseFloat(this._initY);
						const moveY = (event.type == "touchmove" ? event.touches[0].clientY : event.clientY || event.pageY) - event.target.offsetParent.offsetTop;
						const diffY = moveY - initY;
						const direction = diffY > 10 ? "bottom" : diffY < -10 ? "top" : null;
						this._direction = direction;
					}
				});
			});
			["touchend", "mouseup"].forEach(type => {
				document.addEventListener(type, () => {
					if (this._drag) {
						this._initY = null;
						this._drag = false;
						if (this._direction != null) {
							if (this._direction == "top") {
								this.maximize();
							} else if (this._direction == "bottom") {
								this.close();
							}
							setTimeout(() => {
								this._direction = null;
							}, 400);
						}
					}
				});
			});
		}
		if (this._back != null) {
			this._back.addEventListener("click", () => {
				if (typeof (this._onBack) == "function") {
					this._onBack();
				}
			});
		}
		if (this._close != null) {
			this._close.addEventListener("click", () => {
				this.close();
			});
		}
		if (this._box != null && this._body != null) {
			this._box.dataset.scrollBody = 0;
			if (this._body.classList.contains("scroll")) {
				["scroll", "touchmove"].forEach(type => {
					this._body.addEventListener(type, debounce(() => {
						let top = this._body.scrollTop;
						if (top < 0) {
							top = 0;
						}
						this._box.dataset.scrollBody = top;
						if (typeof (this._onScrolling) == "function") {
							this._onScrolling(top);
						}
					}), { passive: true });
				});
			}
		}
	}

	open(onOpen = this._onOpen, delay = this._openDelay) {
		const page = Boolean(this._element.classList.contains("page"));
		const slide = Boolean(this._element.classList.contains("slide"));
		const small = Boolean(this._element.classList.contains("small"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyHeight = document.body.offsetHeight;
		const bodyStyle = getComputedStyle(document.body);
		const bgcolor = getComputedStyle(this._element).getPropertyValue("--wui-modal-overlay-bgcolor").replace(/\s+/g, "").replace("rgba(", "").replace(")", "").split(",");
		const slideMargin = parseInt(getComputedStyle(this._element).getPropertyValue("--wui-modal-slidepage-box-margin").replace(/\D+/g, "") || 0);
		let under = null;
		let pages = 1;
		let step = delay > 0 ? 0 : 100;
		WUIModal.#instances.forEach(modal => {
			if (modal._element.classList.contains("opened") && !modal._element.classList.contains("under") && modal._selector != this._selector) {
				modal._element.classList.add("under");
				under = modal;
			}
			if (modal._element.classList.contains("opened") && modal._element.classList.contains("page") && modal._element.classList.contains("under")) {
				pages++;
			}
		});
		this._element.style.display = "flex";
		this._element.style.zIndex = 103 + pages;
		this._element.style.visibility = "hidden";
		this._element.style.opacity = 0;
		this._element.style.visibility = "visible";
		this._element.classList.remove("maximized");
		this._element.classList.remove("closed");
		this._element.classList.add("opened");
		if (this._box != null) {
			const boxStyle = getComputedStyle(this._box);
			const scrollbarWidth = window.innerWidth - document.body.clientWidth;
			const scrollbarHeight = window.innerHeight - document.body.clientHeight;
			["overflowY", "overflowX", "background", "backgroundColor", "backgroundImage", "paddingRight", "paddingBottom"].forEach(key => {
				if (mobile || !key.match(/background/)) {
					this._bodyStyle[key] = bodyStyle[key];
				}
			});
			document.body.style.overflowY = "hidden";
			document.body.style.overflowX = "hidden";
			document.body.style.paddingRight = scrollbarWidth + "px";
			document.body.style.paddingBottom = scrollbarHeight + "px";
			if (page) {
				this._box.style.top = mobile ? "100%" : slide ? slideMargin + "px" : "auto";
				this._box.style.left = mobile ? "0px" : "auto";
				this._box.style.right = mobile ? "0px" : "auto";
				this._box.style.bottom = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
				this._box.style.width = mobile ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-width)";
				this._box.style.height = mobile || slide ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-height)";
				this._boxWidth = this._box.clientWidth;
				this._boxHeight = this._box.clientHeight;
			}
			if (page && mobile) {
				document.body.style.backgroundImage = "none";
				document.body.style.backgroundColor = boxStyle.backgroundColor;
			}
		}
		if (typeof (this._onStartOpen) == "function") {
			this._onStartOpen();
		}
		const interval = setInterval(() => {
			const t = step / 100;
			let ease = t > 0.5 ? 4 * Math.pow((t - 1), 3) + 1 : 4 * Math.pow(t, 3);
			if (ease >= 1) {
				clearInterval(interval);
				ease = 1;
			}
			this._element.style.opacity = ease == 1 ? null : ease;
			if (this._box != null && page) {
				if (!mobile && slide) {
					this._box.style.right = (this._boxWidth * (ease - 1) + slideMargin) + "px";
				} else if (mobile) {
					if (small) {
						this._box.style.top = (bodyHeight - this._boxHeight * ease) + "px";
					} else {
						this._box.style.top = (bodyHeight - (bodyHeight - 44) * ease) + "px";
					}
				}
			}
			if (under != null) {
				const underPage = Boolean(under._element.classList.contains("page"));
				const underSlide = Boolean(under._element.classList.contains("slide"));
				const underMaximized = Boolean(under._element.classList.contains("maximized"));
				if (bgcolor.length == 4) {
					const opacity = Math.round((1 - ease) * parseFloat(bgcolor[3]) * 100) / 100;
					under._element.style.backgroundColor = "rgba(" + bgcolor[0] + ", " + bgcolor[1] + ", " + bgcolor[2] + ", " + opacity + ")";
				}
				if (under._box != null && underPage && page) {
					if (!mobile && underSlide) {
						// ...
					} else if (mobile && !underMaximized) {
						under._box.style.top = (bodyHeight - (bodyHeight - 44) - 44 * ease) + "px";
						under._box.style.scale = (1 - ease / 10);
					}
				}
			}
			if (ease == 1 && typeof (onOpen) == "function") {
				onOpen();
			}
			step++;
		}, delay / 100);
	}

	resposive() {
		const page = Boolean(this._element.classList.contains("page"));
		const slide = Boolean(this._element.classList.contains("slide"));
		const small = Boolean(this._element.classList.contains("small"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyHeight = document.body.offsetHeight;
		const slideMargin = parseInt(getComputedStyle(this._element).getPropertyValue("--wui-modal-slidepage-box-margin").replace(/\D+/g, "") || 0);
		if (this._box != null && page) {
			this._element.classList.remove("maximized");
			this._box.style.top = mobile ? "44px" : slide ? slideMargin + "px" : small ? (bodyHeight - this._boxHeight) + "px" : "auto";
			this._box.style.left = mobile ? "0px" : "auto";
			this._box.style.right = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
			this._box.style.bottom = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
			this._box.style.width = mobile ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-width)";
			this._box.style.height = mobile || slide ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-height)";
		}
	}

	maximize(onMaximize = this._onMaximize, delay = this._openDelay) {
		const page = Boolean(this._element.classList.contains("page"));
		const slide = Boolean(this._element.classList.contains("slide"));
		const maximized = Boolean(this._element.classList.contains("maximized"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		let step = 10;
		this._element.classList.add("maximized");
		this._boxTop = this._box != null ? this._box.offsetTop : 0;
		const interval = setInterval(() => {
			const t = step / 10;
			let ease = t > 0.5 ? 4 * Math.pow((t - 1), 3) + 1 : 4 * Math.pow(t, 3);
			if (ease <= 0) {
				clearInterval(interval);
				ease = 0;
			}
			if (this._box != null && page) {
				if (!mobile && slide) {
					// ...
				} else if (mobile && !maximized) {
					this._box.style.top = (this._boxTop * ease) + "px";
				}
			}
			if (ease == 0 && typeof (onMaximize) == "function") {
				onMaximize();
			}
			step--;
		}, delay / 100);
	}

	close(onClose = this._onClose, delay = this._openDelay) {
		const page = Boolean(this._element.classList.contains("page"));
		const slide = Boolean(this._element.classList.contains("slide"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyHeight = document.body.offsetHeight;
		const bgcolor = getComputedStyle(this._element).getPropertyValue("--wui-modal-overlay-bgcolor").replace(/\s+/g, "").replace("rgba(", "").replace(")", "").split(",");
		const slideMargin = parseInt(getComputedStyle(this._element).getPropertyValue("--wui-modal-slidepage-box-margin").replace(/\D+/g, "") || 0);
		let under = null;
		let step = delay > 0 ? 100 : 0;
		if (typeof (this._onStartClose) == "function") {
			this._onStartClose();
		}
		WUIModal.#instances.forEach(modal => {
			if (modal._element.classList.contains("under")) {
				modal._element.classList.remove("under");
				under = modal;
			}
		});
		this._element.classList.remove("maximized");
		this._element.classList.remove("opened");
		this._element.classList.add("closed");
		if (this._topbar != null) {
			this._initY = null;
			this._drag = false;
		}
		if (this._box != null) {
			Object.keys(this._bodyStyle).forEach(key => {
				document.body.style[key] = this._bodyStyle[key];
			});
			this._box.scrollTop = 0;
			this._boxWidth = this._box.clientWidth;
			this._boxHeight = this._box.clientHeight;
		}
		const interval = setInterval(() => {
			const t = step / 100;
			let ease = t > 0.5 ? 4 * Math.pow((t - 1), 3) + 1 : 4 * Math.pow(t, 3);
			if (ease <= 0) {
				clearInterval(interval);
				ease = 0;
			}
			if (ease == 0) {
				this._element.style.display = "none";
				this._element.style.visibility = "hidden";
			}
			this._element.style.opacity = ease;
			if (this._box != null && page) {
				if (!mobile && slide) {
					this._box.style.right = (this._boxWidth * (ease - 1) + slideMargin) + "px";
				} else if (mobile) {
					this._box.style.top = (bodyHeight - this._boxHeight * ease) + "px";
				}
			}
			if (under != null) {
				const underPage = Boolean(under._element.classList.contains("page"));
				const underSlide = Boolean(under._element.classList.contains("slide"));
				const underMaximized = Boolean(under._element.classList.contains("maximized"));
				if (bgcolor.length == 4) {
					const opacity = Math.round((1 - ease) * parseFloat(bgcolor[3]) * 100) / 100;
					under._element.style.backgroundColor = "rgba(" + bgcolor[0] + ", " + bgcolor[1] + ", " + bgcolor[2] + ", " + opacity + ")";
				}
				if (under._box != null && underPage && page) {
					if (!mobile && underSlide) {
						// ...
					} else if (mobile && !underMaximized) {
						under._box.style.top = (bodyHeight - (bodyHeight - 44) - 44 * ease) + "px";
						under._box.style.scale = (1 - ease / 10);
					}
				}
			}
			if (ease == 0 && typeof (onClose) == "function") {
				onClose();
			}
			step--;
		}, delay / 100);
	}

	isOpen() {
		return this.getStatus().match(/opened/) ? true : false;
	}
}

WUIModal._initClass();

/*
modal message HTML code:
<div class="wui-modal message [priority]">
	<div class="box">
		<div class="body">
			<div class="icon"></div>
			<div class="text"></div>
		</div>
		<div class="footer">
			<button></button>
			<button></button>
		</div>
	</div>
</div>

modal page HTML code:
<div class="wui-modal page [slide|small] [priority]">
	<div class="box">
		<div class="header">
			<div class="back">
				<div class="icon wui-icon arrowhead-left-line"></div>
				<div class="text"></div>
			</div>
			<div class="topbar"></div>
			<div class="title"></div>
			<div class="close wui-icon close-lg-line"></div>
		</div>
		<div class="body"></div>
		<div class="footer"></div>
	</div>
</div>
*/