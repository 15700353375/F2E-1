/** 
 * 数组扁平化方法
 * 
 * flat方法
 * 正则表达式
 * 改良版的正则表达式
 * reduce方法
 * 函数递归
 * 
*/

/* 数组的flat方法 接收一个array.flat(deep) 接收一个扁平化深度 */
const arr = [1, [2, [3, [4, 5]]], 6];
console.log(arr.flat(Infinity))

/* 利用正则表达式 注意处理的是字符串 */
let arr1 = JSON.stringify(arr).replace(/\[|\]/g,'').split(',')
console.log(arr1)

/* 改良版正则 */
let arr2 = JSON.parse('['+JSON.stringify(arr).replace(/\[|\]/g,'')+']')
console.log(arr2)

/* reduce方法 */
function _flat(arr){
  return arr.reduce((prev,cur)=>{
    return prev.concat(Array.isArray(cur) ?_flat(cur): cur)
  },[])
}
console.log(_flat(arr))

/* 函数递归 */
// function flaten(arr){
  let newArr = []
  let flats = function(arr){
    for(let i=0;i<arr.length;i++){
      if(Array.isArray(arr[i])){
        flats(arr[i])
      }else{
        newArr.push(arr[i])
      }
    }
  }
  // return newArr
// }
flats(arr)
console.log(newArr)