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
    let i = getMiddleOfTwoNums(iMin, iMax);
    // j is cursor of B, j = (m + n + 1) % 2 - i
    let j;

    while (i <= n) {
        j = Math.floor((m + n + 1) / 2) - i;
        console.log(`i: ${i}`);
        console.log(`j: ${j}`);

        if (
            (j === 0 || i === n || B[j - 1] <= A[i]) &&
            (i === 0 || j === m || A[i - 1] <= B[j])
        ) {
            // i and j is the result we find
            break;
        }

        if (i < n && B[j - 1] > A[i]) {
            // means i is too small
            iMin++;
            console.log(`iMin: ${iMin}`);
        }

        if (j > 0 && A[i - 1] > B[j]) {
            // means i is too large
            iMax--;
            console.log(`iMax: ${iMax}`);
        }

        i = getMiddleOfTwoNums(iMin, iMax);
        console.log("--------");
    }

    // handle edge case like i = 0, j = 0, i = n, j = m
    let leftNum; // max num in left array
    let rightNum; // min num in right array
    if (A[i - 1] == null) {
        console.log('a')
        leftNum = B[j - 1];
    } else if (B[j - 1] == null) {
        console.log('b')
        leftNum = A[i - 1];
    } else {
        console.log('c')
        leftNum = Math.max(A[i - 1], B[j - 1]);
    }

    if (A[i] == null) {
        rightNum = B[j];
    } else if (B[j] == null) {
        rightNum = A[i];
    } else {
        rightNum = Math.min(A[i], B[j]);
    }
    console.log(`leftNum: ${leftNum}`)
    console.log(`rightNum: ${rightNum}`)

    if (isOdd) {
        return leftNum;
    } else {
        return (leftNum + rightNum) / 2;
    }

    function getMiddleOfTwoNums(num1, num2) {
        return Math.ceil((num1 + num2) / 2);
    }
}

// let A = [1, 2, 3, 6];
// let B = [4];
// let A = [];
// let B = [1, 2];
let A = [100001]
let B = [100000]

console.log(findMedianSortedArrays(A, B));
