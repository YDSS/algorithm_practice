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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // add head for l1, l2, which make traverse more natural
    // remove head when traverse over
    var head1 = new ListNode(null);
    head1.next = l1;
    var head2 = new ListNode(null);
    head2.next = l2;
    // result list
    var ret = new ListNode(null);
    var retCur = ret;
    var retNext = null;
    // carray flag
    var carrayFlag = false;

    while (head1.next || head2.next) {
        var l1Val;
        var l2Val;
        if (head1.next) {
            l1Val = +head1.next.val;
        }
        else {
            l1Val = 0;
        }
        if (head2.next) {
            l2Val = +head2.next.val;
        }
        else {
            l2Val = 0;
        }

        console.log(l1Val, l2Val);
        var sum = l1Val + l2Val + (carrayFlag ? 1 : 0);
        carrayFlag = false;
        if (sum > 9) {
            carrayFlag = true;
            sum -= 10;
        }

        retCur.val = sum;
        retNext = new ListNode(null);
        retCur.next = retNext;
        retCur = retNext;

        head1 = head1.next;
        head2 = head2.next;
    }    

    return ret;
};

function generateLinkedList(numstr) {
    var nums = numstr.split('').reverse();
    var root = new ListNode(null);
    var cur = root;
    var next = null; 
    
    for (var i = 0; i < nums.length; i++) {
        cur.val = nums[i];
        next = new ListNode(null);

        if (i < nums.length - 1) {
            cur.next = next;
            cur = next;
        }
    }

    return root;
}

function printLinkedList(root) {
    var print_str = root.val;
    var cur = root.next;

    while (cur) {
        print_str += '-> ' + cur.val;
        cur = cur.next;
    }

    console.log(print_str);
}

function test() {
    var num1 = '342';
    var num2 = '465';
    var l1 = generateLinkedList(num1);
    var l2 = generateLinkedList(num2);

    printLinkedList(l1);
    printLinkedList(l2);
    
    var ret = addTwoNumbers(l1, l2);
    printLinkedList(ret);
}

test();