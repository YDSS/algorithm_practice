/**
 * @file Given a linked list, remove the n-th node from the end of list and return its head.
 * @author arlenyang
 */

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
 * T(n) = O(n) S(n) = O(n)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd2(head, n) {
    if (head.next == null) {
        return null;
    }
    let fakeHead = new ListNode(null); // empty head node for iterator
    fakeHead.next = head;
    let tmp = [fakeHead];
    let item = fakeHead;
    let i = 1;

    while (item = item.next) {
        tmp[i] = item;
        i++;
    }
    // remove nth node
    let nPos = tmp.length - n;
    if (n === 1) {
        tmp[nPos - 1].next = null;
    }
    else {
        tmp[nPos - 1].next = tmp[nPos + 1]
    }

    return fakeHead.next;
}

/**
 * two index between n distance
 * T(n) = O(n) S(n) = O(1)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    let p = head; // point nth at end
    let q = head; // point the last node at end
    let between = n - 1;
    // let q move first util p and q has between distance
    while (between-- > 0) {
        q = q.next; 
    }

    let prev;
    while (q = q.next) {
        prev = p;
        p = p.next;
    }
    if (prev == null) {
        if (p.next == null) {
            return null;
        }

        return p.next;
    }
    else {
        prev.next = p.next;
        return head;
    }
}

let createLinkedList = arr => {
    let prev; 
    let head;
    arr.map((num, i) => {
        if (i === 0) {
            head = prev = new ListNode(num);
            return;
        }

        let cur = new ListNode(num);
        prev.next = cur;
        prev = cur;
    }) 

    return head;
}
let printLinkedList = head => {
    let item = head;
    let str = '';
    while (item) {
        str += `${item.val} -> `;
        item = item.next;
    }

    console.log(str);
}

let arr = [1, 3, 5, 4, 2, 10];
let n = 2;
// let arr = [1];
// let n = 1
// let arr = [3,7,9,3,5,8,0]
// let n = 1 
// let arr = [1, 2];
// let n = 2;
let linkedList = createLinkedList(arr);
printLinkedList(linkedList);
let head = removeNthFromEnd(linkedList, n);
printLinkedList(head);