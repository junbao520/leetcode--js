/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
    this.list = [];
    this.map = new Map();
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {

    this.list.push(val);
    if (!this.map.has(val)) {
        const set = new Set();
        set.add(this.list.length - 1);
        this.map.set(val, set);
        return true;
    } else {
        set = this.map.get(val);
        set.add(this.list.length - 1);
        this.map.set(val,set);
        return false;
    }

};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
    //移除
    if (this.list.length && this.map.has(val) && this.map.get(val).size) {
        let set = this.map.get(val);
        let arr = Array.from(set)
        let index = arr.pop();
        set.delete(index);
        this.map.set(val,set);
        if (index < this.list.length - 1) {
            let lastVal = this.list[this.list.length - 1];
            let set = this.map.get(lastVal);
            set.delete(this.list.length - 1);
            set.add(index);
            this.list.splice(index, 1, lastVal);
        }
        this.list.pop();
        return true;
    }
    return false;
    //已经知道数组的索引了？我只需要移除指定索引位置 不能有循环
    //简单的把 索引前和索引后的数据都放到两个数组然后合并！
    //
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
    const index = Math.floor(Math.random() * this.list.length)
    return this.list[index]
}
/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()*/
var obj = new RandomizedCollection()
var param_1 = obj.insert(1)
var param_1 = obj.insert(1)
var param_1 = obj.insert(2)
 var param_2 = obj.remove(1)
var param_3 = obj.getRandom()
console.log(obj.list);