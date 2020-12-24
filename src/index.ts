interface Human {
   name: string;
   age: number;
   gender: string;
}

const person = {
   name: 'jinah',
   age: 29,
   gender: 'female'
}

const sayHi = (person: Human): string=>{
   return (`Hello ${person.name}, you're ${person.age} and ${person.gender}`)
} // optioinal: ?

console.log(sayHi(person))

export {}