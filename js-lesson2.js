// 函数
function abs(x){
	if (typeof x !== 'number'){
		throw 'not number';
	}
	if(x >= 0){
		return x;
	}else {
		return -x;
	}
}
console.log(abs(213))

function foo(a,b,c){
	if(arguments.length == 2){
		c = b;
		b = null;
	}
	console.log('a:'+a+"b:"+b+"c:"+c);
	console.log(arguments[1])
}
foo(1,2);	

// function foo(a, b, ...rest) {
//     console.log('a = ' + a);
//     console.log('b = ' + b);
//     console.log(rest);
// }

// foo(1,2,3,4,5,6)

// ...rest不支持？ ES6

// function sum(...rest) {
// var x=0;
//    for(var i=0;i<rest.length;i++){
//        x+=rest[i];
// }
// return x;
// }
// // 测试:
// var i, args = [];
// for (i=1; i<=100; i++) {
//     args.push(i);
// }
// if (sum() !== 0) {
//     alert('测试失败: sum() = ' + sum());
// } else if (sum(1) !== 1) {
//     alert('测试失败: sum(1) = ' + sum(1));
// } else if (sum(2, 3) !== 5) {
//     alert('测试失败: sum(2, 3) = ' + sum(2, 3));
// } else if (sum.apply(null, args) !== 5050) {
//     alert('测试失败: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
// } else {
//     alert('测试通过!');
// }

// 计算圆面积函数
'use strict';
function area_of_circle(r,pi){
	// if(arguments[1]==null){
	// 	pi=3.14;
	// }
	// return pi*r*r;
	return pi?r*r*pi:r*r*3.14;
}
// 测试:
if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
    console.log('测试通过');
} else {
    console.log('测试失败');
}
