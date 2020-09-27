var addTwoNumbers1 = function (l1, l2) {
    let s1 = JSON.stringify(l1).match(/\d/g).reverse().join(''),
        s2 = JSON.stringify(l2).match(/\d/g).reverse().join('')

    sum = BigInt(s1) + BigInt(s2)

    return [...sum.toString()].reduce((acc, v) => { return { val: v, next: acc } }, null)
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var addTwoNumbers2 = function (l1, l2) {
    //素组反正
    // l1 = l1.reverse();
    // l2 = l2.reverse();
    let l1Sum = 0;
    let l2Sum = 0;
    
    //10*0
    for (let i = 0; i < l1.length; i++) {
        l1Sum += l1[i] * Math.pow(10, i);
 
    }

    for (let i = 0; i < l2.length; i++) {
        l2Sum += l2[i] * Math.pow(10, i);
    }
    console.log(l1Sum);
    console.log(l2Sum);
    let l3Sum = l1Sum + l2Sum;
    l3Sum=l3Sum.toString();
    console.log(l3Sum);
    let arr = [];
    for (let i = 0; i < l3Sum.length; i++) {
        arr.push( parseInt(l3Sum[l3Sum.length-1-i]))
    }
    return arr;
}
var addTwoNumbers3 = function(l1, l2) {
    let s1 = JSON.stringify(l1).match(/\d/g).reverse().join(''),
        s2 = JSON.stringify(l2).match(/\d/g).reverse().join('')
  
    console.log(s1);
    console.log(s2);
    sum = BigInt(s1)+BigInt(s2)

    return [...sum.toString()].reduce((acc,v)=>{return {val: v, next: acc}}, null)
};
var addTwoNumbers = function(l1, l2) {
    let node=new ListNode('head');
    let temp=node;let n=0;let sum=0;
    while(l1||l2){
        let n1=l1?l1.val:0;
        let n2=l2?l2.val:0;
        sum=n1+n2+n;
        temp.next=new ListNode(sum%10);
        n=parseInt(sum/10);
        temp=temp.next;
        if(l1) l1=l1.next;
        if(l2) l2=l2.next;
    }
    if(n>0){
        temp.next=new ListNode(n);
    }
    return node.next;
};

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
console.log(addTwoNumbers(l1, l2))