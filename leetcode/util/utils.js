function ListNode(val) {
    this.val = val;
    this.next = null;
}
exports.ListNode = ListNode;

exports.createLinkedList = function(arr) {
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
exports.printLinkedList = function (head) {
    let item = head;
    let str = '';
    while (item) {
        str += `${item.val} -> `;
        item = item.next;
    }

    console.log(str.slice(0, str.length - 4));
}

exports.printBinaryTree = function (root) {
    const OFFSET = 4;
    let printR = (node, offset) => {
        if (node == null) {
            return;
        }

        console.log(" ".repeat(offset) + node.val);
        if (!node.left && node.right) {
            console.log(`${" ".repeat(offset + OFFSET)}null`);
        }
        else {
            printR(node.left, offset + OFFSET) 
        }
        printR(node.right, OFFSET + offset);
    } 

    printR(root, 0);
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
exports.swap = swap;