window.setTimeout(function() {
  var colors = generateRandColor(6);
  var squares = document.querySelectorAll(".square");
  var pickedColor = pickColor();
  var updateRGB = document.getElementById("picked");
  var messageDisplay = document.getElementById("message");
  var h1 = document.querySelector("h1");
  var resetButton = document.querySelector("#reset");
  var easyBtn = document.querySelector("#easyBtn");
  var hardBtn = document.querySelector("#hardBtn");
  var numSquares = 6;



  easyBtn.addEventListener("click",function(){
  	easyBtn.classList.add("selected");
  	hardBtn.classList.remove("selected");
  	numSquares = 3;
  	colors = generateRandColor(numSquares);
  	pickedColor = pickColor();
  	updateRGB.textContent = pickedColor;
  	resetButton.textContent = "New Colors";
  	messageDisplay.textContent = " ";
  	h1.style.background = "steelblue";
  	for(var i=0; i<squares.length; i++)
  	{
  		if(colors[i])
  		{
			squares[i].style.background = colors[i];  			
  		}
  		else
  		{
  			squares[i].style.display = "none";
  		}
  		
  	}
  });
  hardBtn.addEventListener("click",function(){
  	easyBtn.classList.remove("selected");
  	hardBtn.classList.add("selected");
  	numSquares = 6;
  	colors = generateRandColor(numSquares);
  	pickedColor = pickColor();
  	updateRGB.textContent = pickedColor;
  	resetButton.textContent = "New Colors";
  	messageDisplay.textContent = " ";
  	h1.style.background = "steelblue";
  	for(var i=0; i<squares.length; i++)
  	{
		squares[i].style.background = colors[i];  
		squares[i].style.display = "block";				
  	}
  });
  resetButton.addEventListener("click",function(){
  	colors = generateRandColor(numSquares);
  	pickedColor = pickColor();
  	updateRGB.textContent = pickedColor;
  	messageDisplay.textContent = " ";
  	resetButton.textContent = "New Colors";
  	for(var i=0; i<squares.length; i++)
  	{
  		squares[i].style.background = colors[i];
  	}
  	h1.style.background = "steelblue";
  });
  updateRGB.textContent = pickedColor;
  for(var i=0; i<squares.length; i++)
  {
  	squares[i].style.background = colors[i];

  	squares[i].addEventListener("click",function(){
  		var check = this.style.background;
  		if(check === pickedColor)
  		{
  			changeColors(check);
  			resetButton.textContent = "play Again?";
  			messageDisplay.textContent = "Correct";
  			h1.style.background = check;
  		}
  		else
  		{
  			this.style.background = "#232323";
  			messageDisplay.textContent = "TryAgain";
  		}
  	});
  }
  function changeColors(color){
  	for(var i=0; i<squares.length; i++)
  	{
  		squares[i].style.background = pickedColor;
  	}
  }

  function pickColor(){
  	var random = Math.floor(Math.random() * colors.length);
  	return colors[random];
  }


}, 0.5);
function generateRandColor(num){
  	var arr = []
  	for(var i=0; i<num; i++)
  	{
  		arr.push(randColor());
  	}
  	return arr;
  }

  function randColor(){
  	var r = Math.floor(Math.random() * 256);
  	var g = Math.floor(Math.random() * 256);
  	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g +", " + b + ")";
  }
var x ="hello";
