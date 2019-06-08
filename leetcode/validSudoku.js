/**
 * @file 36. Valid Sudoku
 * @author arlenyang
 */

/**
 * use hashtable to check if has repetition in row, column, and 3-3 box
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku2(board) {
    let rowTable = [];
    let columnTable = [];
    let boxTable = [];

    /**
     * check if the value is existed in the specific table,
     *  if not, add it into table
     * @param {number} value number in ceil
     * @param {Array<object>} table
     * @param {number} i which row, column or box in table
     */
    let checkTable = (value, table, i) => {
        if (!table[i]) {
            table[i] = {};
        }
        if (table[i][value]) {
            return false;
        }
        table[i][value] = 1;

        return true;
    };

    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            let value = board[row][column];
            if (value !== ".") {
                // only has 9 3-3 boxes in the board, boxIndex is the sequence number in which box of current point
                let boxIndex = Math.floor(row / 3) * 3 + Math.floor(column / 3);
                if (
                    !checkTable(value, rowTable, row) ||
                    !checkTable(value, columnTable, column) ||
                    !checkTable(value, boxTable, boxIndex)
                ) {
                    return false;
                }
            }
        }
    }

    return true;
}

/**
 * use bit manipulation instead of hashtable
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
    let rowTable = [];
    let columnTable = [];
    let boxTable = [];

    /**
     * check if the value is existed in the specific table,
     *  if not, add it into table
     * 
     * use bit map instead of hash map in every table
     * 
     * T(n) = O(9 ^ 2), S(n) = O(n)
     * @param {number} value number in ceil
     * @param {Array<object>} table
     * @param {number} i which row, column or box in table
     */
    let checkTable = (value, table, i) => {
        if (table[i] == null) {
            table[i] = 0;
        }
        if (has(table[i], value)) {
            return false;
        }
        table[i] = add(table[i], value);

        return true;
    };

    let has = (bitMap, value) => {
        return (bitMap & (1 << value - 1)) > 0;
    }

    let add = (bitMap, value) => {
        return bitMap | (1 << value - 1);
    }

    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            let value = board[row][column];
            if (value !== ".") {
                // only has 9 3-3 boxes in the board, boxIndex is the sequence number in which box of current point
                let boxIndex = Math.floor(row / 3) * 3 + Math.floor(column / 3);
                if (
                    !checkTable(value, rowTable, row) ||
                    !checkTable(value, columnTable, column) ||
                    !checkTable(value, boxTable, boxIndex)
                ) {
                    return false;
                }
            }
        }
    }

    return true;
}

// let board = [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ];
let board = [
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
];
console.log(isValidSudoku(board));
