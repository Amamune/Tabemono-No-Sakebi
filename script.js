function toggleMenu(){
	 var menu = document.getElementById("navigation");
	 menu.classList.toggle("change");

	 var modal = document.getElementById("modal");
	 if(modal.style.display == "block"){
	 	modal.style.display = "none";
	 }
	 else{
	 	modal.style.display = "block";
	 }
}
