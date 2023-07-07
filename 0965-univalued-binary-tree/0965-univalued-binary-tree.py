# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isUnivalTree(self, root: Optional[TreeNode]) -> bool:
        values = set()
        
        def treeTransversal(root):
            if root != None:
                values.add(root.val)
                treeTransversal(root.left)
                treeTransversal(root.right)
        
        treeTransversal(root)
        
        if len(values) == 1:
            return True
        else:
            return False