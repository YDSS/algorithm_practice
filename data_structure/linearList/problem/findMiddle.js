"use strict";
/**
 * @file find the middle of a single linked list
 * @author arlenyang
 */
Object.defineProperty(exports, "__esModule", { value: true });
const singleLinkedList_1 = require("../singleLinkedList");
function findMiddle(list) {
    // empty list 
    if (list.head.next == null) {
        return {
            mid: 0,
            node: null,
        };
    }
    let mid = -1; // index of middle
    let quick = list.head;
    let slow = list.head;
    while (quick != null && quick.next != null) {
        slow = slow.next;
        quick = quick.next.next;
        mid++;
    }
    if (quick == null) { // length of list is old, so mid is the middle of list
        return {
            mid,
            node: slow,
        };
    }
    if (quick.next == null) { // length of list is even, so mid + 1 is the middle of list 
        return {
            mid: mid + 1,
            node: slow.next,
        };
    }
}
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // even
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // old
// let arr = []; // empty
let arr = [1]; // only one element
let list = new singleLinkedList_1.default(arr, 'tail');
list.print();
console.log(findMiddle(list));
//# sourceMappingURL=findMiddle.js.map