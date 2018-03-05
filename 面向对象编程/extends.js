/****************************************************
 * 子类的原型对象-类式继承
 ****************************************************/
// 类式继承
// 声明父类
/*function SuperClass() {
    this.superValue = true;
}

// 为父类添加共有方法
SuperClass.prototype.getSuperValue = function () {
    return this.superValue;
};

// 声明子类
function SubClass() {
    this.subValue = false
}

// 继承父类
SubClass.prototype = new SuperClass();
// 为子类添加共有方法
SubClass.prototype.getSubValue = function () {
    return this.subValue;
};

var instance = new SubClass();
console.log(instance.getSuperValue());
console.log(instance.getSubValue());

console.log(instance instanceof  SuperClass);
console.log(instance instanceof  SubClass);
console.log(SubClass instanceof  SuperClass);
console.log(SubClass.prototype instanceof SuperClass);
console.log(instance instanceof Object);*/

/****************************************************
 * 创建即继承-构造函数继承
 ****************************************************/
/*
function SuperClass(id) {
    this.books = ['JavaScript','html','css'];
    this.id = id;
}
SuperClass.prototype.showBooks = function () {
    console.log(this.books)
};
function SubClass(id) {
    SuperClass.call(this, id);
}
var instance1 = new SuperClass(10);
var instance2 = new SubClass(11);
instance1.books.push('设计模式');
console.log(instance1.books);
console.log(instance1.id)
console.log(instance2.books)
console.log(instance2.id)
instance1.showBooks()*/

/****************************************************
 * 结合继承
 ****************************************************/
/*
function SuperClass(name) {
    this.name = name;
    this.books = ['html','css','Javascript'];
}
SuperClass.prototype.getName = function () {
    console.log(this.name);
};
function SubClass(name, time) {
    SuperClass.call(this, name);
    this.time = time;
}
SubClass.prototype = new SuperClass();
SubClass.prototype.getTime = function () {
    console.log(this.time);
};

var instance1 = new SubClass("js book", 2014);
instance1.books.push("设计模式");
console.log(instance1.books);
instance1.getName()
instance1.getTime();

var instance2 = new SubClass("js book", 2014);
instance2.books.push("设计模式");
console.log(instance2.books);
instance2.getName();
instance2.getTime();*/
/****************************************************
 * 洁净的继承者-原型式继承
 ****************************************************/
function inheritObject(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var book = {
    name: 'js book',
    alikeBook: ['css book', 'html book']
};
var newBook = inheritObject(book);
newBook.name = "ajax book";
newBook.alikeBook.push("xml book");

var otherBook = inheritObject(book);
otherBook.name = "flash book";
otherBook.alikeBook.push("as book");

console.log(newBook.name);
console.log(newBook.alikeBook);
console.log(otherBook.name);
console.log(otherBook.alikeBook);
