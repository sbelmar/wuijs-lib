/*
 * WUIFade - v0.1
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIFade {

	static version = "0.1";
	static defaults = {
		delay: 400,
		display: "block"
	};

	static in(target, options) {
		const element = target instanceof HTMLElement ? target : typeof (target) == "string" ? document.querySelector(target) : null;
		element.wuiFadein(options);
	}

	static out(target, options) {
		const element = target instanceof HTMLElement ? target : typeof (target) == "string" ? document.querySelector(target) : null;
		element.wuiFadeout(options);
	}
}

HTMLElement.prototype.wuiFadein = function (options = {}) {
	const delay = typeof (options.delay) == "number" ? options.delay : WUIFade.defaults.delay;
	const display = typeof (options.display) == "string" ? options.display : WUIFade.defaults.display;
	const force = typeof (options.force) == "boolean" ? options.force : false;
	let step = 0;
	if (this.style.display != display || force) {
		const interval = setInterval(() => {
			if (step >= 1) {
				clearInterval(interval);
				step = 1;
			}
			if (step == 0) {
				this.style.display = display;
			}
			this.style.opacity = step;
			if (step == 1 && typeof (options.callback) == "function") {
				options.callback();
			}
			step += .1;
		}, delay / 10);
	}
}

HTMLElement.prototype.wuiFadeout = function (options = {}) {
	const delay = typeof (options.delay) == "number" ? options.delay : WUIFade.defaults.delay;
	const force = typeof (options.force) == "boolean" ? options.force : false;
	let step = 1;
	if (this.style.display != "none" || force) {
		const interval = setInterval(() => {
			if (step <= 0) {
				clearInterval(interval);
				step = 0;
			}
			if (step == 0) {
				this.style.display = "none";
			}
			this.style.opacity = step;
			if (step == 0 && typeof (options.callback) == "function") {
				options.callback();
			}
			step -= .1;
		}, delay / 10);
	}
}