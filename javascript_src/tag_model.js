(function (window) {
	'use strict';

	window.wordScan = window.wordScan || {};

	function wordTagHtml(nm){
		return ['<div data-keyy="', nm,'" class="tag_previewZZ66">',
		nm.split('.')[0].replace(/[_-]/g, ' '),
		'</div>'].join('');
	};

	window.wordScan.taggs = {
		current: null,
		tagNameLists: [],
		htmlScans: 0,
		tagContainer: null,
		domReads: 0,
		fileReads: 0,
		wordLists: {},
		htmlStrings: {},
		createName: function(name){
			var _nm = '';
			switch(name) {
				case 'HTML SCAN':
					this.htmlScans += 1;
					_nm = 'HTML_SCAN_'+ String(this.htmlScans);
					break;
				case 'DOM_Content':
					this.domReads += 1;
					_nm = 'DOM_'+ String(this.domReads);
					break;
				default:
					this.fileReads += 1;
					_nm = name;
			}
			return _nm;
		},
		addToDom: function(tagg){
			this.current = tagg;
			this.htmlStrings[tagg.namee] = wordTagHtml(tagg.namee);
			var htmls = this.htmlStrings;
      this.tagContainer.innerHTML = this.tagNameLists.reduce(function(str, keyy){
				return str + htmls[keyy];
			},'');

		},
		addTag: function(tagg, name) {
			var newName = this.createName(name);
			tagg.namee = newName;
			var nameList = this.tagNameLists;
			this.tagNameLists = nameList.filter(function(item){
				return item !== newName;
			});
			this.tagNameLists.push(newName);
			this.wordLists[newName] = tagg;
			this.addToDom(tagg);
		}
	};

})(window);