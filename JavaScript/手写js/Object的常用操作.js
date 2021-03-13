/**
 * Object的常用操作
 * Object.create
 * Object.is
 * Object.getPrototypeOf
 * 
 */

/* Object.create(ctor.prototype) 使用现有对象来提供新创建对象的__    proto__*/

/* Object.is() 判断两个参数是否为同一个值 */
// 都是 undefined
// 都是 null
// 都是 true 或 false
// 都是相同长度的字符串且相同字符按相同顺序排列
// 都是相同对象（意味着每个对象有同一个引用）
// 都是数字且
// 都是 +0
// 都是 -0
// 都是 NaN
// 或都是非零而且非 NaN 且为同一个值
console.log(Object.is(+0,-0))
console.log(Object.is(NaN,NaN))

// 与=== 运算也不相同。 === 运算符 (也包括 == 运算符) 将数字 -0 和 +0 视为相等 ，而将Number.NaN 与NaN视为不相等.


/* Object.assign  将所有可枚举的属性从一个或多个源对象分配到目标对象， 返回的是目标对象. 注意：这个操作是浅拷贝*/
let a={
  a:1,
  b:2,
  d:{
    x:1,
    y:2
  }
}
let b={
  b:4,
  c:3
}
let c = Object.assign(a,b)
console.log(a,b,c)
a.b=5
console.log(a,b,c)
