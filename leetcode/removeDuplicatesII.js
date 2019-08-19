/**
 * @file 82. Remove Duplicates from Sorted List II
 * @author arlenyang
 */

const { printLinkedList, createLinkedList } = require('./util/utils')

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
function deleteDuplicates(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let fakeHead = new ListNode(null);
    fakeHead.next = head;
    // start pointer of repeating sequence
    let p = fakeHead;
    let cur = head;
    let count = 1;

    while (cur != null) {
        if (cur.next == null || cur.val !== cur.next.val) {
            // remove dups
            if (count > 1) {
                p.next = cur.next;
                cur = p.next;
            } else {
                p = cur;
                cur = cur.next;
            }
            count = 1;
        } else {
            count++;
            // p stand
            cur = cur.next;
        }
    }

    return fakeHead.next;
}

// let arr = [1,2,3,3,4,4,5]
// let arr = [1,1,1,2,3,3,4,4,5]
let arr = [1]
let head = createLinkedList(arr);
printLinkedList(head);

head = deleteDuplicates(head);
printLinkedList(head);