/**
 * 继承
 * 寄生组合式继承
 */

 function Parent(){
   this.name = 'Perent'
   this.sex ='女'
 }

 function Child(){
   Parent.call(this)
   this.name = name
   this.type = 'children'
 }

 Child.prototype = Object.create(Parent.prototype)
 Child.prototype.constructor = Child

 let child1 = new Child('Arya')
 console.log(child1,child1.sex)