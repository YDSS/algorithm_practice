/**
 * find median of two sorted arrays, T(n) = O(log(m + n)) m, n are the length of the two arrays
 *
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
function findMedianSortedArrays(A, B) {
    // make sure that n >= m
    if (A.length < B.length) {
        let tmp = A;
        A = B;
        B = tmp;
    }

    let n = A.length;
    let m = B.length;

    let isOdd = (m + n) % 2 > 0;
    // iMin and iMax is range of i, 0 <= i <= n
    let iMin = 0;
    let iMax = n;
    // i is cursor of A
    let i;
    // j is cursor of B, j = (m + n + 1) % 2 - i
    let j;
    let halfLen = Math.floor((m + n + 1) / 2);

    while (iMin <= iMax) {
        i = getMiddleOfTwoNums(iMin, iMax);
        j = halfLen - i;
        // console.log(`i: ${i}`);
        // console.log(`j: ${j}`);

        if (i < n && B[j - 1] > A[i]) {
            // means i is too small
            iMin++;
            // console.log(`iMin: ${iMin}`);
        }
        else if (i > 0 && A[i - 1] > B[j]) {
            // means i is too large
            iMax--;
            // console.log(`iMax: ${iMax}`);
        }
        else {
            // i and j is the result we find
            break;  
        }

        // console.log("--------");
    }

    // handle edge case like i = 0, j = 0, i = n, j = m
    let leftNum = 0; // max num in left array
    if (i === 0) {
        leftNum = B[j - 1];
    } else if (j === 0) {
        leftNum = A[i - 1];
    } else {
        leftNum = Math.max(A[i - 1], B[j - 1]);
    }
    // console.log(`leftNum: ${leftNum}`)
    if (isOdd) {
        return leftNum;
    }

    let rightNum = 0; // min num in right array
    if (i === n) {
        rightNum = B[j];
    } else if (j === m) {
        rightNum = A[i];
    } else {
        rightNum = Math.min(A[i], B[j]);
    }
    // console.log(`rightNum: ${rightNum}`)
    
    return (leftNum + rightNum) / 2;

    function getMiddleOfTwoNums(num1, num2) {
        return Math.ceil((num1 + num2) / 2);
    }
}

// let A = [1, 2, 3, 6];
// let B = [4];
let A = [];
let B = [1];
// let A = [100001]
// let B = [100000]

console.log(findMedianSortedArrays(A, B));
