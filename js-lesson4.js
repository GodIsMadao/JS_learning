//方法
// var xiaoming = {
// 	name:'xiaoming',
// 	birth: 1990,
// 	age:function (){
// 		var y = new Date().getFullYear();
// 		return y - this.birth;
// 	}
// };

function getAge() {
	var y = new Date().getFullYear();
	return y - this.birth;
}

var xiaoming = {
	name: 'xiaoming',
	birth: 1990,
	age: getAge
}

var fn = xiaoming.age; //function age

console.log(fn())
console.log(xiaoming.age());
console.log(getAge());

console.log(getAge.apply(xiaoming, [])); //this指向xiaoming, 参数为空this指向xiaoming, 参数为空
console.log(Math.max(3,5,4))
console.log(Math.max.apply(null,[3,5,4]))
console.log(Math.max.call(null,3,5,4))

var count = 0;

