function clearValue(element){
  if(element.value == element.getAttribute("info")){
    element.value = "";
  }
}

function restoreValue(element){
  if(element.value == ""){
    x = element.getAttribute("info");
    element.value = x;
  }
}
