"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const topSort_1 = require("./topSort");
const singleLinkedList_1 = require("../linearList/singleLinkedList");
test();
function test() {
    let table = initAdjacentTable();
    let ret = topSort_1.default(table);
    console.log(ret);
    printTopSort(ret);
}
function printTopSort(ret) {
    // print result
    let printRet = '';
    let sorted = [];
    ret.map((step, vertex) => {
        sorted[step] = vertex;
    });
    sorted.map(vertex => {
        // vertex number start from 1
        printRet += `-> ${vertex}`;
    });
    printRet = printRet.slice(3);
    console.log(printRet);
}
/**
 * mock a adjacent table to test
 */
function initAdjacentTable() {
    let table = [];
    // v0
    table[0] = new singleLinkedList_1.default([1, 2, 3], 'tail');
    // v1
    table[1] = new singleLinkedList_1.default([3, 4], 'tail');
    // v2
    table[2] = new singleLinkedList_1.default([5], 'tail');
    // v3
    table[3] = new singleLinkedList_1.default([2, 5, 6], 'tail');
    // v4
    table[4] = new singleLinkedList_1.default([3, 6], 'tail');
    // v5
    table[5] = new singleLinkedList_1.default([], 'tail');
    // v6
    table[6] = new singleLinkedList_1.default([5], 'tail');
    // print
    table.map((list, index) => {
        console.log(`vertex ${index} :`);
        list.print();
    });
    return table;
}
//# sourceMappingURL=testTopSort.js.map