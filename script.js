// Modal agregar palabra
if(document.getElementById("addWord")){
  var modal = document.getElementById("modal");
  var button = document.getElementById("addWord");
  var span = document.getElementByClassName("close");
  var container = document.getElementByClassName("modalContainer");
  button.onclick  function() {
  modal.style.display= "block";
  container.style.position = "static";
  container.style.height = "80%";
  container.style.overflow = "hidden";
  }
  span.onclick = function(){
  modal.style.display= "none";
  container.style.position = "inherit";
  container.style.height = "auto";
  container.style.overflow = "visible";
  }
  }
