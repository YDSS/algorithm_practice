/**
 * @file trie tree node, the char set is a-z, and the children of node is an array with 26 elements, every index represents a char,and the value is a pointer pointing a child
 * @author arlenyang
 */

const CharSetLen: number = 26;
const StartCode: number = "a".charCodeAt(0);

export class SimpleTrieTreeNode {
    data: any;
    // the node is an end of a string or not
    isEnd: boolean;
    children: SimpleTrieTreeNode[];

    constructor(data?: any) {
        this.data = data;
        this.isEnd = false;
        this.children = new Array(CharSetLen);
    }
}

export class SimpleTrieTree {
    // root is the root of tree, whose data is `null`
    public root: SimpleTrieTreeNode;

    constructor(strs?: string[]) {
        this.root = new SimpleTrieTreeNode(null);
        if (strs && strs.length > 0) {
            this.build(strs);
        }
    }

    private build(strs: string[]): void {}

    public insert(str: string): void {
        this.insertR(str, this.root);
    }

    public insertR(str: string, parent: SimpleTrieTreeNode) {
        if (str === "") {
            // to the end
            parent.isEnd = true;
            return;
        }
        let char = str[0];
        let index = char.charCodeAt(0) - StartCode;
        // check if the current char is already in the children set
        if (parent.children[index] == null) {
            parent.children[index] = new SimpleTrieTreeNode(char);
        }
        this.insertR(str.slice(1), parent.children[index]);
    }

    /**
     * find the str in the tree, return if it's in the tree or not
     * @param str str need find in the tree
     */
    public find(str: string): boolean {
        return this.findR(str, this.root); 
    }

    public findR(str: string, parent: SimpleTrieTreeNode): boolean {
        if (str.length === 0) return false;

        let char = str[0];
        let index = char.charCodeAt(0) - StartCode;
        let child = parent.children[index];

        if (child == null) return false;
        if (str.length === 1) {
            if (child.isEnd) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return this.findR(str.slice(1), child);
        }
    }
}
