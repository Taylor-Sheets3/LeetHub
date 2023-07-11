class Solution:
    def minLength(self, s: str) -> int:
        while s.count('AB') or s.count('CD'):
            if s.count('AB'):
                s = s.replace('AB', '')
            if s.count('CD'):
                s = s.replace('CD', '')
        
        return len(s)