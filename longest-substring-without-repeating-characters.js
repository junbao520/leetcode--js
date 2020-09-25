/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 * 
 * i  表示无重复字符串开始的下标
 */
var lengthOfLongestSubstring = function (s) {
    let map = new Map();
    let max = 0;
    for (let i = 0, j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]) + 1, i);
        }
        max = Math.max(max, j - i + 1);
        map.set(s[j], j);

    }
    return max;
};

var s = "abcda"
s = "bb"

console.log(lengthOfLongestSubstring(s));