// Example background service worker
console.log("Background service worker for CSS Overwriter loaded");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
  // Perform some actions upon extension installation if necessary
});
