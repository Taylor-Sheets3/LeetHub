class Solution:
    def reformat(self, s: str) -> str:
        alpha = []
        nums = []
        str = ''
        
        for char in s: 
            if char.isdigit():
                nums.append(char)
            else:
                alpha.append(char)
        
        longer = None
        shorter = None
        l = True
        
        if len(alpha) >= len(nums):
            longer = alpha
            shorter = nums
        else: 
            longer = nums
            shorter = alpha
        
        while (shorter):
            if l:
                str += longer[0]
                longer.pop(0)
                l = False
            else:   
                str += shorter[0]
                shorter.pop(0)
                l = True
        if len(longer) == 1:
            str += longer[0]
            return str
        if len(longer) == 0:
            return str
        else: 
            return ''
        
 