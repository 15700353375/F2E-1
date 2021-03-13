let arr = [3, 1, 4, 6, 5, 7, 2];

/** 冒泡排序  每次比较相邻的两个，如果后一个比前一个小，换位置 */ 

function sort1 (arr){
  for(let i =0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j+1]<arr[j]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

// console.log(sort1(arr))

/**
 * 快速排序  
 * 采用二分法，取出中间数，数组每次和中间数比较，小的放到左边，大的放到右边
 * @param {*} arr 
 */
function quickSort(arr){
  if(arr.length<=1){
    return arr
  }
  let cIndex = Math.floor(arr.length/2)
  let c = arr.splice(cIndex,1)
  let l = []
  let r =[]
  for(let i=0;i<arr.length;i++){
    if(arr[i]<c){
      l.push(arr[i])
    }else{
      r.push(arr[i])
    }
  }
  return quickSort(l).concat(c,quickSort(r))
}

// console.log(quickSort(arr))

/**
 * 直接使用数组的sort方法
 * 默认排序顺序是在将元素转换为字符串 
 * 要比较数字而非字符串，比较函数可以简单的以 a 减 b
 */

let newArr=arr.sort((a,b)=>{
  return b-a
})
console.log(newArr)