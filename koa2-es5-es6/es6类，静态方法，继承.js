// es6 类
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // 定义方法
    getName() {
        console.log(this._name);
    }

    setName(name) {
        this._name = name
    }
}

var p = new Person('张三', 20);
p.setName('text');
p.getName();


// es6 继承
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // 定义方法
    getInfo() {
        console.log(`名字：${this._name}, 年龄：${this._age}`);
    }

    run() {
        console.log('run');
    }
}

class Web extends Person {
    constructor(name, age, sex) {
        super(name, age);
        this.sex = sex;
    }

    print() {
        console.log(this.sex);
    }
}

var w = new Web('张三', 30, '男');
w.print();

// es6 静态方法
class Person {
    constructor(name) {
        this._name = name;
    }

    run () {
        console.log(this._name);
    }

    static work() {
        console.log('静态方法');
    }
}

Person.instance = '这是一个静态方法';

var p = new Person();
p.run();
Person.work();