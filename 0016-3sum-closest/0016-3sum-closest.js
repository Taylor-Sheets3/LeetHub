/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let sums = [];
    nums.sort((a, b) => a - b)
    //debugger;
    for (var i = 0; i < nums.length - 2; i ++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        while (right > left) {
            let sum = nums[i] + nums[right] + nums[left];
            sums.push(sum);
            
            if (sum > target) {
                right --;
            } else if (sum < target) {
                left ++;
            } else {
                right --;
                left ++;
            }
        }
    }
    
    let result = sums[0];
    for (var i = 0; i < sums.length; i ++) {
        if (Math.abs(sums[i] - target) < Math.abs(result - target)) {
            result = sums[i];
        }
    }
    return result;
};