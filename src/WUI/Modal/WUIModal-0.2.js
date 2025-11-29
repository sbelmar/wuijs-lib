/*
 * WUIModal - v0.2
 * Author: Sergio E. Belmar (sbelmar@wuijs.dev)
 * Copyright (c) Sergio E. Belmar (sbelmar@wuijs.dev)
 */

class WUIModal {

	static version = "0.2";
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

	#properties = {
		selector: null,
		openDelay: null,
		onStartOpen: null,
		onOpen: null,
		onMaximize: null,
		onScrolling: null,
		onStartClose: null,
		onClose: null,
		onBack: null
	};
	#htmlElement;
	#htmlElements = {
		box: null,
		header: null,
		back: null,
		topbar: null,
		title: null,
		close: null,
		body: null,
		footer: null
	};
	#bodyStyle;
	#drag;
	#initY;
	#direction;
	#boxWidth;
	#boxHeight;
	#boxTop;

	static _initClass() {
		window.addEventListener("resize", () => {
			WUIModal.getOpenInstances().forEach(modal => {
				modal.resposive();
			});
		});
		document.addEventListener("keydown", event => {
			if (event.key == "Escape") {
				WUIModal.getAllInstances().every(modal => {
					const classList = modal.#htmlElement.classList;
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
		const defaults = structuredClone(WUIModal.#defaults);
		Object.entries(defaults).forEach(([key, defValue]) => {
			this[key] = key in properties ? properties[key] : defValue;
		});
		WUIModal.#instances.push(this);
	}

	get selector() {
		return this.#properties.selector;
	}

	get openDelay() {
		return this.#properties.openDelay;
	}

	get onStartOpen() {
		return this.#properties.onStartOpen;
	}

	get onOpen() {
		return this.#properties.onOpen;
	}

	get onMaximize() {
		return this.#properties.onMaximize;
	}

	get onScrolling() {
		return this.#properties.onScrolling;
	}

	get onStartClose() {
		return this.#properties.onStartClose;
	}

	get onClose() {
		return this.#properties.onClose;
	}

	get onBack() {
		return this.#properties.onBack;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.selector = value;
			this.#htmlElement = document.querySelector(value);
			this.#htmlElements.box = document.querySelector(value + " > .box");
			this.#htmlElements.header = document.querySelector(value + " > .box > .header");
			this.#htmlElements.back = this.#htmlElements.header ? document.querySelector(value + " > .box > .header > .back") : null;
			this.#htmlElements.topbar = this.#htmlElements.header ? document.querySelector(value + " > .box > .header > .topbar") : null;
			this.#htmlElements.title = this.#htmlElements.header ? document.querySelector(value + " > .box > .header > .title") : null;
			this.#htmlElements.close = this.#htmlElements.header ? document.querySelector(value + " > .box > .header > .close") : null;
			this.#htmlElements.body = document.querySelector(value + " > .box > .body");
			this.#htmlElements.footer = document.querySelector(value + " > .box > .footer");
		}
	}

	set openDelay(value) {
		if (typeof (value) == "number") {
			this.#properties.openDelay = value;
		}
	}

	set onStartOpen(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onStartOpen = value;
		}
	}

	set onOpen(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onOpen = value;
		}
	}

	set onMaximize(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onMaximize = value;
		}
	}

	set onScrolling(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onScrolling = value;
		}
	}

	set onStartClose(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onStartClose = value;
		}
	}

	set onClose(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onClose = value;
		}
	}

	set onBack(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onBack = value;
		}
	}

	getElement() {
		return this.#htmlElement;
	}

	getBox() {
		return this.#htmlElements.box;
	}

	getHeader() {
		return this.#htmlElements.header;
	}

	getBack() {
		return this.#htmlElements.back;
	}

	getTopbar() {
		return this.#htmlElements.topbar;
	}

	getTitle() {
		return this.#htmlElements.title;
	}

	getClose() {
		return this.#htmlElements.close;
	}

	getBody() {
		return this.#htmlElements.body;
	}

	getFooter() {
		return this.#htmlElements.footer;
	}

	getStatus() {
		let status = [];
		["opened", "maximized", "under", "close"].forEach(className => {
			if (this.#htmlElement.classList.contains(className)) {
				status.push(className);
			}
		});
		return status.join(",");
	}

	setHeadBorder(border) {
		if (this.#htmlElements.header != null) {
			if (border) {
				this.#htmlElements.header.classList.remove("border");
			} else {
				this.#htmlElements.header.classList.add("border");
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
		this.#bodyStyle = {};
		if (navigator.userAgent.match(/iphone|ipad|android/i) && navigator.maxTouchPoints > 1) {
			this.#htmlElement.classList.add("mobile");
		}
		if (this.#htmlElements.topbar != null) {
			this.#drag = false;
			this.#initY = null;
			this.#direction = null;
			["touchstart", "mousedown"].forEach(type => {
				this.#htmlElements.topbar.addEventListener(type, event => {
					if (!this.#drag) {
						const initY = (event.type == "touchstart" ? event.touches[0].clientY : event.clientY || event.pageY) - event.target.offsetParent.offsetTop;
						this.#initY = initY;
						this.#drag = Boolean(type == "touchstart" || event.buttons == 1);
					}
				});
			});
			["touchmove", "mousemove"].forEach(type => {
				this.#htmlElements.topbar.addEventListener(type, event => {
					if (this.#drag) {
						const initY = parseFloat(this.#initY);
						const moveY = (event.type == "touchmove" ? event.touches[0].clientY : event.clientY || event.pageY) - event.target.offsetParent.offsetTop;
						const diffY = moveY - initY;
						const direction = diffY > 10 ? "bottom" : diffY < -10 ? "top" : null;
						this.#direction = direction;
					}
				});
			});
			["touchend", "mouseup"].forEach(type => {
				document.addEventListener(type, () => {
					if (this.#drag) {
						this.#initY = null;
						this.#drag = false;
						if (this.#direction != null) {
							if (this.#direction == "top") {
								this.maximize();
							} else if (this.#direction == "bottom") {
								this.close();
							}
							setTimeout(() => {
								this.#direction = null;
							}, 400);
						}
					}
				});
			});
		}
		if (this.#htmlElements.back != null) {
			this.#htmlElements.back.addEventListener("click", () => {
				if (typeof (this.#properties.onBack) == "function") {
					this.#properties.onBack();
				}
			});
		}
		if (this.#htmlElements.close != null) {
			this.#htmlElements.close.addEventListener("click", () => {
				this.close();
			});
		}
		if (this.#htmlElements.box != null && this.#htmlElements.body != null) {
			this.#htmlElements.box.dataset.scrollBody = 0;
			if (this.#htmlElements.body.classList.contains("scroll")) {
				["scroll", "touchmove"].forEach(type => {
					this.#htmlElements.body.addEventListener(type, debounce(() => {
						let top = this.#htmlElements.body.scrollTop;
						if (top < 0) {
							top = 0;
						}
						this.#htmlElements.box.dataset.scrollBody = top;
						if (typeof (this.#properties.onScrolling) == "function") {
							this.#properties.onScrolling(top);
						}
					}), { passive: true });
				});
			}
		}
	}

	open(onOpen = this.#properties.onOpen, delay = this.#properties.openDelay) {
		const page = Boolean(this.#htmlElement.classList.contains("page"));
		const slide = Boolean(this.#htmlElement.classList.contains("slide"));
		const small = Boolean(this.#htmlElement.classList.contains("small"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyHeight = document.body.offsetHeight;
		const bodyStyle = getComputedStyle(document.body);
		const slideMargin = parseInt(getComputedStyle(this.#htmlElement).getPropertyValue("--wui-modal-slidepage-box-margin").replace(/\D+/g, "") || 0);
		let under = null;
		let pages = 1;
		let step = delay > 0 ? 0 : 100;
		WUIModal.#instances.forEach(modal => {
			if (modal.#htmlElement.classList.contains("opened") && !modal.#htmlElement.classList.contains("under") && modal.#properties.selector != this.#properties.selector) {
				modal.#htmlElement.classList.add("under");
				under = modal;
			}
			if (modal.#htmlElement.classList.contains("opened") && modal.#htmlElement.classList.contains("page") && modal.#htmlElement.classList.contains("under")) {
				pages++;
			}
		});
		this.#htmlElement.style.display = "flex";
		this.#htmlElement.style.zIndex = 103 + pages;
		this.#htmlElement.style.visibility = "hidden";
		this.#htmlElement.style.opacity = 0;
		this.#htmlElement.style.visibility = "visible";
		this.#htmlElement.classList.remove("maximized");
		this.#htmlElement.classList.remove("closed");
		this.#htmlElement.classList.add("opened");
		if (this.#htmlElements.box != null) {
			const boxStyle = getComputedStyle(this.#htmlElements.box);
			const scrollbarWidth = window.innerWidth - document.body.clientWidth;
			const scrollbarHeight = window.innerHeight - document.body.clientHeight;
			["overflowY", "overflowX", "background", "backgroundColor", "backgroundImage", "paddingRight", "paddingBottom"].forEach(key => {
				if (mobile || !key.match(/background/)) {
					this.#bodyStyle[key] = bodyStyle[key];
				}
			});
			document.body.style.overflowY = "hidden";
			document.body.style.overflowX = "hidden";
			document.body.style.paddingRight = scrollbarWidth + "px";
			document.body.style.paddingBottom = scrollbarHeight + "px";
			if (page) {
				this.#htmlElements.box.style.top = mobile ? "100%" : slide ? slideMargin + "px" : "auto";
				this.#htmlElements.box.style.left = mobile ? "0px" : "auto";
				this.#htmlElements.box.style.right = mobile ? "0px" : "auto";
				this.#htmlElements.box.style.bottom = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
				this.#htmlElements.box.style.width = mobile ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-width)";
				this.#htmlElements.box.style.height = mobile || slide ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-height)";
				this.#boxWidth = this.#htmlElements.box.clientWidth;
				this.#boxHeight = this.#htmlElements.box.clientHeight;
			}
			if (page && mobile) {
				document.body.style.backgroundImage = "none";
				document.body.style.backgroundColor = boxStyle.backgroundColor;
			}
		}
		if (typeof (this.#properties.onStartOpen) == "function") {
			this.#properties.onStartOpen();
		}
		const interval = setInterval(() => {
			const t = step / 100;
			let ease = t > 0.5 ? 4 * Math.pow((t - 1), 3) + 1 : 4 * Math.pow(t, 3);
			if (ease >= 1) {
				clearInterval(interval);
				ease = 1;
			}
			this.#htmlElement.style.opacity = ease == 1 ? null : ease;
			if (this.#htmlElements.box != null && page) {
				if (!mobile && slide) {
					this.#htmlElements.box.style.right = (this.#boxWidth * (ease - 1) + slideMargin) + "px";
				} else if (mobile) {
					if (small) {
						this.#htmlElements.box.style.top = (bodyHeight - this.#boxHeight * ease) + "px";
					} else {
						this.#htmlElements.box.style.top = (bodyHeight - (bodyHeight - 44) * ease) + "px";
					}
				}
			}
			if (under != null) {
				const underPage = Boolean(under.#htmlElement.classList.contains("page"));
				const underSlide = Boolean(under.#htmlElement.classList.contains("slide"));
				const underMaximized = Boolean(under.#htmlElement.classList.contains("maximized"));
				this.#htmlElement.classList.add("over");
				if (under.#htmlElements.box != null && underPage && page) {
					if (!mobile && underSlide) {
						// ...
					} else if (mobile && !underMaximized) {
						under.#htmlElements.box.style.top = (bodyHeight - (bodyHeight - 44) - 44 * ease) + "px";
						under.#htmlElements.box.style.scale = (1 - ease / 10);
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
		const page = Boolean(this.#htmlElement.classList.contains("page"));
		const slide = Boolean(this.#htmlElement.classList.contains("slide"));
		const small = Boolean(this.#htmlElement.classList.contains("small"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyHeight = document.body.offsetHeight;
		const slideMargin = parseInt(getComputedStyle(this.#htmlElement).getPropertyValue("--wui-modal-slidepage-box-margin").replace(/\D+/g, "") || 0);
		if (this.#htmlElements.box != null && page) {
			this.#htmlElement.classList.remove("maximized");
			this.#htmlElements.box.style.top = mobile ? "44px" : slide ? slideMargin + "px" : small ? (bodyHeight - this.#boxHeight) + "px" : "auto";
			this.#htmlElements.box.style.left = mobile ? "0px" : "auto";
			this.#htmlElements.box.style.right = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
			this.#htmlElements.box.style.bottom = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
			this.#htmlElements.box.style.width = mobile ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-width)";
			this.#htmlElements.box.style.height = mobile || slide ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-height)";
		}
	}

	maximize(onMaximize = this.#properties.onMaximize, delay = this.#properties.openDelay) {
		const page = Boolean(this.#htmlElement.classList.contains("page"));
		const slide = Boolean(this.#htmlElement.classList.contains("slide"));
		const maximized = Boolean(this.#htmlElement.classList.contains("maximized"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		let step = 10;
		this.#htmlElement.classList.add("maximized");
		this.#boxTop = this.#htmlElements.box != null ? this.#htmlElements.box.offsetTop : 0;
		const interval = setInterval(() => {
			const t = step / 10;
			let ease = t > 0.5 ? 4 * Math.pow((t - 1), 3) + 1 : 4 * Math.pow(t, 3);
			if (ease <= 0) {
				clearInterval(interval);
				ease = 0;
			}
			if (this.#htmlElements.box != null && page) {
				if (!mobile && slide) {
					// ...
				} else if (mobile && !maximized) {
					this.#htmlElements.box.style.top = (this.#boxTop * ease) + "px";
				}
			}
			if (ease == 0 && typeof (onMaximize) == "function") {
				onMaximize();
			}
			step--;
		}, delay / 100);
	}

	close(onClose = this.#properties.onClose, delay = this.#properties.openDelay) {
		const page = Boolean(this.#htmlElement.classList.contains("page"));
		const slide = Boolean(this.#htmlElement.classList.contains("slide"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyHeight = document.body.offsetHeight;
		const slideMargin = parseInt(getComputedStyle(this.#htmlElement).getPropertyValue("--wui-modal-slidepage-box-margin").replace(/\D+/g, "") || 0);
		let under = null;
		let step = delay > 0 ? 100 : 0;
		if (typeof (this.#properties.onStartClose) == "function") {
			this.#properties.onStartClose();
		}
		WUIModal.#instances.forEach(modal => {
			if (modal.#htmlElement.classList.contains("under")) {
				modal.#htmlElement.classList.remove("under");
				under = modal;
			}
		});
		this.#htmlElement.classList.remove("maximized");
		this.#htmlElement.classList.remove("opened");
		this.#htmlElement.classList.add("closed");
		if (this.#htmlElements.topbar != null) {
			this.#initY = null;
			this.#drag = false;
		}
		if (this.#htmlElements.box != null) {
			Object.keys(this.#bodyStyle).forEach(key => {
				document.body.style[key] = this.#bodyStyle[key];
			});
			this.#htmlElements.box.scrollTop = 0;
			this.#boxWidth = this.#htmlElements.box.clientWidth;
			this.#boxHeight = this.#htmlElements.box.clientHeight;
		}
		const interval = setInterval(() => {
			const t = step / 100;
			let ease = t > 0.5 ? 4 * Math.pow((t - 1), 3) + 1 : 4 * Math.pow(t, 3);
			if (ease <= 0) {
				clearInterval(interval);
				ease = 0;
			}
			if (ease == 0) {
				this.#htmlElement.style.display = "none";
				this.#htmlElement.style.visibility = "hidden";
			}
			this.#htmlElement.style.opacity = ease;
			if (this.#htmlElements.box != null && page) {
				if (!mobile && slide) {
					this.#htmlElements.box.style.right = (this.#boxWidth * (ease - 1) + slideMargin) + "px";
				} else if (mobile) {
					this.#htmlElements.box.style.top = (bodyHeight - this.#boxHeight * ease) + "px";
				}
			}
			if (under != null) {
				const underPage = Boolean(under.#htmlElement.classList.contains("page"));
				const underSlide = Boolean(under.#htmlElement.classList.contains("slide"));
				const underMaximized = Boolean(under.#htmlElement.classList.contains("maximized"));
				this.#htmlElement.classList.remove("over");
				if (under.#htmlElements.box != null && underPage && page) {
					if (!mobile && underSlide) {
						// ...
					} else if (mobile && !underMaximized) {
						under.#htmlElements.box.style.top = (bodyHeight - (bodyHeight - 44) - 44 * ease) + "px";
						under.#htmlElements.box.style.scale = (1 - ease / 10);
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

	destroy() {
		if (this.#htmlElement) {
			this.#htmlElement.innerHTML = "";
			this.#htmlElements.box = null;
			this.#htmlElements.header = null;
			this.#htmlElements.back = null;
			this.#htmlElements.topbar = null;
			this.#htmlElements.title = null;
			this.#htmlElements.close = null;
			this.#htmlElements.body = null;
			this.#htmlElements.footer = null;
		}
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