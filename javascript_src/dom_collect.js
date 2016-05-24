(function (window) { 
	'use strict';

var _domReadZZ66 = function(wordCount){
	return function(){ 
      function getText(arr,str ,ind, len){
				if(ind < len){
				 var tx =	arr[ind].innerText.toLowerCase().match(/([a-z]+)/g);
				 getText(arr, tx ? str.concat(tx) : str, ind + 1, len);
				}else{
         wordCount(str, true, 'domBody');
				}
				
			};
			(function getDivs(){
		 	 var x =	document.body.querySelectorAll('DIV');
		 	 txtArr = getText(x, [] ,0, x.length);
			})();
   }
};

 window.wordScanSet = window.wordScanSet || {};
 window.wordScanSet.domReadSetter = _domReadZZ66;
})(window);