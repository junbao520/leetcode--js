var sortedSquares = function (A) {
    //a-b 升序 b-a 降序
    //return A.map(s=>s*s).sort((a, b) => a - b)

    //两个有序数组排序
    let A1 = [];
    let A2 = [];
    let A3 = [];
    A1 = A.filter(s => s <= 0).map(s => s * s);
    A2 = A.filter(S => S > 0).map(s => s * s);
    A1 = A1.reverse();
    let i = 0; j = 0;
    for (let k = 0;k< A.length; k++) {
        if(A1.length==A.length){
            A3=A1;
            break;
        }
        if(A2.length==A.length){
            A3=A2;
            break;
        }
        //处理边界问题
        //A1[0]<A2[0]
        //j++
        //A1[0]<A2[1];
        if (j==A2.length|| A1[i]< A2[j]) {
            A3.push(A1[i]);
            i++;
        } else {
            A3.push(A2[j]);
            j++;
        }
    }
    return A3;

};

let A =[-1,1];
console.log(sortedSquares(A));