chrome.runtime.onMessage.addListener((req, _, cb) => {
    const textarea = document.querySelector('textarea')
    textarea.value = textarea.value.replace(req.selectedText, `[${req.selectedText}]`);
});