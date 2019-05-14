/**
 * @file Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 *
 * k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
 * @author arlenyang
 */

let { createLinkedList, printLinkedList } = require('./util/utils')

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * iterate k times from head, put every node we took into head, just like head-inserting method of linked list
 * S(n) = O(1), T(n) = O(n)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
    let fakeHead = new ListNode(null);
    fakeHead.next = head;
    let preFixed = fakeHead;
    let pre;
    let start = head;
    let end = head;

    while(start != null) {
        // detect if next group has k nodes,
        //  if not, break the loop and finish
        let i = 0;
        for (; i < k - 1 && end.next != null; i++) {
            end = end.next; 
        }
        if (i !== k - 1) {
            break;
        }
        end = end.next;
        // head-inserting from start
        pre = start;
        start = start.next;
        for (let i = 0; i < k - 1; i++) {
            pre.next = start.next;
            start.next = preFixed.next;
            preFixed.next = start;

            start = pre.next;
        }

        preFixed = pre;
        start = end;
    } 

    return fakeHead.next;
}

let head = createLinkedList([1, 2, 3, 4, 5, 6,7])
// let head = createLinkedList([1, 2])
// let head = createLinkedList([1])
// let head = createLinkedList([1,2,3,4,5])
printLinkedList(head);
head = reverseKGroup(head, 1);
printLinkedList(head)