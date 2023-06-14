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

/*
I- a sorted linked list
O- a sorted linked list with all copies of any duplicated numbers removed
C- the returned list must still be sorted
E- lists of length zero
*/
var deleteDuplicates = function(head) {
    let returnedList = new ListNode();
    //ESTABLISH TWO POINTERS a built list and a placetracker
    //(analagous to double for loop 
    //we use 'while' since the length is unknown at runtime)
    returnedList.next = head;
    let currentNode = returnedList;
    
    while (currentNode.next) {
        //declare a counter variable to keep track of instances of a single value
       let counter = 0;
        //record the value of the next node being checked
       let checkedValue = currentNode.next.val;
        //move one pointer to the next node. 
        //in hindsight, a bettername would have been tempNode or something similar
        //currentNode stays the same until counting is complete
       let returnedList = currentNode.next;
       while (returnedList && returnedList.val === checkedValue) {
           //count instances of the recorded value
           //while loop will break when the temp pointer value is no longer equal
           //to the checkedValue
           counter++;
           returnedList =  returnedList.next
       }
        //if more than one instance occurred, do not add any node of that value 
        //to the built list.  Skip ahead to the saved location of the temp pointer
       if(counter > 1) {
           currentNode.next = returnedList;
           //if only one instance occurred, add that node to the built list
       } else {
            currentNode = currentNode.next; 
       }
    }
    
    //return the built list
    return returnedList.next;
};