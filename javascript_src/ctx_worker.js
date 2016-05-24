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
