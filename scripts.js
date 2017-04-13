// var buttons = document.getElementsByClassName("button");

// 	for (var i=0; i < buttons.length; i++) {
// 		buttons[i].addEventListener("click", changeBtnText); //closes event listener
// 	}; // closes the for loop

// 	function changeBtnText(event) {
// 		// event.target.innerHTML = "I was clicked using event.";
// 		console.log(event)
// 	}

// var boxes = document.getElementsByClassName("textBox");

// 	for (var i=0; i < boxes.length; i++) {
// 		boxes[i].addEventListener("click", boxing);
// 	};

// 	function boxing(event) {
// 		event.target.innerHTML = "destroyed";
// 	};

var boxes = document.getElementsByClassName("textBox");

	for (var i=0; i < boxes.length; i++) {
		boxes[i].addEventListener("click", boxing);
	};

	function boxing(event) {
		event.target.innerHTML = "destroyed";
	};