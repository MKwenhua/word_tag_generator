(function (window) {
	'use strict';
	window.wordScan = window.wordScan || {};
	window.wordScan.htmlInject = function() {

	var _selectButtonZZ66 = [
		'<div id="ZZ66_sl_tc" data-tk="ZZ66" class="selectIcon_taco off_sele_t">',
				'<img data-tk="ZZ66" width="70" height="40" style="width:70px;height:40px;"  src="https://canvasmp3.s3.amazonaws.com/select_txt.png">',
				'<div class="zz66_nested"></div>',
		'</div>' 
		].join('');

	var _sideNavZZ66 = [
		'<div data-tk="ZZ66" class="tacoSideNav">',
				'<div data-tk="ZZ66" data-wh="canvas" class="bt1_taco bt1_taco_show">Words Tag</div>',
				'<div data-tk="ZZ66" data-wh="html" class="bt1_taco">Html</div>',
				'<div data-wh="files" class="bt1_taco">Files</div>',
				'<div id="zz66_d2" data-wh="wordtags" class="bt1_taco">Hist</div>',
				'<div id="zz66_d1" data-wh="config" data-tk="ZZ66" class="bt1_taco">Config</div>',
		'</div>'
		].join('');

	var fileDropZZ66 = [
		'<div data-tk="ZZ66" class="drag_drop_file_taco">',
				'<div id="drop_zone_taco">Drop files here</div>',
				'<div class="border-stuff">',
						'<output id="list_taco"></output>',
				'</div>',
		'</div>'
		].join('');

	var docScanZZ66 = [
		'<div data-tk="ZZ66" class="body_scann_taco">',
				'<h6>Click the button below for page scan.</h6>',
				'<div data-tk="ZZ66" id="peteTacoZZ">Word Frequency</div>',
		'</div>'
		].join('');

	var settingsZZ66 = [
		'<div class="peteDemoST1">',
				'<div class="z66_settings set_to_body_read"> ',fileDropZZ66,docScanZZ66,'</div>',
		'</div>'
		].join('');

	var loadingDivZZ66 = ['<div class="calc_load">','<div class="calcProcessTaco">Processing . . .</div>','</div>'].join('');
    
	var canvasInnerZZ66 = [
		'<div class="canvas_block_pete">',
				'<canvas data-tk="ZZ66" id="wdFQcx" width="750" height="550"></canvas>',
				'<div data-haslk="notmade" class="c_d_taco">Click to download Image</div>',
    '</div>'
    ].join('');

    var configCanvasZZ66 = '<div data-tk="ZZ66" class="pete_demo_settings"><h6>Settings comming soon</h6></div>';

  var creditsDivZZ66 = ['<div class="current_tags_images">', 'Icons made by <a href="http://www.flaticon.com/authors/madebyoliver" ',
    'title="Madebyoliver">Madebyoliver</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"',
    ' title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>','</div>'
    ].join('');

  var manageBlock = [
    '<div class="manage_Z66_box">',
    		configCanvasZZ66,
    		creditsDivZZ66 ,
    '</div>'
    ].join('');

	var visBlockzz66 = [
		'<div data-tk="ZZ66" id="visBlockPete" class="on_set_up_Z66 start_Z66">',
				_sideNavZZ66 ,
				settingsZZ66,
				loadingDivZZ66,
				canvasInnerZZ66,
				manageBlock,
		'</div>'
		].join('');

	return ['<img data-tk="ZZ66" height="74" width="100" src="https://scredisapi-scgraph.rhcloud.com/gordita_crunch.png">',
		'<p>Close</p>',_selectButtonZZ66 ,'<div data-tk="ZZ66" class="fqWordsTaco">', visBlockzz66 ,'</div>'].join('');
	};

})(window);