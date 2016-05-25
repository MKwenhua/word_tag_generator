(function(window){
  "use strict";

  //window.wordScan.taggs   = {current: null, tagLists: []};

	var wordScanner = document.createElement('div');
	wordScanner.id = 'cheesyGorditaCrunch';
	wordScanner.className = 'not_on';
	wordScanner.innerHTML = window.wordScan.htmlInject();
	document.body.appendChild(wordScanner);
	window.ctxThing(wordScanner);
	var visBlock       = wordScanner.querySelector('#visBlockPete');
	var buttNav        = wordScanner.querySelector('.tacoSideNav');
	var scanner        = wordScanner.querySelector('#ZZ66_sl_tc');
	var ctxTool        = window.wordScan.canvasSet(wordScanner);
	var sendToWorker   = window.wordScan.workerSet(ctxTool,visBlock);
	var filez          = window.wordScan.fileReadSet(wordScanner);
	var wordAnalysis   = window.wordScan.textProcSet(sendToWorker, ctxTool);
	var textHiglighter = window.wordScan.selecter(scanner,wordScanner);
	var proccessDom    = window.wordScan.domReadSet(wordAnalysis);
  window.wordScan.taggs.tagContainer = wordScanner.querySelector('#wordTagWrap');

	function toggleNav() {
		var b = buttNav.querySelector('.bt1_taco_show');
		if (b) {b.classList.remove('bt1_taco_show');}
	};
  
	function repaintWords() {
		ctxTool.recalc();
		window.wordScan.taggs.current.redo();
	};

	window.wordScan.tools.addDebounce(window, repaintWords, 50, 'resize');

	wordScanner.querySelector('img').onclick = function() {
		if ( wordScanner.classList.contains('not_on') ) {
			wordScanner.className = 'is_on';
		} else {
			wordScanner.className = 'not_on';
		}
	};

	wordScanner.querySelector('#peteTacoZZ').onclick = function() {
		visBlock.className = 'on_load_Z66';
		proccessDom();
	};

	function checkScanner() {

		if( scanner.classList.contains('off_sele_t') ) {
			scanner.classList.remove('off_sele_t');
			scanner.classList.add('on_sele_t');
			textHiglighter.turnOn();
		}
		if( scanner.classList.contains('can_scan_zz66') ) {
			scanner.className = "selectIcon_taco off_sele_t";
			wordScanner.className = 'is_on';
			visBlock.className = 'on_results_Z66';
			textHiglighter.highlightOn = false;
			wordAnalysis( textHiglighter.selectedText, false,'HTML SCAN');
			console.log('tags',window.wordScan.taggs);
		};

	};

	window.wordScan.tools.addDebounce(scanner, checkScanner, 200, 'click');

	wordScanner.querySelector('#list_taco').onclick = function(e) {
		if (e.target.tagName === 'LI') {
			if (e.target.dataset.clicked === 'no') {
				e.preventDefault();
				e.target.dataset.clicked = 'yes';
				toggleNav();
				visBlock.className = 'on_results_Z66';
				buttNav.querySelector('.bt1_taco').classList.add('bt1_taco_show');
				wordAnalysis( filez[e.target.dataset.objurl], false,e.target.dataset.objurl);
				console.log('tags',window.wordScan.taggs);
			}
		}
	};

	buttNav.onclick = function(e) {
		if ( !e.target.classList.contains('bt1_taco_show') ) {
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

})(window);
