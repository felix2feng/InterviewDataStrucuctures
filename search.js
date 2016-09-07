/*
First, gain a crystal clear understanding of the problem and the solution
Only then do I code it out

DFS
           1
        2     3
      4   5  6   7
// Step 1:  Stack [1, 2, 4] <- 4 has no children
// Step 2: Stack [1, 2] <- Check 2. Then add 5 and 5's left branch


*/

// Recursive
function recursiveDFS(node, target) {
  if (node.value === target) {
    return true;
  }

  if (node.left) {
    var result = recursiveDFS(node.left, target);
    if (result) {
      return true;
    }
  }

  if (node.right) {
    var result = recursiveDFS(node.right, target);
    if (result) {
      return true;
    }    
  }

  return false;
}

// Iterative
function iterativeDFS(node, target) {
  var stack = [];
  stack.push(node);

  while (stack.length) {
    var current = stack.pop();
    if (current.value === target) {
      return true;
    }

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return false;
}

function iterativeBFS(node, target) {
  var queue = [];
  queue.push(node);

  while (queue.length) {
    var current = queue.shift();
    if (current.value === target) {
      return true;
    }
    if (current.left) {
      queue.push(current.left);
    }
    
    if (current.right) {
      queue.push(current.right);
    }    
  }
  return false;
}