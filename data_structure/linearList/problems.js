const SingleLinkedList = require("./singleLinkedList");

/**
 * @desc order a single linked list with head by aesc
 *
 * @param {_Node} head
 */
function sortByAesc(head) {
    // make this variable as the head of the old list
    //   leave the first node to the new list
    let oldListHead = head.next.next;
    // make a new list with head and the first node with data
    head.next.next = null;

    let newListPre;
    let oldListNext;
    while (oldListHead != null) {
        newListPre = head;
        oldListNext = oldListHead.next;

        while (newListPre.next != null && newListPre.next.data < oldListHead.data) {
            newListPre = newListPre.next;
        }
        // insert 
        oldListHead.next = newListPre.next;
        newListPre.next = oldListHead;

        oldListHead = oldListNext;
    }
}

function test_sorByAesc() {
    let head = new SingleLinkedList([3, 2, 5, 1, 4, 7, 6, 19, 30, 8], "tail");
    // SingleLinkedList.walk(head);
    sortByAesc(head);

    SingleLinkedList.walk(head);
}

// test_sorByAesc();

/**
 * @desc delete all nodes those data equal `x` 
 *  in a headless single linked list by recursion
 * 
 * @problem what if the first node's data equal `x`, if we delete it, 
 *  the list will be broken. this function can't return head node.
 * 
 * @param {*} x
 * @param {_Node} pre previous node of current node
 * @param {_Node} cur 
 */
function recurseDeleteNode(x, pre, cur) {
    if (cur == null) {
        return;
    }

    let next = cur.next;
    if (cur.data === x) {
        // remove current node
        pre.next = next;

        return recurseDeleteNode(x, pre, next);
    }
    
    recurseDeleteNode(x, cur, next);
}

function test_recurseDeleteNode() {
    let head = new SingleLinkedList([1, 3, 2, 4, 1, 5,1,2, 5], 'tail', null);
    // SingleLinkedList.walk(head);

    recurseDeleteNode(1, head, head.next);
    SingleLinkedList.walk(head);
}

test_recurseDeleteNode();