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
    };
    // init tables
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let val = board[i][j];
            if (val !== ".") {
                if (!rowTable[i]) {
                    rowTable[i] = new Set();
                }
                rowTable[i].add(val);
                if (!columnTable[j]) {
                    columnTable[j] = new Set();
                }
                columnTable[j].add(val);
                let boxIndex = getBoxIndex(i, j);
                if (!boxTable[boxIndex]) {
                    boxTable[boxIndex] = new Set();
                }
                boxTable[boxIndex].add(val);
            }
        }
    }
    // get proper nums those can be filled in the ceil(row, column)
    let getValidNums = (row, column) => {
        let nums = [];
        for (let i = 1; i < 10; i++) {
            i += "";
            if (
                !rowTable[row].has(i) &&
                !columnTable[column].has(i) &&
                !boxTable[getBoxIndex(row, column)].has(i)
            ) {
                nums.push(i);
            }
        }

        return nums;
    };
    let findNextEmptyCeil = (row, column) => {
        let start = row;
        for (let i = row; i < 9; i++) {
            for (let j = (start === i ? column : 0); j < 9; j++) {
                if (board[i][j] === ".") {
                    return {
                        i,
                        j
                    };
                }
            }
        }

        return null
    };
    let found = false;
    let bt = (row, column) => {
        if (found) {
            return;
        }
        // find next empty ceil from (row, column)
        let ceil = findNextEmptyCeil(row, column);
        if (ceil == null) {
            found = true;
            return;
        }
        let { i, j } = ceil;
        let nums = getValidNums(i, j);
        if (nums.length === 0) {
            return;
        }
        nums.map(num => {
            let boxIndex = getBoxIndex(i, j);
            // add num into tables
            rowTable[i].add(num);
            columnTable[j].add(num);
            boxTable[boxIndex].add(num);
            board[i][j] = num;
            console.log(i, j, num, nums)
            console.log(rowTable[i])
            console.log(columnTable[j])
            console.log(boxTable[boxIndex])
            // fill next possible num
            bt(i, j);
            if (found) {
                return;
            }
            // restore changes before
            rowTable[i].delete(num);
            columnTable[j].delete(num);
            boxTable[boxIndex].delete(num);
            board[i][j] = ".";
        });
        // if (i === 8 && j === 8) {
        //     found = true;
        // }
    };
    bt(0, 0);
}

let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
solveSudoku(board);
console.log(board);
