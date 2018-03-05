// 定义一个函数
/*function add(a, b) {
    add.invokeTimes++;
    return a + b;
}
// 因为函数本身也是对象，这里为函数add定义一个属性，用来记录此函数被调用的次数
add.invokeTimes = 0;
add(1 + 1);
add(2 + 3);
console.log(add.invokeTimes);*/

/************************* 创建自定义对象 *****************************************/
/*// 构造函数
function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}
// 定义Person的原型，原型中的属性可以被自定义对象引用
Person.prototype = {
    getName: function () {
        return this.name;
    },
    getSex: function () {
        return this.sex;
    }
};
/!**
 *  内部实现
 *  1. 创建一个空白的对象（new Object()）
 *  2. 拷贝Person.Prototype中的属性（键值对）到这个空对象中（内部实现不是拷贝，而是一个隐藏的链接）
 *  3. 将这个对象通过this关键子传递到构造函数中并执行构造函数
 *  4. 将这个对象赋值给变量zhang
 *!/
var zhang = new Person("ZhangSan",'man');
console.log(zhang.getName());
var chun = new Person('ChunHua','woman');
console.log(chun.getName());*/

/**********************************************************************************/
/**
 * 证明prototype模板并不是被拷贝到实例化的对象中，而是一种链接的方式
 */
/*function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}
Person.prototype.age = 20;
var zhang = new Person('zhangSan','man');
console.log(zhang.age);
// 覆盖prototype中的age属性
zhang.age = 19;
console.log(zhang.age);
delete zhang.age;
// 在删除实例属性age后，此属性值又从prototype中获得
console.log(zhang.age);*/

/**********************************************************************************/
/**
 * 实现简单的继承
 */
// 构造函数
/*function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}
// 定义Person的原型，原型中的属性可以被自定义对象引用
Person.prototype = {
    getName: function () {
        return this.name;
    },
    getSex: function () {
        return this.sex;
    }
};
function Employee(name, sex, exployeeID) {
    this.name = name;
    this.sex = sex;
    this.exployeeID = exployeeID
}
// 将Employee的原型指向Person的一个实例
// 因为Person的实例可以调用Person原型方法，所以Employee的实例也可以调用Person原型中的所有属性
Employee.prototype = new Person();
Employee.prototype.getEmployeeID = function () {
    return this.getEmployeeID();
};
var zhang = new Employee('zhangsan','man','123');
console.log(zhang.getName());
// Employee实例的constructor会有一个指向错误
console.log(zhang.constructor === Employee); // false
console.log(zhang.constructor === Object); // true*/

/***********修正constructor的指向错误 *******************************************/
/*// 构造函数
function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}
// 定义Person的原型，原型中的属性可以被自定义对象引用
Person.prototype = {
    getName: function () {
        return this.name;
    },
    getSex: function () {
        return this.sex;
    }
};
function Employee(name, sex, exployeeID) {
    this.name = name;
    this.sex = sex;
    this.exployeeID = exployeeID
}
// 将Employee的原型指向Person的一个实例
// 因为Person的实例可以调用Person原型方法，所以Employee的实例也可以调用Person原型中的所有属性
Employee.prototype = new Person();
Employee.prototype.constructor = Employee;
Employee.prototype.getEmployeeID = function () {
    return this.getEmployeeID();
};
var zhang = new Employee('zhangsan','man','123');
console.log(zhang.getName());
// Employee实例的constructor会有一个指向错误
console.log(zhang.constructor === Employee); // false
console.log(zhang.constructor === Object); // true*/

/************创建Employee类时实例化Person是不合适的*******************************/
/*// 空的构造函数
function Person() {}
// 定义Person的原型，原型中的属性可以被自定义对象引用
Person.prototype = {
    init: function (name) {
        this.name = name;
    },
    getName: function () {
        return this.name;
    },
    getSex: function () {
        return this.sex;
    }
};
// 空的构造函数
function Employee() {}

// 创建类的阶段不会初始化父类的数据，因为Person是一个空的构造函数
Employee.prototype = new Person();
Employee.prototype.constructor = Employee;
Employee.prototype.init = function (name, employeeID) {
    this.name = name;
    this.employeeID = employeeID;
};
Employee.prototype.getEmployeeID = function () {
    return this.getEmployeeID();
};
var zhang = new Employee();
zhang.init("zhangsan",'1234');
console.log(zhang.getName());*/

/*********** 如何自动调用init函数 *********************************************/
/*// 创建一个全局的状态标示 - 当前是否处于类的构造阶段
var initializing = false;
// 空的构造函数
function Person() {
    if (!initializing) {
        this.init.apply(this, arguments);
    }
}
// 定义Person的原型，原型中的属性可以被自定义对象引用
Person.prototype = {
    init: function (name) {
        this.name = name;
    },
    getName: function () {
        return this.name;
    },
    getSex: function () {
        return this.sex;
    }
};
// 空的构造函数
function Employee() {
    if (!initializing) {
        this.init.apply(this, arguments)
    }
}

// 标示当前进入类的创建阶段，不会调用init函数
initializing = true;

// 创建类的阶段不会初始化父类的数据，因为Person是一个空的构造函数
Employee.prototype = new Person();
Employee.prototype.constructor = Employee;

initializing = false;

Employee.prototype.init = function (name, employeeID) {
    this.name = name;
    this.employeeID = employeeID;
};
Employee.prototype.getEmployeeID = function () {
    return this.getEmployeeID();
};

// 初始化类实例时，自动调用类的原型函数init，并向init中传递参数
var zhang = new Employee("zhangsan","123");
console.log(zhang.getName());*/

/******************* 如何避免引入全局变量initializing ************************/
/*// 创建一个全局的状态标示 - 当前是否处于类的构造阶段
var initializing = false;

function jClass(baseClass, prop) {
    // 只接受一个参数的情况 - jClass(prop)
    if (typeof (baseClass) === "object" ){
        prop = baseClass;
        baseClass = null;
    }

    // 本次调用所创建的类（构造函数）
    function F() {
        // 如果当前处于实例化类的阶段，则调用init原型函数
        if(!initializing) {
            this.init.apply(this, arguments);
        }
    }

    // 如果此类需要从其它类扩展
    if (baseClass) {
        initializing = true;
        F.prototype = new baseClass();
        F.prototype.constructor = F;
        initializing = false;
    }

    // 覆盖父类的同名函数
    for(var name in prop) {
        if (prop.hasOwnProperty(name)){
            F.prototype[name] = prop[name];
        }
    }
    return F;
}

var Person = jClass({
    init: function (name) {
        this.name = name;
    },
    getName: function () {
        return this.name;
    }
});
var Employee = jClass(Person,{
    init: function (name, employeeID) {
        this.name = name;
        this.employeeID = employeeID;
    },
    getEmployeeID: function () {
        return this.employeeID;
    }
});

var zhang = new Employee("zhangsan","1234");
console.log(zhang.getName())*/

/******************* 如何调用父类的同名方法？ ************************/
/*// 创建一个全局的状态标示 - 当前是否处于类的构造阶段
var initializing = false;

function jClass(baseClass, prop) {
    // 只接受一个参数的情况 - jClass(prop)
    if (typeof (baseClass) === "object" ){
        prop = baseClass;
        baseClass = null;
    }

    // 本次调用所创建的类（构造函数）
    function F() {
        // 如果当前处于实例化类的阶段，则调用init原型函数
        if(!initializing) {
            // 如果父类存在，则实例对象的base指向父类的原型
            // 这就提供了在实例对象中调用父类方法的途径
            if (baseClass) {
                this.base = baseClass.prototype;
            }
            this.init.apply(this, arguments);
        }
    }

    // 如果此类需要从其它类扩展
    if (baseClass) {
        initializing = true;
        F.prototype = new baseClass();
        F.prototype.constructor = F;
        initializing = false;
    }

    // 覆盖父类的同名函数
    for(var name in prop) {
        if (prop.hasOwnProperty(name)){
            F.prototype[name] = prop[name];
        }
    }
    return F;
}

var Person = jClass({
    init: function (name) {
        this.name = name;
    },
    getName: function () {
        return this.name;
    }
});
var Employee = jClass(Person,{
    init: function (name, employeeID) {
        // 调用父类的原型函数init，注意使用apply函数修改init的this指向
        this.base.init.apply(this, [name]);
        this.employeeID = employeeID;
    },
    getEmployeeID: function () {
        return this.employeeID;
    },
    getName: function () {
        // 调用父类的原型函数getName
        return "Employee name:" + this.base.getName.apply(this);
    }
});

var zhang = new Employee("zhangsan","1234");
console.log(zhang.getName())*/

/******************* 优化jClass函数 ************************/
// 创建一个全局的状态标示 - 当前是否处于类的构造阶段
var initializing = false;

function jClass(baseClass, prop) {
    // 只接受一个参数的情况 - jClass(prop)
    if (typeof (baseClass) === "object" ){
        prop = baseClass;
        baseClass = null;
    }

    // 本次调用所创建的类（构造函数）
    function F() {
        // 如果当前处于实例化类的阶段，则调用init原型函数
        if(!initializing) {
            // 如果父类存在，则实例对象的base指向父类的原型
            // 这就提供了在实例对象中调用父类方法的途径
            if (baseClass) {
                this.baseprototype = baseClass.prototype;
            }
            this.init.apply(this, arguments);
        }
    }

    // 如果此类需要从其它类扩展
    if (baseClass) {
        initializing = true;
        F.prototype = new baseClass();
        F.prototype.constructor = F;
        initializing = false;
    }

    // 覆盖父类的同名函数
    for(var name in prop) {
        if (prop.hasOwnProperty(name)){
            // 如果此类继承自父类baseClass并且父类原型中存在同名函数name
            if (baseClass && typeof (prop[name] === "function")){
                // 重定义函数name -
                // 首先在函数上下文设置this.base指向父类原型中的同名函数
                // 然后调用函数prop[name]，返回函数结果
                // 注意：这里的自执行函数创建了一个上下文，这个上下文返回另一个函数，
                // 此函数中可以应用此上下文中的变量，这就是闭包（Closure）。
                // 这是JavaScript框架开发中常用的技巧。
                F.prototype[name] = (function (name, fn) {
                    return function () {
                        this.base = baseClass.prototype[name];
                        return fn.apply(this, arguments);
                    };
                })(name, prop[name])
            } else {
                F.prototype[name] = prop[name];
            }
        }
    }
    return F;
}

var Person = jClass({
    init: function (name) {
        this.name = name;
    },
    getName: function () {
        return this.name;
    }
});
var Employee = jClass(Person,{
    init: function (name, employeeID) {
        this.base(name);
        this.employeeID = employeeID;
    },
    getEmployeeID: function () {
        return this.employeeID;
    },
    getName: function () {
        // 调用父类的原型函数getName
        return "Employee name:" + this.base();
    }
});

var zhang = new Employee("zhangsan","1234");
console.log(zhang.getName())
