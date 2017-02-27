//map reduce
function pow(x) {
	return x * x;
}

var arr = [1, 2, 3, 4, 5];
console.log(arr.map(pow))
arr = arr.map(String);
console.log(arr)

var arr = [1, 3, 5, 7, 9]
console.log(arr.reduce(function(x, y) {
	return x + y;
}))

//利用reduce转成整数
console.log(arr.reduce(function(x, y) {
	return x * 10 + y;
}))

//利用reduce求积
function product(arr) {
	return arr.reduce(function(x, y) {
		return x * y;
	})
}
// 测试:
// if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 && product([99, 88, 77, 66]) === 44274384) {
// 	console.log('测试通过!');
// } else {
// 	console.log('测试失败!');
// }

//将array转成数字
function string2int(s) {
	//把字符串‘13579’转成[1,3,5,7,9]
	var arr = s.split('');
	arr = arr.map(function(x){
		return x*1;
	});
	return arr.reduce(function(x,y){
		return x*10+y;
	})
}

var obj2 = "new2abcdefg".split("");     
console.log(string2int('111'))
console.log(obj2)
console.log('12321314'.split(''))
var   str= '012.345 '; 
var   x   =   str-0; 
console.log(x);
x   =   x*1;
console.log(x);

// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
	if (string2int.toString().indexOf('parseInt') !== -1) {
		console.log('请勿使用parseInt()!');
	} else if (string2int.toString().indexOf('Number') !== -1) {
		console.log('请勿使用Number()!');
	} else {
		console.log('测试通过!');
	}
} else {
	console.log('测试失败!');
}

//规范输入练习
function normalize(arr){
	
	return arr.map(function string2normal(x){
		x[0] = x[0].toUpperCase();
		for(var i=1;i<x.length;i++){
			x[i] = x[i].toLowerCase();
		}
		return x;
	});
}
console.log(normalize(['adam', 'LISA', 'barT']))

// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}

var arr = ['1', '2', '3'];

function parser(x){
	return parseInt(x);
}
r = arr.map(parser);

console.log('[' + r[0] + ', ' + r[1] + ', ' + r[2] + ']');
