(function(window) {
  'use strict';
  window.canvasEditor = function (prnEl) {
    var canvasDiv = prnEl.querySelector('#ctxZZ66');
    var theVas = canvasDiv.querySelector('#ctxPreview');
    var colorInput = canvasDiv.querySelector('#clZZ66');
    var rdGrnBlu = [0, 70, 255];
    var fontfam = "Oswald,sans-serif";

    function convertHex (hex) {
      var r = parseInt(hex.substring(1, 3), 16);
      var g = parseInt(hex.substring(3, 5), 16);
      var b = parseInt(hex.substring(5, 7), 16);
      return [r, g, b];
    }

    function gaM (red, green, blue, gamma) {
      var rgB = [];
      /*rgB[0] = Math.pow(255 * (red / 255), gamma);
      	rgB[1] = Math.pow(255 * (green / 255), gamma);
      	rgB[2] = Math.pow(255 * (blue / 255), gamma); */
      rgB[0] = Math.pow(red, gamma);
      rgB[1] = Math.pow(green, gamma);
      rgB[2] = Math.pow(blue, gamma);
      return rgB;
    }

    function gammaAdjust (num) {
      var gM = 1 / (num / 50.0);
      var rgB = gaM(rdGrnBlu[0], rdGrnBlu[1], rdGrnBlu[2], gM);
      console.log('rgb(' + rgB.join() + ' )');
      return 'rgb(' + rgB.join() + ' )';
    }


    var ctxP = theVas.getContext("2d");
    var textWords = 'FRAZZLED'.split('');


    function rePaint (clr) {
      var leftOff = 5;
      ctxP.clearRect(0, 0, 180, 55);
      rdGrnBlu = convertHex(clr);
      [50, 42, 38, 26, 20, 14, 8].forEach(function(num, ind) {
        var ft = String(num) + 'px ' + fontfam;

        console.log(ft);
        var lttr = textWords[ind];
        ctxP.font = ft;
        ctxP.fillStyle = gammaAdjust(num);
        ctxP.fillText(lttr, leftOff, 46);
        leftOff += (4 + ctxP.measureText(lttr).width);
      });
    };
    canvasDiv.querySelector('#previewColorZZ66').onclick = function() {
      console.log(colorInput.value);
      console.log(convertHex(colorInput.value));
      gammaAdjust(rePaint(colorInput.value));
    };
  };

})(window);