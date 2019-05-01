/**
 * @file implementation of adjacency matrix
 * @author arlenyang
 */
export default class AdjacencyMatrix {
    matrix: {
        [key: string]: {
            [key: string]: number;
        };
    };
    constructor(vertexes: Array<string | number>, edges: Array<{
        from: string | number;
        to: string | number;
        dist: number;
    }>);
    print(): void;
}
