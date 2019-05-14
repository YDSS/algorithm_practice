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
