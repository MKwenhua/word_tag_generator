(function (window) { 
	'use strict';
window.wordScanSet = window.wordScanSet || {};
window.wordScanSet.canvasSet = function(parentEle){
  var theCanvas = parentEle.querySelector('#wdFQcx');
  var ctx       = theCanvas.getContext("2d");
  var linkBox   = parentEle.querySelector('.c_d_taco');
  var fontFam   = window.getComputedStyle(document.body, null )['font-family'] || "Oswald,sans-serif;";
  var maxHeight = screen.availHeight - 155;
  function calcDimensions(){
    var snWd = window.innerWidth;
    if(snWd > 1040){
      theCanvas.width = 750;
    }
    if(snWd > 500){
      theCanvas.width = snWd > 973 ? snWd - 384 : snWd - 284;
    }else{
    	theCanvas.width =  snWd - 170;
    }
    ctx = theCanvas.getContext("2d");
  };
  function addLink(){
     return theCanvas.toDataURL("image/jpeg", 1.0);
  };
  calcDimensions();
  ctx.font = '40px ' + fontFam;
  function calcColor(pnct){
    ctx.fillStyle = 'rgb(0, ' + (170 - Math.ceil(150 * pnct )).toString() + ', 252)';
  };
  function paintWords(lineWords, wordSp, itter, callback ){
   var offset_x = 6;
   lineWords[itter].forEach(function(item, ii){
      ctx.font = item.fntSize + fontFam;
      calcColor(item.percnt);
      ctx.fillText(item.txt, offset_x, wordSp[itter][2]);
      offset_x += item.wid + wordSp[itter][1];
   });
    if(lineWords[itter + 1]){
      paintWords(lineWords, wordSp, itter + 1, callback );
    }else{
      callback();
    }  
  };
  function getRatios(){
  return 'ABCDEFGHIJKLMENOPQRSTUVWXYZ'.split('').reduce(function(obb,letter){
    obb[letter.toLowerCase()] = ctx.measureText(letter).width / 40;
    return obb;
   }, {});
  };
 
  function CanvasTool(){

     this.ratios = getRatios();
     this.changeFont = function(newFNT){
      ctx.font = newFNT;
      this.ratios = getRatios();
     };
     this.recalc = calcDimensions;
     this.getWidth = function(){
      return theCanvas.width;
     };
     this.paintResults = function(dta, visBlock){
       var res = JSON.parse(dta);
       
       console.log('paintResults',res);
       var h = res.lineWids[res.lineWids.length - 1][2] + 15;
       h = h > maxHeight ? maxHeight : h;
       theCanvas.height = h;
       ctx.fillStyle = "#ffffff";
       ctx.fillRect(0,0,theCanvas.width,h);
       paintWords(res.wordLines, res.lineWids,0,function(){
          linkBox.innerHTML = 'Click to download Image';
          linkBox.dataset.haslk = 'notmade';
          visBlock.className = 'on_results_Z66';
        });
     };
  };
  linkBox.onclick = function(){
    if(linkBox.dataset.haslk === 'notmade'){
      var imgBlob = addLink();
      linkBox.innerHTML = ['<a download="wordtags.jpg" href="',imgBlob,'"> Download Word Tag</a>'].join('');
      linkBox.dataset.haslk = 'linkthere';
    }
  }; 
 return new CanvasTool;
};

})(window);
