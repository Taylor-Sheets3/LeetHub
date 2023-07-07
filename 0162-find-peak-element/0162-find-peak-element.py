class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        for i in range(len(nums)):
            current_value = nums[i]
            if i == 0:
                left = float(-inf)
            else: 
                left = nums[i - 1]
            
            if i == len(nums) - 1:
                right = float(-inf)
            else:
                right = nums[i + 1]
            
            if current_value > left and current_value > right:
                return i