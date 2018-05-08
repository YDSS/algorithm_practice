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
    var p = l1;
    var q = l2;
    // result list
    var ret = new ListNode(null);
    var retPrev = ret;
    var retCur = null;
    // carry flag
    var carryFlag = false;

    function generateRetNode(val) {
        retCur = new ListNode(val);
        retPrev.next = retCur;
        retPrev = retCur;
    }

    function handleCarry(val) {
        if (carryFlag) {
            val += 1;
            carryFlag = false;
        } 

        if (val > 9) {
            val -= 10;
            carryFlag = true;
        }

        return val;
    }

    while (p && q) {
        var l1Val = +p.val;
        var l2Val = +q.val;

        var sum = l1Val + l2Val;
        sum = handleCarry(sum);

        generateRetNode(sum);

        p = p.next;
        q = q.next;
    }    

    while (p) {
        var val = +p.val;
        val = handleCarry(val);

        generateRetNode(val);

        p = p.next;
    }

    while (q) {
        var val = +q.val;
        val = handleCarry(val);

        generateRetNode(val);

        q = q.next;
    }

    if (carryFlag) {
        retCur = new ListNode(1);
        retPrev.next = retCur;
    }

    return transLinkedListToArray(ret.next);
};

function addTwoNumbers2(l1, l2) {
    var p = l1;
    var q = l2;
    var dumphead = new ListNode(0);
    var cur = dumphead;
    var carryFlag = false;
    
    while (p || q) {
        var val1 = p == null ? 0 : p.val;
        var val2 = q == null ? 0 : q.val;
        var sum = val1 + val2 + (carryFlag ? 1: 0);
        carryFlag = sum > 9;
        sum = sum % 10;

        cur.next = new ListNode(sum);
        cur = cur.next;

        if (p) {
            p = p.next;
        }
        if (q) {
            q = q.next;
        }
    }

    if (carryFlag) {
        cur.next = new ListNode(1);
    }

    return transLinkedListToArray(dumphead.next);
}

function transArrayToLinkedList(nums) {
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

function transLinkedListToArray(root) {
    let ret = [];
    while (root) {
        ret.push(root.val);
        root = root.next;
    }
    return ret;
}

function printLinkedList(root) {
    var print_str = root.val;
    var cur = root.next;

    while (cur) {
        print_str += ' -> ' + cur.val;
        cur = cur.next;
    }

    console.log(print_str);
}

function test() {
    // [5] [5]; [9,9] [1]
    var num1 = [9,9];
    var num2 = [1];
    var l1 = transArrayToLinkedList(num1);
    var l2 = transArrayToLinkedList(num2);

    printLinkedList(l1);
    printLinkedList(l2);
    
    // var ret = addTwoNumbers(l1, l2);
    var ret = addTwoNumbers2(l1, l2);
    // printLinkedList(ret);
    console.log(ret);
}

test();