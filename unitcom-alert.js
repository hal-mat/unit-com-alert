// alert(document.getElementsByClassName('use_deliv_free').length);
if (checkUseDelivFree() && checkWeekday()) {
  alert("auto check succeeded!");
} else {
  alert("auto check failed!");
}

function checkUseDelivFree() {
  const radioButtons = document.getElementsByClassName("use_deliv_free");
  if (radioButtons[0].value == 1) {
    radioButtons[0].checked = true;
    return true;
  } else {
    return false;
  }
}
function checkWeekday() {
  const radioButtons = document.getElementsByClassName("p-shipping_wday");
  if (radioButtons[1].value == 1) {
    radioButtons[1].checked = true;
    return true;
  } else {
    return false;
  }
}
