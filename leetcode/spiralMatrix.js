// spiral matrix
function spiralOrder2(matrix) {
    // TODO: edge cases
    let m = matrix.length;
    let n = matrix[0].length;
    let ret = [];

    if (m === 0 && n === 0) {
        return ret;
    }
    // only 1 row
    if (m === 1) {
        return matrix[0];
    }
    // only 1 column
    if (n === 1) {
        for (let i = 0; i < m; i++) {
            ret.push(matrix[i][0]);
        }
        return ret;
    }

    // directions of traversing, only one direction is true at any time
    let isRight = true; // start point is left-top element
    let isDown = false;
    let isLeft = false;
    let isUp = false;

    for (let r = 0; r < Math.ceil(m / 2); r++) {
        let columnStart = r;
        let columnEnd = columnStart + n - 2 * r;
        let rowStart = r;
        let rowEnd = rowStart + m - 2 * r;
        // start point
        let i = rowStart;
        let j = columnStart;
        while (true) {
            // stop condition
            if (isUp && i === rowStart && j === columnStart) {
                isUp = false;
                isRight = true;
                break;
            }

            console.log(i, j);
            console.log(isRight, isDown, isLeft, isUp);
            ret.push(matrix[i][j]);
            if (isRight) {
                if (j >= columnEnd - 1) {
                    j = columnEnd - 1;
                    // i++;
                    isRight = false;
                    isDown = true;
                } else {
                    j++;
                }
            }
            if (isDown) {
                if (i >= rowEnd - 1) {
                    i = rowEnd - 1;
                    // j--;
                    isDown = false;
                    isLeft = true;
                } else {
                    i++;
                }
            }
            if (isLeft) {
                if (j <= columnStart) {
                    j = columnStart;
                    // i--;
                    isLeft = false;
                    isUp = true;
                } else {
                    j--;
                }
            }
            if (isUp) {
                if (i <= rowStart) {
                    i = rowStart;
                } else {
                    i--;
                }
            }
        }
    }

    return ret;
}

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    // TODO: edge cases
    let ret = [];
    let m = matrix.length;
    if (m === 0) {
        return ret;
    }
    let n = matrix[0].length;
    if (n === 1) {
        // only 1 column
        for (let i = 0; i < m; i++) {
            ret.push(matrix[i][0]);
        }
        return ret;
    }

    for (let r = 0; r < Math.ceil(m / 2); r++) {
        let rowEnd = r + m - r * 2;
        let columnEnd = r + n - r * 2;
        // top row
        for (let i = r; i < columnEnd; i++) {
            ret.push(matrix[r][i]);
        }
        // if only has 1 row, no need traverse below
        if (r < rowEnd - 1) {
            // right column, column doesn't include the elements of row, e.g. matrix[r][columnEnd - 1] and matrix[rowEnd - 1][columnEnd - 1];
            for (let j = r + 1; j < rowEnd - 1; j++) {
                ret.push(matrix[j][columnEnd - 1]);
            }
            // bottom row
            for (let i = columnEnd - 1; i >= r; i--) {
                ret.push(matrix[rowEnd - 1][i]);
            }
            // if only has 1 column, no need to traverse this
            if (r < columnEnd - 1) {
                // left column
                for (let j = rowEnd - 2; j > r; j--) {
                    ret.push(matrix[j][r]);
                }
            }
        }
    }

    return ret;
}

// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9,10,11,12]
//   ]
// let matrix = [
//     [1, 2, 3, 4],
// ]
// let matrix = [
//     [1],
//     [2],
//     [3],
//     [4],
// ]
// let matrix = []
// let matrix = [[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13], [14, 15, 16]];
let matrix = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]];
console.log(spiralOrder(matrix));
