# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        depth = 0
        
        if root != None:
            depth += 1
            left_tree = self.maxDepth(root.left)
            right_tree = self.maxDepth(root.right)
            if left_tree > right_tree:
                depth += left_tree
            else:
                depth += right_tree
        
        return depth