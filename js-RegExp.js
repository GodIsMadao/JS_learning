// //RegExp正则表达式
// //JavaScript有两种方式创建一个正则表达式：

// // 第一种方式是直接通过/正则表达式/写出来，第二种方式是通过new RegExp('正则表达式')创建一个RegExp对象。
// var re1 = /ABC\-001/;
// var re2 = new RegExp('ABC\\-001');

// console.log(re1); // /ABC\-001/
// console.log(re2); // /ABC\-001
// var re = /^\d{3}\-\d{3,8}$/;
// console.log(re.test('010-213212')); // true
// console.log(re.test('010-1234x')); // false
// console.log(re.test('010 12345')); // false
// var re = /^(\d{3})-(\d{3,8})$/;
// console.log(re.exec('010-12345')); // ['010-12345', '010', '12345']
// re.exec('010 12345'); // null

//正则表达式验证邮箱

