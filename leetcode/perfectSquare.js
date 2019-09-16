/**
 * @file 279. Perfect Squares
 * @author arlenyang
 * @solution kind like knapsack problem
 */

function getPerfectSquareSequence(n) {
    let seq = [];
    let i = 1;
    while (true) {
        if (Math.pow(i, 2) <= n) {
            seq.push(Math.pow(i, 2));
            i++;
        } else {
            break;
        }
    }

    return seq;
}

/**
 * bt with notebook
 * T(n) = O(n^2) ?
 * S(n) = O(n^2)
 * @param {number} n
 * @return {number}
 */
function numSquares(n) {
    let seq = getPerfectSquareSequence(n);
    if (n === seq[seq.length - 1]) {
        return 1;
    }

    let dp = Array.from({ length: n + 1 }, x =>
        Array.from({ length: n + 1 }, y => 0)
    );
    let min = Number.POSITIVE_INFINITY;
    let bt = (sum, count) => {
        if (sum > n) {
            return;
        }
        // record in dp
        if (dp[count][sum]) {
            // console.log(count, sum)
            return;
        }
        dp[count][sum] = 1;

        if (sum === n) {
            min = Math.min(min, count);
            return;
        }
        for (let i = 0; i < seq.length; i++) {
            bt(sum + seq[i], count + 1);
        }
    };
    for (let i = 0; i < seq.length; i++) {
        bt(seq[i], 1);
    }

    return min;
}

// dp, like knapsack
// T(n) = O(n^2 * k), k is the length of square sequence
// 2-d, is not the optimal solution
function numSquares2(n) {
    let seq = getPerfectSquareSequence(n);
    if (n === seq[seq.length - 1]) {
        return 1;
    }
    // init dp[n][n], the 0th row is the 1th count
    let dp = Array.from({ length: n }, x => Array.from({ length: n + 1 }, y => 0));
    // init the 0th row
    for (let i = 0; i < seq.length; i++) {
        dp[0][seq[i]] = 1;
    }
    // T(n) = O(n^2 * k), k is the length of square sequence
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if (dp[i - 1][j]) {
                // for (let k = 0; k < seq.length; k++) {
                for (let k = seq.length - 1; k >= 0; k--) {
                    if (j + seq[k] < n) {
                        dp[i][j + seq[k]] = 1;
                    } else if (j + seq[k] === n) {
                        return i + 1;
                    }
                }
            }
        }
    }
}

/**
 * T(n) = O(nlogn)
 * dp[i] means the minimum count when n === i
 * dp[i] = min(...dp[i - j^2]) + 1, j^2 <= i is the perfect square number
*/
function numSquares3(n) {
    let dp = Array.from({length: n + 1}, _ => 0);
    for (let i = 1; i <= n; i++) {
        let min = Number.POSITIVE_INFINITY; 
        for (let j = 1; j*j <= i; j++) {
            min = Math.min(min, dp[i - j*j]);  
        }
        dp[i] = min + 1;
    }

    return dp[n];
}

// n = 5;
n = 12;
// n = 13;
// n = 1;
// n = 16;
// n = 7168;
console.log(numSquares3(n));
