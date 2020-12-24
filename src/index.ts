class Human{
   public name:string;
   public age:number;
   public gender:string;
   constructor(name:string, age:number, gender:string){
      // 생성자: 객체 생성시 마다 실행
      this.name = name;
      this.age = age;
      this.gender = gender;
   }
}

const person = new Human('jinah', 29, 'female')
// const person = {
//    name: 'jinah',
//    age: 29,
//    gender: 'female'
// }

const sayHi = (person: Human): string=>{
   return (`Hello ${person.name}, you're ${person.age} and ${person.gender}`)
} // optioinal: ?

console.log(sayHi(person))

export {}