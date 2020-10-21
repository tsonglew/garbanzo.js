chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let tabId = tabs[0]?.id
    if (!tabId) {
        tabId = 0
    }
    chrome.tabs.sendMessage(tabId, { greeting: "hello" }, function (response) {
        console.log(response);
    });
});

export { };
