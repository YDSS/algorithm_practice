"use strict";
/**
 * @file implementation of radix sorting, assume radix is 10
 * @author arlenyang
 */
Object.defineProperty(exports, "__esModule", { value: true });
const singleLinkedList_1 = require("../../data_structure/linearList/singleLinkedList");
/**
 * T(n) = O(d * (n + m)) ~= O(n), d is the max length of these nums,
 *  n is arr.length, m is the size of bucket, here is 10
 *
 * S(n) = O(n)
 * @param arr array of unordered nums
 */
function radixSort(arr) {
    // find max num, get it's length
    let max = Number.NEGATIVE_INFINITY;
    arr.map(num => {
        if (max < num) {
            max = num;
        }
    });
    let d = ("" + max).length;
    // init bucket
    let bucket = Array(10);
    for (let i = 0; i < bucket.length; i++) {
        bucket[i] = new singleLinkedList_1.default();
    }
    /**
     * find specific bit in the num
     * @param num
     * @param i 1, 10, 100, 1000, ...
     * @param radix
     */
    let findBit = (num, i, radix) => {
        return Math.floor(num / i) % radix;
    };
    for (let i = 0; i < d; i++) {
        // distribute
        arr.map(num => {
            let bit = findBit(num, Math.pow(10, i), 10);
            bucket[bit].insert(num, 'tail');
        });
        // collect
        let count = -1; // pair to index of arr from starting
        bucket.map(buc => {
            let item;
            while (item = buc.delete()) {
                item = item[0];
                arr[++count] = item.data;
            }
        });
    }
    return arr;
}
let arr = [0, 1, 512, 343, 134, 64, 64, 216];
console.log(radixSort(arr));
//# sourceMappingURL=radixSort.js.map