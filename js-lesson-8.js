//闭包
function lazy_sun(arr) {
	var sum = function() {
		return arr.reduce(function(x, y) {
			return x + y;
		});
	}
	return sum;
}

var f = lazy_sun([1, 2, 3, 5])
console.log(f)
console.log(f())

/*
注意这里用了一个“创建一个匿名函数并立刻执行”的语法：

(function (x) {
    return x * x;
})(3); // 9
*/
function create_counter(initial) {
	var x = initial || 0;
	return {
		inc: function() {
			x += 1;
			return x;
		}
	}
}
var c1 = create_counter();
console.log(c1.inc())
console.log(c1.inc())
console.log(c1.inc())
console.log(c1.inc())
//闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。
function make_pow2(n){
	return function(x){
		return Math.pow(x,n);
	}
}

var pow2 =  make_pow2(2);
var pow3 = make_pow2(3);
console.log(pow2(5))
console.log(pow3(7))
