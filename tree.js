// Identical trees have the same layout and same data - Iterative
function checkIfTwoBinaryTreesAreIdentical(root1, root2) {
  var stack1 = [];
  var stack2 = [];
  stack1.push(root1);
  stack2.push(root2);
  while (stack1.length > 0 || stack2.length > 0) {
    var node1 = stack1.unshift();
    var node2 = stack2.unshift();
    if (node1.value !== node2.value) {
      return false;
    }
    if (node1.left) {
      stack1.push(node1.left);
    }
    if (node1.right) {
      stack1.push(node1.right);
    }    
    if (node2.left) {
      stack2.push(node2.left);
    }
    if (node2.right) {
      stack2.push(node2.right);
    }    
  }
  return true;
}

function checkIfTwoBinaryTreesAreIdenticalRecursive(root1, root2) {
  if (!root1 && !root2) {
    return true;
  }

  if (root1 && root2) {
    return root1.value === root2.value &&
      checkIfTwoBinaryTreesAreIdenticalRecursive(root1.left, root2.left) &&
      checkIfTwoBinaryTreesAreIdenticalRecursive(root1.right, root2.right)
  }


  return false;
}

function InOrderIteratorForABinaryTree(node) {
  var stack = [];
  var current = node;
  stack.push(current);
  while (current.left) {
    stack.push(current.left);
    current = current.left;
  }

  var result = [];
  var toAdd;
  while (stack.length > 0) {
    toAdd = stack.pop();
    result.push(toAdd);
    if (toAdd.right) {
      stack.push(toAdd.right);
      var currentL = toAdd.right;
      while (currentL.left) {
        stack.push(currentL.left);
        currentL = currentL.left;
      }      
    }
  }
  return result;
}

function inOrderSuccessor(rootNode, target) {
  var stk = [];
  var current = rootNode;
  var found;
  while (current) {
    if (current === target) {
      var found = current;
      break;
    }
    if (current > target) {
      current = current.right
    } else {
      stk.push(current);
      current = current.left;
    }
    
  }

  // Use Binary Search to find the target
    // Keep track of the stack
  // The next will be the next item in the stack (if on left side)
    // Or the right child or the left most child of the right child
}

function levelOrderTraversal(rootNode) {
  var queue = [];
  var children = [];

  queue.push(rootNode);
  while (queue.length > 0 || children.length > 0) {
    var toPrint = '';
    while (queue.length) {
      var node = queue.unshift();
      toPrint += ' ' + node;
      if (node.left) {
        children.push(node.left);
      }
      if (node.right) {
        childre.npush(node.right);
      }
    }
    console.log(toPrint);
    while (children.length) {
      var toPush = children.unshift();
      queue.push(toPush);
    }
  }
  // When to add children and when to print
}

// STOPPED AT IS BINARY TREE
function isBST(rootNode, min, max) {
  if (!rootNode) {
    return true;
  }

  if (rootNode.value < min || rootNode.value > max) {
    return false;
  }

  return isBST(rootNode.left, min, rootNode.value) && isBST(rootNode.right, rootNode.value, max)
}

// isBST(rootNode, -Infinity, Infinity);

// Recursive way
function convertBSTToLinkedList(root) {
  if (!root) {
    return null;
  }

  var left = convertBSTToLinkedList(root.left);
  var right = convertBSTToLinkedList(root.right);
  left.next = root;
  root.previous = left;
  right.previous = root;
  root.next = right;
  return result;
}

function printTreePerimeter(currNode) {
  var toPrint = [];
  toPrint.push(currNode);
  // Print Left boundary
  var current = currNode.left;
  while (current) {
    toPrint.push(current);
    current = current.left;
  }

  // Print leaves
  function printLeaves(node) {
    if (node) {
      printLeaves(node.left);
      if (!node.left && !node.right) {
        console.log(node);
      }
      printLeaves(node.right);
    }
  }


  // Print right boundary (backwards)
  var rightStack = [];
  rightStack.push(currNode.right);
  var current = currNode.right.right;
  while (current) {
    toPrint.push(current);
    current = currNode.right;
  }
  while(rightStack.length) {
    toPrint.push(rightStack.pop());
  }
}

// Connect same-level siblings
function connectSameLevelSiblings(node) {
  var current = node;
  var prev = null;
  var nextLevelHead = null;

  while (current) {
    if (current.left && current.right) {
      if (!nextLevelHead) {
        nextLevelHead = current.left;
      }
      current.left.next = current.right;

      if (prev) {
        prev.next = current.right;
      }

      prev = current.right;

    } else if (current.left) {
      if (!nextLevelHead) {
        nextLevelHead = current.left;
      }

      if (prev) {
        prev.next = current.left;
      }

      prev = current.left;

    } else if (current.right) {
      if (!nextLevelHead) {
        nextLevelHead = current.right;
      }

      if (prev) {
        prev.next = current.right;
      }

      prev = current.right;
    }

    current = current.next
  }

  if (prev) {
    prev.next = null;
  }

  return nextLevelHead;
}

var marker = Number.MAX_VALUE;
function serializeBst(node, stream) {
  // Serialize = write tree to a file
  // Deserialize = read from a file and reconstruct the tree from memory
  if (!node) {
    stream.push(marker);
    return;
  }
  stream.push(node.value);
  serializeBst(node.left, stream);
  serializeBst(node.right, stream);

}

function deserializeBst(stream) {
  try {
    let data = stream.shift();
    if (data === marker) {
      return null;
    }

    let node = new BinaryTreeNode(data);
    node.left = deserializeBst(stream);
    node.right = deserializeBst(stream);
    return node;
  } catch (err) {
    return null;
  }
}

function connectAllSiblings(node) {
  var first = node;
  var queue = [];
  queue.push(node);
  var prev = node;
  while (queue.length) {
    var current = queue.shift();
    prev.next = current;
    prev = current;
    if (current.left) {
      queue.push(current.left)
    }
    if (current.right) {
      queue.push(current.right)
    }    
  }

  prev.next = null;

  return first;
}

function inOrderSuccessorWithoutParentPointer(node, target) {
  var current = node;
  while (current) {
    if (current.value === target) {
      // Find parent
    } else if (current.value < target) {
      current = current.right;
    } else {
      current = current.left;
    }
  }
  return null;
}

function nthHighestInBst(node, n) {
  // Find the highest in BST
    // Push decendents into queue
}
