/**
 * 类数组转化为数组
 * 
 * Array.from
 * Array.prototype.slice.call()
 * 扩展运算符
 * 利用concat
 */

 /* Array.from */
let arr1 = Array.from(document.querySelectorAll('div'))
console.log(arr1)

/* Array.prototype.slice.call */
let arr2 = Array.prototype.slice.call(document.querySelectorAll('div'))
console.log(arr2)
console.log(Array.prototype.slice.call('123456'))

/* 扩展运输符 */
let arr3 = [...document.querySelectorAll('div')]
console.log(arr3)

/* 利用concat */
let arr4 = Array.prototype.concat.apply([],document.querySelectorAll('div'))
console.log(arr4)
/* 利用concat和apply可以实现数组降维 */
let arr = [1,2,[3,4,[5]]]
console.log(Array.prototype.concat.apply([],arr)) 
// [1, 2, 3, 4, [5]]