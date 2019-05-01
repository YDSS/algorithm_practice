/**
 * @file implementation of disjoint set, union by size of tree
 * @author arlenyang
 */
export default class DisjointSet {
    private sets;
    constructor(initialSet: Array<number | string>);
    /**
     * union two sets
     * @param u1 union 1
     * @param u2 union 2
     */
    union(u1: number | string, u2: number | string): void;
    find(node: number | string): number | string;
    print(): void;
}
