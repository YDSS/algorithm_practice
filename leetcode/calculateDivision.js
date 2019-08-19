/**
 * @file 399. Evaluate Division
 * @author arlenyang
 */

/**
 * dfs
 * 
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
function calcEquation(equations, values, queries) {
    // edge cases
    if (equations.length === 0) {
        return queries.map(_ => -1);
    }
    let ans = [];
    if (queries.length === 0) {
        return ans;
    }
    // init the equations map
    // if a / b = 2, then b / a = 0.5, so with one equation, we can deduce two equations
    let map = new Map();
    for (let i = 0; i < equations.length; i++) {
        let [dd, dr] = equations[i];
        if (!map.has(dd)) {
            map.set(dd, []);
        }
        let col = map.get(dd);
        col.push([dr, values[i]]);

        if (!map.has(dr)) {
            map.set(dr, []);
        }
        let col2 = map.get(dr);
        col2.push([dd, 1 / values[i]]);
    }
    // console.log(map);

    let dfs = (start, end, ret, visited) => {
        if (found) {
            return;
        }
        if (visited.has(start)) {
            return;
        }
        if (!map.has(start)) {
            return;
        }
        let divisors = map.get(start);
        for (let i = 0; i < divisors.length; i++) {
            let newRet = ret * divisors[i][1];
            if (end === divisors[i][0]) {
                thisAns = newRet;
                found = true;
                return;
            } else {
                visited.add(start);
                dfs(divisors[i][0], end, newRet, visited);
                visited.delete(start);
            }
        }
    };

    let visited;
    let found = false;
    let thisAns = null;
    // iterate every query
    for (let i = 0; i < queries.length; i++) {
        visited = new Set();
        found = false;
        thisAns = null;

        let [start, end] = queries[i];
        dfs(start, end, 1, visited);
        ans.push(thisAns != null ? thisAns : -1);
    }

    return ans;
}

equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]

console.log(calcEquation(equations, values, queries));