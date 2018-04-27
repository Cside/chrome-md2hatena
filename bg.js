const md2hatena = require('md2hatena').md2hatena;

const handler = () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
         chrome.tabs.sendMessage(tabs[0].id, { action: 'getSelection' }, (md) => {
            md2hatena(md).then((hatena) => {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'paste', md, hatena }, () => {});
            });
         });
    });
};

chrome.contextMenus.create({
    "title" : 'Markdown to Hatena',
    "type" : "normal",
    "contexts" : ['selection'],
    "onclick" : handler,
});
