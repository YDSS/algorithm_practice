/**
 * @file Given a linked list, swap every two adjacent nodes and return its head.
 *  You may not modify the values in the list's nodes, only nodes itself may be changed.
 * @author arlenyang
 */

let { createLinkedList, printLinkedList} = require("./util/utils");

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * T(n) = O(n), S(n) = O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
    let fakeHead = new ListNode(null);
    fakeHead.next = head;
    let cur = head;
    let pre = fakeHead;
    let next;

    while (cur != null && cur.next != null) {
        next = cur.next;
        cur.next = next.next;
        pre.next = next;
        next.next = cur;
        pre = cur;
        cur = cur.next;
    }

    return fakeHead.next;
}

// let head = createLinkedList([1, 2, 3, 4]);
// let head = createLinkedList([1, 2, 3, 4, 5]);
let head = createLinkedList([1]);
head = swapPairs(head);
printLinkedList(head);