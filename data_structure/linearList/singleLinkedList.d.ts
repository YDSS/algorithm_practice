/**
 * implementation of single linked list
 * @author YDSS
 */
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
    constructor(arr?: any[], method?: string, headless?: boolean);
    /**
     * insert from head
     *
     * @param {Array} arr
     */
    _createFromHead(arr: any): void;
    /**
     * insert from tail
     *
     * @param {Array} arr
     */
    _createFromTail(arr: any): void;
    /**
     * insert a node
     * @param {*} val data of node
     * @param {string?} method 'head' or 'tail', means insert from head or tail, head by default
     *
     * @return {ListNode}
     */
    insert(val: any, method?: string): ListNode;
    /**
     * find the first node matched
     * @param {*} val
     *
     * @return {ListNode}
     */
    findOne(val: any): any;
    /**
     * find all the node matched
     * @param {*} val
     *
     * @return {Array}
     */
    find(val: any): any[];
    /**
     * delete all the nodes with data equaled with val
     * @param {*} val
     *
     * @return {Array} deleted nodes
     */
    delete(val: any): any[];
    /**
     * print a linked list from head
     */
    print(): void;
}
