const person = [
  { name: "Dave", age: 50, gender: "male" },

  { name: "June", age: 30, gender: "female" },

  { name: "Marta", age: 42, gender: "female" },
  
  { name: "João", age: 62, gender: "male" },

  { name: "Vianna", age: 27, gender: "male" }
];
person["height meter"] = 2.1;

let ps = person.map(function (obj) {
  //  return 'Name: '+ obj.name + ' Age: ' + obj.age + ' Gender: ' + obj.gender;
  return `Name: ${obj.name}  Age: ${obj.age}  Gender: ${obj.gender}`;
});
person.forEach(pessoa => console.log(pessoa.name));
 console.log(ps);

