/*************** 全局作用范围内使用this ***********/
/*console.log(this === window);
console.log(window.alert === this.alert);
console.log(this.parseInt("021",10));*/

/************** 函数中的this是在运行时决定的，而不是函数定义时****/
/*// 定义一个全局函数
function foo() {
    var fruit = "123";
    console.log(this.fruit);
}

// 定义一个全局变量，等价于window.fruit = "apple"
var fruit = "apple";
// 此时函数foo中的this指向window对象
// 这种调用方式和window.foo()是等价的
foo();

// 自定义一个对象，并将此对象的属性指向全局函数foo
var pack = {
    fruit: "orange",
    foo: foo
};
// 此时函数foo中this指向window.pack对象
pack.foo();*/

/****** 全局函数apply和call可以用来改变函数中this的指向 ********/
/*// 定义一个全局变量
function foo() {
    console.log(this.fruit);
}

// 定义一个全局变量
var fruit = "apple";
// 自定义一个对象
var pack = {
    fruit: "orange"
};
// 等价于window.foo()
foo.apply(window);
// 此时foo中的this === pack
foo.apply(pack);*/

/***** 函数也是对象 ***********************************************/
function foo() {
    if (this === window) {
        console.log("this is window.");
    }
}

// 函数foo也是对象，所以可以定义foo的属性boo为一个函数
foo.boo = function () {
    if (this === foo) {
        console.log("this is foo.")
    } else if (this === window){
        console.log("this is window");
    }
};

// 等价于window.foo();
foo();

// 可以看到函数中this的指向调用函数的对象
foo.boo();
// 使用apply改变函数中this的指向
foo.boo.apply(window);


