function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() { alert(this.name) }
}
/**
 * person1 和 person2 都是 Person 的实例。这两个实例都有一个 constructor （构造函数）属性，
 * 该属性（是一个指针）指向 Person。
 * * person1 和 person2 都是 构造函数 Person 的实例
 * * 实例的构造函数属性（constructor）指向构造函数。
 */
var person1 = new Person('Zaxlct', 28, 'Software Engineer');
var person2 = new Person('Mick', 23, 'Doctor');