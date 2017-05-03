var idStartbtn = document.getElementById("startbtn");
var idReloadbtn = document.getElementById("reloadbtn");
var idSubmitbtn = document.getElementById("submitbtn");
var idGuesses = document.getElementById("guesses");
var idResponse = document.getElementById("response");
var aiNum = Math.floor(((Math.random()*50)+1));
var hasWon = false;
var guessCounter = 0;
var aiResponse="";


function buttonStartHandler(){
	document.querySelector("#rulescreen").style.display = "none";
	document.querySelector("#gamescreen").style.display = "block";
}

function buttonSubmitHandler(){
	var guess = parseInt(document.getElementById("input").value);
	
	if(!isNaN(guess)){	
		guessCounter++;
		if(guessCounter <= 5 && !hasWon){
			if(guess!=aiNum){
				if(aiNum>guess){
					aiResponse += "<br /> Sorry, you have guessed incorrectly! The number you picked was too <span style='color:#2C056B'>low</span>";
				}else{
					aiResponse += "<br /> Sorry, you have guessed incorrectly! The number you picked was too <span style='color:#6B0511'> high</span>";
				}
			}else{
				aiResponse += "<br />How could this be? you have won.";
				document.getElementById("reloadbtn").innerHTML = "Play Again?";
				hasWon = true;
			}
			
		}else if(guessCounter == 6 && guess==aiNum && !hasWon){
			aiResponse += "<br />How could this be? you have won.";
			hasWon = true;
			document.getElementById("reloadbtn").innerHTML = "Play Again?";
		}else if(guessCounter < 6 && hasWon){
			aiResponse += "<br /> Why would you continue guessing? You have already won!";
			document.getElementById("submitbtn").disabled="disabled";
			document.getElementById("reloadbtn").innerHTML = "Play Again?";
		}else if(!hasWon && guessCounter >= 6){
			aiResponse = "<br />You have exceeded your alotted guesses. The number was <span style='color:#5E085E'>" +aiNum+ "</span>! <br /> You are now mine to command";
			document.getElementById("submitbtn").disabled="disabled";
			document.getElementById("reloadbtn").innerHTML = "Play Again?";
			
		}else{
			aiResponse += "<br />You have already won your freedom. What else do you want? <br /> Begone!";
			document.getElementById("submitbtn").disabled="disabled";
			document.getElementById("reloadbtn").innerHTML = "Play Again?";
			}
		
		idGuesses.innerHTML = guessCounter;
		idResponse.innerHTML = aiResponse;
	}else {
		idResponse.innerHTML = "Please type in a number.";
	}
}

function buttonRestartHandler(){
	location.reload(true);
}

idStartbtn.onclick = buttonStartHandler;
idReloadbtn.onclick = buttonRestartHandler;
idSubmitbtn.onclick = buttonSubmitHandler;

