var maze = new Array(16).fill(0).map(()=> new Array(40).fill(0));
var rowLength = maze.length;
var	columnLength = maze[0].length;
var loss = false;
var win = false;
var currentY = 7;
var currentX = 1;
var monsterOneY = 8;
var monsterOneX = 9;
var monsterTwoY = 8;
var monsterTwoX = 10;
setInterval(displayMaze, 1000 );

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
		maze[currentY][currentX] = '☻';
	} else {
		maze[currentY-1][currentX] = '☻';
		maze[currentY][currentX] = '';
		currentY -=1;
	}
}

function moveDown(){
	if(maze[currentY+1][currentX] == '█') {
		maze[currentY][currentX] = '☻';
	} else {
		maze[currentY+1][currentX] = '☻';
		maze[currentY][currentX] = '';
		currentY +=1;
	}
}

function moveLeft(){
	if(maze[currentY][currentX-1] == '█' || maze[currentY][currentX-1] == '⇰') {
		maze[currentY][currentX] = '☻';
	} else {
		maze[currentY][currentX-1] = '☻';
		maze[currentY][currentX] = '';
		currentX -=1;
	}
}

function moveRight(){
	if(maze[currentY][currentX+1] == '█') {
		maze[currentY][currentX] = '☻';
	} else {
		maze[currentY][currentX+1] = '☻';
		maze[currentY][currentX] = '';
		currentX +=1;
	}
}

function getKEY(event) {
	var key = event.keyCode;
	switch (key) {
		//37
		case 123:
			moveLeft()
			break;
		//38
		case 126:
			moveUp()
			break;
		//39
		case 124:
			moveRight()
			break;
		//40
		case 125:
			moveDown()
			break;
	}
}