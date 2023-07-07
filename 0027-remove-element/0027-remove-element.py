class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        occurences = nums.count(val)
        while occurences > 0:
            nums.remove(val)
            occurences -= 1
            
        return len(nums)