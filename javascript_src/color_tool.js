(function(window) {
  'use strict';
  window.canvasEditor = function (prnEl) {
    var canvasDiv = prnEl.querySelector('#ctxZZ66');
    var theVas = canvasDiv.querySelector('#ctxPreview');
    var colorInput = canvasDiv.querySelector('#clZZ66');
    var colorSet = "001efc";
    var fontfam = "Oswald,sans-serif";
 		var ctxP = theVas.getContext("2d");
    var textWords = 'FRAZZLED'.split('');

    function colorLevel (hex, amt) {
	    if(amt === 0){ return  "#" + hex;}
	    var num = parseInt(hex , 16);
	    var r = (num >> 16) + amt;
	 		var b = ((num >> 8) & 0x00FF) + amt;
	 		var g = (num & 0x0000FF) + amt;
	    
	    if (r > 255 || r < 0){ r =  r < 0 ? 0 : 255; }
	 
	    if (b > 255 || b < 0){ b = b < 0 ? 0 : 255; }
	 
	    if (g > 255 || g < 0){ g = g < 0 ? 0 : 255; }

	    return "#" + (g | (b << 8) | (r << 16)).toString(16);
		}	
    

		function getShade (decim, col) {
		 return colorLevel(col,(10 % Math.round(decim * 10) * 16) );
		};


    function rePaint (clr) {
      var leftOff = 5;
      ctxP.clearRect(0, 0, 180, 55);
      colorSet = clr.replace('#', '');
      [50, 44, 38, 32, 26, 20, 14 , 8].forEach(function(num, ind) {
        var ft = String(num) + 'px ' + fontfam;

        console.log(ft);
        var lttr = textWords[ind];
        ctxP.font = ft;
        ctxP.fillStyle = getShade( (num/50), colorSet );
        ctxP.fillText(lttr, leftOff, 46);
        leftOff += (4 + ctxP.measureText(lttr).width);
      });
    };

    canvasDiv.querySelector('#previewColorZZ66').onclick = function() {
      console.log(colorInput.value);
      rePaint(colorInput.value);
    };

  };

})(window);