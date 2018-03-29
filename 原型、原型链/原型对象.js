/*function Person() {}

Person.prototype.name = 'Zaxlct';
Person.prototype.age = 28;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function () {
    console.log(this.name);
}

var person1 = new Person();
person1.sayName(); // 'Zaxlct'

var person2 = new Person();
person2.sayName(); // 'Zaxlct'
/!**
 * 每个对象都有__proto__属性，但只有函数对象才有prototype属性
 *!/
console.log(person1.sayName == person2.sayName); //true*/

/*
var A = function () {};
A.prototype.n = 1;
var b = new A();
A.prototype = {
    n: 2,
    m: 3
};
var c = new A();
console.log(b.n,b.m,c.n,c.m);*/