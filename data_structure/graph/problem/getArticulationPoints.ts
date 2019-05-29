/**
 * @file find articulation points in a undigraph
 * @author arlenyang
 */

import AdjacencyList, {AdjacencyListNode} from "../AdjacencyList"
import Edge from "../Edge";

function getArticulationPoints(adList: AdjacencyList, start: string): {[key: string]: boolean} {
    let visited: {[key: string]: boolean} = {}; // record visited vertexes
    let parent: {[key: string]: string} = {}; // record vertex's parent 
    let nums: {[key: string]: number} = {}; // record number of every vertex, number is ordered by pre-ordered traverse
    let lows: {[key: string]: number} = {}; // record low of every vertex
    let arts = {}; // record articulation points
    
    let counter = 0; // counter for generating number of vertex
    let findArt = vertex => {
        visited[vertex] = true;
        nums[vertex] = lows[vertex] = ++counter;
        // traverse all the vertexes adjacent 
        let iterator = adList.get(vertex).iterator();
        let w: AdjacencyListNode;
        if (vertex == 'G') {
            console.log(parent[vertex])
        }
        while (w = iterator.next().value) {
            let { to } = w.data;
            if (!visited[to]) { // forward edge
                parent[to] = vertex; 
                findArt(to);
                // need exclude root
                if (lows[to] >= nums[vertex] && nums[vertex] !== 1) {
                    arts[vertex] = true;
                }
                lows[vertex] = Math.min(lows[vertex], lows[to]);
            } 
            else if (parent[vertex] !== to) { // back edge
                lows[vertex] = Math.min(lows[vertex], nums[to]);
            }
        }
    }
    findArt(start);
    console.log(nums);
    console.log(parent);
    console.log(lows)
    // check root is an articulation point or not
    //  if root has at least two children, it is an art point
    let childrenOfRoot = 0;
    Object.keys(parent).map(child => {
        if (parent[child] === start) {
            childrenOfRoot++;
        }
    })
    if (childrenOfRoot > 1) {
        arts[start] = true;
    }

    return arts;
}

let vertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
let edges: Edge[] = [
    {from: 'A', to: 'B' },
    {from: 'A', to: 'D' },
    {from: 'A', to: 'H' },
    {from: 'B', to: 'A' },
    {from: 'B', to: 'C' },
    {from: 'C', to: 'B' },
    {from: 'C', to: 'D' },
    {from: 'C', to: 'G' },
    {from: 'D', to: 'A' },
    {from: 'D', to: 'C' },
    {from: 'D', to: 'E' },
    {from: 'D', to: 'F' },
    {from: 'E', to: 'D' },
    {from: 'E', to: 'F' },
    {from: 'F', to: 'D' },
    {from: 'F', to: 'E' },
    {from: 'G', to: 'C' },
    {from: 'H', to: 'A' },
]
let adList = new AdjacencyList(vertexes, edges);
adList.print();
let arts = getArticulationPoints(adList, 'A');
console.log(arts);