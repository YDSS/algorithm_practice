// [-3, -2, -1, 0],
// [4,   5,  6,  7],
// [10, 11, 16, 20],
// [23, 30, 34, 50]

function searchMatrix(matrix, target) {
    let n = matrix.length;
    if (n === 0) {
        return false;
    }
    let m = matrix[0].length;
    if (target < matrix[0][0] || target > matrix[n - 1][m - 1]) {
        return false;
    }

    // find the row target in
    let row = -1;
    for (let i = 0; i < n; i++) {
        // O(n)
        let left = matrix[i][0];
        let right = matrix[i][m - 1];
        if (target < left) {
            return false;
        }
        if (target === left) {
            return true;
        }
        if (target < right) {
            row = i;
            break;
        }
        if (target === right) {
            return true;
        }
    }
    if (row === -1) {
        return false;
    }
    // find in row by binary search
    low = 0;
    high = m - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (target === matrix[row][mid]) {
            return true;
        }
        if (target < matrix[row][mid]) {
            high = mid - 1;
        }
        if (target > matrix[row][mid]) {
            low = mid + 1;
        }
    }

    return false;
}

// let matrix = [
//     [-3, -2, -1, 0],
//     [4, 5, 6, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
// ];
// let target = 3;
// let target = -5;
// let target = 5;
// let target = 51;

// let matrix = []
let matrix = [[1]]
let target = 1;
console.log(searchMatrix(matrix, target))
