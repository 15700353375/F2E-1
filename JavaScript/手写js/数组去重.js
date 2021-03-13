/**
 * 数组去重的方式
 * 
 * set方法
 * 两层for循环+splice
 * indexOf方法
 * includes方法
 * 利用filter方法
 * 利用map
 */

const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];

 /* set方式  set数据结构类似于数组，但是成员的值都是唯一的，没有重复的值 */
let arr1 = Array.from(new Set(arr))
console.log(arr1,arr)

/* 两层for循环+splice */
const unique1=(oldArr)=>{
  // 直接传入会改变原数组
  let arr = JSON.parse(JSON.stringify(oldArr))
  let len = arr.length
  for(let i=0;i<len;i++){
    for(let j=i+1;j<len;j++){
      if(arr[i]===arr[j]){
        // 删除掉相同的那个数
        arr.splice(j,1)
        // 长度减一
        len--
        j-- //保证j的值经过自加后不变 因为j循环时会自加
      }
    }
  }
  return arr
}
console.log(unique1(arr),arr)

/* 利用indexOf */
let unique2 = arr=>{
  let newArr = []
  for(let i=0;i<arr.length;i++){
    if(newArr.indexOf(arr[i])<0) newArr.push(arr[i])
  }
  return newArr
}
console.log(unique2(arr),arr)

/* 利用includes */
let unique3 = arr=>{
  let newArr = []
  for(let i=0;i<arr.length;i++){
    if(!newArr.includes(arr[i])) newArr.push(arr[i])
  }
  return newArr
}
console.log(unique3(arr),arr)

/* 利用filter */
let unique4 = arr=>{
  return arr.filter((item,index)=>{
    return arr.indexOf(item)==index
  })
}
console.log(unique4(arr),arr)

/* 利用map */
let unique5=arr=>{
  const map = new Map();
  const res = []
  for(let i=0;i<arr.length;i++){
    if(!map.has(arr[i])){
      map.set(arr[i],true)
      res.push(arr[i])
    }
  }
  return res
}
console.log(unique5(arr),arr)