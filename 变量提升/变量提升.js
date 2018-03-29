/**变量提升
 * 1. 变量声明未赋值-- undefined
 * 2. 未声明也没有赋值而直接使用变量-- 系统会报错
 */
// demo1
/*function test() {
    var num = 123;
    console.log(num);
}*/
// test();
// 报错：num is not defined，全局变量中没有声明num变量，无法访问下一级函数作用域中的变量
// console.log(num);

/*// demo2
var str = '123';
test();
function test() {
    console.log(str);
    var str = "345";
    console.log(str);
}
// console.log(str);
// undefined 变量提升str定义未赋值
// 345
// 123*/

/*
// demo 3
function test() {
    if("a" in window) {
        console.log("11");
        var a = 10;
    }
    console.log(a);
}
test();*/

/*
// demo4
if("a" in window) {
    var a = 10;
}
console.log(a);*/

/*
// demo5
if (!"a" in window) {
    var a = 10;
}
console.log(a);*/

/*
// demo6
var foo = 1;
function bar() {
    if (!foo){
        var foo = 10;
    }
    console.log(foo);
}
bar();*/

/*// demo7
function Foo() {
    getName = function () {
        console.log("1");
    };
    return this;
}
Foo.getName = function () {
    console.log("2");
};
Foo.prototype.getName = function () {
    console.log("3")
};
var getName = function () {
    console.log("4");
};
function getName() {
    console.log("5");
}
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();*/

/*
// demo8
console.log(a);
a();
var a = 3;
function a() {
    console.log(10);
}
console.log(a);
a = 6;
a();
/!*
 * 函数声明优先于变量声明
 *!/*/

/*
// demo9 在函数体内，参数a的优先级高于变量
var a = 0;
function aa(a) {
    console.log(a);
    var a = 3;
}
aa(5);
console.log(a);
*/

// demo10
/*a();
var a = c = function () {
    console.log(2);
};
a();
function a() {
    console.log(1);
}
a();
(function (b) {
    b(), c();
    var b = c = function a() {
        console.log(3);
    };
    b();
})(a);
c();*/

/*
function a() {}
var a;
console.log(typeof a)*/

