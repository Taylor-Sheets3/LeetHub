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
var reverseKGroup = function(head, k) {
   let result = new ListNode();
   let tail = result;
   let currentPosition = head;
   let values = [];
   let resultValues = [];
   
   //debugger;
    while (head) {
       if (head.val !== undefined) {
          values.push(head.val);
          head = head.next;
       } else {
          break;
       } 
    }

   for (let i = 0; i < values.length; i += k) {
      for (let j = i + k - 1; j >= i; j --) {
         if (values[j] === undefined) {
            resultValues = resultValues.concat(values.slice(i))
            break;
         } else {
            resultValues.push(values[j])
         }
      }
   }

   while (resultValues.length) {
      result.val = resultValues.shift();
      if (resultValues.length) {
         result.next = new ListNode();
         result = result.next;
      }
   }

   return tail;
};