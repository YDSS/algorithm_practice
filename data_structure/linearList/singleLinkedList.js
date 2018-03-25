/**
 * @file 线性表
 * @author arlenyang
 */

/**
 * 单链表
 *
 */
class SingleLinkedList {
    /**
     * @constructor
     * @param {Array?} arr array will transform to linkedlist, set null will create a empty linkedlist
     * @param {String?} createWay 'head' as default to create from head, 'tail' to create from tail
     * @param {_Node?} head head node
     */
    constructor(arr, createWay = "head", head) {
        this.way = createWay;
        this.head = ( head === null ) ? null : new _Node(null, null);
        this.origin = (arr && arr.length) ? arr : null;

        return this.way === "head"
            ? this.createFromHead(this.origin, this.head)
            : this.createFromTail(this.origin, this.head);
    }

    /**
     * 头插法
     *
     * @param {Array} arr 原始数组
     * @param {_Node?} head
     *
     * @return {Node} head
     */
    createFromHead(arr, head) {
        let headless = false;
        if (head === null) {
            head = new _Node(null, null);
            headless = true; 
        }

        for (let val of arr) {
            let headNext = head.next;
            let node = new _Node(val, headNext);

            head.next = node;
        }

        if (headless) {
            // remove head
            let next = head.next;
            head.next = null;

            return next;
        }

        return head;
    }

    /**
     * 尾插法
     *
     * @param {Array} arr
     * @param {_Node?} head
     *
     * @return {_Node} head
     */
    createFromTail(arr, head) {
        let headless = false;
        if (head === null) {
            head = new _Node(null, null);
            headless = true; 
        }
        let tail = head;

        for (let val of arr) {
            let node = new _Node(val, null);
            tail.next = node;

            tail = node;
        }

        if (headless) {
            // remove head
            let next = head.next;
            head.next = null;

            return next;
        }

        return head;
    }

    /**
     * 从头遍历单链表
     *
     * @param {SingleLinkedList} head
     */
    static walk(head) {
        let cur = head;
        while (cur != null) {
            console.log(` --> Node(:${cur.data})`);
            cur = cur.next;
        }
    }
}

module.exports = SingleLinkedList;

class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

// test();
// function test() {
//     let l = new SingleLinkedList([1, 3, 4], 'head');
//     SingleLinkedList.walk(l);
// }