/**
 * 
 * 模拟instanceOf方法
 * instanceOf是用来判断构造函数的prototype属性是否存在于某个实例对象的原型链上
 * 
 *  */

 function _instanceOf(obj,ctor){
  if(typeof obj!== 'object' || obj === null) return false
  let proto = Object.getPrototypeOf(obj)
  while(true){
    if(proto === null) return false
    if(proto === ctor.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
 }

 function Person(){}
 let p1 = new Person()
 let p2 = {a:1}
 console.log(_instanceOf(p1,Person))
 console.log(_instanceOf(p2,Person))
 console.log(_instanceOf(p1,Object))
 console.log(_instanceOf(p2,Object))