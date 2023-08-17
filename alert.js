function showAlert() {
	alert("not checked!");
}
chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: showAlert
	});
});