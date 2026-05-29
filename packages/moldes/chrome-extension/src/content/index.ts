// Content script: injected into every page
const init = () => {
  console.log('[FABRICA] content script loaded on', window.location.href);
};

init();
