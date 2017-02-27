/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-22 15:49:07
 * @version $Id$
 */
 var age = 15;
 function test(str){
 // console.log(age);
 }
 // console.log(age);

var m = new Map();
m.set('Adam',67);
m.set('bob',22);
// console.log(m.get('Adam'))

var s1 = new Set([1,2,3,4,3])
// console.log(s1.add(5))

var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);

// for(x of m){
	// console.log(x[0])
// }

var a = ['A', 'B', 'C'];
a.name = 'Hello';
//iterable 内置的forEach
a.forEach(function(element,index,array){
	console.log(element);
});

var b = new Set(['a','b','c'',d']);
b.forEach(function(element,sameElement,set){
	console.log(element);
})

var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function(value,key,map){
	console.log('value:'+value+';key:'+key);
	console.log(m)
})

