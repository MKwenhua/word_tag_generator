(function (window) {
	'use strict';

	window.wordScan = window.wordScan || {};

	window.wordScan.taggs = {
		current: null, 
		tagNameLists: [],
		htmlScans: 0,
		tagContainer: null,
		domReads: 0,
		fileReads: 0,
		wordLists: {}, 
		createName: function(name){
			var _nm = '';

			switch(name) {
				case 'HTML SCAN': 
					this.htmlScans += 1;
				 _nm = 'HTML_SCAN_'+ String(this.htmlScans);
					break;
				case 'DOM_Content':
					this.domReads += 1;
				 _nm = 'HTML_SCAN_'+ String(this.domReads);
					break;
				default:
					this.fileReads += 1;
					_nm = name;
			}

			return _nm;
			
		},
		addToDom: function(tagg){
			if (this.current) { this.tagContainer.innerHTML = '';}
			this.current = tagg;
			this.tagContainer.innerHTML += ['<div data-keyy="',
			tagg.namee,
			'" class="tag_previewZZ66"',
			tagg.namee,
			'</div>'].join('');
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