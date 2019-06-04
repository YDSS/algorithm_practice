/**
 * @file 791. Custom Sort String
 * @author arlenyang
 */

function isExisted(arr, i, bottom) {
    return i <= bottom && arr[i] != null;
}

function percolateDown(arr, i, bottom) {
    let latest = arr[i];

    let percolateDownR = (arr, i, bottom) => {
        let child = i * 2 + 1; // use arr[0] as root, so the left child is 2i + 1
        // if this node got two children, find the smaller one
        if (
            isExisted(arr, child, bottom) &&
            isExisted(arr, child + 1, bottom) &&
            arr[child].val > arr[child + 1].val
        ) {
            child += 1;
        }
        // if this node is leaf or it's smaller than it's children, this is the place to set latest node
        if (
            !isExisted(arr, child, bottom) ||
            (isExisted(arr, child, bottom) && latest.val < arr[child].val)
        ) {
            arr[i] = latest;
            return;
        }
        // percolate down one floor
        else {
            arr[i] = arr[child];
            percolateDownR(arr, child, bottom);
        }
    };
    percolateDownR(arr, i, bottom);
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function heapSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let n = arr.length - 1;
    // build heap
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        percolateDown(arr, i, n);
    }
    // delete min
    for (let i = arr.length - 1; i > 0; i--) {
        // swap root and the bottom, put the min node to the sorted range of arr
        swap(arr, 0, i);
        percolateDown(arr, 0, i - 1);
    }

    return arr;
}

/**
 * heap sort
 * T(n) = O(nlogn), S(n) = O(n)
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
function customSortString2(S, T) {
    if (!S.length || !T.length) {
        return T;
    }
    // init sort map according to S
    let sortMap = {};
    // set sequence number to every char in S by left to right order
    let counter = 1;
    for (let i = 0; i < S.length; i++) {
        // O(m)
        sortMap[S[i]] = counter++;
    }
    T = T.split("");
    let matchElements = []; // store chars both in T and S
    let matchIndexes = []; // store indexes of chars both in T and S
    for (let i = 0; i < T.length; i++) {
        // O(n)
        if (sortMap[T[i]] != null) {
            matchElements.push({
                key: T[i], // char in T
                val: sortMap[T[i]] // sequence number of char in sortMap
            });
            matchIndexes.push(i);
        }
    }
    // heap sorting
    heapSort(matchElements); // O(nlogn)
    for (let i = matchElements.length - 1, j = 0; i >= 0; i--, j++) {
        // O(n)
        let el = matchElements[i];
        T[matchIndexes[j]] = el.key;
    }

    return T.join("");
}

/**
 * bucket sort
 * T(n) = O(m + n), S(n) = O(m + n)
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
function customSortString(S, T) {
    if (!S.length || !T.length) {
        return T;
    }
    let sMap = [];
    for (let i = 0; i < S.length; i++) {
        sMap[i] = S[i];
    }
    let tMap = {};
    for (let i = 0; i < T.length; i++) {
        let char = T[i];
        if (tMap[char]) {
            tMap[char].count += 1;
        } else {
            tMap[char] = {
                count: 1,
                visited: false
            };
        }
    }
    let ret = "";
    for (let i = 0; i < sMap.length; i++) {
        let char = sMap[i];
        if (tMap[char]) {
            tMap[char].visited = true;
            let count = tMap[char].count;
            while (count-- > 0) {
                ret += char;
            }
        }
    }
    Object.keys(tMap).map(char => {
        if (!tMap[char].visited) {
            let count = tMap[char].count;
            while (count-- > 0) {
                ret += char;
            }
        }
    });

    return ret;
}

// let S = "cba"
// let T = "abcd"
// let S = ""
// let T = "abcd"
// let S = "asd"
// let T = ""
let S = "ased";
let T = "jfmnewldjrmjea";
// let S = "akdj";
// let T = "mdsqajfedjlwmmdkdrjqrh";
// let S = "abc"
// let T = "bbbcbaabbaaa"
console.log(customSortString(S, T));
