/*给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

示例:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true
给定 word = "SEE", 返回 true
给定 word = "ABCB", 返回 false
 
//考虑分词法

提示：

board 和 word 中只包含大写和小写英文字母。
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3
暴击解题思路，递归查询

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/word-search
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
var exist = function (board, word) {
    var rLen = board.length,
        cLen = board[0].length;
    return helper(word, board, rLen, cLen);
};

function helper(word, board, rLen, cLen) {
    var ch = word.charAt(0),
        i,
        j;

    for (i = 0; i < rLen; i++) {
        for (j = 0; j < cLen; j++) {
            if (board[i][j] === ch) {
                board[i][j] = '*';
                if (dfs(1, word, i, j, board, rLen, cLen)) {
                    return true;
                }
                board[i][j] = ch;
            }
        }
    }

    return false;
}
//bfs 宽度优先搜索
//dfs 深度优先搜索
function dfs(index, word, i, j, board, rLen, cLen) {
    if (index === word.length) {
        return true;
    }
    var ch = word.charAt(index);
    for(const [dx,dy] of directions)
    {
        let newi=i + dx;
        let newj=j+dy;
        if (newi>=0&&newi < rLen&&newj>=0&&newj<cLen && board[newi][newj] === ch) {
            board[newi][newj] = '*';
            if (dfs(index + 1, word, newi, newj, board, rLen, cLen)) {
                return true;
            }
            board[newi][newj] = ch;
        }
    }

}

let board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

let word="ABC"

console.log(exist(board,word))