//Task 1//

const myCollege = "Vignan";
let myName = "Gokul";
var myAge = 22;

console.log("I study at " + myCollege);
console.log("My name is " + myName);
console.log("I am " + myAge + " years old");

//Task 2//

let price = 25000;

price = 27000;

console.log("Updated mobile price is " + price);

//Task 3//

//Observed the error//

//const company = "stackly";

//company = "Prosoft";

//console.log(company);


//Task 4//

console.log("Login Successful");

console.warn("Password is Weak");

console.error("Network Error");

//Task 5//

let name = "Gokul";
let age = 23;
let isDeveloper = true;
let uninitialized;

console.log("Name:", name);
console.log("Datatype:", typeof name);

console.log("Age:", age);
console.log("Datatype:", typeof age);

console.log("Developer:", isDeveloper);
console.log("Datatype:", typeof isDeveloper);

console.log("Uninitialized:", uninitialized);
console.log("Datatype:", typeof uninitialized);

//Task 6//

let cart = ["Laptop", "Mouse", "Keyboard", "Headset", "Monitor"];

console.log("First product:", cart[0]);
console.log("Third product:", cart[2]);
console.log("Last product:", cart[4]);

//Task 7//

let movies = [
    "Inception",
    "Interstellar",
    "Avatar",
    "Titanic",
    "The Dark Knight",
    "Avengers"
];

console.log("2nd movie:", movies[1]);
console.log("5th movie:", movies[4]);
console.log("Last movie:", movies[5]);

//Task 8//

let employee = {
    name: "Gokul",
    age: 23,
    department: "IT",
    skills: ["JavaScript", "HTML", "CSS"],
    salary: 30000
};

console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("First Skill:", employee.skills[0]);
console.log("Salary:", employee.salary);

//Task 9//

let product = {
    productName: "Smartphone",
    brand: "Samsung",
    price: 25000,
    colors: ["Black", "Blue", "White"]
};

console.log("Brand:", product.brand);
console.log("Price:", product.price);
console.log("Second Color:", product.colors[1]);

//Task 10//

let num1 = 50;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponent:", num1 ** num2);

//Task 11//

let a = 5;

a++;
console.log("a++:", a);

++a;
console.log("++a:", a);

a--;
console.log("a--:", a);

--a;
console.log("--a:", a);

//Task 12//

let a = 10;

let b = a++;

let c = ++b;

console.log(a);
console.log(b);
console.log(c);

//predicted output//

//a = 11
//b = 11 
//c = 11


//Task 13//

let x = 7;

let y = --x;

let z = y++;

console.log(x);
console.log(y);
console.log(z);


//predicted output//

//x = 6
//y = 7
//z = 6

//Task 14//

let school = {
    schoolName: " Gokul School",
    principal: "Mr. Kumar",
    totalStudents: 500,
    classes: ["Class 8", "Class 9", "Class 10"]
};

console.log("School Name:", school.schoolName);
console.log("Principal:", school.principal);
console.log("Last Class:", school.classes[2]);

//Task 15//

let groceries = [
    "Rice",
    "Milk",
    "Bread",
    "Eggs",
    "Sugar",
    "Apples",
    "Oil",
    "Salt"
];

console.log("First Item:", groceries[0]);
console.log("Fourth Item:", groceries[3]);
console.log("Last Item:", groceries[7]);

//Task 16//

let username = "Gokul";
let email = "gokul@example.com";
let BirthYears = 22;
let isPremium = true;

console.log("Username:", username, "Datatype:", typeof username);
console.log("Email:", email, "Datatype:", typeof email);
console.log("Birth Year:", BirthYears, "Datatype:", typeof BirthYears);
console.log("Is Premium:", isPremium, "Datatype:", typeof isPremium);

//Task 17//

var d = 10;
let e = 20;
const f = 30;

// Reassign
d = 15;   // Allowed
e = 25;   // Allowed
//f = 35;   // Error

// Redeclare
var d = 50;   // Allowed
//let e = 60;   // Error
//const f = 70;  // Error

//Task 18//

let tamil = 85;
let english = 90;
let maths = 95;

let total = tamil + english + maths;
let average = total / 3;

console.log("Total:", total);
console.log("Average:", average);

//Task 19//

let company = {
    company: "Tech Solutions",
    employees: ["Gokul", "Rahul", "Priya", "Arjun"],
    location: "Hyderabad",
    foundedYear: 2015,
    CEO: "Kumar"
};

console.log("CEO:", company.CEO);
console.log("Location:", company.location);
console.log("First Employee:", company.employees[0]);

//Task 20//

let profile = {
    name: "Gokul",
    city: "Hyderabad",
    hobbies: ["Cricket", "Coding", "Music"],
    age: 23
};

console.log("Name:", profile.name);
console.log("Second Hobby:", profile.hobbies[1]);
console.log("Age:", profile.age);