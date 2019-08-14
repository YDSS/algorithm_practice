/**
 * @file 139. Word Break
 * @author arlenyang
 * @solution using trie tree to check the s, when found a word, back to root and continue seaching
 */

/**
 * LTE, cause has backtracing
 * S(n) = O(mk)
 * n is the length of s, m is amount of words, k is the length of the longest word
 */
function wordBreak(s, wordDict) {
    let root = buildTree(wordDict); // O(mk)
    let bt = (pos, node) => {
        if (pos === s.length) {
            return node.isEnd;
        }

        let i = pos;
        // O(n)
        while (i < s.length) {
            let c = s[i];
            if (!node.children.has(c)) {
                return false;
            }
            node = node.children.get(c);
            i++;

            if (node.isEnd) {
                break;
            }
        }

        if (i === s.length) {
            return bt(i, node);
        } else {
            // create two branchs, one is back, one is still go deep, any of them works, the step works
            return (
                bt(i, node) || bt(i, root) // go deep // back to root
            );
        }
    };

    // return node === root;
    return bt(0, root);
}

function TreeNode(val) {
    this.val = val;
    this.children = new Map();
    this.isEnd = false;
}

function buildTree(words) {
    let root = new TreeNode(null);
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let node = root;
        for (let j = 0; j < word.length; j++) {
            let c = word[j];
            let child;
            if (!node.children.has(c)) {
                child = new TreeNode(c);
                node.children.set(c, child);
            } else {
                child = node.children.get(c);
            }

            node = child;
        }
        node.isEnd = true;
    }

    return root;
}

/**
 *dp solution

dp[i] means from 0 to i, the substring can be composed by words in words[], so we should check dp[s.length - 1]

formula:

dp[i] = s[i, j] in words[] && dp[j - 1] === true,  j in [0, i]. 

it's like, when i is certain, we split s[0, j] into s[0, j - 1] and s[j, i], if we can have a combination meeting conditions that dp[j - 1] is true, and the substring[j, i] is in words[], dp[i] is true
 * 
 * T(n) = O(n^2)
 * S(n) = O(n)
 * 
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
	let n = s.length;
	// convert wordDict to hashmap
	let map = new Set();
	for (let i = 0; i < wordDict.length; i++) {
		map.add(wordDict[i]);
	}
	let dp = Array.from({length: n}, x => false);
	for (let i = 0; i < n; i++) {
		for (let j = 0; j <= i; j++) {
			if ((j === 0 || dp[j - 1]) && map.has(s.slice(j, i + 1))) {
				dp[i] = true;
				break;
			}
		}
	}
	
	return dp[n - 1];
}

// s = "leetcode", wordDict = ["leet", "code"]
// s = "applepenapple", wordDict = ["apple", "pen"]
// s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// s = "aaaaaaaaaaaa", wordDict = ["a", "aaa", "aa"]
s = "aaaaa", wordDict = ["aa", "aaaa"]

console.log(wordBreak(s, wordDict))
