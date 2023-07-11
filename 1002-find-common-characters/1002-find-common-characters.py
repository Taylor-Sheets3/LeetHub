class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        characters = list(words[0])
        #for each chars list,
        for word in words:
            temp = characters.copy()
            chars = list(word)
            #compare each letter to the characters master list
            for i in range(len(chars)):
            #if a letter appears on the temp list AND the chars list, pop it from the temp list
                if temp.count(chars[i]):
                    index = temp.index(chars[i])
                    temp.pop(index)
            #remove any remaining letters in the temp list from the master characters list
            for i in range(len(temp)):
                index = characters.index(temp[i])
                characters.pop(index)
        return characters