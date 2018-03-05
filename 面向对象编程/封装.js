/***************************************************************
 * 创建类
 * * 变量名首字母大写
 * * 添加属性
 **************************************************************/
/*var Book = function (id, bookname, price) {
    this.id = id;
    this.bookname = bookname;
    this.price = price;
};

Book.prototype.display = function () {};
Book.prototype = {
    display: function () {}
};*/

/***************************************************************
 * 属性和方法的封装
 **************************************************************/
/*
var Book = function (id, name, price) {
    // 私有属性
    var num = 1;
    // 私有方法
    function checkID() {

    }
    // 特权方法
    this.getName = function () {
        console.log('name');
    };
    this.getPrice = function () {
        console.log("price");
    };
    // 对象共有属性
    this.id = id;
    // 对象共有方法
    this.copy = function () {
        console.log('copy');
    };
    // 构造器
    this.name = name;
    this.price = price;
};

// 类静态公有属性（对象不能访问）
Book.isChinese = true;
// 类静态公有方法（对象不能访问）
Book.resetTime = function () {
    console.log('new time');
};
Book.prototype = {
    // 共有属性
    isJSBook: false,
    // 共有方法
    display: function () {}
};

var b = new Book(11, 'jab',50);
console.log(b.num);
console.log(b.isJSBook);
console.log(b.id);
console.log(b.isChinese);
console.log(Book.isChinese);
Book.resetTime();*/

/***************************************************************
 * 将类的静态变量通过闭包来实现
 **************************************************************/
/*var Book = (function () {
   // 静态私有变量
   var bookNum = 0;
   // 静态私有方法
   function checkBook(name) {
       console.log('name');
   }
   // 返回构造函数
   return function (newID, newName, newPrice) {
       // 私有变量
       var name,price;
       // 私有方法
       function checkID(id) {}
       // 特权方法
       this.getName = function () {
           console.log('name');
       };
       this.getPrice = function () {
           console.log("price");
       };
       this.setName = function () {

       };
       this.setPrice = function () {

       };
       // 对象共有属性
       this.id = newID;
       // 对象共有方法
       this.copy = function () {
           console.log('copy');
       };
       bookNum++
       if (bookNum > 100)
           throw new Error('我们仅出版100本书');
       // 构造器
       this.setName(name);
       this.setPrice(price)
   }
})();
Book.prototype = {
    issJSBook: false,
    display: function () {}
};*/

/*
var Book = (function () {
   // 静态私有变量
   var bookNum = 0;
   // 静态私有方法
   function checkBook(name) {
       console.log('name');
   }
   // 创建类
    function book(newID, newName, newPrice) {
        // 私有变量
        var name,price;
        // 私有方法
        function checkID(id) {}
        // 特权方法
        this.getName = function () {
            console.log('name');
        };
        this.getPrice = function () {
            console.log("price");
        };
        this.setName = function () {

        };
        this.setPrice = function () {

        };
        // 对象共有属性
        this.id = newID;
        // 对象共有方法
        this.copy = function () {
            console.log('copy');
        };
        bookNum++
        if (bookNum > 100)
            throw new Error('我们仅出版100本书');
        // 构造器
        this.setName(name);
        this.setPrice(price)
    }
    _book.prototype = {
       isJSBoob: false,
        disolay: function () {}
    }
})();*/
/***************************************************************
 * 创建对象的安全模式
 **************************************************************/
/*
var Book = function (title, time, type) {
    if (this instanceof Book) {
        this.title = title;
        this.time = time;
        this.type = type;
    } else {
        return new Book(title, time, type);
    }
};
var book = Book('javascript', '2014','js');
console.log(book);
console.log(book.title);
console.log(window.title)*/
