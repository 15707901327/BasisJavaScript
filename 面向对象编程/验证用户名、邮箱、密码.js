/**********************************************************
 * 需求：验证用户名、邮箱、密码
 * * 创建了很多全局环境变量，有覆盖或者被覆盖的风险
 * *******************************************************/
/*// 验证姓名
function checkName() {
    console.log('checkName');
}
// 验证邮箱
function checkEmail() {
    console.log('checkEmail');
}
// 验证密码
function checkPassword() {
    console.log('checkPassword');
}*/

/**********************************************************
 * 需求：验证用户名、邮箱、密码
 * * 用对象收编变量-1
 * *******************************************************/
/*var CheckObject = {
    // 验证姓名
    checkName: function () {
        console.log('checkName');
    },
    // 验证邮箱
    checkEmail: function () {
        console.log('checkEmail');
    },
    // 验证密码
    checkPassword: function () {
        console.log('checkPassword');
    }
};

CheckObject.checkName();*/

/**********************************************************
 * 需求：验证用户名、邮箱、密码
 * * 用对象收编变量-2
 * * 对象在使用new关键字创建新对象时，不能继承这些方法
 * *******************************************************/
/*
var CheckObject = function () {};
CheckObject.checkName = function () {
    // 验证姓名
    console.log('checkName');
};
CheckObject.checkEmail = function () {
    // 验证邮箱
    console.log('checkEmail');
};
CheckObject.checkPassword = function () {
    // 验证密码
    console.log('checkPassword');
};

CheckObject.checkName();

//对象在使用new关键字创建新对象时，不能继承这些方法
var check = new CheckObject();
check.checkEmail();
*/

/**********************************************************
 * 需求：验证用户名、邮箱、密码
 * * 真假对象（返回要调用的函数）
 * * 虽然通过创建了新对象完成了需求，但是他不是一个真正意义上类的创建方式，并且创建的对象a和
 * * 对象CheckObject没有任何关系
 * *******************************************************/
/*var CheckObject = function () {
    return {
        // 验证姓名
        checkName: function () {
            console.log('checkName');
        },
        // 验证邮箱
        checkEmail: function () {
            console.log('checkEmail');
        },
        // 验证密码
        checkPassword: function () {
            console.log('checkPassword');
        }
    }
};

var a = CheckObject();
a.checkName();

var b = new CheckObject();
b.checkEmail();*/

// 实现链式调用
/*var CheckObject = function () {
    return {
        // 验证姓名
        checkName: function () {
            console.log('checkName');
            return this;
        },
        // 验证邮箱
        checkEmail: function () {
            console.log('checkEmail');
            return this;
        },
        // 验证密码
        checkPassword: function () {
            console.log('checkPassword');
            return this;
        }
    }
};

var a = CheckObject();
a.checkName().checkEmail();*/

/**********************************************************
 * 需求：验证用户名、邮箱、密码
 * * 简单类实现
 * * 每次创建新对象，新创建的对象都会对类的this上的属性进行复制，这些对象都有自己的一套方法，
 * * 然而有些时候这么做造成的消耗时很大的
 * *******************************************************/
/*var CheckObject = function () {
    this.checkName = function () {
        // 验证姓名
        console.log('checkName');
    };
    this.checkEmail = function () {
        // 验证邮箱
        console.log('checkEmail');
    };
    this.checkPassword = function () {
     // 验证密码
        console.log('checkPassword');
    }
};

var b = new CheckObject();
b.checkEmail();*/

/**********************************************************
 * 需求：验证用户名、邮箱、密码
 * * 使用prototype实现
 * * 使用两种添加方式，不要同时使用
 * * 没有实现链式调用方法
 * *******************************************************/
/*var CheckObject = function () {};
CheckObject.prototype = {
    // 验证姓名
    checkName: function () {
        console.log('checkName');
    },
    // 验证邮箱
    checkEmail: function () {
        console.log('checkEmail');
    },
    // 验证密码
    checkPassword: function () {
        console.log('checkPassword');
    }
};
CheckObject.prototype.checkName = function () {
    console.log('checkName-1');
};
CheckObject.prototype.checkEmail = function () {
    console.log('checkEmail-1');
};
CheckObject.prototype.checkPassword = function () {
    console.log('checkPassword-1');
};

var a = new CheckObject();
a.checkName();
a.checkEmail();
a.checkPassword();*/

/**********************************************************
 * 需求：验证用户名、邮箱、密码
 * * 使用prototype实现
 * * 使用两种添加方式，不要同时使用
 * * 实现链式调用
 * *******************************************************/
/*var CheckObject = function () {};
CheckObject.prototype = {
    // 验证姓名
    checkName: function () {
        console.log('checkName');
        return this;
    },
    // 验证邮箱
    checkEmail: function () {
        console.log('checkEmail');
        return this;
    },
    // 验证密码
    checkPassword: function () {
        console.log('checkPassword');
        return this;
    }
};
CheckObject.prototype.checkName = function () {
    console.log('checkName-1');
    return this;
};
CheckObject.prototype.checkEmail = function () {
    console.log('checkEmail-1');
    return this;
};
CheckObject.prototype.checkPassword = function () {
    console.log('checkPassword-1');
    return this;
};

var a = new CheckObject();
a.checkName().checkEmail().checkPassword();*/

/**********************************************************
 * 需求：验证用户名、邮箱、密码
 * * 修改原生对象，拓展对象
 * *******************************************************/
/**
 * 给所有对象都添加一个验证邮箱的方法
 * * 会污染其他人的对象
 */
/*Function.prototype.checkEmail = function () {
    console.log('checkEmail');
};

var f = function () {};
f.checkEmail();

var f2 = new Function();
f2.checkEmail();*/

/*
Function.prototype.addMethod = function (name, fn) {
    this[name] = fn;
};
var methods = function () {};
methods.addMethod('checkName', function () {
    // 验证姓名
    console.log('checkName');
    return this;
});
methods.addMethod('checkEmail', function () {
    // 验证邮箱
    console.log('checkEmail');
    return this;
});

methods.checkEmail().checkName();
*/

/**********************************************************
 * 需求：为函数添加多个方法的addMethods方法
 * *******************************************************/
var checkObject = function () {};
checkObject.addMethod = function (name, fn) {
  this[name] = fn;
};
checkObject.addMethod('add',function () {
    console.log("add");
});

checkObject.add()