const name = 'jinah',
age = 29,
gender = 'female'

const sayHi = (name:string, age:number, gender:string): string=>{
   return (`Hello ${name}, you're ${age} and ${gender}`)
} // optioinal: ?

console.log(sayHi(name, age, gender))

export {}