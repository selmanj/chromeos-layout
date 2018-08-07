var context_id = -1;
      
chrome.input.ime.onFocus.addListener(function(context) {
  context_id = context.contextID;
});

chrome.input.ime.onKeyEvent.addListener(
  function(engineID, keyData) {
    if (keyData.type == "keydown") {
      chrome.input.ime.commitText({"contextID": context_id,
                                    "text": keyData.key});
    }

    return true;
  });