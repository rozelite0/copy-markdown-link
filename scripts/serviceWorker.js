const getCurrentTab = async () => {
  const queryOptions = { active: true, lastFocusedWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
};

chrome.commands.onCommand.addListener(async () => {
  const currentTab = await getCurrentTab();
  const { title, url, id } = currentTab;
  const link = `[${title}](${url})`;

  chrome.tabs.sendMessage(id, { link });
});
