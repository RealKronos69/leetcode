/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let j = digits.length - 1
    while (j >= 0) {
        if (digits[j] < 9) {
            digits[j]++
            return digits

        } else {
            digits[j] = 0
        }
        j--
    }
    return [1,...digits]
};