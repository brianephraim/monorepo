var removeDuplicates = (nums) => {
  let offset = 0;
  let lastNum = null;
  var i = 0;
  while (i <= nums.length - 1) {
    var num = nums[i];
    if (num === lastNum) {
      offset++;
    } else {
      nums[i - offset] = num;
    }
    lastNum = num;
    
    i++;
  }
  console.log(nums.length - offset,offset);
  nums.splice(nums.length - offset,offset)
  console.log(nums);
};
removeDuplicates([1,1,2,3,3,3]);