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
            // O(n)
            let bit = findBit(num, Math.pow(10, i), 10);
            bucket[bit].insert(num, "tail");
        });
        // collect
        let count = -1; // pair to index of arr from starting
        bucket.map(buc => {
            // O(m)
            let item;
            while ((item = buc.delete())) {
                item = item[0];
                arr[++count] = item.data;
            }
        });
    }
    return arr;
}
/**
 * using a tmp array instead of linked list
 *
 * @param arr
 */
function radixSort2(arr) {
    let n = arr.length;
    // find max num, get it's length
    let max = Number.NEGATIVE_INFINITY;
    arr.map(num => {
        if (max < num) {
            max = num;
        }
    });
    let d = ("" + max).length;
    for (let i = 0; i < d; i++) {
        let count = Array.from({ length: 10 }, x => 0);
        let output = new Array(n);
        let exp = Math.pow(10, i);
        // counting in tmp array, it's different from linked list way
        for (let j = 0; j < n; j++) {
            count[Math.floor(arr[j] / exp) % 10]++;
        }
        // move pos of count into right place, e.g.
        // count = [0,1,2,0,1,0,0,0,0,3] => 
        //  [0,1,3,3,4,4,4,4,4,7], this is the pos (pos - 1 is index) of every num in output array,
        //  why not have 2, cause in pos 2 has 2 nums, [0,1,2] => [0,1,3],
        //  when the first num in index 2(pos 3 - 1) put into output, reduce 1, then the second one will be in index 1 (pos 2 - 1)
        for (let j = 1; j < count.length; j++) {
            count[j] += count[j - 1];
        }
        // put nums in current radix into right places of output
        // **it must iterate from right to left!!** test [10, 1, 20, 11], only iterate that way the order of nums distributed is right, left to right way is opposite
        for (let j = n - 1; j >= 0; j--) {
            let countI = Math.floor(arr[j] / exp) % 10;
            let index = count[countI] - 1;
            output[index] = arr[j];
            // reduce 1 in count cause we get out of one num
            count[countI]--;
        }
        // copy
        for (let j = 0; j < n; j++) {
            arr[j] = output[j];
        }
    }
    return arr;
}
let arr = [0, 1, 512, 343, 134, 64, 64, 216];
// console.log(radixSort(arr));
console.log(radixSort2(arr));
//# sourceMappingURL=radixSort.js.map