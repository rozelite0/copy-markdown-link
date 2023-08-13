chrome.runtime.onMessage.addListener((message) => {
  navigator.clipboard.writeText(message.link);
});
