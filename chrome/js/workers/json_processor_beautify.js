importScripts('/js/vkbeautify.js')

//postMessage("This processor takes care of the json stuff");

self.addEventListener('message', function(event){

  var content = event.data;
  var beautifiedContent = vkbeautify.json(content);
  postMessage(beautifiedContent);

}, false);
