
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

var a = readline().split('').map((x, i) => {
  return x
})

var set = {}
for (let i = 0; i < a.length; i++) {
  if (!set[a[i]]) set[a[i]] = new RBTree((a, b) => a - b)
  set[a[i]].insert(i)
}
var n = parseInt(readline())
for (var i = 0; i < n; i++) {

  var [command, l, r] = readline().split(' ').map((x, i) => {
    if (i === 2) return x
    return parseInt(x)
  })
  l = l - 1
  if (command === 1) {
    set[a[l]].remove(l)
    a[l] = r
    if (!set[r]) set[r] = new RBTree((a, b) => a - b)
    set[r].insert(l)
  } else {
    var ans = 0;
    r--
    alphabet.map((x) => {
      if (set[x]) {

        var value = set[x].lowerBound(l).data()
        if (value !== null && value <= r) ans++
      }
    })
    console.log(ans)
  }
}

function TreeBase() {
}


TreeBase.prototype.clear = function () {
  this._root = null;
  this.size = 0;
};


TreeBase.prototype.find = function (data) {
  var res = this._root;

  while (res !== null) {
    var c = this._comparator(data, res.data);
    if (c === 0) {
      return res.data;
    } else {
      res = res.get_child(c > 0);
    }
  }

  return null;
};


TreeBase.prototype.findIter = function (data) {
  var res = this._root;
  var iter = this.iterator();

  while (res !== null) {
    var c = this._comparator(data, res.data);
    if (c === 0) {
      iter._cursor = res;
      return iter;
    } else {
      iter._ancestors.push(res);
      res = res.get_child(c > 0);
    }
  }

  return null;
};


TreeBase.prototype.lowerBound = function (item) {
  var cur = this._root;
  var iter = this.iterator();
  var cmp = this._comparator;

  while (cur !== null) {
    var c = cmp(item, cur.data);
    if (c === 0) {
      iter._cursor = cur;
      return iter;
    }
    iter._ancestors.push(cur);
    cur = cur.get_child(c > 0);
  }

  for (var i = iter._ancestors.length - 1; i >= 0; --i) {
    cur = iter._ancestors[i];
    if (cmp(item, cur.data) < 0) {
      iter._cursor = cur;
      iter._ancestors.length = i;
      return iter;
    }
  }

  iter._ancestors.length = 0;
  return iter;
};


TreeBase.prototype.upperBound = function (item) {
  var iter = this.lowerBound(item);
  var cmp = this._comparator;

  while (iter.data() !== null && cmp(iter.data(), item) === 0) {
    iter.next();
  }

  return iter;
};


TreeBase.prototype.min = function () {
  var res = this._root;
  if (res === null) {
    return null;
  }

  while (res.left !== null) {
    res = res.left;
  }

  return res.data;
};


TreeBase.prototype.max = function () {
  var res = this._root;
  if (res === null) {
    return null;
  }

  while (res.right !== null) {
    res = res.right;
  }

  return res.data;
};



TreeBase.prototype.iterator = function () {
  return new Iterator(this);
};


TreeBase.prototype.each = function (cb) {
  var it = this.iterator(), data;
  while ((data = it.next()) !== null) {
    if (cb(data) === false) {
      return;
    }
  }
};


TreeBase.prototype.reach = function (cb) {
  var it = this.iterator(), data;
  while ((data = it.prev()) !== null) {
    if (cb(data) === false) {
      return;
    }
  }
};


function Iterator(tree) {
  this._tree = tree;
  this._ancestors = [];
  this._cursor = null;
}

Iterator.prototype.data = function () {
  return this._cursor !== null ? this._cursor.data : null;
};



Iterator.prototype.next = function () {
  if (this._cursor === null) {
    var root = this._tree._root;
    if (root !== null) {
      this._minNode(root);
    }
  } else {
    if (this._cursor.right === null) {


      var save;
      do {
        save = this._cursor;
        if (this._ancestors.length) {
          this._cursor = this._ancestors.pop();
        } else {
          this._cursor = null;
          break;
        }
      } while (this._cursor.right === save);
    } else {

      this._ancestors.push(this._cursor);
      this._minNode(this._cursor.right);
    }
  }
  return this._cursor !== null ? this._cursor.data : null;
};



Iterator.prototype.prev = function () {
  if (this._cursor === null) {
    var root = this._tree._root;
    if (root !== null) {
      this._maxNode(root);
    }
  } else {
    if (this._cursor.left === null) {
      var save;
      do {
        save = this._cursor;
        if (this._ancestors.length) {
          this._cursor = this._ancestors.pop();
        } else {
          this._cursor = null;
          break;
        }
      } while (this._cursor.left === save);
    } else {
      this._ancestors.push(this._cursor);
      this._maxNode(this._cursor.left);
    }
  }
  return this._cursor !== null ? this._cursor.data : null;
};

Iterator.prototype._minNode = function (start) {
  while (start.left !== null) {
    this._ancestors.push(start);
    start = start.left;
  }
  this._cursor = start;
};

Iterator.prototype._maxNode = function (start) {
  while (start.right !== null) {
    this._ancestors.push(start);
    start = start.right;
  }
  this._cursor = start;
};

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
  this.red = true;
}

Node.prototype.get_child = function (dir) {
  return dir ? this.right : this.left;
};

Node.prototype.set_child = function (dir, val) {
  if (dir) {
    this.right = val;
  } else {
    this.left = val;
  }
};

function RBTree(comparator) {
  this._root = null;
  this._comparator = comparator;
  this.size = 0;
}

RBTree.prototype = new TreeBase();


RBTree.prototype.insert = function (data) {
  var ret = false;

  if (this._root === null) {

    this._root = new Node(data);
    ret = true;
    this.size++;
  } else {
    var head = new Node(undefined);

    var dir = 0;
    var last = 0;


    var gp = null;
    var ggp = head;
    var p = null;
    var node = this._root;
    ggp.right = this._root;


    while (true) {
      if (node === null) {

        node = new Node(data);
        p.set_child(dir, node);
        ret = true;
        this.size++;
      } else if (is_red(node.left) && is_red(node.right)) {

        node.red = true;
        node.left.red = false;
        node.right.red = false;
      }


      if (is_red(node) && is_red(p)) {
        var dir2 = ggp.right === gp;

        if (node === p.get_child(last)) {
          ggp.set_child(dir2, single_rotate(gp, !last));
        } else {
          ggp.set_child(dir2, double_rotate(gp, !last));
        }
      }

      var cmp = this._comparator(node.data, data);


      if (cmp === 0) {
        break;
      }

      last = dir;
      dir = cmp < 0;


      if (gp !== null) {
        ggp = gp;
      }
      gp = p;
      p = node;
      node = node.get_child(dir);
    }


    this._root = head.right;
  }


  this._root.red = false;

  return ret;
};


RBTree.prototype.remove = function (data) {
  if (this._root === null) {
    return false;
  }

  var head = new Node(undefined);
  var node = head;
  node.right = this._root;
  var p = null;
  var gp = null;
  var found = null;
  var dir = 1;

  while (node.get_child(dir) !== null) {
    var last = dir;


    gp = p;
    p = node;
    node = node.get_child(dir);

    var cmp = this._comparator(data, node.data);

    dir = cmp > 0;


    if (cmp === 0) {
      found = node;
    }


    if (!is_red(node) && !is_red(node.get_child(dir))) {
      if (is_red(node.get_child(!dir))) {
        var sr = single_rotate(node, dir);
        p.set_child(last, sr);
        p = sr;
      } else if (!is_red(node.get_child(!dir))) {
        var sibling = p.get_child(!last);
        if (sibling !== null) {
          if (!is_red(sibling.get_child(!last)) && !is_red(sibling.get_child(last))) {

            p.red = false;
            sibling.red = true;
            node.red = true;
          } else {
            var dir2 = gp.right === p;

            if (is_red(sibling.get_child(last))) {
              gp.set_child(dir2, double_rotate(p, last));
            } else if (is_red(sibling.get_child(!last))) {
              gp.set_child(dir2, single_rotate(p, last));
            }


            var gpc = gp.get_child(dir2);
            gpc.red = true;
            node.red = true;
            gpc.left.red = false;
            gpc.right.red = false;
          }
        }
      }
    }
  }


  if (found !== null) {
    found.data = node.data;
    p.set_child(p.right === node, node.get_child(node.left === null));
    this.size--;
  }


  this._root = head.right;
  if (this._root !== null) {
    this._root.red = false;
  }

  return found !== null;
};

function is_red(node) {
  return node !== null && node.red;
}

function single_rotate(root, dir) {
  var save = root.get_child(!dir);

  root.set_child(!dir, save.get_child(dir));
  save.set_child(dir, root);

  root.red = true;
  save.red = false;

  return save;
}

function double_rotate(root, dir) {
  root.set_child(!dir, single_rotate(root.get_child(!dir), !dir));
  return single_rotate(root, dir);
}

