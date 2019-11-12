var maze = new Array(16).fill(0).map(()=> new Array(40).fill(0));
var rowLength = maze.length;
var	columnLength = maze[0].length;
var loss = false;
var currentY = 7;
var currentX = 1;

function displayMaze() {
	createMaze();
	for (var i = 0; i < rowLength; i++) {
		maze[i] += '<br />';
	}
	maze = maze.toString();

	while(maze.includes(",",0)) {
		maze = maze.replace(',',"");
	}

	document.getElementById("maze").innerHTML = maze;
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
		currentY +=1;
	}
}