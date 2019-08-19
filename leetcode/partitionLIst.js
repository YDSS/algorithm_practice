/**
 * @file 86. Partition List
 * @author arlenyang
 */

const { createLinkedList, printLinkedList} = require('./util/utils')

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
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
    // exclude list has less than 2 nodes
    if (head == null || head.next == null) {
        return head;
    }
    let fakeHead = new ListNode(null);
    fakeHead.next = head;
    let p = fakeHead;
    let cur = fakeHead;
    while (cur.next != null) {
        if (cur.next.val >= x) {
            cur = cur.next;
        }
        else {
            // when p and cur point the same node, no need to delete the node
            if (p === cur) {
                cur = cur.next;
                p = p.next;
            }
            else {
                // delte node
                let node = cur.next;
                cur.next = cur.next.next;
                // insert it after p
                node.next = p.next;
                p.next = node;
                // p move forward one step
                p = p.next;
            }
        }
    }

    return fakeHead.next;
}

// let arr = [1,4,3,2,5,2]
// let x = 3;
let arr =  [1,2,2,4,2];
let x = 3;
let head = createLinkedList(arr);
printLinkedList(head);

head = partition(head, x);
printLinkedList(head);