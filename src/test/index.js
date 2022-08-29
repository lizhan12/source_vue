
class V {
  constructor(name) {
    this.name = name
  }

}

V.op = {
  age: 1
}

class F extends V {
  constructor(name) {
    super(name)
  }
}
F.ooo = { sex: 1 }
const f = new F();
console.log(f.constructor.super)


// const camelizeRE = /-(\w)/g

// "a-b".replace(camelizeRE, (_, c) => {

//   console.log(_, c)
//   return c ? c.toUpperCase() : ''
// })
// function demo () {
//   return {
//     name: 1,
//     [Symbol.iterator]:function(){
//       return {
//         next:function () {
//           return {
//             value:1,
//             done:true
//           }
//         }
//       }
//     }
//     // next: function () {
//     //   return {
//     //     value: 1,
//     //     donw: ture
//     //   }
//     // }
//   }
// }
// let d = demo()
// console.log(d);

// for (let k of d) {
//   console.log(k)
// }

// function* demo () {
//   for (let i in { age: 1, name: "lizhan" }) {
//     yield i
//   }
// }
// for(let k of demo()){
//   console.log(k)
// }
// class F {
//   constructor(){}
// }
// function aa (ab, c){
//   console.log(arguments)
// }
// aa(1,2);
// class F {
//   constructor(options) {
//     console.log(options)
//   }
//   init () {
//     console.log(this.constructor.options)

//   }

// }
// const f = new F('lzihan');
// f.init()

// const map = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three'],
// ]);
// console.log (typeof f.init)



// function gg (a) {
//   console.log(a)
// }

// const a = {}
// gg(a.name = {age:1})