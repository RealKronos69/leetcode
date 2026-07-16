/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let j = 0, i = 0
    while (i < haystack.length) {

        if (haystack[i] === needle[j]) {
            i++
            j++
            if (j === needle.length) {
                return i-j
            }
        } else {
            i = (i - j) + 1
            j = 0
        }
    }

    return -1
};