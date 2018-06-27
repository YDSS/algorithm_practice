/**
 * hash table will rehashing when it's load factor reach threshold
 * @author YDSS
 */

const { nextPrime } = require("../../math/prime");

class RehashingHashTable {
    constructor(tableSize, threshold) {
        // initial tableSize, will grow when it's load factor reach threshold
        this.tableSize = nextPrime(tableSize);
        // threshold for load factor
        this.threshold = threshold;
        this._table = [];
        this.count = 0;
    }

    insert(key, value) {
        // expand when the load factor reach it's threshold
        if (this._needRehashing()) {
            this._rehash();
        }

        let hash = this._hash(key);
        if (this._table[hash] || this._table[hash] === 0) {
            hash = this._resolveConflict(key, hash);
        }

        this._table[hash] = {key, value};
        this.count++;
    }

    /**
     * rehashing table, expand to it's double size,
     *  avoid the load factor too big to fail to insert
     */
    _rehash() {
        let oldTableSize = this.tableSize;
        let oldTable = this._table;
        this.tableSize = nextPrime(oldTableSize * 2);
        this._table = [];
        this.count = 0;

        oldTable.forEach(item => {
            if (item) {
                this.insert(item.key, item.value);
            }
        });
    }

    _needRehashing() {
        return this.threshold < this._calcLoadFactor();
    }

    _calcLoadFactor() {
        return (this.count / this.tableSize).toFixed(2);
    }

    find(key) {
        let collisionNum = 0;
        let hash = this._hash(key);
        let index;

            collisionNum++;

            if (index >= this.tableSize) {
                index -= this.tableSize;
            }
        while (this._table[index] && this._table[index].key !== key) {
            index = hash + collisionNum * collisionNum + 1; 
        }
    }

    _hash(key) {
        const maxLen = 20;
        let i = Math.min(key.length - 1, maxLen);
        let hash = 0;

        while (i >= 0) {
            hash = Math.abs((hash << 5) + this._getCharCode(key[i]));
            i--;
        }

        return hash % this.tableSize;
    }

    _getCharCode(char) {
        return String.prototype.charCodeAt.call(char);
    }

    /**
     * F(i) = i^2 + 1, F(0) = 0
     */
    _resolveConflict(key, hash) {
        let collisionNum = 0;
        let index;

        do {
            index = hash + collisionNum * collisionNum + 1; 
            collisionNum++;

            if (index >= this.tableSize) {
                index -= this.tableSize;
            }
        } while (this._table[index] && this._table[index].key !== key)

        // while (this._table[index] && this._table[index].key !== key) {
        //     index = this._conflictFunc(index);
        // }

        return index;
    }

    print() {
        console.log(`tableSize: ${this.tableSize}`);
        console.log(`count: ${this.count}`);
        console.log();
        this._table.forEach((item, i) => {
            if (item) {
                console.log(`[${i}] => (${item.key} : ${item.value})`);
            }
        });
    }
}

module.exports = RehashingHashTable;
