let firstName:string = "Emmanuel";
firstName = "John";

//Primitive data types
//string, number, boolean, any, undefined, null
//number
let num1:number = 34;
let num2:number = 56.8;
console.log(num1 + num2);

//boolean
let isActive:boolean = true;

//any
let x:any = "John";
x = 23;

//undefined
let y:undefined = undefined;

//null
let z:null = null;


//User-defined data types.
//array of object
let students: Istudent[] = [
    {id: 1, name: 'John Wick', department: 'Music'},
    {id: 2, name: 'Jennifer Lopez', department: 'Art'},
    {id: 3, name: "Ben Ken", department: 'Mathematics'},
];

//Interface
interface Istudent {
    id: number;
    name: string;
    department: string;
}

let student1: Istudent = {id: 4, name: "Sandra Bullock", department: "Music"};

//Class
class Student {
    //properties
    id: number;
    name: string;
    department: string;

    //constructor
    //defining the default values for our properties
    constructor(_id: number, _name: string, _department: string){
        this.id = _id;
        this.name = _name;
        this.department = _department;
    }

    //methods === JS function
    printDetails(): string{
        return `ID: ${this.id}, Name: ${this.name}, Department: ${this.department}`;
    }
}

//creating a new instance of class Student
let student2 = new Student(5, "Victoria Benneth", "Acting");
let student3 = new Student(6, "James Bond", "Music");
console.log(student2.printDetails());
console.log(student3.printDetails());

//Class inheritance
class Undergrad extends Student implements Istudent {
    country: string;

    constructor(_id: number, _name: string, _department: string, _country: string){
        super(_id, _name, _department); //calling the parent class contructor
        this.country = _country;
    }

    printDetails() {
        return super.printDetails() + `, Country: ${this.country}`;
    }
}

let student4 = new Undergrad(7, "John Smith", "Economics", "Canada");
console.log(student4.printDetails());

//Class inheritance
class Postgrad extends Student {
    
}