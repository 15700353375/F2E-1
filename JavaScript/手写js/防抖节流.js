/**
 * 
 * 防抖节流
 * 
 * 防抖： 防抖函数特点，及应用场景。我们通常会有用户在input框输入内容后校验用户内容是否符合规则的场景，我们希望在用
    户停止输入后的200毫秒后出发校验规则，而不是用户变输入变校验，这时我们可以通过防抖函数实现

  节流：节流函数特点，及应用场景。我们通常在网页端会有监听滚动条的需求，当滚动条向下滚动1000px以下时触发某个事件
    监听滚动条的事件可能短时间内触发多次会造成性能浪费，这时我们可以通过节流函数控制检测间隔，我们可以限制200
    毫秒内检测一次，减少不必要的性能浪费

 */

let box = document.getElementById('box')

/* 防抖 */
// const debounce = (fn,time)=>{
//   let timeout = null
//   return function(){
//     clearTimeout(timeout)
//     timeout=setTimeout(()=>{
//       fn.apply(this,arguments)
//     },time)
//   }
// }

/* 防抖立即执行 */
const debounce = (fn,time,immediate)=>{
  let timeout = null
  return function(){
    if (timeout) clearTimeout(timeout);
    if(immediate){
      immediate = false
      fn.apply(this,arguments)
    }else{
      timeout=setTimeout(()=>{
        fn.apply(this,arguments)
      },time)
    }
  }
}

/* 节流 */
// const throttle = (fn,time)=>{
//   let timeout=null
//  return function(){
//    if(timeout) return
//    timeout = setTimeout(()=>{
//      fn.apply(this,arguments)
//      timeout = null
//    },time)
//  }
// }





box.onmousemove=debounce(move,1000,true)

function move(event){
  console.log(event.offsetX,event.offsetY)
}

