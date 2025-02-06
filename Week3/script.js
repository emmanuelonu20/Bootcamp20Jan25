//Function

function add(x, y){
    return x + y;
}

console.log(add(34, 5)); //
console.log(add(44, 10)); //54

function printName() {
    console.log('John Wick')
}

printName();

//Object
//key (index)
let person = {name: "John Wick", age: 45, country: "Canada"};

console.log(person['age']); //45
console.log(person.age); //45
console.log(person.country); //Canada

let car = {color: 'Blue', model: 'Rav 4', brand: 'Toyota'};


//Array of objects
let studentsArr = [
    {name: "John Wick", age: 34, department: 'CS'},
    {name: "Jennifer Lopez", age: 67, department: 'Music'},
    {name: "Victoria Benneth", age: 18, department: 'Economics'},
];

console.log(studentsArr[1]);
console.log(studentsArr[1].age); //67
console.log(studentsArr[2].department); //Economics

//i iteration variable
for (let i = 0; i < studentsArr.length; i++) {
    console.log(studentsArr[i].name);
}

for (let student of studentsArr) {
    console.log(student.name);
}

//class
class Student {
    name;
    age;
    department;

    constructor(_name, _age, _department) {
        this.name = _name;
        this.age = this.age;
        this.department = this.department;
    }
}

let student2 = new Student("Ben Ken", 33, "Mathematics");
let student3 = new Student("John Smith", 12, "Geology");
let student4 = new Student("Peter Pan", 78, "Music");

console.log(student2.name);