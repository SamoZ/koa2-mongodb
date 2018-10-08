class Person {
    static getInstance() { // 单例
        if (!Person.instance) {
            Person.instance = new Person();
        }
        return Person.instance;
    }

    constructor() {
        console.log('构造函数里面的方法');
    }

    find() {
        console.log('find');
    }
}

var p1 = Person.getInstance();
var p2 = Person.getInstance();

var cache2 = Person.getInstance();

cache2.find();