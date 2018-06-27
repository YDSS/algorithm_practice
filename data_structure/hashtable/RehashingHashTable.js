/**
 * hash table will rehashing when it's load factor reach threshold
 * @author YDSS
 */

const { nextPrime } = require('../../math/prime');

class RehashingHashTable {
    constructor(tableSize, threshold) {
        // initial tableSize, will grow when it's load factor reach threshold
        this.tableSize = nextPrime(tableSize); 
        this.threshold = threshold;
        this._table = [];
    }

    insert(key, value) {
        let hash = this._hash(key);
        if (this._table(hash) || this._table(hash) === 0) {
            hash = this._resolveConflict(hash);
        }
        
        this._table[hash] = value;
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

    _resolveConflict(key, hash) {
        let index = this._conflictFunc(hash);
        
        while (this._table[index] && this._table[index].key !== key) {
            index = this._conflictFunc(index);
        }

        return index;
    }

    /**
     * F(i) = i^2, F(0) = 0
     */
    _conflictFunc(hash) {
        return Math.pow(hash, 2) % this.tableSize;
    }
}