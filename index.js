console.log(global); // global(server) = window(browser)

console.log(__dirname); //path from C to folder
console.log(__filename); //path from C to file

let person = {
  name: "Lwin Moe Paing",
};

//mutate fn
(function (obj, name) {
  obj.name = name; //modifying the refrence of variable - property
})(person, "nga weak");
console.log(person);

const rm = (obj) => {
  obj = null; //refrence sematic
};

rm(person);
console.log(person);

//break down of rm fn
let obj = person;
obj = null;
console.log(person); //still {name : 'nga weak'}
