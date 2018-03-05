// 构造函数
function Person(name) {
    this.name = name;
}

Person.prototype = {
    getName: function () {
        return this.name;
    }
};

var zhang = new Person("zhangsan");
console.log(zhang.getName());

/********* 扩展Array方法***************/
Array.prototype.min = function () {
    var min = this[0];
    for (var i = 1; i < this.length; i++) {
        if (this[i] < min) {
            min = this[i];
        }
    }
    return min;
};

console.log([1,56,34,12].min());

var arr = [1, 56, 34, 12];
var total = 0;
for (var i in arr) {
    // 当使用for-in循环数组时，这个扩展方法也会被循环出来
    console.log(arr[i])
    if (arr.hasOwnProperty(i)) {
        total += parseInt(arr[i], 10);
    }
}
console.log(total);   // NaN