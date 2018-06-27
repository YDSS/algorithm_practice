const SeparateChainingHashTable = require("./SeparateChainingHashTable");

test();

function test() {
    // initialize 
    let arr = [
        { key: "hello", val: 1 },
        { key: "world", val: 2 },
        { key: "test", val: 3 },
        { key: "sdegf", val: 4 },
        { key: "an12312", val: 5 }
    ];

    let hashTable = new SeparateChainingHashTable(10);
    // hashTable._hash(arr[3].key);
    arr.forEach(item => {
        hashTable.insert(item.key, item.val);
    });
    hashTable.print(); 
    console.log();

    // testInsert(hashTable);
    // testFind(hashTable);
    // testOverrid(hashTable);
    testDelete(hashTable);
}

function testInsert(hashTable) {
    hashTable.insert('asdlaj113-12', 9);
    hashTable.print();
}

function testFind(hashTable) {
    console.log(hashTable.find('world'))
}

function testOverrid(hashTable) {
    console.log(hashTable.find('world'));
    hashTable.insert('world', 100);
    console.log(hashTable.find('world'));
}

function testDelete(hashTable) {
    hashTable.print();
    hashTable.delete('world');
    console.log();
    hashTable.print();
}