class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        return not (bin(n)[2:].count('11') or bin(n)[2:].count('00'))
            
        