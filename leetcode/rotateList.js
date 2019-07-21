/**
 * @file 61. Rotate List
 * @author arlenyang
 * @solution turn to circular linked list
 */

const { createLinkedList, printLinkedList} = require("./util/utils")
 /**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight(head, k) {
    if (k === 0) {
        return head;
    }
    if (head === null || head.next === null) {
        return head;
    }

    // find tail, and get length of list by the way
    let len = 1;
    let tail = head;
    while (tail.next !== null) {
        len++;
        tail = tail.next;
    }
    let steps = len - (k % len);
    // link tail and head, make the list a circular list
    tail.next = head;
    while (steps-- > 0) {
        tail = tail.next;
    }
    // break link between new tail and new head
    let newHead = tail.next;
    tail.next = null;

    return newHead;
}

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let arr = [1, 2, 3, 4, 5];
// let k = 6;
// let arr = [5];
// let k = 7;
let head = createLinkedList(arr);
printLinkedList(head);
printLinkedList(rotateRight(head, k))