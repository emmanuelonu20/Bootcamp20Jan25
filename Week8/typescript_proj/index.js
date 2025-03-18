var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var firstName = "Emmanuel";
firstName = "John";
//Primitive data types
//string, number, boolean, any, undefined, null
//number
var num1 = 34;
var num2 = 56.8;
console.log(num1 + num2);
//boolean
var isActive = true;
//any
var x = "John";
x = 23;
//undefined
var y = undefined;
//null
var z = null;
//User-defined data types.
//array of object
var students = [
    { id: 1, name: 'John Wick', department: 'Music' },
    { id: 2, name: 'Jennifer Lopez', department: 'Art' },
    { id: 3, name: "Ben Ken", department: 'Mathematics' },
];
var student1 = { id: 4, name: "Sandra Bullock", department: "Music" };
//Class
var Student = /** @class */ (function () {
    //constructor
    //defining the default values for our properties
    function Student(_id, _name, _department) {
        this.id = _id;
        this.name = _name;
        this.department = _department;
    }
    //methods === JS function
    Student.prototype.printDetails = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Department: ").concat(this.department);
    };
    return Student;
}());
//creating a new instance of class Student
var student2 = new Student(5, "Victoria Benneth", "Acting");
var student3 = new Student(6, "James Bond", "Music");
console.log(student2.printDetails());
console.log(student3.printDetails());
//Class inheritance
var Undergrad = /** @class */ (function (_super) {
    __extends(Undergrad, _super);
    function Undergrad(_id, _name, _department, _country) {
        var _this = _super.call(this, _id, _name, _department) || this;
        _this.country = _country;
        return _this;
    }
    Undergrad.prototype.printDetails = function () {
        return _super.prototype.printDetails.call(this) + ", Country: ".concat(this.country);
    };
    return Undergrad;
}(Student));
var student4 = new Undergrad(7, "John Smith", "Economics", "Canada");
console.log(student4.printDetails());
//Class inheritance
var Postgrad = /** @class */ (function (_super) {
    __extends(Postgrad, _super);
    function Postgrad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Postgrad;
}(Student));
