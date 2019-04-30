"use strict";
/**
 * @file implementation of get critical path
 * @author arlenyang
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AdjacencyList_1 = require("../AdjacencyList");
const SequenceQueue_1 = require("../../queue/SequenceQueue");
// mock
const AdjacencyListData_1 = require("../mock/AdjacencyListData");
function getCriticalPath(graph, start, end) {
    let n = graph.vertexes.length;
    // init adjacency list
    let adjList = new AdjacencyList_1.default(graph.vertexes, graph.edges);
    // init queue
    let queue = new SequenceQueue_1.default(n);
    // is a vertex existed in the queue
    let isVertexExisted = (v) => {
        return queue.traverse(item => item === v).some(item => item);
    };
    // init table to record info of vertex
    let table = {};
    graph.vertexes.map(v => {
        table[v] = {
            ec: Number.NEGATIVE_INFINITY,
            lc: Number.POSITIVE_INFINITY,
            processors: [],
        };
    });
    // init the start vertex
    table[start].ec = 0;
    // calc ec of every vertex
    queue.enter(start);
    while (!queue.isEmpty()) {
        let v = queue.leave();
        let adjacentVs = adjList.get(v);
        let iterator = adjacentVs.iterator();
        let edge;
        let node;
        while (node = iterator.next().value) {
            edge = node.data;
            let { to, dist } = edge;
            if (table[to].ec < table[v].ec + dist) {
                table[to].ec = table[v].ec + dist;
                if (!isVertexExisted(to)) {
                    queue.enter(to);
                    console.log(`enter ${to}`);
                }
            }
            // save v to processors of it's adjacent vertex
            table[to].processors.push({ from: v, dist });
        }
    }
    console.log(1);
    //calc lc of vertex
    queue.clear();
    table[end].lc = table[end].ec;
    queue.enter(end);
    while (!queue.isEmpty()) {
        let v = queue.leave();
        let { processors } = table[v];
        if (processors && processors.length) {
            processors.map(edge => {
                let { from, dist } = edge;
                if (table[from].lc > table[v].lc - dist) {
                    table[from].lc = table[v].lc - dist;
                    if (!isVertexExisted(from)) {
                        queue.enter(from);
                    }
                }
            });
        }
    }
    console.log(2);
    // find the critical path
    queue.clear();
    let criticalPath = [start];
    queue.enter(start);
    while (!queue.isEmpty()) {
        let v = queue.leave();
        let adjacentVs = adjList.get(v);
        let iterator = adjacentVs.iterator();
        let edge;
        let node;
        while (node = iterator.next().value) {
            edge = node.data;
            let { to, dist } = edge;
            if (table[to].lc - table[v].ec - dist === 0) {
                criticalPath.push(v);
                if (!isVertexExisted(to)) {
                    queue.enter(to);
                }
            }
        }
    }
    console.log(3);
    // remove duplicate vertex
    let removeDup = (arr) => {
        let ret = [];
        let dupMap = {};
        arr.map(item => {
            if (!dupMap[item]) {
                dupMap[item] = true;
                ret.push(item);
            }
        });
        return ret;
    };
    // print ec, lc of every vertex 
    Object.keys(table).map(v => {
        let { ec, lc } = table[v];
        console.log(`vertex: ${v} 's ec: ${ec}, lc: ${lc}`);
    });
    return removeDup(criticalPath);
}
let criticalPath = getCriticalPath(AdjacencyListData_1.eventNodeGraph, '1', '10');
console.log(criticalPath);
//# sourceMappingURL=getCriticalPath.js.map