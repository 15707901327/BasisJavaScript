// 利用对象属性不能相同的特点进行去重
Array.prototype.unique1 = function(){
    console.time("数组去重法1"); 　　//记录开始执行的时间
    var arr = []; 　　 //创建一个临时数组
    var obj = {}; 　　//创建一个空对象
    for(var i = 0; i < this.length; i++){ 　　//遍历当前要去重的数组
        if(!obj[this[i]]){  　//判断obj对象中是否存有当前项，没有则执行
            arr.push(this[i]); 　　//将当前项push到临时数组中
            obj[this[i]] = 1; 　　//将当前项存入obj对象
        }
    }
    console.timeEnd("数组去重法1");　　 //记录结束执行的时间
    return arr;
};
Array.prototype.unique2 = function(){
    console.time("数组去重法2"); //记录开始执行的时间
    var arr = [];  //创建一个临时数组
    for(var i = 0; i < this.length; i++){  //遍历当前要去重的数组
        if(arr.indexOf(this[i]) == -1){  //判断临时数组中是否存有当前项，没有则执行
            arr.push(this[i]); //将当前项push到临时数组中
        }
    }
    console.timeEnd("数组去重法2"); //记录结束执行的时间
    return arr;
};
Array.prototype.unique3 = function(){
    console.time("数组去重法3"); //记录开始执行的时间
    var arr = [this[0]]; //创建一个临时数组,并将要去重数组的第一项存入临时数组
    for(var i = 1; i < this.length; i++) { //从要去重数组第二项开始遍历
        if (this.indexOf(this[i]) == i){ //判断临时数组中是否存有当前项，没有则执行
            arr.push(this[i]); //将当前项push到临时数组中
        }
    }
    console.timeEnd("数组去重法3"); //记录结束执行的时间
    return arr;
};
// 利用es6的set方法
Array.prototype.unique4 = function(){
    console.time("数组去重法4"); //记录开始执行的时间
    var arr = Array.from(new Set(this));
    console.timeEnd("数组去重法4"); //记录结束执行的时间
    return arr;
};

var arr1 = []; //创建一个要去重的数组
for(var i = 0; i < 200000; i++){ //遍历200000个数据
    arr1.push(parseInt(Math.random() * 10) + 1); //将所有数据返回为随机数(1-10之间)的数, 并push到要去重的数组中
}
console.log(arr1.unique1()); //打印数组去重法1的执行时间
console.log(arr1.unique2()); //打印数组去重法2的执行时间
console.log(arr1.unique3()); //打印数组去重法3的执行时间
console.log(arr1.unique4()); //打印数组去重法3的执行时间