/**
 * @file 207. Course Schedule
 * @solution top sorting
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
/**
 * T(n) = O(|v| + |E|)
 * S(n) = O(3|V| + |E|)
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
    // init indegree
    let indegree = Array.from({ length: numCourses }, x => 0);
    // generate adjacency list by edges
    // index is label of vertex
    // using array instead of LinkedList, cause in this algorithm we don't need change graph
    let adjList = Array.from({ length: numCourses }, x => []);
    prerequisites.map(e => {
        let [from, to] = e;
        adjList[from].push(to);
        // calc indegree of to vertex
        indegree[to] += 1;
    });
    // put zero-indegree vertexes into another place, that's making find zero-indegree O(1)
    let zeroIndegree = new Queue(numCourses);
    // init zero indegree
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) {
            zeroIndegree.enter(i);
        }
    }
    // find a zero-indegree vertex, return -1 if not found
    let findZeroIndegreeVertex = () => { // O(1)
        // return indegree.findIndex(item => item === 0);
        if (zeroIndegree.isEmpty()) {
            return -1;
        }
        return zeroIndegree.leave();
    }
    let v;
    let count = 0; // counting how many vertexes deleted
    while ((v = findZeroIndegreeVertex()) !== -1) {
        // O(|V|)
        let adjs = adjList[v];
        // minus indegree of vertexes adjacent to v,
        // cause we will delete v from graph
        adjs.map(w => {
            indegree[w] -= 1;
            if (indegree[w] === 0) {
                zeroIndegree.enter(w);
            }
        });
        indegree[v] = -1; // fake delete
        count++;
    }

    if (count !== numCourses) {
        return false;
    }
    return true;
}

let n = 2;
let arr = [[1, 0]];
// let n = 2;
// let arr = [[1,0],[0,1]]
console.log(canFinish(n, arr));
