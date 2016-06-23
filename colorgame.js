var numSquares = 6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newGame = document.querySelector("#newColors");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < square.length; i++){
	//add  initial colors to square
	square[i].style.backgroundColor = colors[i];
	//add click listener to square
	square[i].addEventListener("click", function(){
			//grab color of the clicked square
			var clickedSquare = this.style.backgroundColor;
			//compare color to picked color
			if(clickedSquare === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedSquare);
				h1.style.backgroundColor = clickedSquare;
				newGame.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	colors = randomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//Change colorDisplay to match the picked color
	colorDisplay.textContent = pickedColor;
	newGame.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < square.length; i++){
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		} else {
			square[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

newGame.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop through all squares
	for(var i= 0; i < square.length; i++){
		//change each color to match given color
		square[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColors(num){
	//Create empty array
	var arr = [];
	//generate random color function
	for(var i = 0; i < num; i++){
		arr.push(rgb());
	}
	//return array
	return arr;
}

function rgb(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}




