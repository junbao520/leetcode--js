/*给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。

请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

 

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:
nums1 = [1, 2] 1.5  3.5 5
nums2 = [3, 4]
//中位数排序两个数组合并之后排序

则中位数是 (2 + 3)/2 = 2.5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/


var findMedianSortedArrays = function (nums1, nums2) {

    //排序 如果是基数就是那个数 如果是偶数
    //排序data.length
    //其实需要进行排序
    //其实只要排序从小到大 //值需要
    //这样可以避免对基数和偶数的判断
    //    (m+n+1) / 2 个，和 (m+n+2) / 2 个
    //[1,2,6,7,8] [6,7,8,9,10]
    // 取两个数字
    let m = nums1.length;
    let n = nums2.length;
    let len = (m + n) / 2;
    let midLeft = 0;
    let midRight = 0;
    let nums1Start = 0;
    let nums2Start = 0;
    //0<0//0 小于0 
    // 10 //6 此  循环6次  4,5
    //多循环一次
    //5+1//6  循环2次
    //2 //循环次数超过了
    // for (int i = 0; i <= len / 2; i++) {
    //     left = right;
    //     if (aStart < m && (bStart >= n || A[aStart] < B[bStart])) {
    //         right = A[aStart++];
    //     } else {
    //         right = B[bStart++];
    //     }
    // }
    // if ((len & 1) == 0)
    //     return (left + right) / 2.0;
    // else
    //     return right;
    for (let i = 0; i <=len; i++) {
        midLeft = midRight;
        if (nums1Start<m&&(nums2Start>=n||nums1[nums1Start] < nums2[nums2Start])) {
            midRight = nums1[nums1Start++];
        }
        else {
            midRight = nums2[nums2Start++];
        }
    }
    if((m+n)%2!=0)return midRight;
    else return (midRight+midLeft)/2;


};
let nums1 = []  //2 
let nums2 = [2,3]//4.5 //3 次  //
//[0,0,0,0,0] [-1,0,0,0,0,0,1]

console.log(findMedianSortedArrays(nums1, nums2))