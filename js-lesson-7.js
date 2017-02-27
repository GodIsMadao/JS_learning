//sort排序
var arr = [1,3,2,10,20]
console.log(arr.sort());
//Array的sort()方法默认把所有元素先转换为String再排序，结果'10'排在了'2'的前面，因为字符'1'比字符'2'的ASCII码小
arr.sort(function (x,y) {
	if(x < y){
		return -1;
	}
	if(x > y){
		return 1;
	}
	return 0;
});
console.log(arr);
arr1 = ['apple','Google','Micro']
arr1.sort(function (s1,s2){
	x1 = s1.toUpperCase();
	x2 = s2.toUpperCase();
	if(x1 < x2){
		return -1;
	}
	if(x1 > x2){
		return 1;
	}
	return 0;
});
console.log(arr1);
// /sort()方法会直接对Array进行修改，它返回的结果仍是当前Array