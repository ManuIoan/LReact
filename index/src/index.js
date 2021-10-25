
// //var---->let,const

// function sayHello(){
//   for(var i=0; i<5;i++)
//   console.log(i);
// }


// //Methods into objects can be defined without function()

// sayHello();

// const person={
// name: 'Mosh',
// walk(){},
// talk(){}


// };


// person.talk();
// person.name = '';



// const targetMember = 'name';
// person[targetMember.value]='John';
// console.log(person);
const person = {
   name: "Mosh",
   walk()
   {
     console.log(this);
   }
};

person.walk();
const walk = person.walk.bind(person);
walk();