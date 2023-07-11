class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        def product(x, y):
            return (x - 1) * (y - 1)
        max_product = float(-inf)
        
        for i in range(len(nums) - 1):
            for j in range(i + 1, len(nums)):
                z = product(nums[i], nums[j])
                if z > max_product:
                    max_product = z
        
        return max_product