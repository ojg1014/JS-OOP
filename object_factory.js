function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  }
}


console.group();

let kim = new Person('kim', 10, 20, 30);

let lee = new Person('lee', 10, 10, 10);

let neul = new Person('jin', 20, 30, 70,);

let beulleoging  = new Person('beulleoging ', 5, 80, 10);


console.log("kim.sum() : ", kim.sum());
console.log("lee.sum() : ", lee.sum());
console.log("neul.sum() : ", neul.sum());
console.log("beulleoging.sum() : ", beulleoging .sum());


console.groupEnd();

console.group();

let day = new Date('2021-3-6');
console.log(day.getFullYear());
console.log(day.getMonth());
console.log(day.getDay());


console.log('date', Date);





console.log("Person() : ", Person());
// console.log("Person() : ", new Person());




console.groupEnd();