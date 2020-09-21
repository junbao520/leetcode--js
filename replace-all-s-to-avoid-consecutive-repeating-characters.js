/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
  //最简单的遍历 只要是？则把？前面和后面的字符 移除数组 然后随机取一个。

  const letter=['a','b','c'];
  for(let i=0;i<s.length;i++){
      if(s[i]=='?'){
          let search=letter[0];
          const [start,end]=[s[i-1]||'',s[i+1]||''];
          if(search===start||search==end){
              search=letter[1];
              if(search==start||search==end){
                  search=letter[2];
              }
          }
          //会替换当前的？
          s = s.replace('?', search)
      }
  }
  return s;
};

let s="j?qg??b";
console.log(modifyString(s));