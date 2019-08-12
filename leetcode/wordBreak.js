/**
 * @file 139. Word Break
 * @author arlenyang
 * @solution using trie tree to check the s, when found a word, back to root and continue seaching
 */

/**
 * T(n) = O(n + mk)
 * S(n) = O(mk)
 * n is the length of s, m is amount of words, k is the length of the longest word
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
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

s = "leetcode", wordDict = ["leet", "code"]
// s = "applepenapple", wordDict = ["apple", "pen"]
// s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// (s = "aaaaaaa"), (wordDict = ["aaaa", "aa"]);
// (s = "aaaaaaa"), (wordDict = ["aaaa", "aaa"]);
console.log(wordBreak(s, wordDict));
