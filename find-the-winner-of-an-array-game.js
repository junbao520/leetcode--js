/*
给你一个由 不同 整数组成的整数数组 arr 和一个整数 k 。

每回合游戏都在数组的前两个元素（即 arr[0] 和 arr[1] ）之间进行。比较 arr[0] 与 arr[1] 的大小，较大的整数将会取得这一回合的胜利并保留在位置 0 ，较小的整数移至数组的末尾。当一个整数赢得 k 个连续回合时，游戏结束，该整数就是比赛的 赢家 。

返回赢得比赛的整数。

题目数据 保证 游戏存在赢家。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-the-winner-of-an-array-game
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
//思路：并不需要 移动到数组尾部，只需要进行 两两位置交换 就可以了
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
    //需要记录每个数字赢得的次数
   let i=0;let t=0;
   while(t<k&&i<arr.length-1){
       if(arr[i]>arr[i+1]){
           arr[i+1]=arr[i];
           t++;
       }
       else{
           t=1;
       }
       i++;
   }
   return arr[i];
};
let arr =[1,25,35,42,68,70]

//let arr =[25,35,42,68,70,1]
//let arr =[35,42,68,70,1,25]
//let arr =[42,68,70,1,25,35]

let k =  2;
console.log(getWinner(arr,k));