/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let temp = x
    let rev = 0
    let i = 0
    while(temp>0){
        let digit = Math.floor(temp % 10)
        rev = rev * 10 + digit
        temp = Math.floor(temp/10)
        i++
    }

    return x === rev
};