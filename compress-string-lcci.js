/**
 * @param {string} S
 * @return {string}
 */
var compressString1 = function(S) {
    let res = ''
    let sReg = S.match(/([A-z])\1*/g)
    if(sReg){
        sReg.forEach(e=>{
            res += e.charAt(0)+e.length
        })
    }
    return res.length < S.length ? res : S
  };
  var compressString = function(S) {
    let count=1;
    let res='';
     for(let i=0;i<S.length;i++){
         if(S[i]==S[i+1]){
             count+=1;
         }
         else{
           
             res+=`${S[i]}${count}`
             count=1;
         }
     }
    return res.length < S.length ? res : S
  };