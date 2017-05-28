var jD = require('jquery-deferred');
module.exports = function(items,task){
  var i = 0;
  var itemsDone = [];
  var itemsFailed = [];
  var recurse = function(dfd) {
        dfd = !!dfd ? dfd : jD.Deferred();
        var nextItem = items[i];
        var proceed = i++ < items.length - 1;
        task(nextItem).then(function(){
          if(proceed){
            itemsDone.push(nextItem);
            recurse(dfd);
          } else {
            dfd.resolve(itemsDone,itemsFailed);
          }
        }).fail(function(err){
          if(proceed){
            itemsFailed.push(nextItem);
            recurse(dfd);
          } else {
            dfd.resolve(itemsDone,itemsFailed);
          }
        });
        return dfd.promise();
    };
    return recurse();
};