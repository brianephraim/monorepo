var removeElement = (nums, val) => {
  let offset = 0;
  nums.forEach((num, i) => {
    const cache = num;
    nums[i] = undefined;
    if (num === val) {
      offset++;
    } else {
      nums[i - offset] = cache;
    }
    
  });
  console.log(nums);
  nums.splice(nums.length - offset, offset);
  console.log(nums);
};

removeElement([3,2,2,3],3);