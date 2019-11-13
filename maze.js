function createMaze() {
		
	for (var i = 0; i < rowLength; i++) {
		for(var j = 0; j < columnLength; j++) {
				
			if ((i == 0) ||(j == 0)||(j == columnLength-1)||(i == rowLength-1)) {
				maze[i][j] = '█';
			} else {
				maze[i][j] = '';
			}
		}
	}
	maze[1][3] = '█'; maze[1][4] = '█';
	maze[2][3] = '█'; maze[2][4] = '█';
	maze[5][1] = '█'; maze[5][2] = '█';
	maze[5][3] = '█'; maze[5][4] = '█';
	maze[6][1] = '█'; maze[6][2] = '█';
	maze[6][3] = '█'; maze[6][4] = '█';

	maze[3][7] = '█'; maze[4][7] = '█';
	maze[5][7] = '█'; maze[6][7] = '█';
	maze[3][8] = '█'; maze[4][8] = '█';
	maze[5][8] = '█'; maze[6][8] = '█';

	maze[7][7] = '█'; maze[8][7] = '█';
	maze[9][7] = '█'; maze[10][7] = '█';
	maze[7][8] = '█'; maze[8][8] = '█';
	maze[9][8] = '█'; maze[10][8] = '█';

	maze[9][3] = '█'; maze[9][4] = '█';
	maze[9][5] = '█'; maze[9][6] = '█';
	maze[10][3] = '█'; maze[10][4] = '█';
	maze[10][5] = '█'; maze[10][6] = '█';

	maze[11][3] = '█'; maze[11][4] = '█';
	maze[12][3] = '█'; maze[12][4] = '█';
	maze[13][7] = '█'; maze[13][8] = '█';
	maze[14][7] = '█'; maze[14][8] = '█';

	maze[11][11] = '█'; maze[11][12] = '█';
	maze[12][11] = '█'; maze[12][12] = '█';
	maze[11][15] = '█'; maze[11][16] = '█';
	maze[12][15] = '█'; maze[12][16] = '█';

	maze[9][11] = '█'; maze[9][12] = '█';
	maze[10][11] = '█'; maze[10][12] = '█';
	maze[9][15] = '█'; maze[9][16] = '█';
	maze[10][15] = '█'; maze[10][16] = '█';

	maze[5][9] = '█'; maze[5][10] = '█';
	maze[5][11] = '█'; maze[5][12] = '█';
	maze[5][13] = '█'; maze[5][14] = '█';
	maze[5][15] = '█'; maze[5][16] = '█';
	maze[6][9] = '█'; maze[6][10] = '█';
	maze[6][11] = '█'; maze[6][12] = '█';
	maze[6][13] = '█'; maze[6][14] = '█';
	maze[6][15] = '█'; maze[6][16] = '█';
	maze[7][15] = '█'; maze[7][16] = '█';
	maze[8][15] = '█'; maze[8][16] = '█';

	maze[1][11] = '█'; maze[1][12] = '█';
	maze[2][11] = '█'; maze[2][12] = '█';
	maze[3][15] = '█'; maze[3][16] = '█';
	maze[4][15] = '█'; maze[4][16] = '█';
	maze[3][19] = '█'; maze[3][20] = '█';
	maze[4][19] = '█'; maze[4][20] = '█';

	maze[7][17] = '█'; maze[7][18] = '█';
	maze[7][19] = '█'; maze[7][20] = '█';
	maze[8][17] = '█'; maze[8][18] = '█';
	maze[8][19] = '█'; maze[8][20] = '█';

	maze[11][19] = '█'; maze[11][20] = '█';
	maze[12][19] = '█'; maze[12][20] = '█';
	maze[13][19] = '█'; maze[13][20] = '█';
	maze[14][19] = '█'; maze[14][20] = '█';

	maze[1][23] = '█'; maze[1][24] = '█';
	maze[2][23] = '█'; maze[2][24] = '█';
	maze[3][23] = '█'; maze[3][24] = '█';
	maze[4][23] = '█'; maze[4][24] = '█';
	maze[5][23] = '█'; maze[5][24] = '█';
	maze[6][23] = '█'; maze[6][24] = '█';
	maze[9][23] = '█'; maze[9][24] = '█';
	maze[10][23] = '█'; maze[10][24] = '█';
	maze[11][23] = '█'; maze[11][24] = '█';
	maze[12][23] = '█'; maze[12][24] = '█';
	maze[13][23] = '█'; maze[13][24] = '█';
	maze[14][23] = '█'; maze[14][24] = '█';

	maze[7][27] = '█'; maze[7][29] = '█';
	maze[7][28] = '█'; maze[7][30] = '█';
	maze[8][27] = '█'; maze[8][29] = '█';
	maze[8][28] = '█'; maze[8][30] = '█';

	maze[1][27] = '█'; maze[1][29] = '█';
	maze[1][28] = '█'; maze[1][30] = '█';
	maze[2][27] = '█'; maze[2][29] = '█';
	maze[2][28] = '█'; maze[2][30] = '█';
	maze[5][27] = '█'; maze[6][27] = '█';
	maze[5][28] = '█'; maze[6][28] = '█';

	maze[9][27] = '█'; maze[9][28] = '█';
	maze[10][27] = '█'; maze[10][28] = '█';
	maze[11][27] = '█'; maze[11][28] = '█';
	maze[11][31] = '█'; maze[11][32] = '█';
	maze[12][27] = '█'; maze[12][28] = '█';
	maze[12][31] = '█'; maze[12][32] = '█';
	maze[13][31] = '█'; maze[13][32] = '█';
	maze[14][31] = '█'; maze[14][32] = '█';

	maze[9][35] = '█'; maze[9][36] = '█';
	maze[10][35] = '█'; maze[10][36] = '█';
	maze[11][35] = '█'; maze[11][36] = '█';
	maze[12][35] = '█'; maze[12][36] = '█';

	maze[1][33] = '█'; maze[1][34] = '█';
	maze[2][33] = '█'; maze[2][34] = '█';
	maze[3][33] = '█'; maze[3][34] = '█';
	maze[4][33] = '█'; maze[4][34] = '█';
	maze[5][33] = '█'; maze[5][34] = '█';
	maze[6][33] = '█'; maze[6][34] = '█';
	maze[7][33] = '█'; maze[7][34] = '█';
	maze[8][33] = '█'; maze[8][34] = '█';

	maze[1][35] = '█'; maze[1][36] = '█';
	maze[2][35] = '█'; maze[2][36] = '█';
	maze[5][37] = '█'; maze[5][38] = '█';
	maze[6][37] = '█'; maze[6][38] = '█';

	//Start                Finish
	maze[7][0] = '⇰'; maze[1][39] = '⇰';
	maze[8][0] = '⇰'; maze[2][39] = '⇰';

	// User
	maze[currentY][currentX] = userSymbol;
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

function checkPosition() {
	let skullOne = firstSkull[firstSkullSteps];
	let skullTwo = secondSkull[secondSkullSteps];
	let skullThree = thirdSkull[thirdSkullSteps];
	let skullFour = fourthSkull[fourthSkullSteps];
	let skullFive = fifthSkull[fifthSkullSteps];
	let skullSix = sixthSkull[sixthSkullSteps];
	let skullSeven = seventhSkull[seventhSkullSteps];
	let skullEight = eigthSkull[eigthSkullSteps];
	if ((currentY == skullOne[0] && currentX == skullOne[1]) || 
		(currentY == skullTwo[0] && currentX == skullTwo[1]) || 
		(currentY == skullThree[0] && currentX == skullThree[1]) || 
		(currentY == skullFour[0] && currentX == skullFour[1]) || 
		(currentY == skullFive[0] && currentX == skullFive[1]) || 
		(currentY == skullSix[0] && currentX == skullSix[1]) || 
		(currentY == skullSeven[0] && currentX == skullSeven[1]) ||
		(currentY == skullEight[0] && currentX == skullEight[1])) {
		loss = true;
		console.log("YOU LOSE");
	} 
	else if ((currentY == 1 && currentX == 39) || (currentY == 2 && currentX == 39)) {
		console.log("YOU WIN");
	}
}