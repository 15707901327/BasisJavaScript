function deepClone(obj) {
    var objClone = Array.isArray(obj)?[]:{};
    if (obj && typeof obj === "object"){
        for(var key in obj) {
            if (obj.hasOwnProperty(key)){
                // 判断obj子元素是否为对象，如果是，递归复制
                if (obj[key] && typeof obj[key] === "object"){
                    objClone[key] = deepClone(obj[key]);
                } else {
                    // 如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

var a = {
    name:"1",
    type:{
        type1: [
            {
                id: 1,
                name: "1"
            },
            {
                id: 2,
                name: "2"
            }
        ],
        type2: {
            id: 3,
            name: "3"
        }
    }
};
var b = deepClone(a);
a.type.type1[1].id = 12;
console.log(a.type.type1[1].id);
console.log(b.type.type1[1].id);