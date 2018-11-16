let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];


function sudokuChecker(sudokuGrid) {
            
    function getRow(sudokuGrid) {
        for (let idx = 0; idx < 9; idx++) {
            let curRow = sudokuGrid[idx];
            curRow.sort();
            let compareNum = 0;
            for (let i = 0; i < 9; i++) {
                compareNum += 1;
                if (curRow[i] !== compareNum) {
                    return false;
                }
            }
        }
        return true;
    }
    // getRow(sudokuGrid);
    console.log(getRow(sudokuGrid));


    function getColumn(sudokuGrid) {
        for (let idx = 0; idx < 9; idx++) {
            let curCol = sudokuGrid[idx];
            curCol.sort();
            let compareNum = 0;
            for (let i = 0; i < 9; i++) {
                compareNum += 1;
                if (curCol[i] !== compareNum) {
                    return false;
                }
            }
        }
        return true;
    }
    // getColumn(sudokuGrid);
    console.log(getColumn(sudokuGrid))


    // coordinatesGenerator function generates these coordinates as x and y
    // 0,0; 1,0; 2,0; 
    // 0,1; 1,1; 2,1; 
    // 0,2; 1,2; 2,2;
    function coordinatesGenerator() {
        for (let idx1 = 0; idx1 < 3; idx1++) {
            for (let idx2 = 0; idx2 < 3; idx2++) {
                let x = idx1;
                let y = idx2;
                console.log('first x = ' + x);
                console.log('first y = ' + y);
                getSection(puzzle, x, y) // this feeds to getSection
            }
        }
    }

    function getSection(puzzle, x, y) {
        let gridNumsArr = [];
        y *= 3;
        x *= 3;
        console.log('x = ' + x);
        console.log('y = ' + y);
        for (let i = y; i < y+3; i++) {
            let currentRow = puzzle[i];
            console.log('curRow y = ' + currentRow)        
            for (let j = x; j < x+3; j++) {
                let curGridNum = currentRow[j];
                console.log('curGridNum = ' + curGridNum)
                gridNumsArr.push(curGridNum)
            }
        }
        console.log('unsorted gridNumsArr = ' + gridNumsArr);
        gridNumsArr.sort();
        console.log('sorted gridNumsArr   = ' + gridNumsArr);
        
        let compareNum = 0;
        for (let i = 0; i < 9; i++) {
            compareNum += 1;
            // console.log('gridNumsArr[i] = ' + gridNumsArr[i])
            // console.log('compareNum = ' + compareNum)
            if (gridNumsArr[i] !== compareNum) {
                return false;
            }
        }
        return true;
    }
    // coordinatesGenerator()
    // console.log(coordinatesGenerator());
        
}

sudokuChecker(puzzle);

// getRow(puzzle);
// getColumn(puzzle);
// sectionChecker(puzzle)

// getRow(puzzle, 8);
// // -> [ 3,2,8,1,9,6,5,4,7 ]

// getRow(puzzle, 0);
// // -> [ 8,9,5,7,4,2,1,3,6 ]

// getColumn(puzzle, 0);
// // -> [ 8,2,4,9,5,6,1,7,3 ]

// getColumn(puzzle, 8);
// // -> [ 6,5,2,8,4,1,3,9,7 ]

// getSection(puzzle, 0, 0);
// // -> [ 8,9,5,2,7,1,4,6,3 ]

// getSection(puzzle, 1, 0);
// // // -> [ 7,4,2,9,6,3,5,8,1 ]

function assertEquals (expect, result) {
    if (expect === )
}
