//原型继承
//class继承
'use strict';
class Student{
	constructor(name){
		this.name = name;
	}
	hello(){
		console.log('Hello, ' + this.name + '!');
	}
}

class PrimaryStudent extends Student{
	constructor(name,grade){
		super(name);
		this.grade = grade;
	}
	mygrade(){
		console.log('my grade is '+this.grade);
	}
}
var xiaoming = new Student('小明');
xiaoming.hello();

var xiaohong = new PrimaryStudent('小红',100)
xiaohong.mygrade()

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal{
	constructor(name){
		super(name);
	}
	say(){
		return "Hello, "+this.name+"!";
	}
}
// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if ((new Cat('x') instanceof Animal) && kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}