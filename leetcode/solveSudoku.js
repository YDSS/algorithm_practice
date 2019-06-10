/**
 * @file 37. Sudoku Solver
 * @author arlenyang
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
    let rowTable = [];
    let columnTable = [];
    let boxTable = [];
    let getBoxIndex = (row, column) => {
        return Math.floor(row / 3) * 3 + Math.floor(column / 3);
    } 
    // init tables
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let val = board[i][j]
            if (val !== '.') {
                if (!rowTable[i]) {
                    rowTable[i] = new Set();
                }
                rowTable[i].add(val)
                if (!columnTable[i]) {
                    columnTable[i] = new Set();
                }
                columnTable[i].add(val)
                let boxIndex = getBoxIndex(i, j);
                if (!boxTable[boxIndex]) {
                    boxTable[boxIndex] = new Set();
                }
                boxTable[boxIndex].add(val)
            }
        }
    }
    let bt = (row, column) => {
        for (let i = row; i < 9; i++) {
            for (let j = column; j< 9; j++) {
                
            }
        }
    }
}