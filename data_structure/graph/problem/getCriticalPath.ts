/**
 * @file implementation of get critical path
 * @author arlenyang
 */

import AdjacencyList from "../AdjacencyList";
import Node from "../../linearList/ListNode"
import Queue from "../../queue/SequenceQueue";
// mock
import { eventNodeGraph } from "../mock/AdjacencyListData"

// T(n) = O(|V| + 3|E|)
function getCriticalPath(
    graph: {
        vertexes: string[];
        edges: { from: string | number; to: string | number; dist: number }[];
    },
    start: string | number,
    end: string | number
) {
    let n = graph.vertexes.length;
    // init adjacency list
    let adjList = new AdjacencyList(graph.vertexes, graph.edges);
    // init queue
    let queue = new Queue(n);
    // is a vertex existed in the queue
    let isVertexExisted = (v: string|Number) => {
        return queue.traverse(item => item === v).some(item => item);
    }
    // init table to record info of vertex
    let table = {};
    graph.vertexes.map(v => { // T(n) = O(|V|)
        table[v] = {
            ec: Number.NEGATIVE_INFINITY,
            lc: Number.POSITIVE_INFINITY,
            processors: [],
        }
    }) 
    // init the start vertex
    table[start].ec = 0;
    // calc ec of every vertex
    queue.enter(start);
    while (!queue.isEmpty()) { // T(n) = O(|E|), not like weightedGraphWithNegEdge, every vertex only enter queue once
        let v = queue.leave();
        let adjacentVs = adjList.get(v);
        let iterator = adjacentVs.iterator();
        let edge;
        let node: Node;

        while (node = iterator.next().value) {
            edge = node.data;
            let { to, dist } = edge;
            if (table[to].ec < table[v].ec + dist) {
                table[to].ec = table[v].ec + dist;
                if (!isVertexExisted(to)) {
                    queue.enter(to);
                }
            }
            // save v to processors of it's adjacent vertex
            table[to].processors.push({from: v, dist});
        }
    }
    //calc lc of vertex
    queue.clear();
    table[end].lc = table[end].ec;
    queue.enter(end);
    while (!queue.isEmpty()) { // T(n) = O(|E|)
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
            })
        }
    }
    // find the critical path
    queue.clear();
    let criticalPath: Array<string|number> = [start];
    queue.enter(start);
    while (!queue.isEmpty()) { // T(n) = O(|E|)
        let v = queue.leave();
        let adjacentVs = adjList.get(v);
        let iterator = adjacentVs.iterator();
        let edge;
        let node: Node;

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
    // remove duplicate vertex
    let removeDup = (arr: Array<string|number>) => {
        let ret = [];
        let dupMap = {};
        
        arr.map(item => {
            if (!dupMap[item]) {
                dupMap[item] = true;
                ret.push(item);
            }
        })

        return ret;
    }
    // print ec, lc of every vertex 
    Object.keys(table).map(v => {
        let { ec, lc } = table[v];
        console.log(`vertex: ${v} 's ec: ${ec}, lc: ${lc}`);
    })

    return removeDup(criticalPath);
}

let criticalPath = getCriticalPath(eventNodeGraph, '1', '10');
console.log(criticalPath);