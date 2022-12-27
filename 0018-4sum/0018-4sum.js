/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let arr = nums.sort((a, b) => a - b);
    let results = [];
    debugger;
    for (let i = 0; i < arr.length - 3; i ++) {
        for (let j = i + 1; j < arr.length - 2; j ++) {
            let left = j + 1;
            let right = arr.length - 1;
            
            while (right > left) {
                let sum = arr[i] + arr[j] + arr[left] + arr[right]
                if (sum === target) {
                    results.push([arr[i], arr[j], arr[left], arr[right]]);
                    while (arr[left] === arr[left + 1]) {
                        left ++;
                    }
                    while (arr[right] === arr[right - 1]) {
                        right --;
                    }
                    left++;
                    right--;
                } else if (sum > target) {
                    right --;
                } else if (sum < target) {
                    left ++;
                }
            }
            while (arr[j] === arr[j+ 1] && j < arr.length - 2) {
                j++;
            }
        }
        while (arr[i] === arr[i + 1] && i < arr.length - 3) {
            i++;
        }
    }
    
    return results;
};