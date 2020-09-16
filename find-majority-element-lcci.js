/**
 * @param {number[]} nums
 * @return {number}
 * 基础思路利用map存储
 */
// o(1) o(n) 数据量的n背
var majorityElement = function(nums) {
  var map={};
  for(let i=0;i<nums.length;i++){
      if(map[nums[i]]){
          map[nums[i]]++;
      }
      else{
          map[nums[i]]=1;
      }
  }

  var res=Object.entries(map).find(s=>s[1]>nums.length/2);
  console.log(res);
  return res[0];
};
let nums=[2,2,1,1,1,2,2];
majorityElement(nums);