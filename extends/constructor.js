// 等价于 var foo = new Array(1, 56, 34, 12);
var arr = [1, 56, 34, 12];
console.log(arr.constructor === Array);

// 等价于 var foo = new Function();
var Foo = function () {};
console.log(Foo.constructor === Function);

// 由构造函数实例化一个obj对象
var obj = new Foo();
console.log(obj.constructor === Foo);

// 将上面两段代码合起来，就得到下面的结论
console.log(obj.constructor.constructor === Function)

/************ 但是当constructor遇到prototype时 ****************/
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
};
var p = new Person("zhangSan");
console.log(p.constructor === Person);
console.log(Person.prototype.constructor === Person);
console.log(p.constructor.prototype.constructor === Person);

/*************** 重新定义prototype ******************************/
function Person(name) {
    this.name = name;
};
Person.prototype = {
    getName: function () {
        return this.name;
    }
};
var p = new Person("ZhangSan");
console.log(p.constructor === Person);
console.log(Person.prototype.constructor === Person)
console.log(p.constructor.prototype.constructor === Person)

// 原来是因为覆盖Person.prototype时，等价于进行如下代码操作：
Person.prototype = new Object({
    getName: function () {
        return this.name;
    }
});

// 而constructor始终指向创建自身的构造函数，所以此时Person.prototype.constructor === Object，即是：
function Person(name) {
    this.name = name;
};
Person.prototype = {
    getName: function() {
        return this.name;
    }
};
var p = new Person("ZhangSan");
console.log(p.constructor === Object);  // true
console.log(Person.prototype.constructor === Object); // true
console.log(p.constructor.prototype.constructor === Object); // true

// 怎么修正这种问题呢？方法也很简单，重新覆盖Person.prototype.constructor即可：
function Person(name) {
    this.name = name;
};
Person.prototype = new Object({
    getName: function() {
        return this.name;
    }
});
Person.prototype.constructor = Person;
var p = new Person("ZhangSan");
console.log(p.constructor === Person);  // true
console.log(Person.prototype.constructor === Person); // true
console.log(p.constructor.prototype.constructor === Person); // true