function BinarySearchTree() {
  this.root = null;

  function ListNode(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }

  BinarySearchTree.prototype.insert = function(key) {
    let node = new ListNode(key);
    if (!this.root) {
      this.root = node;
    } else {
      //递归方法
      this.insertNode(this.root, node);
    }

    /* 迭代方法 */
    // let cur = this.root;
    // while (cur) {
    //   if (key > cur.key) {
    //     if (cur.right) {
    //       cur = cur.right;
    //     } else {
    //       cur.right = node;
    //       return;
    //     }
    //   } else {
    //     if (cur.left) {
    //       cur = cur.left;
    //     } else {
    //       cur.left = node;
    //       return;
    //     }
    //   }
    // }
    // return false;
  };

  BinarySearchTree.prototype.insertNode = function(node, newNode) {
    if (newNode.key > node.key) {
      if (node.right) {
        this.insertNode(node.right, newNode);
      } else {
        node.right = newNode;
      }
    } else {
      if (node.left) {
        this.insertNode(node.left, newNode);
      } else {
        node.left = newNode;
      }
    }
  };

  BinarySearchTree.prototype.has = function(key) {
    let cur = this.root;
    while (cur) {
      if (key > cur.key) {
        cur = cur.right;
      } else if (key < cur.key) {
        cur = cur.left;
      } else {
        return true;
      }
    }
    return false;
  };

  BinarySearchTree.prototype.update = function(oldKey, newKey) {
    let cur = this.root;
    while (cur) {
      if (oldKey > cur.key) {
        cur = cur.right;
      } else if (oldKey < cur.key) {
        cur = cur.left;
      } else {
        cur.key = newKey;
        return 1;
      }
    }
    return -1;
  };

  //中序遍历
  BinarySearchTree.prototype.inOrderTraversal = function(handler) {
    this.inOrderTraversalNode(this.root, handler);
  };

  BinarySearchTree.prototype.inOrderTraversalNode = function(node, handler) {
    if (node) {
      this.inOrderTraversalNode(node.left, handler);
      handler(node);
      this.inOrderTraversalNode(node.right, handler);
    }
  };

  //前序遍历
  BinarySearchTree.prototype.preOrderTraversal = function(handler) {
    this.preOrderTraversalNode(this.root, handler);
  };

  BinarySearchTree.prototype.preOrderTraversalNode = function(
    node,
    handler
  ) {
    if (node) {
      handler(node);
      this.preOrderTraversalNode(node.left, handler);
      this.preOrderTraversalNode(node.right, handler);
    }
  };

  //后序遍历
  BinarySearchTree.prototype.postOrderTraversal = function(handler) {
    this.postOrderTraversalNode(this.root, handler);
  };

  BinarySearchTree.prototype.postOrderTraversalNode = function(
    node,
    handler
  ) {
    if (node) {
      this.postOrderTraversalNode(node.left, handler);
      this.postOrderTraversalNode(node.right, handler);
      handler(node);
    }
  };

  BinarySearchTree.prototype.min = function() {
    let cur = this.root;
    while (cur.left) {
      cur = cur.left;
    }
    return cur.key;
  };

  BinarySearchTree.prototype.max = function() {
    let cur = this.root;
    while (cur.right) {
      cur = cur.right;
    }
    return cur.key;
  };
}

let bts = new BinarySearchTree();
bts.insert(11);
bts.insert(7);
bts.insert(15);
bts.insert(5);
bts.insert(3);
bts.insert(9);
bts.insert(8);
bts.insert(10);
bts.insert(13);
bts.insert(12);
bts.insert(14);
bts.insert(20);
bts.insert(18);
bts.insert(25);

console.log(
  bts.has(5),
  bts.has(20),
  bts.has(25),
  bts.has(24),
  bts.update(25, 24),
  bts.has(25),
  bts.has(24)
);

let BtsToList = "";
let handler = function(node) {
  BtsToList += node.key + "=>";
};
bts.postOrderTraversal(handler);
console.log(BtsToList);
console.log(bts.min(), bts.max());