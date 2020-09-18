/*给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。

表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。

示例 1:

输入: "3+2*2"
输出: 7
示例 2:

输入: " 3/2 "
输出: 1
示例 3:

输入: " 3+5 / 2 "
输出: 5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/calculator-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处*/
/**
 * @param {string} s
 * @return {number}
 */
//这个也就是解析 表达式目录树 但是这个是字符串 更难
var calculate = function(s) {
    s = s.replace(/ /g,'');
    let numStr = '', lastSymbol = '', numStack = [];
    for(let i = 0; i <= s.length; i++){
        if(/[\+\-\*\/]/.test(s[i]) || i == s.length){
            switch(lastSymbol){
                case '*':
                    numStack.push(numStack.pop() * parseInt(numStr));
                    break;
                case '/':
                    numStack.push(~~(numStack.pop() / parseInt(numStr)));
                    break;
                case '-':
                    numStack.push(-parseInt(numStr));
                    break;
                default:
                    numStack.push(parseInt(numStr));
            }
            lastSymbol = s[i];
            numStr = '';
            continue;
        }
        numStr += s[i];
    }
    return numStack.reduce((_, val)=> _ + val, 0);
};
console.log(calculate('42+5+3'));