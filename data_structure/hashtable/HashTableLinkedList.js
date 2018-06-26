/**
 * implementation of single linked list
 * @author YDSS
 */

const ListNode = require("./HashTableListNode");

class HashTableLinkedList {
    /**
     * @constructor
     * @param {Array?} arr array of elements need to insert
     * @param {String?} method 'head' as default to create from head, 'tail' to create from tail
     * @param {boolean} headless no need head
     *
     * @return {ListNode} head
     */
    constructor(arr = [], method = "head", headless = false) {
        this.head = new ListNode(null, null);
        this.headless = headless;

        method === "head"
            ? this._createFromHead(arr)
            : this._createFromTail(arr);

        if (headless) {
            if (!arr.length) {
                throw new Error(
                    "arr cannot be empty when this list has no head"
                );
            }
            this.head = this.head.next;
        }
    }

    /**
     * insert from head
     *
     * @param {Array} arr
     */
    _createFromHead(arr) {
        let head = this.head;
        for (let val of arr) {
            let headNext = head.next;
            let node = new ListNode(val, headNext);

            head.next = node;
        }
    }

    /**
     * insert from tail
     *
     * @param {Array} arr
     */
    _createFromTail(arr) {
        let head = this.head;
        let tail;

        // tarverse to tail
        let tmp = head;
        while (tmp.next) {
            tmp = tmp.next;
        }
        tail = tmp;

        for (let val of arr) {
            let node = new ListNode(val, null);
            tail.next = node;

            tail = node;
        }
    }

    /**
     * insert a node
     * 
     * @param {sting} key key of node
     * @param {*} val data of node
     * @param {string?} method 'head' or 'tail', means insert from head or tail, head by default
     *
     * @return {ListNode}
     */
    insert(key, val, method = "head") {
        let node = new ListNode(key, val, null);

        if (method === "head") {
            if (this.headless) {
                node.next = this.head;
                this.head = node;
            } else {
                node.next = this.head.next;
                this.head.next = node;
            }
        } else {
            let tail = this.head;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = node;
        }

        return node;
    }

    /**
     * find the first node matched
     * @param {string} key
     *
     * @return {ListNode}
     */
    findOne(key) {
        let cur = this.headless ? this.head : this.head.next;
        let found = null;
        while (cur) {
            if (cur.key === key) {
                found = cur;
                break;
            }
            cur = cur.next;
        }

        return found;
    }

    /**
     * find all the node matched
     * @param {string} key
     *
     * @return {Array}
     */
    find(key) {
        let cur = this.headless ? this.head : this.head.next;
        let ret = [];
        while (cur) {
            if (cur.key === key) {
                ret.push(cur);
            }

            cur = cur.next;
        }

        return ret;
    }

    /**
     * delete all the nodes with data equaled with val
     * @param {string} key
     * 
     * @return {Array} deleted nodes
     */
    delete(key) {
        let cur = this.head;
        let pre;
        let deleted = [];

        while (cur) {
            if (cur.key === key) {
                deleted.push(cur);

                // pre may be null if the first node will be deleted
                if (pre) {
                    pre.next = cur.next;
                }
            }
            pre = cur;
            cur = cur.next;
        }

        return deleted;
    }

    /**
     * print a linked list from head
     */
    print() {
        let cur = this.head;
        while (cur) {
            console.log(` --> Node(${cur.key})`);
            cur = cur.next;
        }
    }
}

module.exports = HashTableLinkedList;
