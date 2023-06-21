/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let listValues = [];
    
    if (!head) {
        return head;
    }
    
    while (head) {
        listValues.push(head.val);
        head = head.next;
    }
    
    if (k > listValues.length) {
        k = k % listValues.length;
    }
    
    while (k > 0) {
        listValues.unshift(listValues.pop())
        k --;
    }

   let newList = new ListNode(listValues.shift())
   head = newList;
   
   
   while (listValues.length) {
      newList.next = new ListNode(listValues.shift());
      newList = newList.next;
   }
   
   return head
};