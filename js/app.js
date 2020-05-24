var popWin = document.querySelector("#formModal");
const openModal = function (){
	
	popWin.style.top = 0;
}
var contact = document.querySelector("#contact");
contact.addEventListener("click",openModal)


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  popWin.style.top = "-1000px";
}