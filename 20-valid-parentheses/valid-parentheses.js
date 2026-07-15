/**
 * @param {string} s
 * @return {boolean}
 */

 const checkpopped = (a,b)=>{
    if ((a==='(' && b===')')) {
        return true
    }
    if ((a==='{' && b==='}')) {
        return true
    }
    if ((a==='[' && b===']')) {
        return true
    }

    return false
}
var isValid = function(s) {
    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
            stack.push(s[i])
        } else if (s[i] === ']' || s[i] === '}' || s[i] === ')') {
            if (stack.length === 0) {
                return false
            }
            let popped = stack.pop()
            if (!checkpopped(popped,s[i])) {
                return false
            }
        }

    }
    if (stack.length != 0) {
        return false
    }
    return true
};