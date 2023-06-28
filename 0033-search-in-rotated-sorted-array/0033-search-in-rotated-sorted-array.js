/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
[1, 2, 3, 4, 5, 6, 7, 8]
*/
var search = function(nums, target) {
    let midpoint = Math.floor(nums.length / 2)
    
    if (nums[midpoint] === target) {
        return midpoint
    } else {
        for (let i = 1; i <= midpoint; i ++) {
            if (nums[midpoint + i] === target) {
                return midpoint + i;
            }
            if (nums[midpoint -i] === target) {
                return midpoint - i;
            }
        }
    }
    
    return -1;
};