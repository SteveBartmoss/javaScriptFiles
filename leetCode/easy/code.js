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

//console.log(twoSum([2, 7, 11, 15], 9));

//console.log(twoSum([0, 4, 3, 0], 0));

function isPalindrome(number) {
    let normal = number.toString();
    let reverse = "";
  
    for (ite = normal.length - 1; ite >= 0; ite--) {
      reverse = reverse + normal[ite];
    }
  
    //console.log(normal);
    //console.log(reverse);
    return normal === reverse;
  }
  
  console.log(isPalindrome(121));
  console.log(isPalindrome(-121));
  console.log(isPalindrome(10));