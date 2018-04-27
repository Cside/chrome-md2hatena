const handler = (selectedText) => {
    // chrome.runtime.sendMessage({ selectedText }, () => {console.log("after sendMessage")});
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { selectedText }, (res) => { console.log(res); });
    });
};

chrome.contextMenus.create({
    "title" : 'selection',
    "type" : "normal",
    "contexts" : ['selection'],
    "onclick" : (arg) => { console.log(arg); handler(arg.selectionText) },
});
