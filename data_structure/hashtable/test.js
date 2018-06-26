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
        console.log(`${item.key} => ${hashTable._hash(item.key)}`)
        hashTable.insert(item.key, item.val);
    });
}
