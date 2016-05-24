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