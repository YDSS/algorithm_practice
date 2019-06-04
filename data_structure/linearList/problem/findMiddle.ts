/**
 * @file find the middle of a single linked list
 * @author arlenyang
 */

import LinkedList from "../singleLinkedList";
import LinkedNode from "../ListNode"

/**
 * T(n) = O(n/2), S(n) = O(1)
 * @param list 
 */
function findMiddle(list: LinkedList): {mid: number, node: LinkedNode} {
    // empty list 
    if (list.head.next == null) {
        return {
            mid: 0,
            node: null,
        }
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
        }
    }
    if (quick.next == null) { // length of list is even, so mid + 1 is the middle of list 
        return {
            mid: mid + 1,
            node: slow.next,
        }
    }
}

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // even
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // old
// let arr = []; // empty
let arr = [1]; // only one element
let list = new LinkedList(arr, 'tail');
list.print();
console.log(findMiddle(list));