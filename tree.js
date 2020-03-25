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

  get data() {
    return this.data;
  }

  get children() {
    return this.children;
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

function printTree(tree) {
  for (var i = 0; i < tree.length; i += 1) {
    console.log(tree[i].data + "'s Children: " + tree[i].children);
  }
}

export {Node, printTree};
