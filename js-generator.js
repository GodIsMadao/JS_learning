//generator 生成器
//ES6新引入的数据类型
function* fib(max) {
	var
		t,
		a = 0,
		b = 1,
		// arr = [0, 1];
		n = 1;
	while (n < max) {
		yield a;
		t = a + b;
		a = b;
		b = t;
		// arr.push(t);
		n++;
	}
	return a;
}

// 测试:
// console.log(fib(5)); // [0, 1, 1, 2, 3]
// console.log(fib(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
var f = fib(5)
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())

for (var x of fib(5)) {
	console.log(x);
}


function* next_id() {
	var id = 1;
	while (true) {
		yield id++;
	}
}
//注意：定义generator 使用的是function* 而不是function
// 测试:
var
    x,
    pass = true,
    g = next_id();
for (x = 1; x < 100; x ++) {
    if (g.next().value !== x) {
        pass = false;
        console.log('测试失败!');
        break;
    }
}
if (pass) {
    console.log('测试通过!');
}