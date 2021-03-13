/**
 * 浅拷贝,只拷贝数组或者对象第一层的内容
 */
const shallClone =target=>{
  if(typeof target === 'object' && target !==null){
    const cloneTarget = Array.isArray(target) ?[]:{}
    for(let key in target){
      if(target.hasOwnProperty(key)){
        cloneTarget[key] = target[key]
      }
    }
    return cloneTarget
  }else{
    return target
  }
}

let obj1 = {
  a:1,
  b:{
    c:2
  }
}
let obj2 = shallClone(obj1)
console.log(obj1,obj2)
obj1.b.c = 3 //第一层以内的改变，会互相影响
obj1.a = 22 //第一层的改变，不会互相影响
console.log(obj2)

/* 深拷贝 (简易版)*/
const deepClone=target=>{
  if(target === null) return null
  if(typeof target !=='object') return target
  const cloneTarget = Array.isArray(target) ? [] : {}
  for(let key in target){
    if(target.hasOwnProperty(key)){
      cloneTarget[key] = deepClone(target[key])
    }
  }
  return cloneTarget
}

