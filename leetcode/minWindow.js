/**
 * @file 76. Minimum Window Substring
 * @author arlenyang
 *
 * @solution using an array to store the indexes where chars in t are in s, then it's a problem to find the smallest interval in these arrays
 */

const { printLinkedList } = require("./util/utils");

function Node(val) {
    this.val = val;
    this.next = null;
}

/**
 * n is length of s, m is length of t
 * T(n) = O(m + n), S(n) = (m + n)
 *
 * can not hold the case that t has duplicates
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow2(s, t) {
    if (t.length === 0 || s.length === 0) {
        return "";
    }
    if (t.length === 1) {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === t[0]) {
                return t[0];
            }
        }
        return "";
    }
    // collect chars in t
    let map = {};
    for (let i = 0; i < t.length; i++) {
        // O(m)
        if (map[t[i]] == null) {
            map[t[i]] = new Node(null); // head
        }
    }
    // collect indexes in s
    for (let i = 0; i < s.length; i++) {
        // O(n)
        if (map[s[i]] != null) {
            let cur = map[s[i]]; // get head
            while (cur.next != null) {
                cur = cur.next;
            }
            cur.next = new Node(i);
        }
    }
    // convert map to array, the order is not important
    let arr = [];
    for (let key in map) {
        // O(m)
        if (map.hasOwnProperty(key)) {
            // this is the case which a char in t is not in s
            if (map[key].next == null) {
                return "";
            }
            arr.push(map[key]); // push head into arr
        }
    }
    // print arr
    // for (let i = 0; i < arr.length; i++) {
    //     printLinkedList(arr[i]);
    // }
    let window = new Array(arr.length);
    // init window, which is pick the first node of every list
    for (let i = 0; i < arr.length; i++) {
        // O(m)
        window[i] = arr[i].next.val;
    }

    let minRange = Number.POSITIVE_INFINITY;
    let minIndex;
    let maxIndex;
    while (true) {
        // will iterate n/m times, O(n/m * m) = O(n)
        let curMinIndex = 0;
        let curMaxIndex = 0;
        // find the minimun in the window
        for (let i = 1; i < window.length; i++) {
            // O(m)
            if (window[i] < window[curMinIndex]) {
                curMinIndex = i;
            }
            if (window[i] > window[curMaxIndex]) {
                curMaxIndex = i;
            }
        }
        if (window[curMaxIndex] - window[curMinIndex] < minRange) {
            minRange = window[curMaxIndex] - window[curMinIndex];
            minIndex = window[curMinIndex];
            maxIndex = window[curMaxIndex];
        }
        // replace the min with its next
        if (arr[curMinIndex].next.next == null) {
            break;
        } else {
            // delete the min, and replace it in window
            let nextMin = arr[curMinIndex].next.next;
            arr[curMinIndex].next = nextMin;
            window[curMinIndex] = nextMin.val;
        }
        // print arr
        // for (let i = 0; i < arr.length; i++) {
        //     printLinkedList(arr[i]);
        // }
    }
    // console.log(minIndex, maxIndex)
    // convert window to string
    return s.slice(minIndex, maxIndex + 1);
}

/**
 * slide window
 * n is length of s, m is length of t
 * T(n) = O(m + n), S(n) = (m + n)
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// steps:
// 1. create a hashmap A to store counting of every unique chars in t
// 	at meanwhile create a hashmap B to store current window has how many
// 	unique chars in t
// 2. create a filtered list of s, which contains pairs of [index, char] of every char in t,
// 3. init window and start expend it utill right pointer reach the end
function minWindow(s, t) {
    if (s.length === 0 || t.length === 0) {
        return "";
    }
    // create hashmap to store counting of chars in t
    let countMap = {};
    // amount of unique chars in t
    let required = 0;
    for (let i = 0; i < t.length; i++) {
        if (countMap[t[i]] == null) {
            required++;
            countMap[t[i]] = 0;
        }
        countMap[t[i]]++;
    }
    // create hashmap to store current window contains
    let currentMap = {};
    for (let c in countMap) {
        if (countMap.hasOwnProperty(c)) {
            currentMap[c] = 0;
        }
    }
    // create a filtered s, which is a array with pairs, e.g.
    // [['A', 0], ['B', 10], ...]
    let filteredS = [];
    for (let i = 0; i < s.length; i++) {
        if (countMap[s[i]] != null) {
            filteredS.push([s[i], i]);
        }
    }
    // console.log(filteredS)
    // init window
    let i = 0;
    let j = 0;
    let minWindow = { len: Number.POSITIVE_INFINITY, left: 0, right: 0 };
    // when a char c is collected, which is currentMap[c] has reached the count in countMap, formed++.
    // formed === required means it is a valid window now
    let formed = 0;
    let isIMove = false;
    while (j < filteredS.length) {
        let [c, right] = filteredS[j];
        if (!isIMove) { // j is moving 1 step
            currentMap[c]++;
            if (currentMap[c] === countMap[c]) {
                formed++;
            }
        }
        if (formed === required) {
            let [leftC, left] = filteredS[i];
            // console.log(left, right)
            // console.log(currentMap)
            // console.log(formed)
            // got a valid window
            if (right - left + 1 < minWindow.len) {
                // got a new min window
                minWindow.len = right - left + 1;
                minWindow.left = left;
                minWindow.right = right;
            }

            // move left pointer to shrink the window
            isIMove = true;
            i++;
            currentMap[leftC]--;
            if (currentMap[leftC] < countMap[leftC]) {
                formed--;
            }
        } else {
            isIMove = false;
            j++;
        }
    }
    // console.log(minWindow)

    if (minWindow.len === Number.POSITIVE_INFINITY) {
        return "";
    }
    return s.slice(minWindow.left, minWindow.right + 1);
}

// S = "ADOBECODEBANC", T = "ABC"
// S = "SDKALSJDLKSA", T = "A"
// S = "SDKALSJDLKSA", T = "AB"
S = "SDKALSJDLKSA", T = "AK"
// (S = "SDKALSJDLKSA"), (T = "AKL");
console.log(minWindow(S, T));
