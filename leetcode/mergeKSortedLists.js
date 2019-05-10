/**
 * @file Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 * @author arlenyang
 */

let { createLinkedList, printLinkedList } = require("./util/utils");

function isExisted(arr, i, bottom) {
    return i <= bottom && arr[i] != null;
}

function percolateDown(arr, i, bottom) {
    let latest = arr[i];

    let percolateDownR = (arr, i, bottom) => {
        let child = i * 2 + 1; // use arr[0] as root, so the left child is 2i + 1
        // if this node got two children, find the smaller one
        if (
            isExisted(arr, child, bottom) &&
            isExisted(arr, child + 1, bottom) &&
            arr[child] > arr[child + 1]
        ) {
            child += 1;
        }
        // if this node is leaf or it's smaller than it's children, this is the place to set latest node
        if (
            !isExisted(arr, child, bottom) ||
            (isExisted(arr, child, bottom) && latest < arr[child])
        ) {
            arr[i] = latest;
            return;
        }
        // percolate down one floor
        else {
            arr[i] = arr[child];
            percolateDownR(arr, child, bottom);
        }
    };
    percolateDownR(arr, i, bottom);
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function heapSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let n = arr.length - 1;
    // build heap
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        percolateDown(arr, i, n);
    }
    // delete min
    for (let i = arr.length - 1; i > 0; i--) {
        // swap root and the bottom, put the min node to the sorted range of arr
        swap(arr, 0, i);
        percolateDown(arr, 0, i - 1);
    }

    return arr;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * T(n) = O(N*logN), N is total number of elements,
 * S(n) = O(N)
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let arr = [];
    // put every element in lists into arr, while the lists 
    //  may not just two dimension
    let getNumsR = lists => {
        if (Array.isArray(lists)) {
            lists.map(list => {

                getNumsR(list);
            })
        }
        else {
            let item = lists;
            while (item != null) {
                arr.push(item.val);
                item = item.next;
            }
        }
    }
    getNumsR(lists);
    // sorted by heapsort, O(N*logN)
    heapSort(arr);
    if (!arr.length) {
        return null;
    }
    // create a list, insert sorted arr into it
    // notice that heapsort is sorting by desc order,
    // so using head insert method will get the ascend order
    let newList = new ListNode(null); // fake head
    let newItem;
    for (let i = 0; i < arr.length; i++) { // O(N)
        newItem = new ListNode(arr[i]);
        newItem.next = newList.next;
        newList.next = newItem;
    }

    return newList.next;
};

// let arr = [5, 4, 1, 3, 6, 11, 10, 9];
// console.log(heapSort(arr));
// let l1 = createLinkedList([1, 3, 4]);
// let l2 = createLinkedList([2, 6, 9, 10]);
// let l3 = createLinkedList([3, 7, 20, 40]);
// printLinkedList(l1)
// printLinkedList(l2)
// printLinkedList(l3)
// // let l4 = mergeKLists([l1, l2, l3]);
// let l4 = mergeKLists([l1, [l2, l3]]);
// printLinkedList(l4)

// let lone = createLinkedList([1]);
// let l4 = mergeKLists([lone]);
// printLinkedList(l4)

// let l4 = mergeKLists([]);
let l4 = mergeKLists([[]]);
printLinkedList(l4)