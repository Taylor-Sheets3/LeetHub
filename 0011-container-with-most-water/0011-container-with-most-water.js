/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxarea = 0;
    let left = 0;
    let right = height.length - 1;
    
    while(left < right) {
        let width = right - left;
        let minheight = height[left];
        if (height[right] < height[left]) {
            minheight = height[right];
        }
        if (width * minheight > maxarea) {
            maxarea = width * minheight;
        }
        
        if (height[left] <= height[right]) {
            left ++;
        } else {
            right --;
        }
    }
    return maxarea
};