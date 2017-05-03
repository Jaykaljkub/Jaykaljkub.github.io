/* This will grab all the elements in the document that I will be altering*/
var idStartbtn = document.getElementById("startbtn");
var idEndbtn = document.getElementById("endbtn");
var idResetbtn = document.getElementById("resetbtn");
var idRounds = document.getElementById("rounds");
var idPlayerschoice = document.getElementById("playerschoice");
var idCompchoice = document.getElementById("compchoice");
var idResults = document.getElementById("resultsmessage");
var idPlayerscore = document.getElementById("playerscore");
var idCompscore = document.getElementById("compscore");
var idTie = document.getElementById("ties");
var idPlayerscoreEnd = document.getElementById("playerscoreEnd");
var idCompscoreEnd = document.getElementById("compscoreEnd");
var idTiesEnd = document.getElementById("tiesEnd");

/* This will start the computers first choice*/
var compChoice=0;

/* This will initialize all the needed variables for the program and score keeping*/
var round = 1;
var playerScore=0;
var compScore=0;
var ties=0;

/*This will inialize the aspects of the results message*/
var winner = "";
var choiceA = "";
var choiceB = "";

/* This will add the images into an array and hold the images for the hover and click handlers*/
var optionList = ["Rock", "Paper", "Scissors"];
var srcRollover = ["images/rockHover.jpg", "images/paperHover.jpg", "images/scissorsHover.jpg"];
var srcSelect = ["images/rockSelect.jpg", "images/paperSelect.jpg", "images/scissorsSelect.jpg"];
var srcPlayer = ["images/rock.jpg", "images/paper.jpg", "images/scissors.jpg"];
var srcComp = ["images/rock.jpg", "images/paper.jpg", "images/scissors.jpg"];
var playerList = document.getElementsByClassName("human");
var computerList = document.getElementsByClassName("comp");


/*The following are the event handlers*/
/*The click handler will run the bulk of the game logic, once clicked the players choice will be 'submitted'*/
var clickHandler = function () {
	var i = this.index;
	this.src = srcSelect[i];
	/*This will control the display under the Game Stats for what the player choses.*/
	idPlayerschoice.innerHTML = optionList[i];
	Number(i);
	
	if(round > 10){
		buttonEndHandler();
		idPlayerscoreEnd.innerHTML = playerScore;
		idCompscoreEnd.innerHTML = compScore;
		idTiesEnd.innerHTML = ties;
	}
	
	/*This will reset the computer's image to default*/
	computerList[compChoice].src = srcComp[compChoice];
	/*This will display a question mark until the computer chooses it's choice.*/
	idCompchoice.innerHTML = "?";
	
	/*This will randomly pick for the computer's choice*/
	compChoice = Math.floor((Math.random()*2)+1);
	
	/*The following if blocks will compare the computer's choice with the players choice and determine the winner*/
	if(i==0){
		if(compChoice == 1){
			compScore++;
			compWin(i);
		}else if (compChoice == 2){
			playerScore++;
			playWin(i);
		}else{
			ties++;
			tieWin(i);
		}
	}else if(i==1){
		if(compChoice == 2){
			compScore++;
			compWin(i);
		}else if (compChoice == 0){
			playerScore++;
			playWin(i);
		}else{
			ties++;
			tieWin(i);
		}
	}else if(i==2){
		if(compChoice == 0){
			compScore++;
			compWin(i);
		}else if (compChoice == 1){
			playerScore++;
			playWin(i);
		}else{
			ties++;
			tieWin(i);
		}
	}
	
	/*This will add a delay for displaying the computer's choice and the score*/
	var compTimer = setTimeout(chose, 3000);
	var roundTimer = setTimeout(display, 3000);
	
	idRounds.innerHTML = round;
	round++;
	
	
}

var mouseoverHandler = function () {
	var i = this.index;
	this.src = srcRollover[i];
}

var mouseoutHandler = function () {
	var i = this.index;
	this.src = srcPlayer[i];
}

function buttonStartHandler(){
	document.querySelector("#rulescreen").style.display = "none";
	document.querySelector("#gamescreen").style.display = "block";
}

function buttonRestartHandler(){
	location.reload(true);
}

function buttonEndHandler(){
	document.querySelector("#gamescreen").style.display = "none";
	document.querySelector("#endscreen").style.display = "block";
		idPlayerscoreEnd.innerHTML = playerScore;
		idCompscoreEnd.innerHTML = compScore;
		idTiesEnd.innerHTML = ties;
}

/*This code maps the event handlers to the 'target' picture; from module 9 on canvas*/
for(var i=0; i<playerList.length; i++){
	var playerNode = playerList[i];
	playerNode.onclick = clickHandler;
	playerNode.onmouseover = mouseoverHandler;
	playerNode.onmouseout = mouseoutHandler;
	
	playerNode.index = i;
}

/*These functions will replace the winning message.*/
function compWin (i) {
	winner = "Computer ";
	choiceA = optionList[compChoice];
	choiceB = optionList[i];
}

function playWin (i) {
	winner = "You ";
	choiceA = optionList[i];
	choiceB = optionList[compChoice];
}

function tieWin (i) {
	winner = "NO ONE ";
	choiceA = "The same objects do not";
	choiceB = "themselves";
}

/*This fucntion will display the messages in the game status.*/
function display () {
	idResults.innerHTML = winner + "wins!! " + choiceA +" beat(s) " + choiceB;
	idPlayerscore.innerHTML = playerScore;
	idCompscore.innerHTML = compScore;
	idTie.innerHTML = ties;
}

function chose() {
	computerList[compChoice].src = srcSelect[compChoice];
	/*This will control what is displayed in the game stats for the computer's choice.*/
	idCompchoice.innerHTML = optionList[compChoice];
}

idStartbtn.onclick = buttonStartHandler;
idResetbtn.onclick = buttonRestartHandler;
idEndbtn.onclick = buttonEndHandler;
