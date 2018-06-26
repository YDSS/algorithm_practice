const LinkedList = require('./singleLinkedList');

test();

function test() {
    let arr = [1, 2, 3, 4, 5];
    // let arr = [];
    let linkedList = new LinkedList(arr, 'tail');
    linkedList.print();
    console.log();

    // testInsert();
    // testFind(linkedList)
    testDelete(linkedList);
}

function testInsert(linkedList) {
    linkedList.insert(7);
    linkedList.print();
}

function testFind(linkedList) {
    console.log('find 3: ', linkedList.findOne(3));
    console.log('find 6: ', linkedList.findOne(6));

    linkedList.insert(3);
    console.log('find 3: ', linkedList.find(3));
}

function testDelete(linkedList) {
    console.log('delete 3', linkedList.delete(3));
    linkedList.print();
}