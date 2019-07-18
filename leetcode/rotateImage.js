/**
 * @file 48. Rotate Image
 * @author arlenyang
 * @solution rotate matrix with 90 deg = transpose of matrix + reverse each row
 */

/**
 * T(n) = O(n^2) S(n) = O(1)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    let n = matrix.length;
    // edge cases
    if (n < 2) {
        return;
    }
    // transpose of matrix
    for (let r = 0; r < n; r++) {
        for (let c = r; c < n; c++) {
            if (r === c) {
                continue;
            }
            let tmp = matrix[r][c];
            matrix[r][c] = matrix[c][r];
            matrix[c][r] = tmp;
        }
    }
    // reverse each row
    for (let r = 0; r < n; r++) {
        matrix[r].reverse();
    }
}

function print2DMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i])
    }
}

// let matrix = []
let matrix = [[1]]
// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

rotate(matrix);
print2DMatrix(matrix);
