(function (window) { 
	'use strict';
 window.wordScan = window.wordScan || {};
window.wordScan.tools = function(){

	function throttle (callback, limit) {
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
	function debounce(func, wait, immediate) {
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
		this.addDebounce = function(elem, func, time, type){
			
				elem.addEventListener(type, debounce(func, time));
		};
		this.addThrottle = function(elem, func){
			//	var throttledResize = throttle(func, 100);
				//window.addEventListener('resize', throttledResize);
				window.addEventListener('resize', func);
		};

};

})(window);