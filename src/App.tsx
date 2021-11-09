import React from 'react';

import './App.css';

// let name:string = "preetam";
// let people:string[];
// let tuple: [number, string] // only two character is allowed first - number  and second - string

// type Person = {
//   name:string,
//   age?:number  // question mark makes it optional
// }

// let lotsOfPerson: Person[];

// let person:Person  = {
//   name:"preetam"
// }


// let age: number | string  // this is the union where age can be number or the string
// age = 5

// function printName(name:string){
//   console.log(name);
  
// }
// printName("preetam")


// let printName : (name:string) => void; //void is the return type of the function;

// let value:any; // you can assign any values but it is not generally recommended 
// let value : unknown // you can assign any values, generally recommended 


interface Person {
  name:string,
  age:number
}

function App() {
  return (
    <div className="App">
     demo
    </div>
  );
}

export default App;
