const person = [
  { name: "Dave", age: 5, gender: "male" },

  { name: "June", age: 10, gender: "female" },

  { name: "Marta", age: 12, gender: "female" },
  
  { name: "João", age: 12, gender: "male" },
];
person["height meter"] = 2.1;

let ps = person.map(function (obj) {
  //  return 'Name: '+ obj.name + ' Age: ' + obj.age + ' Gender: ' + obj.gender;
  return `Name: ${obj.name}  Age: ${obj.age}  Gender: ${obj.gender}`;
});
person.forEach(pessoa => console.log(pessoa.name));
 console.log(ps);

