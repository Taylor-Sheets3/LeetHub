/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [];
    while (nums1.length && nums2.length) {
        if (nums1[0] <= nums2[0]) {
            arr.push(nums1[0]);
            nums1.shift();
        } else {
            arr.push(nums2[0]);
            nums2.shift();
        }
    }
    if (nums1.length) {
        arr = arr.concat(nums1);
    } else {
        arr = arr.concat(nums2);
    }

    if (arr.length % 2 === 1) {
        let midpoint = Math.floor(arr.length / 2);
        return arr[midpoint];
    } else {
        m1 = Math.floor(arr.length / 2);
        return (arr[m1] + arr[m1 - 1]) / 2
    }
};