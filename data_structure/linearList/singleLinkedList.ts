/**
 * implementation of single linked list
 * @author YDSS
 */

// const ListNode = require("./ListNode");
import ListNode from "./ListNode";

/**
 * @property {ListNode} head head of the list
 */
export default class SingleLinkedList {
    head: ListNode;
    headless: boolean;
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

        if (arr.length) {
            method === "head"
                ? this._createFromHead(arr)
                : this._createFromTail(arr);
        }

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
    private _createFromHead(arr) {
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
    private _createFromTail(arr) {
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
     * @param {*} val data of node
     * @param {string?} method 'head' or 'tail', means insert from head or tail, head by default
     *
     * @return {ListNode}
     */
    public insert(val, method = "head") {
        let node = new ListNode(val, null);

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
     * @param {*} val
     *
     * @return {ListNode}
     */
    public findOne(val) {
        let cur = this.headless ? this.head : this.head.next;
        let found = null;
        while (cur) {
            if (cur.data === val) {
                found = cur;
                break;
            }
            cur = cur.next;
        }

        return found;
    }

    /**
     * find all the node matched
     * @param {*} val
     *
     * @return {Array}
     */
    public find(val) {
        let cur = this.headless ? this.head : this.head.next;
        let ret = [];
        while (cur) {
            if (cur.data === val) {
                ret.push(cur);
            }

            cur = cur.next;
        }

        return ret;
    }

    /**
     * delete all the nodes with data equaled with val
     * @param {*} val
     *
     * @return {Array} deleted nodes
     */
    public delete(val?: any): ListNode[] {
        let cur = this.head;
        // if val is empty, delete the first node
        if (val == null) {
            if (!this.head.next) {
                return null;
            }
            let deleted = this.head.next;
            this.head.next = deleted.next;

            return [deleted];
        }
        let pre;
        let deleted = [];

        while (cur) {
            if (cur.data === val) {
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
     * iterator the list
     */
    public *iterator() {
        let cur = this.head.next;

        while (cur) {
            yield cur;
            cur = cur.next;
        }
    }

    /**
     * print a linked list from head
     */
    public print() {
        let cur = this.head;
        while (cur) {
            console.log(` --> Node(${cur.data})`);
            cur = cur.next;
        }
    }
}

// let linkedList = new SingleLinkedList([1], 'tail');
// let [d] = linkedList.delete();
// let a = linkedList.delete();
// linkedList.delete();
// console.log(a);
// linkedList.print();
// linkedList.print();

// let iterator = linkedList.iterator();
// let i;
// while (i = iterator.next().value) {
//     console.log(i.data);
// }