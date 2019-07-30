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

    private build(strs: string[]): void {
        for (let i = 0; i < strs.length; i++) {
            this.insert(strs[i]);
        }
    }

    /**
     * insert a string into tree
     * @param str
     */
    public insert(str: string): void {
        this.insertR(str, this.root);
    }

    public insertR(str: string, parent: SimpleTrieTreeNode) {
        if (str.length === 0) {
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
        if (str.length === 0) {
            return parent.isEnd;
        }

        let char = str[0];
        let index = char.charCodeAt(0) - StartCode;
        let child = parent.children[index];

        if (child == null) return false;
        return this.findR(str.slice(1), child);
    }

    /**
     * delete a string in the tree 
     * @param str the string need to be deleted
     */
    public delete(str: string): void {
        let parent = this.root;
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            let index = char.charCodeAt(0) - StartCode;
            let child = parent.children[index];
            if (child == null) {
                return;
            }
            if (i === str.length - 1) { // the last char
                child.isEnd = false;
                return;
            }
            parent = child;
        }
    } 

    /**
     * print the tree
     * @param OFFSET offset between parent node and child node when print
     */
    public print(): void {
        const OFFSET = 4;
        let printR = (tree: SimpleTrieTreeNode, offset) => {
            if (tree == null) {
                return;
            }

            console.log(`${" ".repeat(offset)}${tree.data === null ? 'root' : tree.data}${tree.isEnd ? "($)" : ""}`);
            for (let i = 0; i < tree.children.length; i++) {
                if (tree.children[i] != null) {
                    printR(tree.children[i], offset + OFFSET);
                }
            }
        };

        printR(this.root, 0);
    }
}

let strs = ['hello', 'hi', 'here', 'saying', 'dog'];
let tree = new SimpleTrieTree(strs);
tree.print();
// test insert
// tree.insert('heoolo')
// tree.print();
// test find
// console.log(tree.find('hi'))
// console.log(tree.find('hello'))
// console.log(tree.find('helloo'))
// console.log(tree.find('sayin'))
// test delete
tree.delete('hello')
tree.delete('hel')
tree.print();
console.log(tree.find('hello'));
