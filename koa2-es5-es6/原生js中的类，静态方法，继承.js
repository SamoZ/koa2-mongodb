// es5 中类和静态方法

function Person(name, age) {
    // 构造函数里面的方法和属性
    this.name = name;
    this.age = age;
    this.run = function () {
        console.log(`${this.name}----${this.age}`);
    }
}
// 原型链的方法和属性
// 原型链上的方法和属性可以被多个实例共享
Person.prototype.sex = '男';
Person.prototype.work = function () {
    console.log(`${this.name}----${this.age}----${this.sex}`);
}

// 静态方法
Person.setName = function () {
    console.log('静态方法');
}

// 实例方法通过实例化来调用，静态方法通过类名直接调用
var p = new Person('zhangsan', 20);
p.run();
p.work();

Person.setName();

// es5 继承
/**
 * 原型链继承和对象冒充继承
 * 
 * 对象冒充继承：没法继承原型链上的属性和方法
 * 
 * 原型链继承：可以继承构造函数里面以及原型链上的属性和方法，但是实例化的子类没法给父类传参
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        console.log(`${this.name}----${this.age}`);
    }
}
Person.prototype.work = function () {
    console.log('work');
}

function Web(name, age) {
    Person.call(this, name, age); // 对象冒充实现继承
}

Web.prototype = new Person(); // 原型链继承
var w = new Web('李四', 20);
w.run();