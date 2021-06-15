/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let total = 0;
    const stackToVisit = [this.root];
    if(!this.root) return 0;
    while(stackToVisit.length > 0){
      const curr = stackToVisit.pop();
      total = total + curr.val;
      for(let child of curr.children){
        stackToVisit.push(child);
      }
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    if(!this.root) return count;
    const stackToVisit = [this.root];
    while(stackToVisit.length > 0){
      const curr = stackToVisit.pop();
      if(curr.val %2 === 0) count++;
      for(let child of curr.children){
        stackToVisit.push(child);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    if(!this.root) return count;
    const stackToVisit = [this.root];
    while(stackToVisit.length > 0){
      const curr = stackToVisit.pop();
      if(curr.val > lowerBound) count++;
      for(let child of curr.children){
        stackToVisit.push(child);
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
