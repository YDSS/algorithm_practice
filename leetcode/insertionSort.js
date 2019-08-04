/**
 * @file 147. Insertion Sort List
 * @author arlenyang
 */

const { printLinkedList, createLinkedList } = require("./util/utils");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function insertionSortList(head) {
    if (head == null) return null;
    if (head.next == null) return head;

    let fakeHead = new ListNode(Number.NEGATIVE_INFINITY);
    fakeHead.next = head;
    let pre = head;
    let cur = head.next;
    let it;
    while (cur != null) {
        it = fakeHead;

        while (cur.val > it.next.val) {
            it = it.next;
        }

        // cur is already in the right place
        if (it.next === cur) {
            pre = cur;
            cur = cur.next;
        } else {
            // delete cur
            pre.next = cur.next;
            // put it into right place of sorted list
            cur.next = it.next;
            it.next = cur;

            cur = pre.next;
        }
    }

    return fakeHead.next;
}

// let arr = [5, 2, 1, 3, 4, 9];
// let arr = [1];2
let arr = [];
let head = createLinkedList(arr);
printLinkedList(head);
head = insertionSortList(head);
printLinkedList(head);
