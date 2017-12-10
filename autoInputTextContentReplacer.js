function clearValue(element){
  if(element.value == value.getAttribute("info")){
    element.value = "";
  }
}

function restoreValue(element){
  if(element.value == ""){
    x = element.getAttribute("info");
    element.value = x;
  }
}
