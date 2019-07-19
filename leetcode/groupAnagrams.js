/**
 * @file 49. Group Anagrams
 * @author arlenyang
 * @solution
 * 1. anagram strs have same sorted string order by alphabetical, which is solution 1
 * 2. go further, we can change the sorted string to (#1#2#0#...) for (abb...), number after # is count of a alphabet occured,
 *  there're only 26 alphabets here, so in that way we optimize O(KlogK) to O(K), k is the length of string
 */

// hashtable + sorted
// T(n) = O(n^2)
// S(n) = O(n)
function groupAnagrams(strs) {
    // init hashMap for group
    let anagramMap = new Map();
    for (let i = 0; i < strs.length; i++) {
        // o(n^2logn)
        let sortedStr = sortStrAlphabetically(strs[i]); // O(nlogn)
        if (!anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, []);
        }
        // what if duplicates str? change arr in hashmap to set
        anagramMap.get(sortedStr).push(strs[i]);
    }
    // map to array
    let ret = [];
    for (let arr of anagramMap.values()) {
        ret.push(arr);
    }
    return ret;
}

function sortStrAlphabetically(str) {
    return str
        .split("")
        .sort((a, b) => {
            return a.charCodeAt() - b.charCodeAt();
        })
        .join("");
}

// strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// strs = [] // empty
// strs = ["eat", "eat", "tea", "tan", "ate", "nat", "bat"] // with dups
strs = ["", ""];
console.log(groupAnagrams(strs));
