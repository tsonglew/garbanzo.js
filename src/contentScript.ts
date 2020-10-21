chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request, sender, sendResponse);
  sendResponse('我收到你的消息了：' + JSON.stringify("request"));
});

// function ping() {
//   chrome.runtime.sendMessage('ping', response => {
//     if (chrome.runtime.lastError) {
//       setTimeout(ping, 1000);
//     } else {
//       document.addEventListener("click", EventManager.mouseHoverEvent)
//       alert("content script is loaded")
//       // Do whatever you want, background script is ready now
//     }
//   });
// }

// ping();
export { };
