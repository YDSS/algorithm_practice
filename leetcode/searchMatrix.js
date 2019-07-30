// [-3, -2, -1, 0],
// [4,   5,  6,  7],
// [10, 11, 16, 20],
// [23, 30, 34, 50]

function searchMatrix(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    if (target < matrix[0][0] || target > matrix[n - 1][m - 1]) {
        return false;
    }

    // find the row target maybe in by binary search
    let low = 0,
        high = n - 1;
    while (low <= high) {
        if (low === high) {
            if (target < matrix[low][0]) {
                return false;
            } else {
                break;
            }
        }

        let mid = Math.floor((low + high) / 2);
        if (target === matrix[mid][0]) {
            return true;
        }
        if (target < matrix[mid][0]) {
            high = mid - 1;
        }
        if (target > matrix[mid][0]) {
            low = mid + 1;
        }
    }
    let row = low;
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
