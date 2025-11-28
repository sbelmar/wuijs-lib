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

	#selector;
	#openDelay;
	#onStartOpen;
	#onOpen;
	#onMaximize;
	#onScrolling;
	#onStartClose;
	#onClose;
	#onBack;

	#element;
	#box;
	#header;
	#back;
	#topbar;
	#title;
	#close;
	#body;
	#footer;
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
		return this.#selector;
	}

	get openDelay() {
		return this.#openDelay;
	}

	get onStartOpen() {
		return this.#onStartOpen;
	}

	get onOpen() {
		return this.#onOpen;
	}

	get onMaximize() {
		return this.#onMaximize;
	}

	get onScrolling() {
		return this.#onScrolling;
	}

	get onStartClose() {
		return this.#onStartClose;
	}

	get onClose() {
		return this.#onClose;
	}

	get onBack() {
		return this.#onBack;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this.#selector = value;
			this.#element = document.querySelector(value);
			this.#box = document.querySelector(value + " > .box");
			this.#header = document.querySelector(value + " > .box > .header");
			this.#back = this.#header ? document.querySelector(value + " > .box > .header > .back") : null;
			this.#topbar = this.#header ? document.querySelector(value + " > .box > .header > .topbar") : null;
			this.#title = this.#header ? document.querySelector(value + " > .box > .header > .title") : null;
			this.#close = this.#header ? document.querySelector(value + " > .box > .header > .close") : null;
			this.#body = document.querySelector(value + " > .box > .body");
			this.#footer = document.querySelector(value + " > .box > .footer");
		}
	}

	set openDelay(value) {
		if (typeof (value) == "number") {
			this.#openDelay = value;
		}
	}

	set onStartOpen(value) {
		if (typeof (value) == "function") {
			this.#onStartOpen = value;
		}
	}

	set onOpen(value) {
		if (typeof (value) == "function") {
			this.#onOpen = value;
		}
	}

	set onMaximize(value) {
		if (typeof (value) == "function") {
			this.#onMaximize = value;
		}
	}

	set onScrolling(value) {
		if (typeof (value) == "function") {
			this.#onScrolling = value;
		}
	}

	set onStartClose(value) {
		if (typeof (value) == "function") {
			this.#onStartClose = value;
		}
	}

	set onClose(value) {
		if (typeof (value) == "function") {
			this.#onClose = value;
		}
	}

	set onBack(value) {
		if (typeof (value) == "function") {
			this.#onBack = value;
		}
	}

	getElement() {
		return this.#element;
	}

	getBox() {
		return this.#box;
	}

	getHeader() {
		return this.#header;
	}

	getBack() {
		return this.#back;
	}

	getTopbar() {
		return this.#topbar;
	}

	getTitle() {
		return this.#title;
	}

	getClose() {
		return this.#close;
	}

	getBody() {
		return this.#body;
	}

	getFooter() {
		return this.#footer;
	}

	getStatus() {
		let status = [];
		["opened", "maximized", "under", "close"].forEach(className => {
			if (this.#element.classList.contains(className)) {
				status.push(className);
			}
		});
		return status.join(",");
	}

	setProperties(properties) {
		const defaults = structuredClone(WUIModal.#defaults);
		Object.entries(defaults).forEach(([key, defValue]) => {
			this[key] = key in properties ? properties[key] : defValue;
		});
	}

	setHeadBorder(border) {
		if (this.#header != null) {
			if (border) {
				this.#header.classList.remove("border");
			} else {
				this.#header.classList.add("border");
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
			this.#element.classList.add("mobile");
		}
		if (this.#topbar != null) {
			this.#drag = false;
			this.#initY = null;
			this.#direction = null;
			["touchstart", "mousedown"].forEach(type => {
				this.#topbar.addEventListener(type, event => {
					if (!this.#drag) {
						const initY = (event.type == "touchstart" ? event.touches[0].clientY : event.clientY || event.pageY) - event.target.offsetParent.offsetTop;
						this.#initY = initY;
						this.#drag = Boolean(type == "touchstart" || event.buttons == 1);
					}
				});
			});
			["touchmove", "mousemove"].forEach(type => {
				this.#topbar.addEventListener(type, event => {
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
		if (this.#back != null) {
			this.#back.addEventListener("click", () => {
				if (typeof (this.#onBack) == "function") {
					this.#onBack();
				}
			});
		}
		if (this.#close != null) {
			this.#close.addEventListener("click", () => {
				this.close();
			});
		}
		if (this.#box != null && this.#body != null) {
			this.#box.dataset.scrollBody = 0;
			if (this.#body.classList.contains("scroll")) {
				["scroll", "touchmove"].forEach(type => {
					this.#body.addEventListener(type, debounce(() => {
						let top = this.#body.scrollTop;
						if (top < 0) {
							top = 0;
						}
						this.#box.dataset.scrollBody = top;
						if (typeof (this.#onScrolling) == "function") {
							this.#onScrolling(top);
						}
					}), { passive: true });
				});
			}
		}
	}

	open(onOpen = this.#onOpen, delay = this.#openDelay) {
		const page = Boolean(this.#element.classList.contains("page"));
		const slide = Boolean(this.#element.classList.contains("slide"));
		const small = Boolean(this.#element.classList.contains("small"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyHeight = document.body.offsetHeight;
		const bodyStyle = getComputedStyle(document.body);
		const slideMargin = parseInt(getComputedStyle(this.#element).getPropertyValue("--wui-modal-slidepage-box-margin").replace(/\D+/g, "") || 0);
		let under = null;
		let pages = 1;
		let step = delay > 0 ? 0 : 100;
		WUIModal.#instances.forEach(modal => {
			if (modal._element.classList.contains("opened") && !modal._element.classList.contains("under") && modal._selector != this.#selector) {
				modal._element.classList.add("under");
				under = modal;
			}
			if (modal._element.classList.contains("opened") && modal._element.classList.contains("page") && modal._element.classList.contains("under")) {
				pages++;
			}
		});
		this.#element.style.display = "flex";
		this.#element.style.zIndex = 103 + pages;
		this.#element.style.visibility = "hidden";
		this.#element.style.opacity = 0;
		this.#element.style.visibility = "visible";
		this.#element.classList.remove("maximized");
		this.#element.classList.remove("closed");
		this.#element.classList.add("opened");
		if (this.#box != null) {
			const boxStyle = getComputedStyle(this.#box);
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
				this.#box.style.top = mobile ? "100%" : slide ? slideMargin + "px" : "auto";
				this.#box.style.left = mobile ? "0px" : "auto";
				this.#box.style.right = mobile ? "0px" : "auto";
				this.#box.style.bottom = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
				this.#box.style.width = mobile ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-width)";
				this.#box.style.height = mobile || slide ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-height)";
				this.#boxWidth = this.#box.clientWidth;
				this.#boxHeight = this.#box.clientHeight;
			}
			if (page && mobile) {
				document.body.style.backgroundImage = "none";
				document.body.style.backgroundColor = boxStyle.backgroundColor;
			}
		}
		if (typeof (this.#onStartOpen) == "function") {
			this.#onStartOpen();
		}
		const interval = setInterval(() => {
			const t = step / 100;
			let ease = t > 0.5 ? 4 * Math.pow((t - 1), 3) + 1 : 4 * Math.pow(t, 3);
			if (ease >= 1) {
				clearInterval(interval);
				ease = 1;
			}
			this.#element.style.opacity = ease == 1 ? null : ease;
			if (this.#box != null && page) {
				if (!mobile && slide) {
					this.#box.style.right = (this.#boxWidth * (ease - 1) + slideMargin) + "px";
				} else if (mobile) {
					if (small) {
						this.#box.style.top = (bodyHeight - this.#boxHeight * ease) + "px";
					} else {
						this.#box.style.top = (bodyHeight - (bodyHeight - 44) * ease) + "px";
					}
				}
			}
			if (under != null) {
				const underPage = Boolean(under._element.classList.contains("page"));
				const underSlide = Boolean(under._element.classList.contains("slide"));
				const underMaximized = Boolean(under._element.classList.contains("maximized"));
				this.#element.classList.add("over");
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
		const page = Boolean(this.#element.classList.contains("page"));
		const slide = Boolean(this.#element.classList.contains("slide"));
		const small = Boolean(this.#element.classList.contains("small"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyHeight = document.body.offsetHeight;
		const slideMargin = parseInt(getComputedStyle(this.#element).getPropertyValue("--wui-modal-slidepage-box-margin").replace(/\D+/g, "") || 0);
		if (this.#box != null && page) {
			this.#element.classList.remove("maximized");
			this.#box.style.top = mobile ? "44px" : slide ? slideMargin + "px" : small ? (bodyHeight - this.#boxHeight) + "px" : "auto";
			this.#box.style.left = mobile ? "0px" : "auto";
			this.#box.style.right = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
			this.#box.style.bottom = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
			this.#box.style.width = mobile ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-width)";
			this.#box.style.height = mobile || slide ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-height)";
		}
	}

	maximize(onMaximize = this.#onMaximize, delay = this.#openDelay) {
		const page = Boolean(this.#element.classList.contains("page"));
		const slide = Boolean(this.#element.classList.contains("slide"));
		const maximized = Boolean(this.#element.classList.contains("maximized"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		let step = 10;
		this.#element.classList.add("maximized");
		this.#boxTop = this.#box != null ? this.#box.offsetTop : 0;
		const interval = setInterval(() => {
			const t = step / 10;
			let ease = t > 0.5 ? 4 * Math.pow((t - 1), 3) + 1 : 4 * Math.pow(t, 3);
			if (ease <= 0) {
				clearInterval(interval);
				ease = 0;
			}
			if (this.#box != null && page) {
				if (!mobile && slide) {
					// ...
				} else if (mobile && !maximized) {
					this.#box.style.top = (this.#boxTop * ease) + "px";
				}
			}
			if (ease == 0 && typeof (onMaximize) == "function") {
				onMaximize();
			}
			step--;
		}, delay / 100);
	}

	close(onClose = this.#onClose, delay = this.#openDelay) {
		const page = Boolean(this.#element.classList.contains("page"));
		const slide = Boolean(this.#element.classList.contains("slide"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyHeight = document.body.offsetHeight;
		const slideMargin = parseInt(getComputedStyle(this.#element).getPropertyValue("--wui-modal-slidepage-box-margin").replace(/\D+/g, "") || 0);
		let under = null;
		let step = delay > 0 ? 100 : 0;
		if (typeof (this.#onStartClose) == "function") {
			this.#onStartClose();
		}
		WUIModal.#instances.forEach(modal => {
			if (modal._element.classList.contains("under")) {
				modal._element.classList.remove("under");
				under = modal;
			}
		});
		this.#element.classList.remove("maximized");
		this.#element.classList.remove("opened");
		this.#element.classList.add("closed");
		if (this.#topbar != null) {
			this.#initY = null;
			this.#drag = false;
		}
		if (this.#box != null) {
			Object.keys(this.#bodyStyle).forEach(key => {
				document.body.style[key] = this.#bodyStyle[key];
			});
			this.#box.scrollTop = 0;
			this.#boxWidth = this.#box.clientWidth;
			this.#boxHeight = this.#box.clientHeight;
		}
		const interval = setInterval(() => {
			const t = step / 100;
			let ease = t > 0.5 ? 4 * Math.pow((t - 1), 3) + 1 : 4 * Math.pow(t, 3);
			if (ease <= 0) {
				clearInterval(interval);
				ease = 0;
			}
			if (ease == 0) {
				this.#element.style.display = "none";
				this.#element.style.visibility = "hidden";
			}
			this.#element.style.opacity = ease;
			if (this.#box != null && page) {
				if (!mobile && slide) {
					this.#box.style.right = (this.#boxWidth * (ease - 1) + slideMargin) + "px";
				} else if (mobile) {
					this.#box.style.top = (bodyHeight - this.#boxHeight * ease) + "px";
				}
			}
			if (under != null) {
				const underPage = Boolean(under._element.classList.contains("page"));
				const underSlide = Boolean(under._element.classList.contains("slide"));
				const underMaximized = Boolean(under._element.classList.contains("maximized"));
				this.#element.classList.remove("over");
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

	destroy() {
		if (this.#element) {
			this.#element.innerHTML = "";
			this.#box = null;
			this.#header = null;
			this.#back = null;
			this.#topbar = null;
			this.#title = null;
			this.#close = null;
			this.#body = null;
			this.#footer = null;
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