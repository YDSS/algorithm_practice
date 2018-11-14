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
    let sorted: number[] = [];
    ret.map((step: number, vertex: number) => {
        sorted[step] = vertex;
    })
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
function initAdjacentTable(): LinkedList[] {
    let table = [];
    // v0
    table[0] = new LinkedList([1, 2, 3], 'tail');
    // v1
    table[1] = new LinkedList([3, 4], 'tail');
    // v2
    table[2] = new LinkedList([5], 'tail');
    // v3
    table[3] = new LinkedList([2, 5, 6], 'tail');
    // v4
    table[4] = new LinkedList([3, 6], 'tail');
    // v5
    table[5] = new LinkedList([], 'tail');
    // v6
    table[6] = new LinkedList([5], 'tail');

    // print
    table.map((list, index) => {
        console.log(`vertex ${index} :`) ;
        list.print();
    });
    
    return table;
}