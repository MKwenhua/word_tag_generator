# Coding Challenge From Two Years Ago

Pretty simple bookmarklet that generates Word Tag/Word Cloud, which is essentially a simple visual representation of the webpage's text data. The visualizations are painted on a responsive HTML5 Canvas element, which allows for each Word Cloud to be saved and downloaded. 

Since this was a coding challenge I included some unnecessary "optimizations" just for show which in retrospect actually degraded the performance. The reason for the flickering was due to the fact I offloaded the calculations of the word sizing/opacity and positioning to a webworker. Given how quickly engines like V8 and process these values, blocking should never be a problem and in fact the marshalling times needed to pass data back and forth between the WebWorker and the main thread takes up way more time. Additionally I added a debounce as well, which was unnecessary. But the only reason why I made these silly decisions was to simply demonstrate that I could.

### Features Include:
* Text scanning using the `getSelection` API to create Word Clouds out of selected text
* Drag and drop uploads for analyzing text files/generate Word Clouds
* Configurable font and background colors
* JPG image generation to download Word Clouds

![](/word_tag_challenge.gif)
