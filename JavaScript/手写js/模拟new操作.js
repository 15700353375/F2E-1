/**
 * 模拟new操作
 * new 做了些什么
 * 1、以构造函数的prototype为原型创建一个对象
 * 2、执行构造函数并将this绑定到新创建的对象的实例上
 * 3、判断构造函数执行的结果是否是引用类型的数据，如果是，返回构造函数执行的结果，否则返回创建的对象。
 */

 function newObj(ctor,...args){
   /* 先判断ctor是否是个函数 */
  if(typeof ctor !=='function'){
    throw Error('ctor not a function')
  }

   let obj = Object.create(ctor.prototype)
   let res = ctor.apply(obj,args)
   return (typeof res == 'object' && res != null) || typeof res == 'function' ? res : obj
 }

 function Person(name){
   this.name = name
 }

 let obj = newObj(A,'Arya')
 console.log(obj)