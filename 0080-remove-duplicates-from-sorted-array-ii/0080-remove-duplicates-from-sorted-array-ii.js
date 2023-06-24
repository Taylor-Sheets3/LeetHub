/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
     //for each unique number in the set nums, record the starting point, count forward until the end point, and then delete until only a maximum of two remain
       
    for (let i = 0; i < nums.length; i ++) {
        let start = i;
        let j = i
        let counter = 0;
        
        while (nums[j] === nums[start]) {
            j ++;
            counter ++;
        }
        
        while (counter > 2) {
            nums.splice(start, 1);
            counter --;
        }
        
        if (counter === 2) {
            i ++
        } 
    }
    
    return nums.length;
};