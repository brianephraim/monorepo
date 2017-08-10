var generateParens = (n) => {
  var allOpeners = [];
  var i = 0;
  while(i<n){
    allOpeners.push('(');
    i++;
  }

  var finals = {};

  var permsOfSingleCloser = (arr, openerSkips) => {
    if (openerSkips <= n) {
      var i = 0;
      
      var freshArrs = [];
      var foundOpeners = 0;
      while(i < arr.length) {
        var char = arr[i];
        if (char === '(') {
          foundOpeners++;
          if (foundOpeners > openerSkips) {
            var clone = arr.slice();
            clone.splice(i + 1, 0, ')');
            freshArrs.push(clone);
            if (clone.length === n * 2) {
              finals[clone.join('')] = true;
            }
          }
        }
        i++;
      }
      freshArrs.forEach((arr) => {
        permsOfSingleCloser(arr,openerSkips + 1);
      });
    }
  };
  permsOfSingleCloser(allOpeners,0);
  console.log(Object.keys(finals));
};
generateParens(3);