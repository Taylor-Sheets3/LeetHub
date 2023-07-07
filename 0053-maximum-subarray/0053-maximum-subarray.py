class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        total = 0
        max = float(-inf)
        
        for i in range(len(nums)):
            total += nums[i]
                
            if total > max:
                max = total
            if total < 0:
                total = 0
                
        return max