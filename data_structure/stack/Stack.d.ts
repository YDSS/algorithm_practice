/**
 * @file sequence stack implement
 * @author YDSS
 */
export default class Stack {
    private stack;
    private top;
    maxSize: number;
    constructor(maxSize: any);
    isEmpty(): boolean;
    isFull(): boolean;
    push(item: any): void;
    pop(): any;
}
