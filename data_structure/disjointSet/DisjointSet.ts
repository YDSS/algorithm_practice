/**
 * @file implementation of disjoint set, union by size of tree
 * @author arlenyang
 */

type setsValue = number|string;

export default class DisjointSet {
    private sets: {[key: string]: setsValue} = {};

    constructor(initialSet: Array<number|string>) {
        // init set
        for (let i = 0; i < initialSet.length; i++) {
            let root = initialSet[i];
            this.sets[root] = -1;
        }
    }

    /**
     * union two sets
     * @param u1 union 1
     * @param u2 union 2
     */
    public union(u1: number|string, u2: number|string): void {
        let u1Root = this.find(u1);
        let u2Root = this.find(u2);
        let size;

        if (this.sets[u1Root] < this.sets[u2Root]) { // the size is negative
            size = this.sets[u2Root];
            this.sets[u2Root] = u1Root;
            this.sets[u1Root] += size;
        } else {
            size = this.sets[u1Root];
            this.sets[u1Root] = u2Root;
            this.sets[u2Root] += size;
        }
    }

    public find(node: number|string): number|string {
        let root = node;
        while (Number.isNaN(+this.sets[root]) || this.sets[root] > 0) {
            root = this.sets[root];
        }
        return root;
    }

    public print() {
        Object.keys(this.sets).map(key => {
            console.log(`${key}: ${this.sets[key]}`);
        })
    }
}