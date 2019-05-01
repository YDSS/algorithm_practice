/**
 * @file implementation of adjacency matrix
 * @author arlenyang
 */

export default class AdjacencyMatrix {
    public matrix: { [key: string]: { [key: string]: number } } = {};

    constructor(
        vertexes: Array<string | number>,
        edges: Array<{
            from: string | number;
            to: string | number;
            dist: number;
        }>
    ) {
        edges.map(edge => {
            let { from, to, dist } = edge;
            // both record one edge for the two vertex, so
            // edge in edges only need write once
            if (!this.matrix[from]) {
                this.matrix[from] = {};
            }
            if (!this.matrix[to]) {
                this.matrix[to] = {};
            }
            this.matrix[from][to] = dist;
            this.matrix[to][from] = dist;
        });
    }

    public print() {
        Object.keys(this.matrix).map(v => {
            let str = `${v}: `;
            Object.keys(this.matrix[v]).map(to => {
                str += `-> ${to}(${this.matrix[v][to]})`;
            });
            console.log(str);
        });
    }
}

// let vertexes = ["v1", "v2", "v3"];
// let edges = [
//     { from: "v1", to: "v2", dist: 2 },
//     { from: "v2", to: "v3", dist: 5 }
// ];
// let m = new AdjacencyMatrix(vertexes, edges);
// m.print();
