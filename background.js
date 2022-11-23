// add listener to run execute.js content when url is https://www.youtube.com/shorts/*
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo?.status == 'complete' && tab && tab.url && tab.url.startsWith
    ('https://www.youtube.com/shorts')) {

    // run execute.js content
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['execute.js'],
    });

  }
});