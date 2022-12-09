/**
 * @param {string} s
 * @return {string}
 */
// Expand around the center technique 
var longestPalindrome = function(s) {
    var start = 0; // start of sol
    var end = 0; //end of sol
    for (var i=0; i<s.length; i++) { //loop through each character
        var oddPalindrome = true; //bool to check whether palindrome is odd or even in length
        var lenOdd = expandAroundCenter(s, i, i); //length of odd palindrome
        var lenEven = expandAroundCenter(s, i, i+1); //length of even palindrome
        var lenMax = Math.max(lenOdd, lenEven); //get the max
        if (lenMax === lenEven) { 
            oddPalindrome = false;
        }
        if (lenMax > (end - start+1)) { //end - start + 1 = length of current longest palindrome
            if (oddPalindrome) { //odd case
                //make sure to floor since javascript has no types
                start = i - Math.floor(lenMax/2); //since i is the center/ divide length by two and subtract
                end = i + Math.floor(lenMax/2); //vice versa
            } else {
                start = (i - (lenMax/2)) +1; //center is off by 1 so add one. no floor since length is even
                end = (i+1 + (lenMax/2)) -1; //center is forward by one so substract one 
            }
        }
    }
    return s.substring(start, end+1); //dont for get that substr function xs [x,y)
}
var expandAroundCenter = function(s, L, R) {
    //first two conditions prevent an infinite loop
    //second condition verifies its a palindrome
    while (L >=0 && R < s.length && s[L] == s[R]) { 
        L--;
        R++;
    }
    //the loop will exit once it verifies that there isn't a palindrome any more. So L and R are both off by one. 
    R = R-1; //correct off by one error
    L = L+1;
    return R - L + 1; //return length
}