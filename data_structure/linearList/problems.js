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

test_sorByAesc();
