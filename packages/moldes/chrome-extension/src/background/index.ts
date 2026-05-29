chrome.runtime.onInstalled.addListener(() => {
  console.log('FABRICA-SOFTWARE extension installed');
});

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === 'PING') {
    sendResponse({ type: 'PONG' });
  }
  return true;
});
