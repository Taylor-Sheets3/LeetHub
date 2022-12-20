/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let head = new ListNode, tail
    if (!list1 || !list2)
        return list2 || list1

    if (list1.val < list2.val) {
        head = list1
        list1 = list1.next
    }
    else {
        head = list2
        list2 = list2.next
    }
    tail = head
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1
            tail = tail.next
            list1 = list1.next
        } else {
            tail.next = list2
            tail = tail.next
            list2 = list2.next
        }
    }
     tail.next = list1 || list2




    return head

};