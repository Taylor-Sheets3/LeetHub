class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        binary = bin(n)[2:]
        
        if binary.count('11') or binary.count('00'):
            return False
        else:
            return True
            
        