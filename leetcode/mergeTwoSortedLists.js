/**
 * @file Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 * @author arlenyang
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

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

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * insert l2 into l1, 
 * T(n) = O(n* (m + n/2)), S(n) = O(1)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode} l1
 */
function mergeTwoLists2(l1, l2) {
    // fake the head for l1 to be convient when inserting a node to the head of l1
    let fakeHead1 = new ListNode(null);
    fakeHead1.next = l1;

    let curL1;
    let tmp;
    let val;

    let curL2 = l2;
    while (curL2 != null) {
        tmp = curL2.next;
        val = curL2.val; 
        curL1 = fakeHead1;
        
        // skiping l1 until finding a node whose val is smaller or equal to current node of l2,
        //  or reach the end of l1
        while (curL1.next != null && val > curL1.next.val) {
            curL1 = curL1.next; 
        }
        // insert l2 to the end of l1
        if (curL1.next == null) {
            curL1.next = curL2; 
            curL2.next = null;
        }
        // insert l2 to the right place of l1
        else {
            curL2.next = curL1.next;
            curL1.next = curL2;
        }

        curL2 = tmp;
    } 

    return fakeHead1.next;
}

/**
 * create new list, use a tmp array to record val
 * T(n) = O(m + n), S(n) = O(m + n)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode} l1
 */
function mergeTwoLists(l1, l2) {
    let tmp = [];
    let curL1 = l1;
    let curL2 = l2;
    
    // insert val of l1 and l2 into tmp by ascend order
    while (curL1 != null && curL2 != null) {
        if (curL1.val > curL2.val) {
            tmp.push(curL2.val);
            curL2 = curL2.next;
        }
        else {
            tmp.push(curL1.val);
            curL1 = curL1.next;
        }
    }
    // insert the left
    if (curL1 == null) {
        while (curL2 != null) {
            tmp.push(curL2.val);
            curL2 = curL2.next;
        }
    }
    if (curL2 == null) {
        while (curL1 != null) {
            tmp.push(curL1.val);
            curL1 = curL1.next;
        }
    }
    // console.log(tmp)
    // build a new list from tmp by desc order
    let l3FakeHead = new ListNode(null);
    let curL3;
    // insert from head
    for (let i = tmp.length - 1; i > -1; i--) {
        curL3 = new ListNode(tmp[i]);
        curL3.next = l3FakeHead.next;
        l3FakeHead.next = curL3;
    }    

    return l3FakeHead.next;
}

let l1 = createLinkedList([1, 2, 4])
let l2 = createLinkedList([1, 3, 4])
console.log('l1: ')
printLinkedList(l1);
console.log('l2: ')
printLinkedList(l2);
let nl = mergeTwoLists(l1, l2);
console.log('new list: ')
printLinkedList(nl);