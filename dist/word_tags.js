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
(function (window) { 
	'use strict';
window.wordScan = window.wordScan || {};
window.wordScan.htmlInject = function(){ 
	
  	var _selectButtonZZ66 = [
  	'<div id="ZZ66_sl_tc" data-tk="ZZ66" class="selectIcon_taco off_sele_t">',
    		'<img data-tk="ZZ66" width="70" height="40" style="width:70px;height:40px;"  src="https://canvasmp3.s3.amazonaws.com/select_txt.png">',
    		'<div class="zz66_nested"></div>',
    '</div>' ].join('');

  	var _sideNavZZ66 = [
  	'<div data-tk="ZZ66" class="tacoSideNav">',
    		'<div data-tk="ZZ66" data-wh="canvas" class="bt1_taco bt1_taco_show">Words Tag</div>',
   		  '<div data-tk="ZZ66" data-wh="html" class="bt1_taco">Html</div>',
    		'<div data-wh="files" class="bt1_taco">Files</div>',
    		'<div id="zz66_d2" data-wh="wordtags" class="bt1_taco">Hist</div>',
    		'<div id="zz66_d1" data-wh="config" data-tk="ZZ66" class="bt1_taco">Config</div>',
    '</div>'].join('');

    var fileDropZZ66 = [
    '<div data-tk="ZZ66" class="drag_drop_file_taco">',
    		'<div id="drop_zone_taco">Drop files here</div>',
    		'<div class="border-stuff">',
    				'<output id="list_taco"></output>',
    		'</div>',
    '</div>'].join('');

    var docScanZZ66 = [
    '<div data-tk="ZZ66" class="body_scann_taco">',
    		'<h6>Click the button below for page scan.</h6>',
    		'<div data-tk="ZZ66" id="peteTacoZZ">Word Frequency</div>',
    '</div>'].join('');

    var settingsZZ66 = [
    '<div class="peteDemoST1">',
    		'<div class="z66_settings set_to_body_read"> ',fileDropZZ66,docScanZZ66,'</div>',
    '</div>'].join('');
   
    var loadingDivZZ66 = ['<div class="calc_load">','<div class="calcProcessTaco">Processing . . .</div>','</div>'].join('');
    
    var canvasInnerZZ66 = [
    '<div class="canvas_block_pete">',
    		'<canvas data-tk="ZZ66" id="wdFQcx" width="750" height="550"></canvas>',
    		'<div data-haslk="notmade" class="c_d_taco">Click to download Image</div>',
    '</div>'].join('');

    var configCanvasZZ66 = '<div data-tk="ZZ66" class="pete_demo_settings"><h6>Settings comming soon</h6></div>';

    var creditsDivZZ66 = ['<div class="current_tags_images">', 'Icons made by <a href="http://www.flaticon.com/authors/madebyoliver" ',
    'title="Madebyoliver">Madebyoliver</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"',
    ' title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>','</div>'].join('');

    var manageBlock = [
    '<div class="manage_Z66_box">',
    		configCanvasZZ66,
    		creditsDivZZ66 ,
    '</div>'].join('');

    var visBlockzz66 = [ 
    '<div data-tk="ZZ66" id="visBlockPete" class="on_set_up_Z66 start_Z66">',
			_sideNavZZ66 ,
			settingsZZ66,
			loadingDivZZ66,
			canvasInnerZZ66,
			manageBlock,
		'</div>'].join(''); 

    return ['<img data-tk="ZZ66" height="74" width="100" src="https://scredisapi-scgraph.rhcloud.com/gordita_crunch.png">',
    '<p>Close</p>',_selectButtonZZ66 ,'<div data-tk="ZZ66" class="fqWordsTaco">', visBlockzz66 ,'</div>'].join('');
  };

})(window);
 function _canvasCalcThingZZ66(parentEle){
  var theCanvas = parentEle.querySelector('#wdFQcx');
  var ctx       = theCanvas.getContext("2d");
  var linkBox   = parentEle.querySelector('.c_d_taco');
  var fontFam   = window.getComputedStyle(document.body, null )['font-family'] || "Oswald,sans-serif;";
  var maxHeight = screen.availHeight - 100;
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

(function (window) { 
	'use strict';
 window.wordScan = window.wordScan || {};

 window.wordScan.textProcSet = function(sendToWorker,ctxTool, updater){

	function seriousWords(word) {return word.length >= 4 && /(http|https)/.test(word) === false;}

	function CountThing(){
      this.biggestCount = 0;
      this.check_mx = function(num){
        if(num > this.biggestCount){this.biggestCount = num; };
      };
   };
  var maxFq = new CountThing();
	function WordTag(isFile, name){
		  WordTag.numOf = (WordTag.numOf || 0) + 1;
		  this.txtHash = null;
		  this.tagindex = WordTag.numOf;
		  this.namee = name;
		  this.isFile = isFile;
		  this.createTag = function(){
		    sendToWorker(this.txtHash);
		  };
		  this.redo = function(){
		    this.txtHash.cWidth = ctxTool.getWidth();
		    sendToWorker(this.txtHash);
		  };
	};
	function countAholic(obb, word){
      obb[word] = obb[word] === undefined ? 1 : obb[word] + 1; maxFq.check_mx(obb[word]);
      return obb;
    };
    
  function processDom(str){
  	return str.filter(seriousWords).reduce(countAholic, {});
  };
  function readtext(ct){
    return ct.toLowerCase().match(/([a-z]+)/g).filter(seriousWords).reduce(countAholic, {});
  };
	return function(fl_content, fm_dom, txtName){ 
		var wordList = new WordTag(fm_dom, txtName);
    maxFq.biggestCount = 0;
    

    var bod_text = fm_dom ? processDom(fl_content) : readtext(fl_content);
 
    wordList.txtHash = { themax: maxFq.biggestCount,the_bod:  bod_text ,cWidth: ctxTool.getWidth() , ratios: ctxTool.ratios};
    wordList.createTag();
    updater(wordList);
	};

};


})(window);

(function (window) { 
	'use strict';
window.wordScan = window.wordScan || {};
window.wordScan.domReadSet = function(wordCount){
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


})(window);

(function (window) { 
	'use strict';
 window.wordScan = window.wordScan || {};
 window.wordScan.selecter = function(scanner){

function getHighlightedTxt() {
    var parentEl = null, sel;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            parentEl = sel.getRangeAt(0).commonAncestorContainer;
            if (parentEl.nodeType != 1) {
                parentEl = parentEl.parentNode;
            }
        }
    } else if ( (sel = document.selection) && sel.type != "Control") {
        parentEl = sel.createRange().parentElement();
    }
    return parentEl.textContent;
}
function TextHighligher() {
    window.addEventListener("mouseup", this, false);
}
TextHighligher.prototype.getHighlightedTxt = function(){
	 var parentEl = null, sel;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            parentEl = sel.getRangeAt(0).commonAncestorContainer;
            if (parentEl.nodeType != 1) {
                parentEl = parentEl.parentNode;
            }
        }
    } else if ( (sel = document.selection) && sel.type != "Control") {
        parentEl = sel.createRange().parentElement();
    }
    return parentEl.textContent;
}
TextHighligher.prototype.highlightOn = false;
TextHighligher.prototype.selectedText = '';
TextHighligher.prototype.turnOff = function(){
		this.highlightOn = false;

};
TextHighligher.prototype.turnOn = function(){
    this.highlightOn = true;
    wordScanner.className = 'scan_on';
	};

TextHighligher.prototype.handleEvent = function(e) {
    if(this.highlightOn){
    		var txtHlt =  this.getHighlightedTxt();// window.getSelection().baseNode.textContent;
     		if(txtHlt.length > 10){
     			this.selectedText = txtHlt;
     			console.log('textHiglighter.selectedText',this.selectedText);
     			scanner.classList.add("can_scan_zz66");
     		}
    }
};
return TextHighligher;
})(window);
(function (window) { 
	'use strict';
 window.wordScan = window.wordScanSet || {};
 window.wordScan.fileReadSet = function(parEle){ 
	var output_to = parEle.querySelector('#list_taco');
	var dropZone = parEle.querySelector('#drop_zone_taco');
	var fileTexts = {};
	var txtRegex = new RegExp('(http(s?):)|([/|.|\w|\s])*\.(?:html|txt|csv|css)');
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		console.log('ok cool');
	} else {
		console.log('The File APIs are not fully supported in this browser.');
	}
	function readFile(f, fileNames){
		var r = new FileReader();
			r.onload = function(e) {
					var contents = e.target.result.replace(/\s+/g, " ");
					fileTexts[fileNames] = contents;
					console.log(fileTexts);
				}
				r.readAsText(f);
	};
	function handleFileSelect(evt) {
			evt.stopPropagation();
			evt.preventDefault();

      var files = evt.dataTransfer.files;
      var output = [];

      for (var i = 0, f; f = files[i]; i++) {
        if(txtRegex.test(encodeURI(f.name))){
          readFile(f, encodeURI(f.name));
          output.push('<li data-clicked="no" data-objurl="', encodeURI(f.name),'">',  f.name.split('.')[0].split('_').join(' '), '</li>');
        }else{console.log('only Text files');}
      };
         
    output_to.innerHTML = ['<ul class="notificationLists">', output.join(''), '</ul>'].join('');
    
    };

    function handleDragOver(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      evt.dataTransfer.dropEffect = 'copy';
    }
  
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleFileSelect, false);
    return fileTexts;

};

})(window);
(function (window) { 
	'use strict';
 window.wordScanSet = window.wordScanSet || {};
 window.wordScanSet.workerSet = function(ctxTool, visBlock){
    var _worker =new Worker(window.URL.createObjectURL(new Blob([function(){
     self.addEventListener("message", function(e) {
         var data     = JSON.parse(e.data);
          console.log('in worker',data);
          var maxCount = data.themax;
          var ratios   = data.ratios;
          var mxWid    = data.cWidth;
          var abc  = 'abcdefghijklmnopqrstuvwxyz'.split('');
          function capitalize(v){
           return v.charAt(0).toUpperCase() + v.slice(1);
          };
          function notTooTiny(freq){
            return (freq/maxCount > 0.05);
          };
          
     
         
          var theWords = Object.keys(data.the_bod).sort().reduce(function(aa,x){
            if(notTooTiny(data.the_bod[x])){aa[x] = data.the_bod[x];}
            return aa;
          },{});
         var allwords =  Object.keys(theWords);
 
          var passObject = {
            allRatios: 0,
            total_words: allwords.length,
            size:40,
            eachWord: {},
            wordLines: [[]],
            lineWids: []
             };
          var atLine = 0;
          var maxFont = 0;
          var width_used = 0;
          var line_count = 1;
          var level_space = 3;
          var maxHeight = Math.floor((mxWid - 50)/((allwords.length/maxCount) + 1));
          if(mxWid < 450 && maxHeight < 50){ maxHeight = 50;}
          if(mxWid > 950 && maxHeight < 40){ maxHeight = 40;}
          maxHeight = maxHeight > 80 ? 80 : maxHeight;
          var array_of_maxes = [];
         
          var allLetters = 0;
          function calcSpace(wid){
            level_space = level_space + maxFont;
            array_of_maxes.push(maxFont);
            return [ (wid) , Math.floor(((mxWid - 5) - wid)/(line_count - 1)), level_space];
          };
          function checkIntegrity(passable){
            if(passable.lineWids.length < passable.wordLines.length ){
             passable.lineWids.push(calcSpace(width_used));
            }
          };
          allwords.forEach(function(key){
            var tat = 2;
            var fs = Math.ceil(maxHeight * (theWords[key]/maxCount));
        
            allLetters += key.length;
            key.split('').forEach(function(l){
              tat += (ratios[l] * fs);
            });
             var wordInfo = {ttl: tat, frq: theWords[key], percnt: theWords[key]/maxCount,
              fs: fs,fntSize: fs.toString() + 'px ', txt: key, wid: tat };
            passObject.allRatios += tat;
            width_used += tat;
            if(maxFont < fs && width_used < mxWid){
              maxFont = fs;
              wordInfo.txt = capitalize(key);
            }
            passObject.eachWord[key] = wordInfo;
           // maxFont = maxFont < fs ? fs : maxFont;
            if(width_used > mxWid){
              passObject.lineWids.push(calcSpace(width_used - tat));
              width_used = tat;
              maxFont = fs;
              line_count = 1;
              atLine++;
              passObject.wordLines.push([]);
            }

            passObject.wordLines[atLine].push(wordInfo);
            line_count++;
          });
          passObject.allL = allLetters;
          passObject.allM = array_of_maxes;
          checkIntegrity(passObject);


          self.postMessage(JSON.stringify(passObject));
       

      }, false);
    }.toString().split('\n').slice(1,-1).join('\n')],{type:'text/javascript'})));

    _worker.addEventListener('message',function(event){
     ctxTool.paintResults(event.data, visBlock);
    });
   
    return function(words){
    _worker.postMessage(JSON.stringify(words));
    }
};


})(window);

(function(){
  "use strict";
var wordScan = window.wordScan;
var wordScanner = document.createElement('div');
wordScanner.id = 'cheesyGorditaCrunch';
wordScanner.className = 'not_on';
wordScanner.innerHTML = wordScan.htmlInject();
document.body.appendChild(wordScanner);
var visBlock     = wordScanner.querySelector('#visBlockPete');
var buttNav      = wordScanner.querySelector('.tacoSideNav');
var scanner      = wordScanner.querySelector('#ZZ66_sl_tc');
var ctxTool      = wordScan.canvasSet(wordScanner);
var sendToWorker = wordScan.workerSet(ctxTool,visBlock);
var filez        = wordScan.fileReadSet(wordScanner);
var _tools       = new wordScan.tools();
wordScan.taggs   = {current: null, tagLists: []};
var wordAnalysis = wordScan.textProcSet(sendToWorker, ctxTool, function(nTag){
	window.wordScan.taggs.current = nTag;
	window.wordScan.taggs.tagLists.push(nTag);
});

var proccessDom  = wordScan.domReadSet(wordAnalysis);
function toggleNav(){
  	var b = buttNav.querySelector('.bt1_taco_show');
    if(b){b.classList.remove('bt1_taco_show');}
};


var textHiglighter = new wordScan.selecter(scanner);


function repaintWords(){
   ctxTool.recalc();
   wordScan.taggs.current.redo();
};

_tools.addDebounce(window, repaintWords, 50, 'resize');
wordScanner.querySelector('img').onclick = function(){
   if(wordScanner.classList.contains('not_on')){
     wordScanner.className = 'is_on';
   }else{
     wordScanner.className = 'not_on';
   }
};
wordScanner.querySelector('#peteTacoZZ').onclick = function(){
    visBlock.className = 'on_load_Z66';
    proccessDom();
};
function checkScanner(){
	if(scanner.classList.contains('off_sele_t')){
     scanner.classList.remove('off_sele_t');
     scanner.classList.add('on_sele_t');
     textHiglighter.turnOn();
    }
	if(scanner.classList.contains('can_scan_zz66')){
    scanner.className = "selectIcon_taco off_sele_t";
		wordScanner.className = 'is_on';
    visBlock.className = 'on_results_Z66';
		textHiglighter.highlightOn = false;
    wordAnalysis( textHiglighter.selectedText, false,'HTML SCAN');
    console.log('tags',wordScan.taggs);
 	};

};

_toolz.addDebounce(scanner, checkScanner, 200, 'click');
wordScanner.querySelector('#list_taco').onclick = function(e){
     if(e.target.tagName === 'LI'){
          if(e.target.dataset.clicked === 'no'){
            e.preventDefault();
             e.target.dataset.clicked = 'yes';
             toggleNav();
             visBlock.className = 'on_results_Z66';
             buttNav.querySelector('.bt1_taco').classList.add('bt1_taco_show');
             wordAnalysis( filez[e.target.dataset.objurl], false,e.target.dataset.objurl);
             console.log('tags',wordScan.taggs);

           }
      }
};
buttNav.onclick = function(e){
  if(!e.target.classList.contains('bt1_taco_show')){
  toggleNav();
    switch(e.target.dataset.wh) {
      case 'canvas':
        visBlock.className = 'on_results_Z66';
        e.target.classList.add('bt1_taco_show');
        break;
      case 'files':
        visBlock.querySelector('.z66_settings').className = "z66_settings set_to_file_read";
        e.target.classList.add('bt1_taco_show');
        visBlock.className = 'on_set_up_Z66';
        break;
      case 'html':
        visBlock.querySelector('.z66_settings').className = "z66_settings set_to_body_read";
        e.target.classList.add('bt1_taco_show');
        visBlock.className = 'on_set_up_Z66';
        break;
      case 'wordtags':
        visBlock.querySelector('.pete_demo_settings').className = 'pete_demo_settings stage_hide';
        visBlock.querySelector('.current_tags_images').className = 'current_tags_images stage_show';
        e.target.classList.add('bt1_taco_show');
        visBlock.className = 'manage_Z66';
        break;
      case 'config':
        e.target.classList.add('bt1_taco_show');
        visBlock.querySelector('.current_tags_images').className = 'current_tags_images stage_hide';
        visBlock.querySelector('.pete_demo_settings').className = 'pete_demo_settings stage_show';
        visBlock.className = 'manage_Z66';
        break;
      default:
         console.log('hey');
    }
  }
  };
})();
