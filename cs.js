chrome.runtime.onMessage.addListener((req, _, cb) => {
    if (req.action === 'getSelection') {
        cb(window.getSelection().toString());
    } else if (req.action === 'paste') {
        const textarea = document.querySelector('textarea')
        textarea.value = textarea.value.replace(req.md, `[${req.hatena}]`);
    }
    return true;
});