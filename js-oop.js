// //OOP，面向对象编程
// //原型 prototype
// var Student = {
// 	name: 'Robot',
// 	height: 1.2,
// 	run: function() {
// 		console.log(this.name + ' is running...');
// 	}
// };

// var Bird={
// 	height:1.0,
// 	fly:function(){
// 		console.log(this.name+"is fling...");
// 	}
// }

// var xiaoming = {
// 	name : '小明'
// };

// // // 注意写法
// // xiaoming.__proto__ = Student

// // console.log(xiaoming.name)

// // xiaoming.run()

// // xiaoming.__proto__=Bird;
// // xiaoming.fly()

// function createStudent(name){
// 	var s = Object.create(Student);
// 	s.name=name;
// 	return s;
// }

// var xiaoming = createStudent('小明');
// xiaoming.run();
// console.log(xiaoming.__proto__==Student)

// function Student(name) {
//     this.name = name;
//     this.hello = function () {
//         alert('Hello, ' + this.name + '!');
//     }
// }

// var xiaoming = new Student('小明')
// 注意，如果不写new，这就是一个普通函数，它返回undefined。但是，如果写了new，它就变成了一个构造函数，它绑定的this指向新创建的对象，并默认返回this，也就是说，不需要在最后写return this;。

function Cat(name) {
    //
this.name=name;
}
Cat.prototype.say=function(){
	return "Hello, "+this.name"!";
}

// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if (kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}