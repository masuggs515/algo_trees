/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {

    if (!this.root) return 0;

    function findMinDepth(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return findMinDepth(node.right);
      if (node.right === null) return findMinDepth(node.left);
      return Math.min(findMinDepth(node.left) + 1, findMinDepth(node.right) + 1);

    }
    return findMinDepth(this.root);

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    if (!this.root) return 0;

    function findMaxDepth(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return findMaxDepth(node.right);
      if (node.right === null) return findMaxDepth(node.left);
      return Math.max(findMaxDepth(node.left) + 1, findMaxDepth(node.right) + 1);

    }
    return findMaxDepth(this.root);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let total = 0;

    function findMaxSum(node) {
      if (node === null) return 0;
      const leftSide = findMaxSum(node.left);
      const rightSide = findMaxSum(node.right)
      total = Math.max(total, node.val + leftSide + rightSide)
      return Math.max(0, leftSide + node.val, rightSide + node.val);

    }
    findMaxSum(this.root);
    return total;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null

    let queue = [this.root];
    let closest = null;

    while (queue.length) {
      let curr = queue.shift();
      let currVal = curr.val;

      let higherThanLow = currVal > lowerBound;
      let setClosest = currVal < closest || closest ===null;
      if(higherThanLow && setClosest){
        closest = currVal;
      }
      if(curr.left) queue.push(curr.left);
      if(curr.right) queue.push(curr.right);
    }
    return closest;
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
