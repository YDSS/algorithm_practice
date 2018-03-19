/**
 * @file 线性表
 * @author arlenyang
 */

/**
 * 单链表
 * 
 * @constructor
 */
class SingleLinkedList {
    
    constructor() {

    }

    /**
     * 头插法
     * 
     * @param {Array} arr 原始数组
     * 
     * @return {SingleLinkedListNode} head
     */
    static createFromHead(arr) {
        let head = new SingleLinkedListNode(null, null);
        
        for (let val of arr) {
            let headNext = head.next; 
            let node = new SingleLinkedListNode(val, headNext);

            head.next = node;
        }

        return head;
    }

    /**
     * 尾插法
     * 
     * @param {Array} arr 
     * 
     * @return {SingleLinkedListNode} head
     */
    static createFromTail(arr) {
        let head = new SingleLinkedListNode(null, null);
        let tail = head;

        for (let val of arr) {
            let node = new SingleLinkedListNode(val, null);
            tail.next = node;

            tail = node;
        }

        return head;
    }

    /**
     * 从头遍历单链表
     * 
     * @param {SingleLinkedList} head 
     */
    static walk(head) {
        let cur = head.next;
        console.log(`head`);
        while (cur != null) {
            console.log(` --> Node(:${cur.data})`);
            cur = cur.next;
        }
    }
}

class SingleLinkedListNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }

    // set next(node) {
    //     if (node instanceof SingleLinkedListNode || node == null) {
    //         this.next = node;
    //     }
    //     else {
    //         throw new Error('next can only be type Node or Null');
    //     }
    // }
}

function test() {
    let arr = [7, 3, 8, 1, 9, 0];
    let head = SingleLinkedList.createFromTail(arr); 

    SingleLinkedList.walk(head);
}

test();