# Tree

# OUTLINE

- way of storage
    - array

        ```js
        let tree = [1, 2, 3, 4, null, 5, 6];
        /**
         *       1
         *     2   3
         *   4    5 6
         */

        function getLeft(i, tree) {
            return tree[2 * i + 1];
        }
        function getRight(i, tree) {
            return tree[2 * i + 2];
        }
        ```
    - pointer(TreeNode)

        ```js
        function TreeNode(val) {
            this.val = val;
            this.left = this.right = null;
        }
        ```
- height

    height of a node is how many levels the path from this node to the deepest leaf node in its sub trees.

    or it can describe in recursive way: height of a node equals max of its left and right subtrees plus 1

    **null node**'s height = -1, **leaf node**'s height = 0

    so get height is the path from current node to its deepest leaf node

    ```js
    // recusive way, post order
    function getHeight(root) {
        if (root == null) {
            return -1;
        }
        let lH = getHeight(root.left);
        let rH = getHeight(root.right);

        return Math.max(lH, rH) + 1;
    }
    // non-recursive way
    function getHeight(root) {
        if (root == null) {
            return -1;
        }
        let stack = new Stack();
        let node = root;
        while (node != null || !stack.isEmpty()) {
            if (node != null) {
                // check itself
                if (
                    (node.left == null || node.left.height != null) &&
                    (node.right == null || node.right.height != null)
                ) {
                    node.height =
                        Math.max(
                            node.left == null ? -1 : node.left.height,
                            node.right == null ? -1 : node.right.height
                        ) + 1;
                    node = null;
                }
                else if (node.left != null && node.left.height == null) {
                    stack.push(node);
                    node = node.left;
                } else if (node.right != null && node.right.height ==) {
                    stack.push(node);
                    node = node.right;
                } 
                // leaf node
                else {
                    node.height = 0;
                    node = null;
                }
            }
            else {
                node = stack.pop();
            }
        }

        return root.height;
    }
    ```

- depth
    
    depth is how many levels one node traverses up to root passing through. Unlike height, depth is counting from one node up to root
- type
    - binary tree
        - binary search tree(BST)
        - AVL Tree
        - Splay Tree
        - Red Black Tree
    - B Tree
    - B+ Tree
- traversal (recursive way and non-recursive way)
    - preorder
    - inorder
    - postorder
    - levelorder

        like BFS, using Queue
    - mirror traversal `this is a very interesting method`
        
        `/data_structure/tree_ts/problem/mirrorInorderBinaryTree.ts`
- formula
