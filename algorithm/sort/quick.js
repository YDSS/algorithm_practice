"use strict";
/**
 * @file implementation of quick sort,
 *  when the length of input array little than cutoff which is 10 by default,
 *  use insert sort instead to lift efficiency
 * @author YDSS
 */
Object.defineProperty(exports, "__esModule", { value: true });
const insert_1 = require("./insert");
function quickSort(arr) {
    const cutoff = 10;
    if (arr.length <= cutoff) {
        return insert_1.default(arr);
    }
    qSort(arr, 0, arr.length - 1);
    return arr;
}
exports.default = quickSort;
function qSort(arr, left, right) {
    // median cut 
    let { m, mEl } = median(arr, left, right);
    console.log(`m: ${m}`);
    let i = left + 1;
    let j = right - 2;
    while (true) {
        while (arr[i] < mEl) {
            i++;
        }
        while (arr[j] > mEl) {
            j--;
        }
        // jump out of loop when arr[i] or arr[j] equals arr[m]
        if (arr[i] === mEl || arr[j] === mEl) {
            break;
        }
        swap(arr, i, j);
    }
    qSort(arr, left, m);
    qSort(arr, m + 1, right);
}
function median(arr, left, right) {
    let middle = Math.floor((left + right) / 2);
    // sort the three element
    if (arr[left] > arr[middle]) {
        swap(arr, left, middle);
    }
    if (arr[left] > arr[right]) {
        swap(arr, left, middle);
        swap(arr, left, right);
    }
    else if (arr[middle] > arr[right]) {
        swap(arr, middle, right);
    }
    // move middle element to right - 1
    swap(arr, middle, right - 1);
    return {
        // middle position
        m: middle,
        // middle element which moved to right - 1
        mEl: arr[right - 1]
    };
}
function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
let arr = [11, 22, 5, 1, 3, 98, 20, 45, 27, 39, 13, 49];
console.log(quickSort(arr));
//# sourceMappingURL=quick.js.map