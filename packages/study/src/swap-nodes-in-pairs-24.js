var ll = {
  val:1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6
          }
        }
      }
    }
  }
};

var swapPairs = (node) => {
  var i = 0;
  while (node) {
    let cacheVal = node.val;
    node.val = node.next.val;
    node.next.val = cacheVal;
    node = node.next && node.next.next ? node.next.next : null;
  }

};
swapPairs(ll);

var print = (next) => {
  var result = '';
  while (next) {
    result += next.val;
    next = next.next;
  }
  console.log(result, result === '214365');
};
print(ll);