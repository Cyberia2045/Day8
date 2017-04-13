var buttons = document.getElementsByClassName("button");

	for (let i=0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", changeBtnText); //closes event listener
	}; // closes the for loop

	function changeBtnText(event) {
		event.target.innerHTML = "I was clicked using event.";
	}