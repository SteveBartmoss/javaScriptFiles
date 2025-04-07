function twoSum(nums, target) {
    let result = [];
    let actual = 0;
    let siguiente = 0;
  
    while (actual < nums.length) {
      if (nums[actual] == target) {
        result.push(actual);
        return result;
      }
      siguiente = actual + 1;
      while (siguiente < nums.length) {
        if (nums[actual] + nums[siguiente] == target) {
          result.push(actual);
          result.push(siguiente);
          return result;
        }
        siguiente++;
      }
      actual++;
    }
  }