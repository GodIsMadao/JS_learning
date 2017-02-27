//filter
//Array的filter
// var arr = [1,2,3,4,5,6,7,8,9]
// var arr = ['A', '', 'B', null, undefined, 'C', '  '];
// var r = arr.filter(function(x){
// 	// return x % 2 !== 0;
// 	return x && x.trim();
// });
// console.log(r);
// var arr = ['A', 'B', 'C'];
// var r = arr.filter(function (element, index, self) {
//     console.log(element); // 依次打印'A', 'B', 'C'
//     console.log(index); // 依次打印0, 1, 2
//     console.log(self); // self就是变量arr
//     return true;
// });

//去除重复元素
var
    r,
    arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
r = arr.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});
console.log(r)
//去除重复元素依靠的是indexOf总是返回第一个元素的位置，后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了。
//筛选出素数
function get_primes(arr) {
	return arr.filter(function(x){
		if(x == 2)return true;
		if(x > 2){
			if(x % 2 == 0) return false;
			for(var i = 3;i <= Math.sqrt(x);i+=2){
				if(x % i == 0){
					return false;
				}
			}
			return true;
		}
		 return false;
	});
}

// 测试:
var
    x,
    r,
    arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}