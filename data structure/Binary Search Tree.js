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

  BinarySearchTree.prototype.remove = function(key) {
    let cur = this.root
    let prev = null
    while (cur) {
      if (key > cur.key) {
        prev = cur
        cur = cur.right
      } else if (key < cur.key) {
        prev = cur
        cur = cur.left
      } else {
        break
      }
    }
    // 当要删除的是叶子节点时(左右都没有子节点)
    if (!cur.left && !cur.right) {
      if (prev.key > key) {
        prev.left = null
      } else {
        prev.right = null
      }
    } else if (!cur.left) { //当要删除的节点只存在一个右节点
      if (prev.key > key) {
        prev.left = cur.right
      } else {
        prev.right = cur.right
      }
    } else if (!cur.right) { //当要删除的节点只存在一个左节点
      if (prev.key > key) {
        prev.left = cur.left
      } else {
        prev.right = cur.left
      }
    } else { //当要删除的节点存在两个节点
      //找出需要删除的节点的后继节点
      let next = cur.right
      let nextPrev
        //当要删除的节点在父节点的右边
      if (prev.key < key) {
        //当后继节点是叶子节点时
        if (!next.left && !next.right) {
          prev.right = next
          next.right = null
          next.left = cur.left
        } else if (!next.left) { //当后继节点为要删除的元素的下一个节点时
          prev.right = next
          next.left = cur.left
        } else { //当后继节点在深层时
          while (next.left) {
            nextPrev = next
            next = next.left
          }
          prev.right = next
          next.left = cur.left
          next.right = cur.right
          nextPrev.left = null
        }
      }
      //当要删除的节点在父节点的右边
      else if (prev.key > key) {
        if (!next.left && !next.right) {
          prev.left = next
          next.right = null
          next.left = cur.left
        } else if (!next.left) {
          prev.let = next
          next.left = cur.left
        } else {
          while (next.left) {
            nextPrev = next
            next = next.left
          }
          prev.left = next
          next.left = cur.left
          next.right = cur.right
          nextPrev.left = null
        }
      }
    }
  }
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

console.log(bts.min(), bts.max());
console.log(bts.remove(16));
bts.inOrderTraversal(handler);
console.log(BtsToList);