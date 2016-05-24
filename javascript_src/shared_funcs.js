(function (window) {
	'use strict';
 window.wordScan = window.wordScan || {};
 function FsTools(){
		this.throttle = function(callback, limit) {
			var wait = false;
			return function () {
	 			if (!wait) {
	 				callback.call();
					wait = true;
					setTimeout(function () {
	 					wait = false;
					}, limit);
				}
		}
	}
	this.debounce = function(func, wait, immediate) {
			var timeout;
			return function() {
				var context = this, args = arguments;
				clearTimeout(timeout);
				timeout = setTimeout(function() {
						timeout = null;
						if (!immediate) func.apply(context, args);
						}, wait);
						if (immediate && !timeout) func.apply(context, args);
				};
		};
	};
	FsTools.prototype.addDebounce = function(elem, func, time, type){
				elem.addEventListener(type, this.debounce(func, time));
	};
	FsTools.prototype.addThrottle = function(elem, func, time, type){
			elem.addEventListener(type, this.debounce(func, time));
	};
 window.wordScan.tools = new FsTools();

})(window);