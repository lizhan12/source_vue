// function a () {
//   console.log(12)

// }
// a.age = "lizhanf"
// // 深拷贝函数
// const _clone = (data) => {
//   if (!data || !(data instanceof Object) || typeof data == 'function') {
//     return data || undefined
//   }
//   let constructor = data.constructor
//   let result = new constructor()
//   for (var key in data) {
//     console.log("12121",key)
//     if (data.hasOwnProperty(key)) {
//       result[key] = _clone(data[key])
//     }
//   }
//   return result
// }
// console.log(_clone(a).age)
// const a =  [true, false].every(_ => _)
// console.log(a);
function V () { }
V.fly = function () {
  return this;
}
console.log (V.fly())
// const v = new V();
// console.log(v.)