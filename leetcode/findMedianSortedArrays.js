/**
 * @file 4. Median of Two Sorted Arrays
 * @author arlenyang
 * @solution https://medium.com/@hazemu/finding-the-median-of-2-sorted-arrays-in-logarithmic-time-1d3f2ecbeb46
 */

/**
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

function findMedianSortedArrays2(A, B) {
    // swap A,B if B is shorter, make sure always using shorter array to binary search
    if (A.length > B.length) {
        let tmp = A;
        A = B;
        B = A;
    }

    let m = A.length;
    let n = B.length;
    let isTotalEven = isEven(m + n);
    let half = Math.ceil((m + n) / 2);
    let low = Math.max(0, half - n); // min amount of A split into left of (A U B)
    let high = Math.min(half, m); // max amount of A split into left of (A U B)
    let leftNumOfA;

    // we can always find the right combination
    while (low <= high) {
        // binary search for pivot of index of left part of A
        leftNumOfA = Math.floor((low + high) / 2); // amount of A split into left of (A U B)

        // notice that if leftNumOfA is 0, a can be undefined, which means logic below is not right,
        // but it's ok because undefined == 0 when compare to other number
        // and when it comes to 0, which means it's the last solution, we know it's always a combination,
        // so that must it, and the entire loop ended
        let a = A[leftNumOfA - 1]; // last elem in left part of A
        let ap = A[leftNumOfA]; // elem next to a
        let b = B[half - leftNumOfA - 1]; // last elem in left part of B
        let bp = B[half - leftNumOfA]; // elem next to b
        if (a >= b) {
            if (bp != null && a <= bp) {
                // found the right combination
                break;
            } else {
                // left of A is too much
                high = leftNumOfA - 1;
            }
        } else {
            if (ap != null && b <= ap) {
                // found
                break;
            } else {
                // left of A is too litte
                low = leftNumOfA + 1;
            }
        }

        // or
    }

    let medianOfLeft;
    let lastLeftOfA = A[leftNumOfA - 1];
    let lastLeftOfB = B[half - leftNumOfA - 1];
    if (lastLeftOfA == null) {
        medianOfLeft = lastLeftOfB;
    }
    else if (lastLeftOfB == null) {
        medianOfLeft = lastLeftOfA;
    }
    else {
        medianOfLeft = Math.max(A[leftNumOfA - 1], B[half - leftNumOfA - 1]);
    }

    if (!isTotalEven) {
        // odd, return median directly
        return medianOfLeft;
    } else {
        // even, need find the median of right part,
        // which is the smaller one of the first elem from A and the first elem from B,
        // still need consider if any of them is null
        let medianOfRight;
        let firstRightOfA = A[leftNumOfA];
        let firstRightOfB = B[half - leftNumOfA];
        if (firstRightOfA == null) {
            medianOfRight = firstRightOfB;
        } else if (firstRightOfB == null) {
            medianOfRight = firstRightOfA;
        } else {
            medianOfRight = Math.min(firstRightOfA, firstRightOfB);
        }

        return (medianOfLeft + medianOfRight) / 2;
    }
}

function isEven(num) {
    let half = num / 2;
    return half === Math.floor(half);
}


// let A = [1, 2, 3, 6];
// let B = [4];
let A = [];
let B = [1];
// let A = [100001]
// let B = [100000]

console.log(findMedianSortedArrays(A, B));
