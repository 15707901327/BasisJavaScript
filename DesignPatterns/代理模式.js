/*************** 虚拟代理 ********
 * 虚拟代理实现图片预加载
 * ******************************/
/*//  图片加载函数
var myImage = (function () {
    var imgNode = document.createElement("img");
    document.body.appendChild(imgNode);

    return {
        setSrc: function (src) {
            imgNode.src = src;
        }
    }
})();

// 引入代理对象
var proxyImage = (function () {
    var img = new Image();
    img.onload = function (ev) {
        // 图片加载完成，正式加载图片
        myImage.setSrc(this.src)
    };
    return{
        setSrc: function (src) {
            // 图片未被加载时，加载一张提示图片
            myImage.setSrc("loading.gif");
            img.src = src;
        }
    }
})();*/

/**********************************
 * 虚拟代理合并HTTP请求
 * 假设一个功能需要频繁的进行网络请求，这会造成相当大的开销，
 * 解决方案是通过一个代理函数来收集一段时间之内的请求，一次性发给服务器。
 * 做一个文件同步的功能，当我们选中一个文件时，就同步到另外一台备用服务器上
 * *******************************/
/*// 文件同步函数
var synchronousFile = function (id) {
  console.log("开始同步文件，id为：" + id)
};

// 使用代理合并请求
var proxySynchronousFile = (function () {
    var cache = [],// 保存一段事件内需要同步的ID
        timer;// 定时器指针
    return function (id) {
        cache[cache.length] = id;
        if (timer) {
            return;
        }

        timer = setTimeout(function () {
            // 2s后向本体发送需要同步的ID集
            synchronousFile(cache.join(","));

            clearTimeout(timer);// 清空定时器
            timer = null;
            cache = [];// 清空缓存的id
        },2000)
    }
})();

// 绑定点击事件
var checkbox = document.getElementsByTagName("input");
for (var i = 0, c; c = checkbox[i++];) {
    c.onclick = function () {
        if( this.checked === true) {
            proxySynchronousFile(this.id)
        }
    }
}*/

/************** 缓存代理 ****************
 * 缓存代理可以为一些开销大的运算结果提供暂时的存储，在下次运算时，
 * 如果传递进来的参数跟之前一致，则可以返回前面的运算结果。
 * 为乘法、加法等创建缓存代理
 */
// 计算乘积
var mult = function(){
    var a = 1;
    for( var i = 0, l = arguments.length; i < l; i++){
        a = a * arguments[i];
    }
    return a;
};
// 计算加和
var plus = function () {
    var a = 0;
    for( var i = 0, l = arguments.length; i < l; i++ ){
        a += arguments[i];
    }
    return a;
};

// 创建缓存代理的工厂
var createProxyFactory = function( fn ){
    var cache = {}; // 缓存 - 存放参数和计算后的值
    return function(){
        var args = Array.prototype.join.call(arguments, "-");
        if( args in cache ){ // 判断出入的参数是否被计算过
            console.log( "使用缓存代理" );
            return cache[args];
         }
         return cache[args] = fn.apply( this, arguments );
    };
};
// 创建代理
var proxyMult = createProxyFactory( mult ),
    proxyPlus = createProxyFactory( plus );

console.log( proxyMult( 1, 2, 3, 4 ) ); // 输出： 24
console.log( proxyMult( 1, 2, 3, 4 ) ); // 输出： 缓存代理 24
console.log( proxyPlus( 1, 2, 3, 4 ) ); // 输出： 10
console.log( proxyPlus( 1, 2, 3, 4 ) ); // 输出： 缓存代理 10