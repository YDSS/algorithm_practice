/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
function findItinerary2(tickets) {
    const start = "JFK";
    const NOWHERE = "NOWHERE"
    let total = tickets.length;
    // build tickets hashmap
    let ticketsMap = {};
    for (let i = 0; i < tickets.length; i++) {
        let [from, to] = tickets[i];
        if (ticketsMap[from] == null) {
            ticketsMap[from] = [to];
        } else {
            ticketsMap[from].push(to);
        }
    }
    console.log(ticketsMap)
    let visited = {};
    let paths = [];
    let dfs = (from, to, path) => {
        let key = getKeyOfTicket(from, to);
        if (visited[key] || to === NOWHERE) {
            // console.log(visited)
            console.log(path);
            // check if it's over in current path
            if (isAllTicketsUsed(path, total)) {
                paths.push([...path]);
            }
            return;
        }

        visited[key] = true;
        if (ticketsMap[to] == null) {
            path.push(to);
            dfs(to, NOWHERE, path);
            path.pop();
        } else {
            for (let i = 0; i < ticketsMap[to].length; i++) {
                path.push(to);
                dfs(to, ticketsMap[to][i], path);
                path.pop();
            }
        }
        visited[key] = false;
    };
    for (let i = 0; i < ticketsMap[start].length; i++) {
        dfs(start, ticketsMap[start][i], [start]);
    }

    if (paths.length === 1) {
        return paths[0];
    }

    let pathStrs = paths.map(path => path.join(' '));
    pathStrs.sort();
    console.log('----')

    return pathStrs[0].split(' ');
}

function getKeyOfTicket(from, to) {
    return `${from},${to}`;
}

function isAllTicketsUsed(path, total) {
    return path.length - 1 === total;
}

function findItinerary(tickets) {
    
}

// let tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
let tickets =  [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// let tickets = [["EZE","AXA"],["TIA","ANU"],["ANU","JFK"],["JFK","ANU"],["ANU","EZE"],["TIA","ANU"],["AXA","TIA"],["TIA","JFK"],["ANU","TIA"],["JFK","TIA"]]
console.log(findItinerary(tickets));
