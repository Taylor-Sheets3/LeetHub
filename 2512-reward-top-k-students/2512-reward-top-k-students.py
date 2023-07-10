class Solution:
    def topStudents(self, positive_feedback: List[str], negative_feedback: List[str], report: List[str], student_id: List[int], k: int) -> List[int]:
        #count each students points by iterating through the report list, compare the terms found with each of the positive feedback and negative feedback terms, and add or subtract to their score accordingly
        positive_feedback = set(positive_feedback)
        negative_feedback = set(negative_feedback)
        scores = {}
        for sentence, id in zip(report, student_id): 
            points = 0 
            for word in sentence.split(): 
                if word in positive_feedback: points += 3
                elif word in negative_feedback: points -= 1
            scores[id] = points 

        result = sorted(scores, key=lambda id: (-scores[id], id))[:k]

        return result
        
        
            