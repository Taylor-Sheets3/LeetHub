/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let currentIndex = 0;
    let maxJump = nums[currentIndex];
    
    for (let i = 0; i <= maxJump; i ++) {
        currentIndex = i;
        if (i + nums[i] > maxJump) {
            maxJump = i + nums[i];
        }
        
        if (i + nums[i] >= nums.length - 1) {
            return true
        }
    }
    
    return false;
    
};