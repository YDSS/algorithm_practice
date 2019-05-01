/**
 * @file adjacency list data
 * @author arlenyang
 */
export declare const unweightedGraph: number[][];
export declare const weightedGraph: {
    index: number;
    dist: number;
}[][];
export declare const weightedGraphWithNeg: {
    index: number;
    dist: number;
}[][];
export declare let eventNodeGraph: {
    vertexes: string[];
    edges: {
        from: string;
        to: string;
        dist: number;
    }[];
};
export declare let undigraph: {
    vertexes: string[];
    edges: {
        from: string;
        to: string;
        dist: number;
    }[];
};
