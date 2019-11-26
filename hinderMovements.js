//Bottom Left
var firstSkull = [[8,9], [9,9], [10,9], [11,9], [12,9], [13,9], [14,9], 
				  [14,10], [14,11], [14,12], [14,13], [14,14], [13,14], 
				  [12,14], [11,14], [10,14], [9,14], [8,14], [7,14], 
				  [7,13], [7,12], [7,11], [7,10], [7,9]];
//Bottom Left
var secondSkull = [[8,10], [9,10], [10,10], [11,10], [12,10], [13,10],
				   [13,10], [13,10], [13,11], [13,12], [13,13], [13,13],
				   [13,13], [12,13], [11,13], [10,13], [9,13], [8,13],
				   [8,13], [8,13], [8,12], [8,11], [8,10], [8,10]];

//Top Left
var thirdSkull = [[1,1], [2,1], [3,1], [4,1], [4,2], [4,3], [4,4], [4,5],
			      [4,6], [4,5], [4,4], [4,3], [4,2], [4,1], [3,1], [2,1]];

//Top Left
var fourthSkull = [[1,2], [2,2], [3,2], [3,2], [3,2], [3,3], [3,4], [3,5],
			      [3,6], [3,5], [3,4], [3,3], [3,2], [3,2], [3,2], [2,2]];

//Top Middle
var fifthSkull = [[2,17], [3,17], [4,17], [5,17], [6,17], [6,18], [6,19], 
				  [6,20], [6,21], [6,22], [5,22], [4,22], [3,22], [2,22],
 				  [1,22], [1,21], [1,20], [1,19], [1,18], [1,17]];

//Top Middle
var sixthSkull = [[2,18], [3,18], [4,18], [5,18], [5,18], [5,18], [5,19],
 				  [5,20], [5,21], [5,21], [5,21], [4,21], [3,21], [2,21],
 				  [2,21], [2,21], [2,20], [2,19], [2,18], [2,18]];

//Bottom Right
var seventhSkull = [[9,17], [9,18], [9,19], [9,20], [9,21], [9,22], 
					[10,22], [11,22], [12,22], [13,22], [14,22], [13,22],
					[12,22], [11,22], [10,22], [9,22], [9,21], [9,20], 
					[9,19], [9,18]];

//Bottom Right
var eigthSkull = [[10,17], [10,18], [10,19], [10,20], [10,21], [10,21], [10,21], 
				  [11,21], [12,21], [13,21], [14,21], [13,21], [12,21], 
				  [11,21], [10,21], [10,21], [10,21], [10,20], [10,19], [10,18]];

var ninthSkull = []

var firstSkullSteps = 0;
var secondSkullSteps = 0;
var thirdSkullSteps = 0;
var fourthSkullSteps = 0;
var fifthSkullSteps = 0;
var sixthSkullSteps = 0;
var seventhSkullSteps = 0;
var eigthSkullSteps = 0;

var hinderArray = [[firstSkull, firstSkullSteps], 
				   [secondSkull, secondSkullSteps], 
				   [thirdSkull, thirdSkullSteps], 
				   [fourthSkull, fourthSkullSteps],
				   [fifthSkull, fifthSkullSteps],
				   [sixthSkull, sixthSkullSteps],
				   [seventhSkull, seventhSkullSteps],
				   [eigthSkull, eigthSkullSteps]];

function movement(path, steps){
	let newPosition = path[steps];
	let oldPosition = path[steps-1];
	if (steps == 0) {
		oldPosition = path[path.length-1];
	}
	maze[oldPosition[0]][oldPosition[1]] = ''; maze[newPosition[0]][newPosition[1]] = '☀';
}

function hinderMovement() {
	/*for (var i = 0; i < hinderArray.length; i++) {
		movement(hinderArray[i][0], hinderArray[i][1])
		let steps = hinderArray[i][1];
		steps ++;
		if(steps == hinderArray[i][0].length) {
			steps = 0;
		}
	}*/
	movement(firstSkull, firstSkullSteps);
	firstSkullSteps++;
	if (firstSkullSteps == firstSkull.length) {
		firstSkullSteps = 0;
	}

	movement(secondSkull, secondSkullSteps);
	secondSkullSteps++;
	if (secondSkullSteps == secondSkull.length) {
		secondSkullSteps = 0;
	}

	movement(thirdSkull, thirdSkullSteps);
	thirdSkullSteps++;
	if (thirdSkullSteps == thirdSkull.length) {
		thirdSkullSteps = 0;
	}

	movement(fourthSkull, fourthSkullSteps);
	fourthSkullSteps++;
	if (fourthSkullSteps == fourthSkull.length) {
		fourthSkullSteps = 0;
	}

	movement(fifthSkull, fifthSkullSteps);
	fifthSkullSteps++;
	if (fifthSkullSteps == fifthSkull.length) {
		fifthSkullSteps = 0;
	}

	movement(sixthSkull, sixthSkullSteps);
	sixthSkullSteps++;
	if (sixthSkullSteps == sixthSkull.length) {
		sixthSkullSteps = 0;
	}

	movement(seventhSkull, seventhSkullSteps);
	seventhSkullSteps++;
	if (seventhSkullSteps == seventhSkull.length) {
		seventhSkullSteps = 0;
	}

	movement(eigthSkull, eigthSkullSteps);
	eigthSkullSteps++;
	if (eigthSkullSteps == eigthSkull.length) {
		eigthSkullSteps = 0;
	}
	checkPosition();
}