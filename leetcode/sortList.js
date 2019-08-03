/**
 * @file 148. Sort List
 * @author arlenyang
 * @solution merge sort in linked list, using slow and fast pointers to get middle
 */

const { printLinkedList, createLinkedList } = require('./util/utils')
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function sortList(head) {
    // edge cases
    if (head == null) {
        return null;
    }
    if (head.next == null) {
        // has 1 node
        return head;
    }
    if (head.next.next == null) {
        // has 2 nodes
        if (head.val > head.next.val) {
            let tmp = head.next;
            head.next.next = head;
            head.next = null;
            head = tmp;
        }
        return head;
    }

    let slow = head; // when move end, slow is the middle of the list
    let fast = head;
    // find middle, O(n/2)
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // dc
    let tmp = slow.next;
    slow.next = null;
    slow = tmp;
    slow = sortList(slow); // the last half
    head = sortList(head); // the first half

    return mergeList(slow, head);
}

function mergeList(l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    if (l1.val > l2.val) {
        l2.next = mergeList(l2.next, l1);
        return l2;
    }
    l1.next = mergeList(l1.next, l2);
    return l1;
}

// let arr = [4,3,2,5,0]
// let arr = [0]
let arr = [0, 3, 2]
let head = createLinkedList(arr);
printLinkedList(head);
head = sortList(head);
printLinkedList(head);