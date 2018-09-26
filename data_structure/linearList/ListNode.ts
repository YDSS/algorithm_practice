/**
 * list node  
 * 
 * @author YDSS
 */
export default class ListNode {
    data: any;
    next: ListNode;

    constructor(data: any, next: ListNode) {
        this.data = data;
        this.next = next;
    }
}
