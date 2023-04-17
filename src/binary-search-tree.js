const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const node = new Node(data);
    if (this.treeRoot==null) {
      this.treeRoot=node;
    } else {
      this.insert(this.treeRoot, node);
    }
  }

  insert(oldNode, newNode) {
    if (newNode.data < oldNode.data) 
    {
      if (oldNode.left==null) 
      {
        oldNode.left=newNode;
      } else 
      {
        this.insert(oldNode.left, newNode);
      }
    } 
    else 
    {
      if (oldNode.right==null) 
      {
        oldNode.right=newNode;
      } 
      else 
      {
        this.insert(oldNode.right, newNode);
      }
    }
  }

  has(data) {
    return (this.search(this.treeRoot, data) != null);
  }

  find(data) {
    return this.search(this.treeRoot, data);
  }

  search(node, data) {
    if (node === null) 
    {
      return null;
    } else if (data < node.data) 
    {
      return this.search(node.left, data);
    } else if (data > node.data) 
    {
      return this.search(node.right, data);
    } else 
    {
      return node;
    }
  }

  remove(data) {
    this.treeRoot = this.delete(this.treeRoot, data);
  }

  delete(node, data) {
    if (node === null) 
    {
      return null;
    } else if (data < node.data) 
    {
      node.left = this.delete(node.left, data);
      return node;
    } else if (data > node.data) 
    {
      node.right = this.delete(node.right, data);
      return node;
    } else 
    {
      if (node.left === null && node.right === null) 
      {
        node = null;
        return node;
      }
      if (node.left === null) 
      {
        node = node.right;
        return node;
      } else if (node.right === null) 
      {
        node = node.left;
        return node;
      }
      node.data = this.minNode(node.right).data;
      node.right = this.delete(node.right, node.data);
      return node;
    }
  }

  minNode(node) {
    if (node.left == null) 
    {
      return node;
    } else 
    {
      return this.minNode(node.left);
    }
  }

  min() {
    if (this.treeRoot == null) 
    {
      return null;
    }
    let node = this.treeRoot;
    while (node.left != null) 
    {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (this.treeRoot == null) 
    {
      return null;
    }
    let node = this.treeRoot;
    while (node.right != null) 
    {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};