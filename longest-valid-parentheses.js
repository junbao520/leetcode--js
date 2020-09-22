/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let max=0;
  let stack=[];
  stack.push(-1);

  for(let i=0;i<s.length;i++){
      if(s[i]=='('){
        stack.push(i);
      }
      else{
          stack.pop();
          if(stack.length){
              let curMax=i-stack[stack.length-1];
              max=Math.max(max,curMax);
          }
          else{
              stack.push(i);
          }
      }
  }
  return max;
};