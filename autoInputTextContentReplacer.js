function clearValue(element){
  if(element.value == element.getAttribute("info")){
    element.value = "";
  }
}

function restoreValue(element){
  if(element.value == ""){
    element.value = element.getAttribute("info");
  }
}
