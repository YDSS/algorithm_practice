/**
 * implementation of hash table by means of separate chaining method
 * 
 * @author YDSS
 */
const LinkedList = require('./HashTableLinkedList');
const { nextPrime } = require('../../math/prime')

class SeparateChainingHashTable {
    constructor(tableSize) {
        this.tableSize = tableSize;
        this.thisList = [];

        this._initialize();
    } 

    _initialize() {
        for (let i = 0; i < this.tableSize; i++) {
            this.thisList[i] = new LinkedList();
        }
    }

    /**
     * insert a (key : value), if got duplicate key, override
     *  it's value
     * 
     * @param {string} key
     * @param {*} val
     */
    insert(key, val) {
        let index = this._hash(key);
        let matchedList = this.thisList[index];
        
        let duplicateNode = matchedList.findOne(key);
        if (duplicateNode) {
            duplicateNode.data = val;
        }
        else {
            // insert from head
            matchedList.insert(key, val);
        }
    }

    find(key) {
        let index = this._hash(key);
        let matchedList = this.thisList[index];
        
        return matchedList.findOne(key);
    }

    _hash(key) {
        const maxLen = 20;
        let i = Math.min(key.length - 1, maxLen);
        let hash = 0;

        while(i >= 0) {
            hash = Math.abs((hash << 5) + this._getCharCode(key[i]));
            i--;
        }

        return hash % this.tableSize;
    }

    _getCharCode(char) {
        return String.prototype.charCodeAt.call(char);
    }
}

module.exports = SeparateChainingHashTable;