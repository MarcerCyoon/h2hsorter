// Node class that is the basis of the tree structure.
class Node {
  constructor(data, children=null) {
    this.data = data;
    this.children = [];
    if (children != null) {
      for (var i = 0; i < children.length; i += 1) {
        this.children.push(children[i]);
      }
    }
  }

  add_child(node) {
    this.children.push(node);
  }

  remove_child(node) {
    if (this.children.includes(node)) {
      const index = this.children.indexOf(node);
      this.children.splice(index, 1);
    } else {
      console.log("Node is not a child!");
    }
  }

  has_children() {
    return (self.children.length != 0);
  }

}

// Debug Function: prints each node of the tree and its respective children.
function printTree(tree) {
  for (var i = 0; i < tree.length; i += 1) {
    var childrenString = "";
    for (var j = 0; j < tree[i].children.length; j += 1) {
      var string = tree[i].children[j].data;
      childrenString = childrenString.concat(string + ", ");
    }
    console.log(tree[i].data + "'s Children: " + childrenString);
  }
}
