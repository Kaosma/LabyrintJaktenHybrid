var maze = new Array(16).fill(0).map(()=> new Array(40).fill(0));
var rowLength = maze.length;
var	columnLength = maze[0].length;
var loss = false;
var win = false;
var currentY = 7;
var currentX = 1;
var userSymbol = "☺";

setInterval(function(){
	displayMaze();
	hinderMovement();
}, 500 );

function displayMaze() {
	var mazeString = "";
	for (var i = 0; i < rowLength; i++) {
		var mazeRow = "";
		for (var j = 0; j < maze[i].length; j++) {
			mazeRow += maze[i][j];
		}
		mazeRow += '<br />';
		mazeString += mazeRow;
	}
	document.getElementById("maze").innerHTML = mazeString;
}

function moveUp(){
	if(maze[currentY-1][currentX] == '█') {
		maze[currentY][currentX] = userSymbol;
	} else {
		maze[currentY-1][currentX] = userSymbol;
		maze[currentY][currentX] = '';
		currentY -=1;
	}
}

function moveDown(){
	if(maze[currentY+1][currentX] == '█') {
		maze[currentY][currentX] = userSymbol;
	} else {
		maze[currentY+1][currentX] = userSymbol;
		maze[currentY][currentX] = '';
		currentY +=1;
	}
}

function moveLeft(){
	if(maze[currentY][currentX-1] == '█' || maze[currentY][currentX-1] == '⇰') {
		maze[currentY][currentX] = userSymbol;
	} else {
		maze[currentY][currentX-1] = userSymbol;
		maze[currentY][currentX] = '';
		currentX -=1;
	}
}

function moveRight(){
	if(maze[currentY][currentX+1] == '█') {
		maze[currentY][currentX] = userSymbol;
	} else {
		maze[currentY][currentX+1] = userSymbol;
		maze[currentY][currentX] = '';
		currentX +=1;
	}
}

document.onkeyup = function(event) { getKEY(event) }

function getKEY(event) {
	var key = event.keyCode;
	switch (key) {
		
		case 37:
			moveLeft()
			break;
		
		case 38:
			moveUp()
			break;
		
		case 39:
			moveRight()
			break;
		
		case 40:
			moveDown()
			break;
	}
}