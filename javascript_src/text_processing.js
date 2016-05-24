(function (window) {
	'use strict';
	window.wordScan = window.wordScan || {};

	window.wordScan.textProcSet = function(sendToWorker,ctxTool){

		function seriousWords(word) {return word.length >= 4 && /(http|https)/.test(word) === false;}

		function updater(nTag){
			window.wordScan.taggs.current = nTag;
			window.wordScan.taggs.tagLists.push(nTag);
		};

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
			wordList.txtHash = { themax: maxFq.biggestCount,the_bod: bod_text ,cWidth: ctxTool.getWidth() , ratios: ctxTool.ratios};
			wordList.createTag();
			updater(wordList);
		};

};


})(window);
