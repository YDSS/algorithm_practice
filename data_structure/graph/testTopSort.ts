import topSort from './topSort';
import LinkedList from '../linearList/singleLinkedList';

test();

function test() {
    let table = initAdjacentTable();
    let ret = topSort(table);
    
    printTopSort(ret);
}

function printTopSort(ret: number[]): void {
    // print result
    let printRet = '';
    ret = ret.sort((a: number, b: number) => a - b);
    ret.map(vertex => {
        // vertex number start from 1
        printRet += `-> ${vertex + 1}`;
    });
    printRet = printRet.slice(3);
    console.log(printRet);
}

/**
 * mock a adjacent table to test
 */
function initAdjacentTable(): LinkedList[] {
    let table = [];
    // v1
    table[0] = new LinkedList([1, 2, 3], 'tail');
    // v2
    table[1] = new LinkedList([3, 4], 'tail');
    // v3
    table[2] = new LinkedList([5], 'tail');
    // v4
    table[3] = new LinkedList([2, 5, 6], 'tail');
    // v5
    table[4] = new LinkedList([3, 6], 'tail');
    // v6
    table[5] = new LinkedList([], 'tail');
    // v7
    table[6] = new LinkedList([5], 'tail');

    // print
    table.map((list, index) => {
        console.log(`vertex ${index + 1} :`) ;
        list.print();
    });
    
    return table;
}