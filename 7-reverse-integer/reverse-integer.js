/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let temp = x,rev = 0
    if (x<0) {
        temp *= -1
    }
    while (temp!=0) {
        let digit = temp % 10
        rev = rev * 10 + digit
        if (rev>2147483647 || rev< -2147483647) {
            return 0
        }
        temp = Math.floor(temp / 10)
    }
    if (x<0) {
        return rev *(-1)
    }
    return rev
};