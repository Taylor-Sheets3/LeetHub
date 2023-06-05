/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function(head) {
    let node = head

    while(node !== null){
        if(node.next !== null){
            if(node.val === node.next.val){
                node.next = node.next.next
                continue
            }
        }

        node = node.next
    }

    return head
};