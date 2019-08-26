/**
 * @file 127. Word Ladder
 * @author arlenyang
 */

/**
 * BFS
 *
 * T(n) = O(n * k), k is len of str
 * S(n) = O(n * k)
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
    let queue = new Queue(wordList.length);
    // record visited words
    let visited = new Set();
    // bound the current words in queue with next words
    let curB = 1;
    let nextB = 0;
    let step = 1;
    queue.enter(beginWord);
    visited.add(beginWord);
    while (!queue.isEmpty()) {
        let word = queue.leave();

        if (word === endWord) {
            return step;
        }
        // find only one changed word
        // O(n * k)
        for (let i = 0; i < wordList.length; i++) {
            if (!visited.has(wordList[i]) && isOnlyOneDiff(word, wordList[i])) {
                visited.add(wordList[i]);
                queue.enter(wordList[i]);
                nextB++;
            }
        }
        // end of current step of traversal
        curB--;
        if (curB === 0) {
            // console
            // let tmp = []
            // queue.traverse(item => tmp.push(item))
            // console.log(tmp)
            step++;
            curB = nextB;
            nextB = 0;
        }
    }

    return 0;
}

/**
 * bidirectional BFS
 *
 * T(n) = O(n * k), k is len of str
 * S(n) = O(n * k)
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength2(beginWord, endWord, wordList) {
    let n = wordList.length;
    // check if end word is in wordlist
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (wordList[i] === endWord) {
            count++;
        }
    }
    if (count === 0) {
        return 0;
    }

    let startQ = new Queue(n);
    let endQ = new Queue(n);
    let startV = new Set();
    let endV = new Set();
    // init
    startQ.enter({ w: beginWord, l: 1 });
    startV.add(beginWord);
    endQ.enter({ w: endWord, l: 1 });
    endV.add(endWord);
    while (!startQ.isEmpty() && !endQ.isEmpty()) {
        let startNode = startQ.leave();
        let endNode = endQ.leave();
        // store next level of start node, it's convient to find nodes in next level of end node
        let tmpMap = new Set();
        // find next level of start node
        for (let i = 0; i < n; i++) {
            let curWord = wordList[i];
            if (!startV.has(curWord) && isOnlyOneDiff(startNode.w, curWord)) {
                startV.add(curWord);
                // check if the end node is in next level of start node
                if (curWord === endNode.w) {
                    return startNode.l + endNode.l;
                }
                startQ.enter({ w: curWord, l: startNode.l + 1 });
                tmpMap.add(curWord);
            }
        }
        // find next level of end node
        for (let i = 0; i < n; i++) {
            let curWord = wordList[i];
            // check if it's a word both in next level of begin node and end node, if has, then we found the path between begin and end node
            if (!endV.has(curWord) && isOnlyOneDiff(endNode.w, curWord)) {
                endV.add(curWord);
                if (tmpMap.has(curWord)) {
                    // console.log(curWord, startNode, endNode)
                    return startNode.l + 1 + endNode.l;
                }
                endQ.enter({ w: curWord, l: endNode.l + 1 });
            }
        }
    }

    return 0;
}

// O(k), k is the length of str
function isOnlyOneDiff(target, diff) {
    let count = 0;
    for (let i = 0; i < target.length; i++) {
        if (count > 1) {
            return false;
        }
        if (target[i] !== diff[i]) {
            count++;
        }
    }

    return count === 1;
}

class Queue {
    constructor(maxSize) {
        if (!maxSize) {
            throw new Error("maxSize can not be null");
        }
        this.maxSize = maxSize;
        // there wiil be lack of one space compare with maxSize
        // in circular sequence queue, so add 1 to make the queue right
        this._realMaxSize = maxSize + 1;
        this._queue = [];
        this.front = 0;
        this.rear = 0;
    }
    size() {
        if (this.front < this.rear) {
            return this.rear - this.front + 1;
        } else {
            return this._realMaxSize - this.front + this.rear + 1;
        }
    }
    isEmpty() {
        return this.front === this.rear;
    }
    isFull() {
        return (this.rear + 1) % this._realMaxSize === this.front;
    }
    enter(item) {
        if (this.isFull()) {
            throw new Error("the queue is full");
        }
        this._queue[this.rear] = item;
        this.rear = (this.rear + 1) % this._realMaxSize;
    }
    leave() {
        if (this.isEmpty()) {
            throw new Error("the queue is empty");
        }
        let item = this._queue[this.front];
        delete this._queue[this.front];
        this.front = (this.front + 1) % this._realMaxSize;
        return item;
    }
    /**
     * traverse all the element in the queue
     * @param {function} cb pass every element to cb
     *
     * @return {Array} all the result cb ran
     */
    traverse(cb) {
        if (this.isEmpty()) {
            return [];
        }
        let ret = [];
        let i = this.front;
        while (i % this._realMaxSize < this.rear) {
            ret.push(cb(this._queue[i % this._realMaxSize]));
            i++;
        }
        return ret;
    }
    /**
     * clear the queue
     */
    clear() {
        this._queue = [];
        this.front = 0;
        this.rear = 0;
    }
    print() {
        console.log(this._queue);
    }
}

// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// beginWord = "hit";
// endWord = "cog";
// wordList = ["hot", "dot", "dog", "lot", "log"];

// beginWord = "a";
// endWord = "c";
// wordList = ["a", "b", "c"];

beginWord ="kiss"
endWord ="tusk"
wordList =["miss","dusk","kiss","musk","tusk","diss","disk","sang","ties","muss"]

console.log(ladderLength2(beginWord, endWord, wordList));
