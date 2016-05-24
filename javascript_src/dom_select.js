
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