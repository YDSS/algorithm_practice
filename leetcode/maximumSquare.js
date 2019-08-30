/**
 * @flie 221. Maximal Square
 * @author arlenyang
 */

/**
 * not right!
 * 
 * dp solution:
 *  dp[i][j] is the maximum area of square which has (i, j) as its right-bottom pointer
 * 
 *  dp[i][j] = {
		if matrix[i][j] = 0 => dp[i][j] = 0
		if matrix[i][j] = 1 =>
			1. if dp[i - 1][j - 1] > 0, set sqrt(dp[i - 1][j - 1]) = k,  then only if matrix[(i - k) ~ i][j] == 1 && matrix[i][(j - k) ~ j] == 1 => dp [i][j] = 
square(sqrt(dp[i - 1][j - 1]) + 1)
2. if dp[i - 1][j - 1] === 0 => dp[i][j] = 1
	}

 * @param {character[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
    let n = matrix.length;
    if (n == 0) {
        return 0;
    }
    let m = matrix[0].length;
    if (m == 0) {
        return 0;
    }
    // 2-d array, same size with matrix
    let dp = Array.from({ length: n }, _ => Array.from({ length: m }, _ => 0));
    let max = 0;
    // init 1th row and 1th column, they equal matrix ceil coresponding
    for (let i = 0; i < n; i++) {
        dp[i][0] = matrix[i][0];
        if (max < dp[i][0]) {
            max = dp[i][0];
        }
    }
    for (let i = 0; i < m; i++) {
        dp[0][i] = matrix[0][i];
        if (max < dp[0][i]) {
            max = dp[0][i];
        }
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] == 0) {
                dp[i][j] = 0;
            } else {
                if (dp[i - 1][j - 1] == 0) {
                    dp[i][j] = 1;
                } else {
                    // get width of last square
                    let w = Math.sqrt(dp[i - 1][j - 1]);
                    let k = j - w;
                    // check horizental line
                    for (; k < j; k++) {
                        if (matrix[i][k] == 0) {
                            break;
                        }
                    }
                    if (k !== j) {
                        dp[i][j] = 1;
                    } else {
                        // check vertical line
                        let k = i - w;
                        for (; k < i; k++) {
                            if (matrix[k][j] == 0) {
                                break;
                            }
                        }
                        if (k !== i) {
                            dp[i][j] = 1;
                        } else {
                            // expand 1 in width
                            dp[i][j] = Math.pow(w + 1, 2);
                        }
                    }
                }
            }

            if (max < dp[i][j]) {
                max = dp[i][j];
            }
        }
    }
    console.log(dp);

    return max;
}

/**
 * dp solution
 *  dp[i][j] is the maximum side length of square which has a right-bottom ceil(i, j),
 *  dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]), cause only
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalSquare3(matrix) {
    let n = matrix.length;
    if (n === 0) {
        return 0;
    }
    let m = matrix[0].length;
    let dp = Array.from({ length: n }, _ => Array.from({ length: m }));

    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] == 0) {
                dp[i][j] = 0;
            } else {
                let left = i === 0 ? 0 : dp[i - 1][j];
                let top = j === 0 ? 0 : dp[i][j - 1];
                let leftTop = i === 0 || j === 0 ? 0 : dp[i - 1][j - 1];

                dp[i][j] = Math.min(left, Math.min(top, leftTop)) + 1;
            }
            if (max < Math.pow(dp[i][j], 2)) {
                max = Math.pow(dp[i][j], 2);
            }
        }
    }

    return max;
}

// matrix = [[1, 0, 1, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 0, 1, 0]];
// matrix = []
// matrix = [[], []]
// matrix = [[1]]
// matrix = [
//     ["0", "0", "0", "1"],
//     ["1", "1", "0", "1"],
//     ["1", "1", "1", "1"],
//     ["0", "1", "1", "1"],
//     ["0", "1", "1", "1"]
// ];
// matrix = []
// matrix = [[]]
matrix = [[1]]
console.log(maximalSquare3(matrix));
