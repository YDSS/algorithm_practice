/**
 * @file Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
 * @author arlenyang
 */

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
    isEmpty() {
        return this.front === this.rear;
    }
    isFull() {
        return (this.rear + 1) % this._realMaxSize === this.front;
    }
    enter(item) {
        if (this.isFull()) {
            throw new Error('the queue is full');
        }
        this._queue[this.rear] = item;
        this.rear = (this.rear + 1) % this._realMaxSize;
    }
    leave() {
        if (this.isEmpty()) {
            throw new Error('the queue is empty');
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

// Definition for a Node.
function Node(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors;
}

/**
 * DFS
 * @param {Node} node
 * @return {Node}
 */
function cloneGraph2(node) {
    // init hash table
    let table = {}; // key is node.val, value is node itself
    let dfs = node => {
        let copy = table[node.val] = new Node(node.val, []);
        node.neighbors.map(n => {
            if (table[n.val] == null) {
                table[n.val] = dfs(n);
            }
            
            copy.neighbors.push(table[n.val]);
        })

        return copy;
    }

    return dfs(node);
}

/**
 * BFS
 * @param {Node} node
 * @return {Node}
 */
function cloneGraph(node) {
    // init table
    let table = {};
    // init queue
    let queue = new Queue(100); // 100 nodes at most
    // init start node
    let startKey = node.val;
    table[node.val] = new Node(node.val, []);
    queue.enter(node);
    
    while(!queue.isEmpty()) {
        let origin = queue.leave();
        origin.neighbors.map(n => {
            if (!table[n.val]) {
                table[n.val] = new Node(n.val, []);
                queue.enter(n);
            }
            table[origin.val].neighbors.push(table[n.val]);
        })
    }

    return table[startKey];
}

let n1 = new Node(1, []);
let n2 = new Node(2, []);
let n3 = new Node(3, []);
let n4 = new Node(4, []);
n1.neighbors = [n2, n4];
n2.neighbors = [n1, n3];
n3.neighbors = [n2, n4];
n4.neighbors = [n1, n3];

let printGraph = node => {
    let table = {};
    let dfs = node => {
        table[node.val] = 1;
        let str = `node ${node.val} has neighboors: `
        node.neighbors.map(n => {
            if (!table[n.val]) {
                dfs(n);
            }
            
            str += `${n.val}, `;
        })
        console.log(str);
    }

    dfs(node);
}
printGraph(n1);

console.log('clone graph')
let newGraph = cloneGraph(n1);
printGraph(newGraph);
console.log(newGraph === n1);